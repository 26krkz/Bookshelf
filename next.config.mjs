/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // または 'https'、URLのプロトコルに応じて変更
        hostname: "books.google.com",
        port: "", // ポートが必要ない場合は空にする
        pathname: "/books/content/**", // マッチさせたいパスのパターン
      },
      {
        protocol: "http", // または 'https'、URLのプロトコルに応じて変更
        hostname: "books.google.com",
        port: "", // ポートが必要ない場合は空にする
        pathname: "/books/publisher/**", // マッチさせたいパスのパターン
      },
      {
        protocol: "https", // 'https'の場合も指定
        hostname: "placehold.jp",
        port: "", // ポートが必要ない場合は空にする
        pathname: "/**", // マッチさせたいパスのパターン
      },
    ],
  },
};

export default nextConfig;
