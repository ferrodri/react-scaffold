/** @type {import('next').NextConfig} */
const nextConfig = {
    /**
     * In development, renders components twice if strict mode is enabled
     * https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode
     */
    reactStrictMode: false,
    swcMinify: true
};

module.exports = nextConfig;
