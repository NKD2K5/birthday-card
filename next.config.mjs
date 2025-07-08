/** @type {import('next').NextConfig} */
const repo = "birthday-card" // 👉 Đổi nếu repo khác tên

const nextConfig = {
  // Xuất ra HTML/CSS/JS tĩnh để deploy GitHub Pages
  output: "export",

  // Đường dẫn gốc khi site nằm ở /<repo>
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
