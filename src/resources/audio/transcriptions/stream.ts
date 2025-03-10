// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Stream extends APIResource {
  /**
   * Create a temporary authentication token for Streaming Speech-to-Text
   */
  createToken(
    body: StreamCreateTokenParams,
    options?: RequestOptions,
  ): APIPromise<StreamCreateTokenResponse> {
    return this._client.post('/v1/audio/transcriptions/stream/token', { body, ...options });
  }
}

export interface StreamCreateTokenResponse {
  token?: string;
}

export interface StreamCreateTokenParams {
  /**
   * Duration of the token in seconds
   */
  expiresIn: number;
}

export declare namespace Stream {
  export {
    type StreamCreateTokenResponse as StreamCreateTokenResponse,
    type StreamCreateTokenParams as StreamCreateTokenParams,
  };
}
