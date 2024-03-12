/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "mepjqyejyketnjhgffwm.supabase.co",
            },
        ],
    },
};

export default nextConfig;
