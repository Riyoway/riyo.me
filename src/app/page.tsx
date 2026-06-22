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
            {places.map((place) => (
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
                  <span className="portal-breach">
                    <span className="portal-depth" />
                    <span className="portal-window">
                      <Image
                        className="portal-art"
                        src={place.image}
                        alt=""
                        width={1200}
                        height={1200}
                        sizes="(max-width: 680px) 68vw, 260px"
                      />
                      <span className="portal-distance" />
                    </span>
                    <svg
                      className="portal-fracture"
                      viewBox="0 0 300 390"
                      preserveAspectRatio="none"
                    >
                      <g className="fracture-lines">
                        <path d="M73 80 44 54 24 20" />
                        <path d="m78 103-41-4-28 13" />
                        <path d="m67 143-34 21-20 35" />
                        <path d="m64 215-39 14-17 29" />
                        <path d="m78 282-37 24-17 48" />
                        <path d="m112 324-12 35-25 24" />
                        <path d="m163 337 8 30-9 21" />
                        <path d="m208 313 28 30 8 39" />
                        <path d="m239 257 34 8 20 30" />
                        <path d="m238 197 37-18 18-31" />
                        <path d="m235 130 35-17 21-37" />
                        <path d="m213 78 20-34 25-23" />
                        <path d="m157 58 5-31-11-23" />
                        <path d="m105 61-9-34 7-25" />
                      </g>
                      <g className="fracture-shards">
                        <path d="m69 78 32-25 20 7-10 43-33 13Z" />
                        <path d="m104 57 43-17 22 20-12 34-46 9Z" />
                        <path d="m165 59 38-19 26 29-14 38-42-12Z" />
                        <path d="m214 90 39 23 4 34-29 20-20-35Z" />
                        <path d="m232 151 42 25-7 43-35 9-19-34Z" />
                        <path d="m231 215 37 25-17 45-38-8-9-39Z" />
                        <path d="m210 274 30 31-25 35-39-19 5-40Z" />
                        <path d="m174 317-25 38-39-20 10-40 38 4Z" />
                        <path d="m119 300-13 39-42-23 7-42 39-8Z" />
                        <path d="m73 268-38-22 7-45 36-8 20 36Z" />
                        <path d="m65 198-36-28 15-39 37 5 15 40Z" />
                        <path d="m73 137-34-27 23-38 35 17-2 35Z" />
                        <path d="m91 109 25-11-5 31-21 18-14-21Z" />
                        <path d="m205 105 24 12-17 30-23-13Z" />
                        <path d="m222 243 24 7-20 25-25-3Z" />
                        <path d="m107 292 21 8-16 27-23-12Z" />
                      </g>
                    </svg>
                    <span className="portal-enter">
                      タップで入る
                      <ArrowUpRight />
                    </span>
                  </span>
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
