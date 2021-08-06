import { defineConfig } from 'umi';
import routes from './routes';
import path from 'path';
import umiCommonConfig from "../common/config/umiCommonConfig";
import packageJson from "./package.json";

const { YZW_ENVIRONMENT } = process.env;

const resolve = (_path: string) => path.resolve(__dirname, _path);

export default defineConfig({
  ...umiCommonConfig,
  routes,
  alias: {
    '@admin': resolve('./'),
    '@common': resolve('../common/'),
  },
  proxy: {
    '/api': {
      target:
        YZW_ENVIRONMENT === 'qa'
          ? 'http://bid-op-qa.yzw.cn.qa/'
          : 'http://bid-op-dev.yzw.cn.qa/',
      changeOrigin: true,
      // pathRewrite: { '/api' : '/api/cmc' },
    },
  },
  qiankun: {
    slave: {}, // 微前端插件注册
  },
  base: '/admin/', // 微前端当前子应用一级路径
  outputPath: '../../dist/' + packageJson.name, // dist输出目录
});
