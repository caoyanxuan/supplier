import path from 'path';

export default {
  extraBabelIncludes: [
    // 支持绝对路径
    path.join(__dirname, '../common/'),
  ],
  theme: {
    // 主色调
    '@primary-color': '#136AF2', // 全局主色
    '@info-color': '#757B84', // info-color
    '@error-color': '#F44A1C', // error-color
  },

  pangoo: {},
  autoprefixer: {
    targets: ['> 1%', 'not ie <= 8', 'ios >= 8', 'android >= 4.0'],
  },
  targets: { chrome: 49, firefox: 64, safari: 10, edge: 13, ios: 10, ie: 9 },

  // 打包优化
  hash: true,
  // chunks: ['vendors', 'umi', 'antd'],
  // chainWebpack: function(config) {
  //   config.merge({
  //     optimization: {
  //       splitChunks: {
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 3,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             test({ resource }) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     },
  //   });
  // },
};
