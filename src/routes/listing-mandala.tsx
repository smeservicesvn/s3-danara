import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/listing-mandala")({
  head: () => ({
    meta: [
      { title: "Mandala Luxury Apartment tầng 12 – danara.vn" },
      {
        name: "description",
        content:
          "Studio tầng 12 Panoma Tower, Mỹ An Đà Nẵng: view sông Hàn, bếp hiện đại, góc làm việc, ban công riêng, lễ tân 24/7.",
      },
      { property: "og:title", content: "Mandala Luxury Apartment tầng 12 – danara.vn" },
      {
        property: "og:description",
        content:
          "Studio tầng 12 Panoma Tower, Mỹ An Đà Nẵng: view sông Hàn, bếp hiện đại, góc làm việc, ban công riêng.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1655907432605517440/original/dd25d44e-af3f-49b9-a907-5d3d694b733c.jpeg?im_w=1200",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1655907432605517440/original/dd25d44e-af3f-49b9-a907-5d3d694b733c.jpeg?im_w=1200",
      },
    ],
  }),
  component: ListingMandala,
});

import property from "@/data/property-mandala.json";
import p01 from "@/assets/mandala-01.jpg";
import p02 from "@/assets/mandala-02.jpg";
import p03 from "@/assets/mandala-03.jpg";
import p04 from "@/assets/mandala-04.jpg";
import p05 from "@/assets/mandala-05.jpg";
import p06 from "@/assets/mandala-06.jpg";
import p07 from "@/assets/mandala-07.jpg";
import p08 from "@/assets/mandala-08.jpg";

const IMAGES: Record<string, string> = {
  "mandala-01.jpg": p01,
  "mandala-02.jpg": p02,
  "mandala-03.jpg": p03,
  "mandala-04.jpg": p04,
  "mandala-05.jpg": p05,
  "mandala-06.jpg": p06,
  "mandala-07.jpg": p07,
  "mandala-08.jpg": p08,
};

const photos = property.photos.map((p) => ({ src: IMAGES[p.file] ?? "", alt: p.alt }));
const heroPhoto = photos[0] ?? { src: "", alt: "" };
const gridPhotos = photos.slice(1);

const { spaces, highlights } = property;

function ListingMandala() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight">danara</span>
            <span className="text-lg font-semibold text-gold-text">.vn</span>
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Trang chủ
          </Link>
        </div>

        <header className="mt-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-soft px-3 py-1 text-xs font-medium text-teal-text">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            {property.location}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{property.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{property.summary}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 font-medium">
              ★ {property.rating.toFixed(1)} · {property.reviews} đánh giá
            </span>
            <span className="text-muted-light">Được khách yêu thích · Host: {property.host}</span>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          <img
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            className="col-span-2 row-span-2 h-full w-full rounded-2xl object-cover"
            loading="eager"
          />
          {gridPhotos.map((p) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              className="aspect-square w-full rounded-2xl object-cover"
              loading="lazy"
            />
          ))}
        </div>

        <section className="mt-10">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {property.description}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Điểm nổi bật</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-sm font-semibold">{h.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Không gian</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {spaces.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-14 border-t border-border pt-6 text-xs text-muted-light">
          © {new Date().getFullYear()} danara.vn — Đà Nẵng, Việt Nam
        </footer>
      </div>
    </main>
  );
}
