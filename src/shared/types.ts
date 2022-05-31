import { FC } from "react";
import { RouteObject } from "react-router-dom";

export interface RouterModel extends RouteObject {
    component: FC<any>,
    params?: string,
    prop?: { isHome: boolean },
    isCenteredContent?: boolean,
    isBoxedLayout?: boolean,
    isPublic?: boolean,
}

export class HttpResponse {
    httpError: HttpError | null = null;
}

export type HttpError =
    | Error400
    | Error404
    | Error403
    | Error503

export type Error400 = {
    code?: string;
    essage?: string;
    details?: string;
    data?: {
        additionalProp1?: string;
        additionalProp2?: string;
        additionalProp3?: string;
    },
    validationErrors?: ValidationErrors[]
}

export type ValidationErrors = {
    message?: string;
    members?: string[];
}

export type Error404 = {
    code: number | null;
    data: {};
    details: string | null;
    message: string;
    validationErrors?: ValidationErrors[]
}

export type Error500 = {
    code: number | null;
    data: {};
    details: string | null;
    message: string;
}

export type Error503 = {
    Code: string | number | null;
    ExtendedMessage: string | null;
    Details: {} | null;
    Message: string;
    ValidationErrors?: ValidationErrors[] | string
}

export type Error403 = {
    code: number | null;
    data: {};
    details: string | null;
    message: string;
    validationErrors?: ValidationErrors[]
}