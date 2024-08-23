/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'inventory-management-api-cyan.vercel.app',
				port: '',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
