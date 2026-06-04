"use client";

export default function Page() {
  const collections = [
    {
      title: "Luxury Dresses",
      description: "Elegant silhouettes crafted for timeless beauty.",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Kids Collection",
      description: "Premium fashion for little stars.",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Occasion Wear",
      description: "Designed for unforgettable moments.",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <img
              src="/aida-logo.png"
              alt="AIDA Logo"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="text-2xl tracking-[0.35em] font-extralight">
                AIDA
              </h1>

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Boutique
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-10 uppercase text-sm tracking-[0.2em]">
            <a href="#collections" className="hover:text-[#D4AF37] transition">
              Collections
            </a>

            <a href="#about" className="hover:text-[#D4AF37] transition">
              About
            </a>

            <a href="#gallery" className="hover:text-[#D4AF37] transition">
              Gallery
            </a>

            <a href="#contact" className="hover:text-[#D4AF37] transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2200&auto=format&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

        <div className="relative z-10 max-w-5xl">

          <img
            src="/aida-logo.png"
            alt="AIDA"
            className="w-40 md:w-56 mx-auto mb-8"
          />

          <p className="uppercase tracking-[0.45em] text-[#D4AF37] mb-6">
            Luxury Fashion House
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.35em]">
            AIDA
          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-white/70 leading-relaxed text-lg">
            Discover timeless elegance, modern sophistication and premium
            fashion collections designed for women who love luxury.
          </p>

          <a
            href="#collections"
            className="inline-block mt-12 border border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-full uppercase tracking-[0.25em] hover:bg-[#D4AF37] hover:text-black transition"
          >
            Explore Collection
          </a>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="text-center text-[#D4AF37] uppercase tracking-[0.4em] mb-4">
            Signature Collections
          </p>

          <h2 className="text-center text-5xl md:text-7xl font-extralight mb-20">
            Curated Elegance
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {collections.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-light mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-32 px-6 bg-gradient-to-b from-black to-[#0a0a0a]"
      >
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-[#D4AF37] uppercase tracking-[0.4em] mb-4">
            About AIDA
          </p>

          <h2 className="text-5xl md:text-7xl font-extralight mb-10">
            Fashion Beyond Trends
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            AIDA Boutique combines luxury craftsmanship with modern aesthetics.
            Every collection is thoughtfully curated to celebrate elegance,
            confidence and timeless beauty.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <p className="text-center text-[#D4AF37] uppercase tracking-[0.4em] mb-4">
            Luxury Gallery
          </p>

          <h2 className="text-center text-5xl md:text-7xl font-extralight mb-20">
            Inspired Looks
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

            {gallery.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[2rem]"
              >
                <img
                  src={img}
                  alt=""
                  className="h-[320px] w-full object-cover hover:scale-110 transition duration-700"
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-6 bg-[#0a0a0a]"
      >
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#D4AF37] uppercase tracking-[0.4em] mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-extralight mb-8">
            Connect With AIDA
          </h2>

          <p className="text-white/60 mb-12">
            Follow our latest collections and reach us directly.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">

            <a
              href="https://instagram.com/aida_boutique_chemmad"
              target="_blank"
              className="border border-[#D4AF37] px-8 py-4 rounded-full hover:bg-[#D4AF37] hover:text-black transition"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/919746600042"
              target="_blank"
              className="border border-[#D4AF37] px-8 py-4 rounded-full hover:bg-[#D4AF37] hover:text-black transition"
            >
              WhatsApp
            </a>

          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919746600042"
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#D4AF37] text-black px-6 py-4 rounded-full shadow-xl z-50"
      >
        WhatsApp
      </a>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">

        <div className="text-center">

          <img
            src="/aida-logo.png"
            alt="AIDA"
            className="w-16 mx-auto mb-4"
          />

          <h3 className="tracking-[0.4em] text-xl font-light">
            AIDA
          </h3>

          <p className="text-white/40 mt-3">
            © 2026 AIDA Boutique. All Rights Reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}
