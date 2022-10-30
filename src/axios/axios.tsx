
import axios, { AxiosInstance } from "axios";
import { defer, map, Observable } from "rxjs";


const axiosFuntions = (): AxiosInstance => {
    const axiosInstance = axios.create({
        baseURL: "https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/"
    });
    return axiosInstance
}
const get = (url: string, queryParams?: object): Observable<any> => {
    return defer(() => axiosFuntions().get(url, { params: queryParams }))
        .pipe(map(result => result.data));
};

const post = (url: string, body: any, queryParams?: object): Observable<any> => {
    return defer(() => axiosFuntions().post(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

const put = (url: string, body: any, queryParams?: object): Observable<void> => {
    return defer(() => axiosFuntions().put(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

const patch = (url: string, body: any, queryParams?: object): Observable<void> => {
    return defer(() => axiosFuntions().patch(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

const deleter= (url: string, id?: string): Observable<void> => {
    return defer(() => (axiosFuntions().delete(`${url}/${id}`)))
        .pipe(map(result => result.data)
        );
};

export default { get, post, put, patch, deleter };
