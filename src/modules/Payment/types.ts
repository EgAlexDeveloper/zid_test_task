import { HttpResponse } from "../../shared/types";

export type Payment = {};

export type PaymentPayLoad = {};

export class PostPaymentResponse extends HttpResponse {
    profile: Payment | null = null;
};