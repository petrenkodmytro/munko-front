export function webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
    // images: {
    //   domains: ['drive.google.com'],
    // },
  });
  return config;
}

// images: {
//   domains: ['drive.google.com'],
// },
// // images: {
// //   remotePatterns: [
// //     {
// //       protocol: "https",
// //       hostname: "**",
// //     },
// //   ],
// // },
// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**',
//       },
//     ],
//   },
// };

// export default nextConfig;
