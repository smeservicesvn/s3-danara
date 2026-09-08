# danara.vn – Coming Soon

Trang sắp ra mắt của **danara.vn**, nền tảng căn hộ verified tại Đà Nẵng.

## Giới thiệu

Trang hiện đang hiển thị màn hình chờ (coming soon) với:

- Bộ đếm ngược đến ngày ra mắt (01/10/2026)
- Ô đăng ký email để nhận thông báo khi mở cửa
- Thiết kế tối giản theo phong cách danara.vn: nền kem ấm, chữ nâu, điểm nhấn nâu đồng và xanh rêu
- Font chữ **Be Vietnam Pro**
- Responsive cho mobile và desktop

## Công nghệ

- [TanStack Start](https://tanstack.com/start)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)

## Chạy local

```sh
git clone <repository-url>
cd <repository-name>
npm i
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

## Lưu ý

- Ngày ra mắt hiện tại là giả định. Có thể cập nhật trong `src/routes/index.tsx`.
- Ô email hiện chỉ hiển thị thông báo cảm ơn. Để lưu email thật, cần tích hợp backend hoặc dịch vụ form.

## CDN ảnh Danara (`public/assets/`)

Repo này còn là **CDN ảnh công khai** của Danara qua jsDelivr. Mọi file trong
`public/` được phục vụ tại:

```
https://cdn.jsdelivr.net/gh/smeservicesvn/s3-danara/public/<đường-dẫn>
```

- `public/assets/<nhóm>/<tên>.webp` — ảnh listing / fit-out.
- Backend (`smess-core-services`, module Danara) lưu **đường dẫn tương đối**
  (ví dụ `my-khe-one-bedroom/hero-1920x1080.webp`) và ghép tiền tố
  `cdn_image_base_url` của Client Danara khi trả API — xem
  `docs/gpm`/Danara README bên workspace.
- **Không** ghi đè `favicon.ico` / `robots.txt`. Không force-push (Lovable).
- jsDelivr cache đường dẫn cũ tới 7 ngày; purge:
  `curl -sS https://purge.jsdelivr.net/gh/smeservicesvn/s3-danara/public/<đường-dẫn>`

## Built with Lovable

Project được xây dựng và quản lý trên [Lovable](https://lovable.dev).
