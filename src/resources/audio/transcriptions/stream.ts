// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Stream extends APIResource {
  /**
   * Create a temporary authentication token for Streaming Speech-to-Text
   *
   * @example
   * ```ts
   * const response =
   *   await client.audio.transcriptions.stream.createToken({
   *     expiresIn: 3600,
   *   });
   * ```
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
