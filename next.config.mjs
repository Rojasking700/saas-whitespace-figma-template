/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    quietDeps: true, // Add this line
    silenceDeprecations: ["legacy-js-api"],
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       silenceDeprecations: ["legacy-js-api"],
  //     },
  //   },
  // },
};

export default nextConfig;
