export interface Pagination<T> {
    count: number;
    next: string | null;
    previous: null;
    results: T
}