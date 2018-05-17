import Axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

declare module 'axios-form' {
    export default function <T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;
}