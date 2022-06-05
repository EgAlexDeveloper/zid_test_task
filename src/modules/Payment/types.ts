import { HttpResponse } from "../../shared/types";

export type Payment = {};

export type PaymentPayLoad = {};

export class PostPaymentResponse extends HttpResponse {
    profile: Payment | null = null;
};

export enum CardType {
    VISA = 1,
    MASTER_CARD = 2,
    ELSE = 3
}