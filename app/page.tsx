import Image from "next/image";

export default function Page() {
  const services = ['Flights', 'To Do']
  const promos = [
    ['Flight Sale', 'Hemat hingga 100% (Untuk owner hwhwhw)'],
  ]
  const destinations = ['Bali', 'Padang', 'Jakarta', 'Medan']

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-blue-600 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold">tiket.com</div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#promo">Promo</a>
            <a href="#destinations">Destinations</a>
            <a href="#rewards">Rewards</a>
          </nav>

          <button className="rounded-xl bg-white px-4 py-2 font-semibold text-blue-600">
            Book Now
          </button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest">
              Travel More, Worry Less
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Liburan Impian Mulai dari Sini
            </h1>

            <p className="mt-5 text-lg text-blue-50">
              Pesan tiket pesawat dan aktivitas favoritmu dalam satu aplikasi.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-2xl bg-white px-6 py-3 font-bold text-blue-600">
                Cari Tiket
              </button>

              <button className="rounded-2xl border border-white px-6 py-3 font-bold">
                Check Promo
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white/15 p-6 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-2 gap-4 text-sm">
              {services.map((item) => (
                <div key={item} className="rounded-2xl bg-white/20 p-5 font-semibold">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl bg-white p-5 text-slate-900">
              <div className="font-semibold">Jakarta → Bali</div>
              <div className="mt-2 text-3xl font-black">Rp499K</div>
              <div className="text-sm text-slate-500">Limited seat promo</div>
            </div>
          </div>
        </div>
      </section>

      <section id="promo" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black">Promo Spesial Minggu Ini</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {promos.map(([title, desc]) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow">
              <div className="font-bold text-blue-600">{title}</div>
              <div className="mt-2 text-slate-600">{desc}</div>

              <button className="mt-5 rounded-xl bg-blue-600 px-4 py-2 text-white">
                Claim
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="destinations" className="bg-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-black">Destinasi Favorit</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {destinations.map((city) => (
              <div
                key={city}
                className="flex h-44 flex-col justify-end rounded-3xl bg-white p-6 shadow"
              >
                <div className="text-2xl font-bold">{city}</div>
                <div className="text-sm text-slate-500">
                  Mulai dari promo terbaik
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="rewards"
        className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:items-center"
      >
        <div>
          <h2 className="text-3xl font-black">Tiket Points & Rewards</h2>

          <p className="mt-4 text-slate-600">
            Kumpulkan poin dari setiap transaksi dan tukarkan dengan potongan harga perjalanan berikutnya.
          </p>

          <button className="mt-6 rounded-2xl bg-blue-600 px-5 py-3 font-bold text-white">
            Gabung Sekarang
          </button>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-orange-400 to-pink-500 p-8 text-white shadow-2xl">
          <div className="text-sm">Member Balance</div>
          <div className="mt-2 text-5xl font-black">0</div>
          <div className="mt-3">Points available</div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-10 md:flex-row">
          <div>
            <div className="text-xl font-bold text-white">tiket.com</div>
            <div className="mt-2 text-sm">Your travel partner.</div>
          </div>

          <div className="text-sm">© Made by Andika</div>
        </div>
      </footer>
    </div>
  )
}
