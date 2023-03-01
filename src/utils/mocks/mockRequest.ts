import {Request} from 'express';
import {Params} from 'express-serve-static-core';

export function makeMockRequest(params : Params) {
    const request = {
        params: params,
    } as unknown

    return request as Request;
}
