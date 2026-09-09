import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/listing-my-khe")({
  head: () => ({
    meta: [
      { title: "Co-living gần biển Mỹ Khê – danara.vn" },
      {
        name: "description",
        content:
          "Studio 25m² tại The Nắng Suites, Sơn Trà: bữa sáng miễn phí, xe đạp miễn phí, 5 phút ra biển Mỹ Khê.",
      },
      { property: "og:title", content: "Co-living gần biển Mỹ Khê – danara.vn" },
      {
        property: "og:description",
        content:
          "Studio 25m² tại The Nắng Suites, Sơn Trà: bữa sáng miễn phí, xe đạp miễn phí, 5 phút ra biển Mỹ Khê.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ListingMyKhe,
});

import property from "@/data/property-my-khe.json";
import bedroom from "@/assets/mykhe-bedroom.jpg";
import bedroom2 from "@/assets/mykhe-bedroom2.jpg";
import balcony from "@/assets/mykhe-balcony.jpg";
import common from "@/assets/mykhe-common.jpg";
import living from "@/assets/mykhe-living.jpg";
import bedroom3 from "@/assets/mykhe-bedroom3.jpg";

const IMAGES: Record<string, string> = {
  "mykhe-bedroom.jpg": bedroom,
  "mykhe-bedroom2.jpg": bedroom2,
  "mykhe-balcony.jpg": balcony,
  "mykhe-common.jpg": common,
  "mykhe-living.jpg": living,
  "mykhe-bedroom3.jpg": bedroom3,
};

const photos = property.photos.map((p) => ({ src: IMAGES[p.file] ?? "", alt: p.alt }));
const heroPhoto = photos[0] ?? { src: "", alt: "" };
const gridPhotos = photos.slice(1);

const { spaces, highlights } = property;

function ListingMyKhe() {
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
