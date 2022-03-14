import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CancelTokenSource
} from "axios";
import { setup } from "../utils/setup";



export interface IAPI_ResponseList<T> {
  data:  T[] 
}

export interface IAPI_Response<T> {
  data:  T
}



let _axiosRequestConfig: AxiosRequestConfig = {
  baseURL: setup.endpoint,
  headers: { "Content-Type": "application/json" }
};

function axiosInstance() {

  return Axios.create(_axiosRequestConfig);
}

const msgRequestCanceled = "request-canceled";



export {
  axiosInstance,
  msgRequestCanceled
};
