// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class NoteStyles extends APIResource {
  /**
   * Creates a note style
   */
  create(body: NoteStyleCreateParams, options?: RequestOptions): APIPromise<NoteStyleCreateResponse> {
    return this._client.post('/v1/note-styles', { body, ...options });
  }
}

export interface NoteStyleCreateResponse {
  data?: NoteStyleCreateResponse.Data;

  /**
   * Timestamp of the response
   */
  date?: string;

  /**
   * Status of the response
   */
  status?: string;
}

export namespace NoteStyleCreateResponse {
  export interface Data {
    /**
     * The created note style
     */
    template?: string;
  }
}

export interface NoteStyleCreateParams {
  /**
   * Optional instructions for note generation
   */
  instructions?: Array<string>;

  /**
   * Sample note text to base the style on
   */
  sampleNote?: string;
}

export declare namespace NoteStyles {
  export {
    type NoteStyleCreateResponse as NoteStyleCreateResponse,
    type NoteStyleCreateParams as NoteStyleCreateParams,
  };
}
