import { profile_url } from '../../../container/urls';

import { DELETE, GET, POST, PUT } from '../../../container/httpClient';
import { HttpError } from '../../../shared/types';
import { PutProfileResponse, PostProfileResponse, DeleteProfileResponse, GetProfileResponse, ProfilePayload } from '../types';
import { Logger } from '../../../container/utilities';

export const putProfileDetails = async (profile: ProfilePayload): Promise<PutProfileResponse> => {
    let res: PutProfileResponse = new PutProfileResponse();

    try {
        let response = await (await PUT(`${profile_url}`, profile)).data as PutProfileResponse;

        // DTO map data to res object here before returning to the component

    } catch (err) {
        let error = err as HttpError;
        res.httpError = error;
    }

    return res;
};

export const postProfileDetails = async (profile: ProfilePayload): Promise<PostProfileResponse> => {
    let res: PostProfileResponse = new PostProfileResponse();

    try {
        let response = await (await POST(`${profile_url}`, profile)).data as PostProfileResponse;

        // DTO map data to res object here before returning to the component

    } catch (err) {
        let error = err as HttpError;
        res.httpError = error;
    }

    return res;
};

export const deleteProfileDetails = async (): Promise<DeleteProfileResponse> => {
    let res: DeleteProfileResponse = new DeleteProfileResponse();

    try {
        let response = await (await DELETE(`${profile_url}`)).data as DeleteProfileResponse;

        // DTO map data to res object here before returning to the component

    } catch (err) {
        let error = err as HttpError;
        res.httpError = error;
    }

    return res;
};

export const getProfileDetails = async (): Promise<GetProfileResponse> => {
    let res: GetProfileResponse = new GetProfileResponse();

    try {
        let response = await (await GET(`${profile_url}`)).data as GetProfileResponse;

        // DTO map data to res object here before returning to the component

    } catch (err) {
        let error = err as HttpError;
        res.httpError = error;
    }

    return res;
};