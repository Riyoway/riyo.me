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

type FractureProfile = {
  rim: string;
  primary: string[];
  secondary: string[];
  hairline: string[];
  seed: number;
};

const fractures = {
  a: {
    rim: "M38 73 64 68 77 52 99 63 125 47 154 56 176 35 198 59 224 47 243 63 278 68 269 94 298 108 275 129 291 153 256 157 246 181 211 174 192 198 166 183 141 207 118 178 80 186 74 162 38 155 51 132 26 115 51 99Z",
    primary: [
      "M38 73 25 51 8 41",
      "M77 52 69 28 78 10",
      "M176 35 181 15 198 2",
      "M278 68 297 56 317 61",
      "M291 153 309 164 319 183",
      "M141 207 132 232 113 252",
      "M38 155 18 169 4 190",
    ],
    secondary: [
      "M25 51 29 32 20 20",
      "M69 28 54 20 48 7",
      "M125 47 119 22 105 7",
      "M224 47 238 25 260 16",
      "M238 25 235 8",
      "M298 108 314 101",
      "M246 181 258 207 278 223",
      "M258 207 277 202",
      "M192 198 198 222 191 246",
      "M80 186 65 213 43 225",
      "M65 213 48 207",
      "M26 115 8 111 0 94",
    ],
    hairline: [
      "M29 61 17 63 10 72",
      "M117 31 128 20 128 9",
      "M181 15 173 7",
      "M251 27 269 32 278 27",
      "M303 159 306 147",
      "M272 199 287 210 300 209",
      "M197 222 207 233",
      "M129 232 136 243",
      "M18 169 14 158",
      "M13 112 6 121",
    ],
    seed: 7,
  },
  b: {
    rim: "M26 92 57 74 82 79 94 55 122 69 143 49 169 62 193 41 211 66 249 58 261 84 294 91 279 116 303 136 279 156 285 181 249 180 234 207 204 193 180 219 151 201 126 223 105 194 73 202 66 176 31 166 48 141 19 123 45 107Z",
    primary: [
      "M26 92 11 71 4 45",
      "M94 55 86 30 94 4",
      "M193 41 202 17 221 3",
      "M294 91 308 76 319 75",
      "M285 181 304 198 316 225",
      "M180 219 178 241 188 257",
      "M73 202 57 225 32 240",
      "M31 166 13 171 1 187",
    ],
    secondary: [
      "M11 71 19 57 14 47",
      "M57 74 45 48 28 38",
      "M86 30 76 21 70 6",
      "M143 49 140 23 128 8",
      "M249 58 266 34 285 27",
      "M266 34 264 16",
      "M279 116 305 110 318 116",
      "M249 180 255 207 271 222",
      "M234 207 245 230 240 251",
      "M126 223 119 244 101 257",
      "M66 176 42 190 29 210",
      "M19 123 3 117",
    ],
    hairline: [
      "M46 83 35 79 27 84",
      "M82 39 91 26",
      "M141 24 151 16 152 5",
      "M207 20 201 8",
      "M277 105 289 101",
      "M306 111 311 99",
      "M300 194 313 190",
      "M250 219 263 231",
      "M118 243 128 249",
      "M48 198 40 194",
      "M12 170 7 159",
    ],
    seed: 13,
  },
  c: {
    rim: "M35 65 70 70 86 50 111 61 135 36 157 58 186 50 205 72 242 60 251 86 284 102 269 125 298 149 266 159 254 190 220 181 199 208 171 191 148 221 124 195 91 202 80 174 45 178 51 150 22 132 47 113 20 90 49 79Z",
    primary: [
      "M35 65 18 47 4 20",
      "M135 36 129 18 136 1",
      "M242 60 263 39 286 34",
      "M284 102 306 91 319 95",
      "M298 149 313 160 319 181",
      "M199 208 207 234 201 258",
      "M124 195 108 222 86 242",
      "M45 178 23 194 4 220",
      "M22 132 5 129",
    ],
    secondary: [
      "M18 47 25 34 20 22",
      "M70 70 61 44 45 27",
      "M86 50 89 28 104 13",
      "M129 18 118 8",
      "M186 50 195 25 211 12",
      "M251 86 273 69 291 66",
      "M269 125 292 118 310 124",
      "M266 159 281 180 301 189",
      "M254 190 268 214 266 239",
      "M171 191 168 219 177 241",
      "M91 202 78 226 56 237",
      "M80 174 58 190 50 207",
      "M51 150 32 159 20 174",
      "M20 90 3 80",
    ],
    hairline: [
      "M24 54 13 57",
      "M62 45 70 31",
      "M94 27 87 17",
      "M194 25 188 14",
      "M273 69 271 54",
      "M292 118 303 109",
      "M281 180 293 175",
      "M267 214 280 220",
      "M168 219 158 230",
      "M78 226 82 239",
      "M33 159 27 151",
    ],
    seed: 21,
  },
  d: {
    rim: "M29 84 58 80 71 58 101 73 117 48 148 63 169 39 190 66 221 55 236 78 274 74 265 103 300 119 277 143 289 166 255 171 239 198 210 184 183 213 159 190 128 215 111 185 75 195 68 168 35 158 50 134 21 113 46 99Z",
    primary: [
      "M29 84 14 61 4 32",
      "M117 48 108 23 91 5",
      "M169 39 171 17 186 1",
      "M274 74 292 53 315 47",
      "M300 119 316 126",
      "M289 166 306 184 316 210",
      "M210 184 219 214 216 251",
      "M128 215 112 237 89 255",
      "M35 158 16 174 3 197",
      "M21 113 3 103",
    ],
    secondary: [
      "M14 61 21 48 18 35",
      "M58 80 49 53 32 37",
      "M71 58 75 33 88 20",
      "M108 23 113 8",
      "M148 63 143 35 132 17",
      "M221 55 236 30 257 18",
      "M236 78 260 57 275 56",
      "M265 103 288 96 307 103",
      "M255 171 270 193 289 201",
      "M239 198 249 224 241 250",
      "M183 213 181 238 193 254",
      "M111 185 91 208 79 231",
      "M68 168 47 183 38 203",
      "M50 134 29 140 16 151",
      "M46 99 29 87",
    ],
    hairline: [
      "M19 72 8 75",
      "M49 53 55 40",
      "M76 33 68 23",
      "M143 35 151 24",
      "M235 30 229 17",
      "M260 57 270 42",
      "M288 96 296 84",
      "M270 193 286 190",
      "M219 214 231 223",
      "M181 238 171 249",
      "M91 208 96 222",
      "M29 140 23 131",
    ],
    seed: 31,
  },
} satisfies Record<string, FractureProfile>;

const places: Array<{
  name: string;
  domain: string;
  description: string;
  href: string;
  tone: string;
  image: string;
  note: string;
  fracture: keyof typeof fractures;
}> = [
  {
    name: "Apps",
    domain: "apps.riyo.me",
    description: "作ったアプリを置いています。",
    href: "https://apps.riyo.me",
    tone: "peach",
    image: "/portals/apps.webp",
    note: "公開中",
    fracture: "a",
  },
  {
    name: "Blog",
    domain: "blog.riyo.me",
    description: "たまに書いたもの。",
    href: "https://blog.riyo.me",
    tone: "cream",
    image: "/portals/blog.webp",
    note: "まだ準備中",
    fracture: "b",
  },
  {
    name: "Lab",
    domain: "lab.riyo.me",
    description: "試しているものと、途中のもの。",
    href: "https://lab.riyo.me",
    tone: "violet",
    image: "/portals/lab.webp",
    note: "まだ準備中",
    fracture: "c",
  },
  {
    name: "Scripts",
    domain: "scripts.riyo.me",
    description: "自分用に作った小さな道具。",
    href: "https://scripts.riyo.me",
    tone: "navy",
    image: "/portals/scripts.webp",
    note: "まだ準備中",
    fracture: "d",
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
            {places.map((place) => {
              const fracture = fractures[place.fracture];
              const filterId = `rough-edge-${place.fracture}`;

              return (
                <a
                className={`portal-entry ${place.tone} fracture-${place.fracture}`}
                href={place.href}
                key={place.domain}
                target="_blank"
                rel="noreferrer"
                aria-label={`${place.name}: ${place.description}（${place.note}）`}
                data-reveal="portal"
              >
                <span className="portal-wrap" aria-hidden="true">
                  <span className="portal-breach">
                    <span className="portal-depth" />
                    <span className="portal-window">
                      <Image
                        className="portal-art"
                        src={place.image}
                        alt=""
                        width={1200}
                        height={1200}
                        sizes="(max-width: 680px) 82vw, 300px"
                      />
                      <span className="portal-distance" />
                    </span>
                    <svg
                      className="portal-fracture"
                      viewBox="0 0 320 260"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <filter
                          id={filterId}
                          x="-8%"
                          y="-8%"
                          width="116%"
                          height="116%"
                        >
                          <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.035"
                            numOctaves="2"
                            seed={fracture.seed}
                            result="noise"
                          />
                          <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="1.4"
                          />
                        </filter>
                      </defs>
                      <path
                        className="fracture-rim"
                        d={fracture.rim}
                        filter={`url(#${filterId})`}
                      />
                      <path
                        className="fracture-rim-highlight"
                        d={fracture.rim}
                      />
                      <g className="fracture-lines fracture-primary">
                        {fracture.primary.map((path) => (
                          <path d={path} key={path} />
                        ))}
                      </g>
                      <g className="fracture-lines fracture-secondary">
                        {fracture.secondary.map((path) => (
                          <path d={path} key={path} />
                        ))}
                      </g>
                      <g className="fracture-lines fracture-hairline">
                        {fracture.hairline.map((path) => (
                          <path d={path} key={path} />
                        ))}
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
              );
            })}
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
