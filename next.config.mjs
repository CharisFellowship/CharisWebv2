/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;

//https://images.pexels.com/photos/981784/pexels-photo-981784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
