import type { NextConfig } from "next";
import createMDX from '@next/mdx'
const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})
  /* config options here */
;

export default nextConfig;
