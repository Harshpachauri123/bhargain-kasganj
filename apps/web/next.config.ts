/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // <-- Ye double asterisk lagane se saare external domains automatically allow ho jayenge!
      },
    ],
  },
};

export default nextConfig;
