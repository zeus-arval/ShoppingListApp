import axios, {AxiosResponse} from 'axios';
import {apiConfig} from "../../public/config/api";

export interface Api<T> {
    get: (id: string) => Promise<AxiosResponse<T>>;
    getAll: (completed?: boolean) => Promise<AxiosResponse<T[]>>;
    post: (entity: T) => Promise<AxiosResponse<T>>;
    put: (id: string, entity: T) => Promise<AxiosResponse>;
    remove: (id: string) => Promise<AxiosResponse<T>>;
}

function apiUrl(entityUrl: string, id?: string): string {
    let url = apiConfig().apiUrl + entityUrl;
    if (id) {
        url += `/${id}`;
    }
    return url;
}
const requestConfig = {
    params:
    {
        apiKey: apiConfig().apiKey,
    }
}

export default function useApi<T>(
    entityUrl: string,
): Api<T> {

    function getAll(completed?: boolean): Promise<AxiosResponse<T[]>> {
        if (completed !== undefined){
            return axios.get<T[]>(apiUrl(entityUrl), {params: {
                    ...requestConfig.params,
                    completed: completed,
                }
            });
        }

        return axios.get<T[]>(apiUrl(entityUrl), requestConfig);
    }
    function get(id: string): Promise<AxiosResponse<T>> {
        return axios.get<T>(apiUrl(entityUrl, id), requestConfig);
    }
    function post(entity: T): Promise<AxiosResponse<T>> {
        return axios.post<T>(apiUrl(entityUrl), entity, requestConfig);
    }
    function put(id: string, entity: T): Promise<AxiosResponse>{
        return axios.put(apiUrl(entityUrl, id), entity, requestConfig);
    }
    function remove(id: string): Promise<AxiosResponse<T>> {
        return axios.delete(apiUrl(entityUrl, id), requestConfig);
    }

    return {get, getAll, post, put, remove};
}
