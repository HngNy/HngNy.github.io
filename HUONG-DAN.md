# Hướng dẫn tự cập nhật & đăng portfolio (hngny.github.io)

Site là Next.js xuất tĩnh. Mỗi lần đẩy code lên GitHub (`git push`), GitHub sẽ **tự build và tự đăng** lên https://hngny.github.io sau khoảng 2–4 phút.

## 1. Sửa cái gì ở đâu

| Muốn sửa | File |
|---|---|
| Lời giới thiệu (bio) trên trang chủ | `src/i18n/index.ts` → `hero.bio` (có bản `en` và `vi`) |
| Tên, chức danh (tiếng Anh), link GitHub / email | `src/config/portfolio.config.ts` |
| Tên & chức danh tiếng Việt, các số liệu nổi bật | `src/components/hero.tsx` |
| Tiêu đề & mô tả SEO | `src/config/site.config.ts` (EN) và `src/config/localized.ts` (VI) |
| Trang Kinh nghiệm | `src/config/vi/experience.config.ts` (VI) và `src/config/experience.config.ts` (EN) |
| Học vấn | `src/config/localized.ts` → `getEducation` |
| Kỹ năng | `src/config/skills.config.ts` (tên tiếng Việt ở `src/config/localized.ts`) |
| Trang /cv (bản web của CV) | `src/config/vi/resume.config.ts` (VI) và `src/config/resume.config.ts` (EN) |
| Trang Liên hệ | `src/views/contact.tsx` |
| Menu | `src/config/navbar.config.ts` |
| File CV PDF tiếng Việt (nút "Tải PDF") | `public/cao-vu-hang-ny-cv-vi.pdf` — thay bằng file mới, **giữ nguyên tên** |
| File CV PDF tiếng Anh | tự tạo từ trang `/en/cv`: chạy `yarn build` rồi `node scripts/cv-pdf.mjs` |
| Logo / favicon | `public/brand/hn-icon.svg`, `public/favicon.ico`, `public/*.png` |
| Ảnh khi chia sẻ link (Facebook, Zalo…) | `public/og.png` (1200×630) |

**Song ngữ:** tiếng Việt ở đường dẫn gốc (`/`, `/experience`, `/cv`), tiếng Anh thêm `/en` phía trước. Nút **EN / VI** góc trên để chuyển.

## 2. Thêm một dự án mới

Mỗi dự án là **một thư mục** trong `content/projects/`:

```
content/projects/
└── ten-du-an-moi/        # tên thư mục = đường dẫn /projects/ten-du-an-moi
    ├── index.vi.mdx      # nội dung tiếng Việt
    ├── index.mdx         # nội dung tiếng Anh
    └── cover.webp        # ảnh bìa (khoảng 1600×900)
```

1. Copy một thư mục có sẵn (vd `content/projects/van-hanh-tiktok-shop-shopee/`) → đổi tên (chữ thường, không dấu, nối bằng `-`).
2. Thay `cover.webp` bằng ảnh của dự án (có thể làm ảnh trên Canva, xuất PNG/JPG rồi đổi sang WebP).
3. Sửa phần đầu file (giữa hai dòng `---`):

```yaml
---
title: "Tên dự án"
description: "Một câu mô tả ngắn, hiện trên thẻ dự án."
date: "2026-10-01"
priority: 1            # số càng nhỏ càng hiện trước
tags: ["Shopee", "Meta Ads"]
links: []              # hoặc [{ name: "Website", url: "https://..." }]
image: "./cover.webp"
---
```

4. Bên dưới phần `---` viết nội dung bằng Markdown (`## Tổng quan`, gạch đầu dòng…). Chèn ảnh: để ảnh cùng thư mục rồi viết `![Mô tả](./ten-anh.webp)`.

Gợi ý dự án nên thêm: chiến dịch quảng cáo Meta Ads đã chạy thử (kèm số liệu CTR, CPC…), báo cáo phân tích gian hàng, file Google Sheets quản lý tồn kho mẫu, bài tập lớn ở trường…

## 3. Chạy thử trên máy

```bash
cd C:\Users\LENOVO\HngNy.github.io
yarn dev
```

Mở http://localhost:3000 để xem. Sửa file nào trang tự cập nhật. Tắt bằng `Ctrl + C`.

## 4. Kiểm tra trước khi đăng

```bash
yarn build
```

Không báo lỗi (có thư mục `out/`) là ổn. Lỗi hay gặp:
- Thiếu `image` hoặc sai tên ảnh → ảnh phải nằm cùng thư mục và ghi `./ten-anh.webp`.
- Thiếu `links` → thêm `links: []`.
- Quên dấu `"` hoặc dấu `,` trong phần đầu file.

## 5. Đăng lên

```bash
git add -A
git commit -m "Thêm dự án ..."
git push
```

Xem tiến độ ở tab **Actions** của repo: https://github.com/HngNy/HngNy.github.io/actions
- ✅ xanh: đã lên, mở https://hngny.github.io (nhấn `Ctrl + Shift + R` nếu chưa thấy thay đổi).
- ❌ đỏ: bấm vào để xem log. Nếu lỗi `yarn install --frozen-lockfile`: chạy `yarn install` trên máy rồi commit luôn file `yarn.lock`.
