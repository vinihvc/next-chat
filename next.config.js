// eslint-disable-next-line @typescript-eslint/no-var-requires
// const nodeExternals = require('webpack-node-externals')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     config.externals = [nodeExternals()]
  //   }

  //   return config
  // },
}

module.exports = nextConfig
