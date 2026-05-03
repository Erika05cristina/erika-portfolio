"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { SITE_DATA } from "@/config/data";

/* ─── Types ──────────────────────────────────────────────────── */
type LineType = "output" | "input" | "error" | "success" | "banner";
interface TerminalLine {
  id: number;
  type: LineType;
  content: string;
}

/* ─── Command Registry ───────────────────────────────────────── */
const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    "┌─────────────────────────────────────┐",
    "│         Available Commands          │",
    "├─────────────────────────────────────┤",
    "│  help       → Show this message     │",
    "│  whoami     → Profile summary       │",
    "│  projects   → List all projects     │",
    "│  skills     → Tech stack            │",
    "│  contact    → Contact info          │",
    "│  clear      → Clear terminal        │",
    "└─────────────────────────────────────┘",
  ],

  whoami: () => [
    `Name     : ${SITE_DATA.name}`,
    `Role     : ${SITE_DATA.role}`,
    `Company  : ${SITE_DATA.company}`,
    `GPA      : ${SITE_DATA.education.gpa} — ${SITE_DATA.education.university}`,
    `Focus    : ${SITE_DATA.currentFocus}`,
    `Location : ${SITE_DATA.location}`,
  ],

  projects: () =>
    SITE_DATA.projects.flatMap((p) => [
      `▶ ${p.title} — ${p.tagline}`,
      `  ${p.description.slice(0, 80)}...`,
      `  Stack: ${p.tech.join(", ")}`,
      `  Status: [${p.status}]`,
      "",
    ]),

  skills: () => {
    const s = SITE_DATA.skills;
    return [
      `Languages  : ${s.languages.join(", ")}`,
      `Frontend   : ${s.frontend.join(", ")}`,
      `Backend    : ${s.backend.join(", ")}`,
      `Security   : ${s.security.join(", ")}`,
      `Tools      : ${s.tools.join(", ")}`,
    ];
  },

  contact: () => [
    `GitHub   : ${SITE_DATA.socials.github}`,
    `LinkedIn : ${SITE_DATA.socials.linkedin}`,
    `Company  : ${SITE_DATA.company}`,
  ],
};

/* ─── Initial Lines ──────────────────────────────────────────── */
const INITIAL_LINES: TerminalLine[] = SITE_DATA.terminal.welcomeMessage.map(
  (content, i) => ({ id: i, type: "banner", content })
);

let lineCounter = INITIAL_LINES.length;
const newLine = (type: LineType, content: string): TerminalLine => ({
  id: lineCounter++,
  type,
  content,
});

/* ─── Component ──────────────────────────────────────────────── */
export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const echoLine = newLine("input", `${SITE_DATA.terminal.prompt} ${raw}`);

    if (!cmd) {
      setLines((prev) => [...prev, echoLine]);
      return;
    }

    setHistory((prev) => [cmd, ...prev.slice(0, 49)]);
    setHistoryIdx(-1);

    if (cmd === "clear") {
      setLines(INITIAL_LINES);
      return;
    }

    const handler = COMMANDS[cmd];
    if (!handler) {
      setLines((prev) => [
        ...prev,
        echoLine,
        newLine("error", `Command not found: '${cmd}'. Type 'help' for options.`),
      ]);
      return;
    }

    const outputLines = handler().map((l) => newLine("output", l));
    setLines((prev) => [...prev, echoLine, ...outputLines]);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? "" : history[next]);
    }
  };

  return (
    <div
      className="terminal-window"
      onClick={() => inputRef.current?.focus()}
      role="region"
      aria-label="Interactive Terminal"
    >
      {/* Title bar */}
      <div className="terminal-titlebar">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
        <span className="terminal-title">erika@cyber-lab — bash</span>
      </div>

      {/* Output area */}
      <div className="terminal-body">
        {lines.map((line) => (
          <div key={line.id} className={`terminal-line terminal-line--${line.type}`}>
            {line.content || "\u00A0"}
          </div>
        ))}

        {/* Active input row */}
        <div className="terminal-input-row">
          <span className="terminal-prompt">{SITE_DATA.terminal.prompt}</span>
          <input
            ref={inputRef}
            id="terminal-input"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
          <span className="terminal-cursor" aria-hidden="true" />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
