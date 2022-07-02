/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai", // adding image loader to prevent next export error
    path: "",
  },
};

module.exports = nextConfig;
