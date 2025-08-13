import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "example.com",   // replace with your actual domain(s) for student images
      "res.cloudinary.com", // example if using Cloudinary
      "localhost" // if loading images locally in dev
    ],
  },
};

export default nextConfig;




// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
