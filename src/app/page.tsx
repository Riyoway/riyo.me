import Image from "next/image";

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
    number: "01",
    name: "Apps",
    domain: "apps.riyo.me",
    description: "つくったアプリを並べる、小さなストア。",
    href: "https://apps.riyo.me",
    tone: "peach",
    world: "apps-world",
    signal: "ENTER THE STORE",
    status: "OPEN",
  },
  {
    number: "02",
    name: "Blog",
    domain: "blog.riyo.me",
    description: "考えたこと、学んだことの記録。",
    href: "https://blog.riyo.me",
    tone: "cream",
    world: "blog-world",
    signal: "WORDS IN MOTION",
    status: "SOON",
  },
  {
    number: "03",
    name: "Lab",
    domain: "lab.riyo.me",
    description: "途中でも出してみる、実験の置き場。",
    href: "https://lab.riyo.me",
    tone: "violet",
    world: "lab-world",
    signal: "UNKNOWN AHEAD",
    status: "SOON",
  },
  {
    number: "04",
    name: "Scripts",
    domain: "scripts.riyo.me",
    description: "日々の面倒を、少しだけ短くする道具。",
    href: "https://scripts.riyo.me",
    tone: "navy",
    world: "scripts-world",
    signal: "AUTOMATE A LITTLE",
    status: "SOON",
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
          <a href="#places">Places</a>
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
          <div className="hero-copy">
            <p className="eyebrow">
              <span>HELLO, I&apos;M RIYO</span>
              <span className="eyebrow-line" aria-hidden="true" />
            </p>
            <h1>
              Making small things
              <br />
              <span>with a little spark.</span>
            </h1>
            <p className="intro">
              つくる、試す、そして公開する。
              <br />
              ここはRiyoのウェブ上の拠点です。
            </p>
            <a className="primary-link" href="#places">
              Explore my places
              <ArrowUpRight />
            </a>
          </div>

          <div className="portrait-wrap" aria-label="Riyoのイラスト">
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
            <p className="portrait-note">curious by default</p>
          </div>
        </section>

        <section className="places-section" id="places">
          <div className="section-heading">
            <p className="eyebrow">PLACES ON THE INTERNET</p>
            <h2>Pick a door.</h2>
            <p>それぞれの場所に、それぞれのつくりかけ。</p>
          </div>

          <div className="places-grid">
            {places.map((place) => (
              <a
                className={`place-card ${place.tone}`}
                href={place.href}
                key={place.domain}
                target="_blank"
                rel="noreferrer"
                aria-label={`${place.name}: ${place.description}（${place.status === "SOON" ? "準備中" : "公開中"}）`}
              >
                <div className="card-topline">
                  <span className="card-number">{place.number}</span>
                  <span className={`status ${place.status.toLowerCase()}`}>
                    <span aria-hidden="true" />
                    {place.status}
                  </span>
                </div>

                <div className="portal-scene" aria-hidden="true">
                  <span className="portal-orbit portal-orbit-outer" />
                  <span className="portal-orbit portal-orbit-inner" />
                  <span className="portal-gate">
                    <span className={`portal-world ${place.world}`}>
                      <span className="world-stars" />
                      <span className="world-horizon" />
                      <span className="world-object world-object-one" />
                      <span className="world-object world-object-two" />
                      <span className="world-path" />
                    </span>
                  </span>
                  <span className="portal-signal">{place.signal}</span>
                </div>

                <div className="card-body">
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                </div>
                <div className="card-footer">
                  <span>{place.domain}</span>
                  <span className="arrow-box">
                    <ArrowUpRight />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Riyo</p>
        <p>Built somewhere between curiosity and coffee.</p>
      </footer>
    </>
  );
}
