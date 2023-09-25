export interface ResponseBaseModel<Type> {
    get: string;
    parameters: string[];
    errors: string[];
    results: number;
    paging: Paging;
    response: Type[];
}

interface Paging {
    current: number;
    total: number;
}
