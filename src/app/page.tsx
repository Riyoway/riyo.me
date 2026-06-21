import Image from "next/image";
import TimeGreeting from "@/components/TimeGreeting";

const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const GitHubMark = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
    />
  </svg>
);

const places = [
  {
    name: "Apps",
    domain: "apps.riyo.me",
    description: "作ったアプリを置いています。",
    href: "https://apps.riyo.me",
    tone: "peach",
    image: "/portals/apps.webp",
    note: "公開中",
  },
  {
    name: "Blog",
    domain: "blog.riyo.me",
    description: "たまに書いたもの。",
    href: "https://blog.riyo.me",
    tone: "cream",
    image: "/portals/blog.webp",
    note: "まだ準備中",
  },
  {
    name: "Lab",
    domain: "lab.riyo.me",
    description: "試しているものと、途中のもの。",
    href: "https://lab.riyo.me",
    tone: "violet",
    image: "/portals/lab.webp",
    note: "まだ準備中",
  },
  {
    name: "Scripts",
    domain: "scripts.riyo.me",
    description: "自分用に作った小さな道具。",
    href: "https://scripts.riyo.me",
    tone: "navy",
    image: "/portals/scripts.webp",
    note: "まだ準備中",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        本文へ移動
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Riyo ホーム">
          <span className="brand-dot" aria-hidden="true" />
          riyo.me
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#places">作ったもの</a>
          <a
            className="github-link"
            href="https://github.com/Riyoway"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubMark />
            <span>GitHub</span>
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy" data-reveal="lift">
            <h1>
              Riyoです。
            </h1>
            <p className="intro">
              気になったものを作ったり、コードを書いたりしています。
              <br />
              ここには、そのへんで出来たものを置いています。
            </p>
            <a className="primary-link" href="#places">
              下を見る
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div
            className="portrait-wrap"
            aria-label="Riyoのイラスト"
            data-reveal="portrait"
          >
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="spark spark-one" aria-hidden="true" />
            <div className="spark spark-two" aria-hidden="true" />
            <div className="portrait">
              <Image
                src="/riyo-icon.png"
                alt="大きな瞳とヘッドホンが特徴のRiyoのイラスト"
                width={1254}
                height={1254}
                priority
                sizes="(max-width: 720px) 78vw, 520px"
              />
            </div>
            <p className="greeting-bubble" aria-live="polite">
              <TimeGreeting />
            </p>
          </div>
        </section>

        <section className="places-section" id="places">
          <div className="section-heading" data-reveal="lift">
            <h2>置いてあるもの</h2>
            <p>入口を押すと、それぞれの場所へ行けます。</p>
          </div>

          <div className="portal-field">
            <span
              className="portal-path"
              aria-hidden="true"
              data-reveal="path"
            />
            {places.map((place, index) => (
              <a
                className={`portal-entry ${place.tone}`}
                href={place.href}
                key={place.domain}
                target="_blank"
                rel="noreferrer"
                aria-label={`${place.name}: ${place.description}（${place.note}）`}
                data-reveal="portal"
              >
                <span className="portal-wrap" aria-hidden="true">
                  <span className="portal-shadow" />
                  <span className="portal-frame">
                    <Image
                      className="portal-art"
                      src={place.image}
                      alt=""
                      width={1200}
                      height={1200}
                      sizes="(max-width: 680px) 68vw, 260px"
                    />
                  </span>
                  <span className="portal-mark">{index + 1}</span>
                </span>
                <span className="portal-copy">
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                  <span className="portal-meta">
                    {place.note} · {place.domain}
                    <ArrowUpRight />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" data-reveal="lift">
        <div className="footer-main">
          <p className="footer-kicker">また何か増えます。</p>
          <p className="footer-title">見に来てくれてありがとう。</p>
        </div>

        <nav className="footer-links" aria-label="フッターナビゲーション">
          <a
            href="https://github.com/Riyoway"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRight />
          </a>
          <a href="mailto:ryohsg@gmail.com">
            Mail
            <ArrowUpRight />
          </a>
          <a href="#top">
            上へ戻る
            <span aria-hidden="true">↑</span>
          </a>
        </nav>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Riyo</p>
          <p>riyo.me</p>
        </div>
      </footer>
    </>
  );
}
