import { payment_url } from '../../../container/urls';

import { POST } from '../../../container/httpClient';
import { HttpError } from '../../../shared/types';
import {  PostPaymentResponse, PaymentPayLoad } from '../types';
import { Logger } from '../../../container/utilities';


export const postPaymentDetails = async (payload: PaymentPayLoad): Promise<PostPaymentResponse> => {
    let res: PostPaymentResponse = new PostPaymentResponse();

    try {
        let response = await (await POST(`${payment_url}`, payload)).data as PostPaymentResponse;

        // DTO map data to res object here before returning to the component

    } catch (err) {
        let error = err as HttpError;
        res.httpError = error;
    }

    return res;
};
