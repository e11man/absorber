import './App.css'

function App() {
  return (
    <main className="min-h-screen flex items-stretch">
      <section className="relative w-full grid lg:grid-cols-2">
        {/* Left: brand + copy */}
        <div className="flex flex-col justify-center px-6 sm:px-10 py-16 lg:py-24 text-left">
          <div className="ambient-line max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="block text-white">Absorber</span>
              <span className="block bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#ffd3a6,#ff7a00)'}}>The Shiner Towel</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/80 max-w-prose">
              Engineered to leave nothing but a mirror finish. The Absorber glides, drinks up every drop,
              and elevates your detail to a studio‑grade glow.
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="#buy"
              className="shine inline-flex items-center justify-center rounded-full bg-[var(--absorber-brand)] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,122,0,.25)] hover:shadow-[0_0_0_2px_rgba(255,122,0,.35)] transition-shadow"
            >
              Shop The Towel
            </a>
            <a
              href="#learn"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/5"
            >
              Learn More
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 opacity-80 text-xs">
            <div>
              <div className="text-white font-semibold">Ultra‑Absorbent</div>
              <div className="text-white/70">Waffle‑weave microfibers</div>
            </div>
            <div>
              <div className="text-white font-semibold">Streak‑Free</div>
              <div className="text-white/70">No lint, no swirl marks</div>
            </div>
            <div>
              <div className="text-white font-semibold">Luxe Build</div>
              <div className="text-white/70">Soft bound edges</div>
            </div>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="relative min-h-[60vh] lg:min-h-0">
          <div className="absolute inset-0">
            <img
              src="/hero.png"
              alt="Classic coupe under studio light with the Absorber shiner towel"
              className="h-full w-full object-cover object-center"/>
            {/* vignetting overlays to match photo mood */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"/>
            <div className="absolute -inset-x-10 -inset-y-10 bg-[radial-gradient(700px_200px_at_70%_95%,rgba(255,122,0,0.15),transparent_70%)]"/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
