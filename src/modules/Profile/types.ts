import { HttpResponse } from "../../shared/types";

export type Profile = {};

export type ProfilePayload = {};

export class PutProfileResponse extends HttpResponse {
    profile: Profile | null = null;
};

export class DeleteProfileResponse extends HttpResponse {
    profile: Profile | null = null;
};

export class PostProfileResponse extends HttpResponse {
    profile: Profile | null = null;
};

export class GetProfileResponse extends HttpResponse {
    profile: Profile | null = null;
};