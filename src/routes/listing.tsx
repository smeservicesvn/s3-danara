import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/listing")({
  head: () => ({
    meta: [
      { title: "Studio gần chợ Hàn – danara.vn" },
      {
        name: "description",
        content:
          "Studio trung tâm Đà Nẵng gần chợ Hàn: giường queen, bếp đầy đủ, ban công riêng, café miễn phí mỗi sáng.",
      },
      { property: "og:title", content: "Studio gần chợ Hàn – danara.vn" },
      {
        property: "og:description",
        content:
          "Studio trung tâm Đà Nẵng gần chợ Hàn: giường queen, bếp đầy đủ, ban công riêng, café miễn phí mỗi sáng.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1716678250223860210/original/11b0b83f-92e7-482a-9e44-59de4513f67f.png?im_w=720",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1716678250223860210/original/11b0b83f-92e7-482a-9e44-59de4513f67f.png?im_w=720",
      },
    ],
  }),
  component: Listing,
});

const IMG = (id: string) =>
  `https://a0.muscache.com/im/pictures/hosting/Hosting-1716678250223860210/original/${id}.png?im_w=960`;

const heroPhoto = {
  src: IMG("11b0b83f-92e7-482a-9e44-59de4513f67f"),
  alt: "Phòng ngủ studio",
};

const gridPhotos = [
  { src: IMG("d0973f78-cb52-4d60-b231-51e2946bf43f"), alt: "Không gian sống" },
  { src: IMG("c83a4d8d-17e7-4f02-ac4f-7dd497befc97"), alt: "Bếp và bàn ăn" },
  { src: IMG("703c61a6-1083-47d2-ac56-ef949d0d81f9"), alt: "Phòng tắm" },
  { src: IMG("518cab97-39a0-4fb4-b09b-bb6f67172856"), alt: "Ban công" },
];

const spaces = [
  {
    title: "Phòng ngủ",
    text: "Phòng ngủ sáng và ấm cúng với giường queen, ga mềm, điều hòa và tủ quần áo.",
  },
  {
    title: "Khu vực sinh hoạt",
    text: "Smart TV, ghế ngồi thoải mái và góc làm việc với Wi-Fi tốc độ cao.",
  },
  {
    title: "Bếp",
    text: "Bếp nhỏ đầy đủ: tủ lạnh, lò vi sóng, ấm đun, nồi chảo và bát đũa cơ bản.",
  },
  {
    title: "Phòng tắm",
    text: "Phòng tắm riêng với nước nóng, khăn sạch, dầu gội, sữa tắm và máy sấy tóc.",
  },
  {
    title: "Ban công",
    text: "Ban công riêng ngắm thành phố — lý tưởng cho ly café buổi sáng.",
  },
  {
    title: "Café đặc sản",
    text: "Miễn phí café đặc sản từ quán của chúng tôi mỗi sáng.",
  },
];

const highlights = [
  { title: "Tự nhận phòng", text: "Nhận phòng qua nhân viên tòa nhà." },
  {
    title: "Vị trí yên tĩnh, thuận tiện",
    text: "Khu vực thanh bình, dễ dàng di chuyển khắp thành phố.",
  },
  { title: "Phòng riêng trong căn hộ", text: "Phòng riêng của bạn, dùng chung một số không gian." },
];

function Listing() {
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
            Quận Hải Châu, Đà Nẵng
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Studio gần chợ Hàn — trung tâm Đà Nẵng
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            1 giường queen · Phòng tắm riêng · Café đặc sản miễn phí mỗi sáng
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 font-medium">
              ★ 5.0 · 13 đánh giá
            </span>
            <span className="text-muted-light">Được khách yêu thích · Host: Anh</span>
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
            Căn hộ rộng rãi ngay trung tâm Đà Nẵng, chỉ vài bước chân tới chợ Hàn, Nhà thờ Chính
            tòa, sông Hàn cùng vô số quán café và nhà hàng. Thưởng thức café đặc sản miễn phí mỗi
            sáng. Lý tưởng cho cặp đôi, người đi công tác và digital nomad.
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
