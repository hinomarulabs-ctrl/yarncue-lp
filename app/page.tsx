"use client";

import { useState } from "react";

const features = [
  ["01", "作品を記録する", "アイデアから完成まで、作品の物語を残せます。", "project"],
  ["02", "毛糸を整理する", "持っている糸がわかれば、次の作品が見つかる。", "stash"],
  ["03", "パターンを集める", "気になるパターンを、いつでも編める場所へ。", "patterns"],
  ["04", "進捗を続ける", "最後に編んだ一目から、すぐ再開。", "progress"],
];

const faqs = [
  ["Yarncueでは何を管理できますか？", "作品、毛糸、パターン、制作の進捗やメモをまとめて管理できます。"],
  ["初心者でも使えますか？", "もちろんです。最初の作品から、必要な情報を自分のペースで残せます。"],
  ["かぎ針編みと棒針編みの両方に使えますか？", "はい。どちらの作品にも、使った糸、針、段数、パターン、メモを記録できます。"],
];

function Chevron({ open }: { open: boolean }) {
  return <svg className={open ? "chevron open" : "chevron"} viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>;
}

function Phone({ type }: { type: string }) {
  return <div className={`phone phone-${type}`} aria-label="Yarncueアプリの画面イメージ">
    <div className="phone-notch" />
    <div className="phone-screen">
      {type === "project" && <><small>春色のショール</small><div className="knit-piece lilac" /><b>進捗 <span>48%</span></b><div className="track"><i /></div><small>使用中の毛糸</small><div className="swatches"><i /><i /><i /></div></>}
      {type === "stash" && <><small>毛糸一覧</small><div className="yarn-row"><i />ラベンダー <em>200g</em></div><div className="yarn-row"><i />サンドベージュ <em>120g</em></div><div className="yarn-row"><i />セージグリーン <em>80g</em></div></>}
      {type === "patterns" && <><small>パターン</small><div className="pattern-thumb" /><b>春のショール</b><div className="pattern-thumb small" /><b>リブ編みのマフラー</b></>}
      {type === "progress" && <><small>春色のショール</small><b>今日の記録</b><div className="check">✓　模様編み（1〜16段）</div><div className="check">□　増し目（17〜32段）</div><div className="check">□　縁編み</div></>}
    </div>
  </div>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "SoftwareApplication", name: "Yarncue", applicationCategory: "LifestyleApplication", operatingSystem: "Web", description: "パターン、毛糸、作品、編み物の進捗やメモをひとつにまとめる編み物の記録・毛糸管理アプリ。" },
      { "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className="site-header"><a className="brand" href="#top">yarncue</a><nav><a href="#how">使い方</a><a href="#features">機能</a></nav><a className="button small-button" href="#start">無料ではじめる</a></header>

    <section className="hero" id="top">
      <div className="hero-copy"><h1>編みたい気持ちを、<br />次の一目へ。</h1><p>パターン、毛糸、進捗、ひらめき。<br />Yarncueなら、あなたの編み物の時間を<br />ひとつの場所にきれいに集められます。</p><div className="actions"><a className="button" href="#start">無料ではじめる</a><a className="text-link" href="#how">使い方を見る <span>→</span></a></div></div>
      <div className="hero-visual"><div className="hero-yarn yarn-a" /><div className="hero-yarn yarn-b" /><div className="hero-yarn yarn-c" /><div className="lace" /><Phone type="project" /></div>
    </section>

    <section className="empathy section"><div><p className="eyeless-label">Yarncueは、そんな小さな“迷子”をなくすための編み物の相棒です。</p><h2>編むことに集中したいのに、<br />整理することが増えていく。</h2><ul><li>この毛糸、何に使う予定だったっけ？</li><li>前回どこまで編んだ？</li><li>気になるパターンを、また見失った。</li></ul></div><div className="desk-scene"><div className="desk-yarn" /><div className="notebook"><span>project notes</span><i /><i /><i /></div><div className="small-phone"><Phone type="patterns" /></div></div></section>

    <section className="features section" id="features"><h2>作る前も、作っている途中も、<br />作り終えたあとも。</h2><div className="feature-list">{features.map(([number, title, body, type], index) => <article className={index % 2 ? "feature reverse" : "feature"} key={title}><div className="feature-media"><span>{number}</span><Phone type={type} /><div className={`feature-texture ${type}`} /></div><div className="feature-copy"><p className="feature-number">{number}</p><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>

    <section className="how section" id="how"><h2>はじめるのは、かんたん。</h2><div className="thread" aria-hidden="true" /><div className="steps"><article><b>01</b><div className="step-icon book">▱</div><h3>編みたいものを<br />登録する</h3><p>パターンやアイデアを、作品として残します。</p></article><article><b>02</b><div className="step-icon yarn">●</div><h3>使う毛糸とメモを<br />まとめる</h3><p>色、量、針のサイズ、気づきまでひとつに。</p></article><article><b>03</b><div className="step-icon needle">╱</div><h3>今日の続きから<br />編む</h3><p>進捗を記録して、迷わず次の一目へ。</p></article></div></section>

    <section className="use-cases section"><h2>あなたらしい編み方に、<br className="mobile-break" />Yarncueを。</h2><div className="case-grid"><article><div className="case-image first" /><h3>初めての作品に</h3><p>やることや使うものを整理して、はじめてでも安心して進められます。</p></article><article><div className="case-image second" /><h3>少しずつ楽しむ毎日に</h3><p>その日の気分やペースに合わせて、無理なく編み物の時間を続けられます。</p></article><article><div className="case-image third" /><h3>たくさん作るあなたに</h3><p>たくさんの作品や毛糸を、次のアイデアにつながる形で残せます。</p></article></div></section>

    <section className="faq section"><h2>Yarncueについて、<br />よくある質問</h2><div className="faq-list">{faqs.map(([question, answer], index) => <article key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><Chevron open={openFaq === index} /></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></section>

    <section className="cta" id="start"><div><h2>次に編む一目を、<br />もっと楽しみにしよう。</h2><p>Yarncueと一緒に、あなたの編み物の時間を育てませんか。</p><a className="button light" href="mailto:hello@yarncue.app?subject=Yarncueをはじめたい">無料ではじめる</a></div><div className="cta-craft"><div className="cta-yarn" /><div className="cta-lace" /></div></section>

    <footer><a className="brand" href="#top">yarncue</a><div><a href="#how">使い方</a><a href="#features">機能</a><a href="mailto:hello@yarncue.app">お問い合わせ</a><a href="#top">利用規約</a><a href="#top">プライバシーポリシー</a></div><div className="social"><a href="#top" aria-label="Instagram">◎ Instagram</a><a href="#top" aria-label="X">𝕏</a></div></footer>
  </main>;
}
