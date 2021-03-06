import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { switchMap, catchError, retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Toast } from 'antd-mobile';
import { of } from 'rxjs/observable/of';

const baseURL = "http://192.168.0.150:4201";
// const baseURL = "http://zhangdong.api.fongwell.com";
// const baseURL = "http://www.appstest.cn/api";
export const imgUrl = 'http://192.168.0.150:4201';
// export const imgUrl = 'http://zhangdong.api.fongwell.com';
// export const imgUrl = 'http://www.appstest.cn/api';
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 1000 * 60; // 请求超时
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token'); // 请求头设置

// 请求成功
const handleSuccess = (res: AxiosResponse<any>) => {
  return of(res.data);
}
// 请求失败
const handleError = (error): Observable<any> => {
  Toast.error(error.message,2);
  return of(error);
}

// get请求
export const get = (url, params = {}) => {
  return fromPromise(axios({
    method: "get",
    url,
    params,
  }))
    .pipe(
      switchMap((res:AxiosResponse<any>) => handleSuccess(res)),
      retry(3),
      catchError((error) => handleError(error))
    )
}
