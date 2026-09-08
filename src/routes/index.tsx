import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "danara.vn – Sắp ra mắt" },
      {
        name: "description",
        content:
          "Nền tảng căn hộ verified tại Đà Nẵng sắp ra mắt: ảnh thật, hợp đồng song ngữ, fit-out và quản lý cho thuê.",
      },
      { property: "og:title", content: "danara.vn – Sắp ra mắt" },
      {
        property: "og:description",
        content: "Căn hộ verified Đà Nẵng. Ảnh thật · Hợp đồng song ngữ. Đăng ký nhận thông báo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComingSoon,
});

const LAUNCH = new Date("2026-10-01T00:00:00+07:00").getTime();

function useCountdown() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setLeft(Math.max(0, LAUNCH - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  if (left === null) return null;
  const s = Math.floor(left / 1000);
  return [
    { v: Math.floor(s / 86400), l: "Ngày" },
    { v: Math.floor((s % 86400) / 3600), l: "Giờ" },
    { v: Math.floor((s % 3600) / 60), l: "Phút" },
    { v: s % 60, l: "Giây" },
  ];
}

function ComingSoon() {
  const parts = useCountdown();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-5 py-14 text-foreground sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-teal/15 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-2xl flex-col">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">danara</span>
          <span className="text-lg font-semibold text-gold-text">.vn</span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-14">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-soft px-3 py-1 text-xs font-medium text-teal-text">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Sắp ra mắt
          </span>

          <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            Căn hộ <span className="text-gold-text">verified</span> tại Đà Nẵng
          </h1>
          <p className="mt-4 max-w-lg text-base text-muted-foreground">
            Ảnh thật · Hợp đồng song ngữ · Fit-out và quản lý cho thuê trọn gói. Chúng tôi đang hoàn
            thiện những bước cuối cùng.
          </p>

          {parts && (
            <div className="mt-9 grid grid-cols-4 gap-2 sm:gap-3">
              {parts.map((p) => (
                <div
                  key={p.l}
                  className="rounded-xl border border-border bg-card px-2 py-4 text-center"
                >
                  <div className="text-2xl font-semibold tabular-nums sm:text-3xl">
                    {String(p.v).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[11px] tracking-wide text-muted-light uppercase">
                    {p.l}
                  </div>
                </div>
              ))}
            </div>
          )}

          <form
            className="mt-9"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSent(true);
            }}
          >
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email của bạn"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-light focus:border-border-strong focus:ring-2 focus:ring-ring/30"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Nhận thông báo
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-light">
              {sent
                ? "Cảm ơn bạn! Chúng tôi sẽ báo ngay khi mở cửa."
                : "Chúng tôi chỉ gửi một email duy nhất khi ra mắt."}
            </p>
          </form>

          <Link
            to="/listing"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal-text transition-colors hover:text-gold-text"
          >
            Xem căn mẫu tại Đà Nẵng
            <span aria-hidden>→</span>
          </Link>
        </div>

        <footer className="border-t border-border pt-6 text-xs text-muted-light">
          © {new Date().getFullYear()} danara.vn — Đà Nẵng, Việt Nam
        </footer>
      </div>
    </main>
  );
}
