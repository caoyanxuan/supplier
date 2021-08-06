import { history } from 'umi';
import { message as Message } from '@yui/ui';
import axios, { AxiosRequestConfig } from 'axios';
import { generateSignature } from './signature';

const TOKEN_KEY = 'x-yzw-auth-token';

// @ts-ignore
export const BASE_URL = '/';

export interface IConfig extends AxiosRequestConfig {
  // 是否显示错误提示，如401状态不需要提示，直接跳转登录页面
  showErrorTip?: boolean;
  notCatchError?: boolean;
  needResponse?: boolean;
}

// 请求时间
axios.defaults.timeout = 10000;
// 异常状态判断
axios.defaults.validateStatus = (status) => status < 500;
axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  // const entry = (window as any).ACTIVE_MIRCO_APP_ENDPOINT_ENTRY_URL;
  // config.baseURL = entry ? `${entry}${baseURL}` : baseURL;

  config.headers = {
    ...config.headers,
    'X-AUTH': generateSignature(),
    [TOKEN_KEY]: token,
  };
  return config;
});

/**
 * 响应拦截器
 */
axios.interceptors.response.use(
  (response): any => {
    return new Promise((resolve, reject) => {
      const { config, data, status } = response;

      const showErrorTip =
        (config as IConfig)?.showErrorTip ||
        (config?.params?.showErrorTip ?? false);
      const message = (data?.message ?? '') || '服务器内部错误';

      // 直接返回response
      if ((config as IConfig)?.needResponse) resolve(response || {});
      if ((config as IConfig)?.notCatchError) {
        // 不需要拦截
      } else if (status === 401) {
        if (window?.goToCheckLoginPageGivenUnauthorizedError) {
          window.goToCheckLoginPageGivenUnauthorizedError();
        } else {
          // 跳转登录
          if (showErrorTip) {
            Message.destroy();
            Message.error(message);
          }
        }
      } else if (status === 403) {
        // 跳转权限提示
        history.push('/403');
      } else if (!data.success) {
        if (showErrorTip) {
          Message.destroy();
          Message.error(message);
        }
        reject(data);
      }
      resolve(data || {});
    });
  },
  function(err) {
    Message.destroy();
    Message.error('服务器内部错误');
    return Promise.reject(err);
    // 异常情况跳转500页面
    // history.push('/500');
  }
);

// 默认配置
const baseConfig: IConfig = {
  showErrorTip: true,
  notCatchError: false,
  needResponse: false,
};

// 请求封装
const HttpUtil = {
  /**
   * Get请求
   * @param url
   * @param config 配置
   */
  get(url: string, config: IConfig = baseConfig): any {
    return axios.get(url, config);
  },
  /**
   * Post请求
   * @param url
   * @param postdata
   * @param config
   * @returns
   */
  post(url: string, postdata?: any, config: IConfig = baseConfig): any {
    return axios.post(url, postdata, config);
  },
  /**
   * Put请求
   * @param url
   * @param postdata
   * @param config
   */
  put(url: string, postdata?: any, config: IConfig = baseConfig) {
    return axios.put(url, postdata, config);
  },
  /**
   * delete请求
   * @param url
   * @param config
   */
  delete(url: string, config: IConfig = baseConfig) {
    return axios.delete(url, config);
  },
};

export default HttpUtil;
