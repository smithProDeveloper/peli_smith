export interface ResponseServer<T> {
    status: number;
    message: string;
    data: T;
}