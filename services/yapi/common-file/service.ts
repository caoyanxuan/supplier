/**
 * @description: 文件相关接口  
 * @author by Generator
 * @desc 文件相关接口
 * @createTime 2021-08-06 17:34:50
 **/
import * as Types from './types';
import * as UrlKeys from './urls';
import http from './packages/common/utils/http-util.ts';

/** 
 * download
 * @param params 接口参数
 * @文档地址 http://yapi.yzw.cn/project/211/interface/api/17237
 **/
export async function getDownloadFileCommonDownload(params: Types.GetDownloadFileCommonDownloadReq = {}): Promise<Types.GetDownloadFileCommonDownloadRes> {
  return await http.get(UrlKeys.GET_COMMON_FILE_DOWNLOAD, { params });
}

/** 
 * uploadFile
 * @param params 接口参数
 * @文档地址 http://yapi.yzw.cn/project/211/interface/api/17242
 **/
export async function postUploadFileCommonUpload(params: Types.PostUploadFileCommonUploadReq = {}): Promise<Types.PostUploadFileCommonUploadRes> {
  return await http.post(UrlKeys.POST_COMMON_FILE_UPLOAD, params);
}

/** 
 * 获取文件下载的url地址
 * @param params 接口参数
 * @文档地址 http://yapi.yzw.cn/project/211/interface/api/25147
 **/
export async function getUrlDownloadFilebyKey(key: number | string, params: Types.GetUrlDownloadFilebyKeyReq = {}): Promise<Types.GetUrlDownloadFilebyKeyRes> {
  return await http.get(UrlKeys.GET_COMMON_FILE_DOWNLOAD_URL_KEY + '/' + key, { params });
}