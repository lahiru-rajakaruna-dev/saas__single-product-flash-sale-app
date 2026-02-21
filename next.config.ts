import type { NextConfig } from 'next';



const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images       : {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port    : '',
                // href:'https://picsum.photos/'
            }
        ]
    },
};

export default nextConfig;
