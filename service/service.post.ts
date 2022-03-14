import { IPost } from "../model/model.post";
import { axiosInstance, IAPI_ResponseList } from "./service.base";

const url = `posts`;



function get(): Promise<IAPI_ResponseList<IPost>> {
    return axiosInstance()?.get(url);
}

function getById(id:string): Promise<IAPI_ResponseList<IPost>> {
    return axiosInstance()?.get(url+`?id=${id}`);
}

export const postService = {
    get,getById
};
