import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { hideProgress, showProgress, showGeneralError } from '../shared/redux/actions';
import { store } from './store';
import { Error400, Error500, Error403 } from '../shared/types';

var requestCount = 0;
var error401Count = 0;

export const GET = async (endpoint: string, params?: any, headers?: any): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        url: endpoint,
        method: 'GET',
        params,
        headers,
    };

    return await excute(options);
};

export const POST = async (endpoint: string, data: any): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        url: endpoint,
        method: 'POST',
        data: data
    };

    return await excute(options);
};

export const PUT = async (endpoint: string, data: any): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        url: endpoint,
        method: 'PUT',
        data: data
    };

    return await excute(options);
};

export const DELETE = async (endpoint: string): Promise<AxiosResponse> => {
    const options: AxiosRequestConfig = {
        url: endpoint,
        method: 'DELETE'
    };

    return await excute(options);
};

const excute = (options: AxiosRequestConfig): Promise<AxiosResponse> => {
    let request = axios(options);

    return new Promise((resolve, reject) => {
        return request
            .then((res: AxiosResponse) => { return resolve(res) })
            .catch((err: AxiosResponse<AxiosError>) => { return reject(err) })
    });
}

axios.interceptors.request.use((request: any) => {
    request.headers = {
        ...request.headers,
        'accept-language': localStorage.getItem("lang") ? localStorage.getItem("lang")! : "ar",
    };

    requestCount++;

    if (requestCount === 1) {
        store.dispatch(showProgress());
    }

    return request;
}, (error: any) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response: AxiosResponse) => {
    requestCount--;
    if (requestCount === 0) store.dispatch(hideProgress());

    return response;
}, async (error: AxiosError) => {
    let error400: Error400 | object = {};

    if (requestCount > 0) requestCount--;

    if (error.response?.status === 401) {
        let originalRequest = error.config;
        error401Count++;

        //TODO Token Refreshment
    }

    else if (error.response?.status === 500) {
        requestCount = 0;

        let error500: Error500 = error.response.data.error;
        store.dispatch(showGeneralError(error500.message));
    }

    else if (error.response?.status === 400) {
        error400 = await error.response?.data.error;
    }

    else if (error.response?.status === 403) {
        let error403: Error403 = error.response.data.error;
        store.dispatch(showGeneralError(error403?.message));
    }

    if (requestCount === 0) await store.dispatch(hideProgress());

    return Promise.reject(error400);
});