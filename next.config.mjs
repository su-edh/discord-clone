/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config) => {
    //     config.externals.push({
    //         "utf-8-validate": "commonjs utf-8-validate",
    //         bufferutil: "commonjs bufferutil"
    //     });

    //     return config;
    // },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "utfs.io",
              port: '',
              pathname: '/**',
            },
          ],
        // domains:[
        //     "utfs.io"
        // ]
    },
    typescript: {
      ignoreBuildErrors: true,  // Ignore TypeScript errors
    },
    eslint: {
      ignoreDuringBuilds: true, // Ignore ESLint errors
    },
};

export default nextConfig;
