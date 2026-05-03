"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { SITE_DATA } from "@/config/data";
import { useLanguage } from "@/context/LanguageContext";
import type { Translations } from "@/config/translations";

/* ─── Types ──────────────────────────────────────────────────── */
type LineType = "output" | "input" | "error" | "success" | "banner";
interface TerminalLine {
  id: number;
  type: LineType;
  content: string;
}

/* ─── Command builder (locale-aware) ─────────────────────────── */
function buildCommands(t: Translations, lang: "en" | "es"): Record<string, () => string[]> {
  const l = t.terminal.commands;
  const lbl = l.whoamiLabels;
  const pc = t.projectContent;
  const ps = t.projects.status;

  return {
    help: () => l.help as unknown as string[],

    whoami: () => [
      `${lbl.name}: ${SITE_DATA.name}`,
      `${lbl.role}: ${SITE_DATA.role}`, 
      `${lbl.gpa}: ${SITE_DATA.education.gpa} — ${SITE_DATA.education.university}`,
      `${lbl.focus}: ${SITE_DATA.currentFocus[lang]}`,
      `${lbl.location}: ${SITE_DATA.location}`,
    ],

    projects: () =>
      SITE_DATA.projects.flatMap((p) => {
        const content = pc[p.id as keyof typeof pc];
        const statusLabel = ps[p.status];
        return [
          `▶ ${p.title} — ${content.tagline}`,
          `  ${content.description.slice(0, 80)}...`,
          `  Stack: ${p.tech.join(", ")}`,
          `  Status: [${statusLabel}]`,
          "",
        ];
      }),

    skills: () => {
      const s = SITE_DATA.skills;
      const cats = t.skills.categories;
      return [
        `${cats.core}        : ${s.core.join(", ")}`,
        `${cats.learning_now} : ${s.learning_now.join(", ")}`,
        `${cats.tools}       : ${s.tools.join(", ")}`,
      ];
    },

    contact: () => [
      `GitHub   : ${SITE_DATA.socials.github}`,
      `LinkedIn : ${SITE_DATA.socials.linkedin}`,
      `Email    : ${SITE_DATA.socials.email}`,
    ],
  };
}

let lineCounter = 0;
const newLine = (type: LineType, content: string): TerminalLine => ({
  id: lineCounter++,
  type,
  content,
});

/* ─── Component ──────────────────────────────────────────────── */
export default function Terminal() {
  const { t, lang } = useLanguage();
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Re-init banner when language changes
  useEffect(() => {
    const bannerLines = t.terminal.welcomeMessage.map((content) =>
      newLine("banner", content)
    );
    setLines(bannerLines);
  }, [t]);

  // Scroll to bottom INSIDE the terminal box only — never bubbles to page
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
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
      const bannerLines = t.terminal.welcomeMessage.map((content) =>
        newLine("banner", content)
      );
      setLines(bannerLines);
      return;
    }

    const COMMANDS = buildCommands(t, lang);
    const handler = COMMANDS[cmd];

    if (!handler) {
      setLines((prev) => [
        ...prev,
        echoLine,
        newLine("error", t.terminal.commands.notFound(cmd)),
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

      {/* Output area — ref here so scroll stays inside this box */}
      <div className="terminal-body" ref={bodyRef}>
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
      </div>
    </div>
  );
}
