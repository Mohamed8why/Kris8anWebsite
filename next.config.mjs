const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Ignore .py files during client-side build
        config.module.rules.push({
          test: /\.py$/,
          use: 'ignore-loader',
        });
      }
  
      return config;
    },
  };
  
  export default nextConfig;
  