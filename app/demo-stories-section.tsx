"use client";

import { Fragment, useState, type ReactNode } from "react";
import { demoStories } from "./demo-stories";
import { translations, type Locale } from "./translations";

type Section = "open" | "story" | "lessons" | "reflect" | "use" | "pocket";

function parseSections(text: string) {
  const sections: { type: Section; body: string }[] = [];
  const parts = text.split(/^\[\[(open|story|lessons|reflect|use|pocket)\]\]\s*$/m);
  for (let i = 1; i < parts.length; i += 2) sections.push({ type: parts[i] as Section, body: parts[i + 1].trim() });
  return sections;
}

function inline(text: string): ReactNode[] {
  return text.split(/(##.+?##|\*\*.+?\*\*|\*[^*]+?\*)/g).map((part, index) => {
    if (part.startsWith("##")) return <mark key={index}>{part.slice(2, -2)}</mark>;
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.length > 2) return <em key={index}>{part.slice(1, -1)}</em>;
    return <Fragment key={index}>{part}</Fragment>;
  });
}

function Body({ section, copy }: { section: { type: Section; body: string }; copy: (typeof translations)["en"]["demo"] }) {
  const { type, body } = section;
  if (type === "open") return <p className="reader-open">{inline(body)}</p>;
  if (type === "story") {
    return <div className="reader-story">{body.split(/\n\s*\n/).map((p, i) => (p.startsWith("##") && p.endsWith("##") ? <blockquote key={i}>{inline(p)}</blockquote> : <p key={i}>{inline(p)}</p>))}</div>;
  }
  if (type === "lessons") {
    return (
      <div className="reader-card reader-lesson">
        <h4>{copy.lesson}</h4>
        {[...body.matchAll(/\$\$([\s\S]+?)\$\$/g)].map((m, i) => <p key={i}>{inline(m[1])}</p>)}
      </div>
    );
  }
  if (type === "reflect") {
    return (
      <div className="reader-card reader-reflect">
        <h4>{copy.reflect}</h4>
        {[...body.matchAll(/&&([\s\S]+?)&&/g)].map((m, i) => <p key={i}>{m[1]}</p>)}
      </div>
    );
  }
  if (type === "use") {
    return (
      <div className="reader-use">
        <h4>{copy.use}</h4>
        {[...body.matchAll(/%%context:(\w+)\s*\|\s*([\s\S]+?)\s*::\s*([\s\S]+?)%%/g)].map((m, i) => (
          <div className="reader-card use-card" key={i}>
            <span className={`context-badge ${m[1]}`}>{(copy.contexts as Record<string, string>)[m[1]] ?? m[1]}</span>
            <small>{m[2]}</small>
            <p>{m[3].trim()}</p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="reader-card reader-pocket">
      <h4>{copy.pocket}</h4>
      {[...body.matchAll(/@@([\s\S]+?)@@/g)].map((m, i) => <p key={i}>{m[1]}</p>)}
    </div>
  );
}

export function DemoStories({ locale }: { locale: Locale }) {
  const copy = translations[locale].demo;
  const [active, setActive] = useState(0);
  const item = demoStories[active];
  const story = item.locales[locale];
  const sections = parseSections(story.text);

  return (
    <section className="demo section-pad" id="stories">
      <div className="container">
        <div className="split-intro category-head">
          <div><p className="kicker">{copy.kicker}</p><h2>{copy.titleStart} <em>{copy.titleEm}</em></h2></div>
          <p>{copy.body}</p>
        </div>
        <div className="demo-tabs" role="tablist" aria-label={copy.tabsAria}>
          {demoStories.map((s, index) => (
            <button role="tab" id={`demo-tab-${index}`} aria-selected={active === index} aria-controls="demo-panel" tabIndex={active === index ? 0 : -1} className={active === index ? "active" : ""} key={s.id} onClick={() => setActive(index)}>
              {s.locales[locale].category}
            </button>
          ))}
        </div>
        <article className="reader" id="demo-panel" role="tabpanel" aria-labelledby={`demo-tab-${active}`} key={item.id}>
          <header className="reader-head">
            <span className="reader-meta">{story.category} · {item.minutes} {copy.minutes}</span>
            <h3>{story.title}</h3>
            <p className="reader-book">{story.book} — {item.author}</p>
            <p className="reader-hook">{story.hook}</p>
          </header>
          {sections.map((section, index) => <Body section={section} copy={copy} key={index} />)}
        </article>
      </div>
    </section>
  );
}
