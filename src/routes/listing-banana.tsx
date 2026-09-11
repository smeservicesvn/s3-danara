import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/listing-banana")({
  head: () => ({
    meta: [
      { title: "Banana Flower – căn hộ gần sông Hàn | danara.vn" },
      {
        name: "description",
        content:
          "Căn hộ 26m² Banana Flower, Hải Châu Đà Nẵng: giường king, bếp riêng, ban công, café đối diện, gần sông Hàn.",
      },
      { property: "og:title", content: "Banana Flower – căn hộ gần sông Hàn | danara.vn" },
      {
        property: "og:description",
        content:
          "Căn hộ 26m² Banana Flower, Hải Châu Đà Nẵng: giường king, bếp riêng, ban công, café đối diện, gần sông Hàn.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ListingBanana,
});

import property from "@/data/property-banana.json";
import p1 from "@/assets/banana-01.jpg";
import p2 from "@/assets/banana-02.jpg";
import p3 from "@/assets/banana-03.jpg";
import p4 from "@/assets/banana-04.jpg";
import p5 from "@/assets/banana-05.jpg";
import p6 from "@/assets/banana-06.jpg";
import p7 from "@/assets/banana-07.jpg";
import p8 from "@/assets/banana-08.jpg";

const IMAGES: Record<string, string> = {
  "banana-01.jpg": p1,
  "banana-02.jpg": p2,
  "banana-03.jpg": p3,
  "banana-04.jpg": p4,
  "banana-05.jpg": p5,
  "banana-06.jpg": p6,
  "banana-07.jpg": p7,
  "banana-08.jpg": p8,
};

const photos = property.photos.map((p) => ({ src: IMAGES[p.file] ?? "", alt: p.alt }));
const heroPhoto = photos[0] ?? { src: "", alt: "" };
const gridPhotos = photos.slice(1);

const { spaces, highlights } = property;

function ListingBanana() {
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
              ★ {property.rating.toFixed(2)} · {property.reviews} đánh giá
            </span>
            <span className="text-muted-light">Superhost · Host: {property.host}</span>
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
