// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NotesAPI from '../../notes';
import * as StreamAPI from './stream';
import { Stream, StreamCreateTokenParams, StreamCreateTokenResponse } from './stream';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Transcriptions extends APIResource {
  stream: StreamAPI.Stream = new StreamAPI.Stream(this._client);

  /**
   * Creates a new audio transcription
   */
  create(body: TranscriptionCreateParams, options?: RequestOptions): APIPromise<TranscriptionCreateResponse> {
    return this._client.post(
      '/v1/audio/transcriptions',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Gets a single audio transcription based on the ID supplied
   */
  retrieve(transcriptionID: string, options?: RequestOptions): APIPromise<TranscriptionRetrieveResponse> {
    return this._client.get(path`/v1/audio/transcriptions/${transcriptionID}`, options);
  }

  /**
   * Deletes a single audio transcription based on the ID supplied
   */
  delete(transcriptionID: string, options?: RequestOptions): APIPromise<NotesAPI.DeleteResponse> {
    return this._client.delete(path`/v1/audio/transcriptions/${transcriptionID}`, options);
  }
}

export interface TranscriptionCreateResponse {
  data?: TranscriptionCreateResponse.Data;

  status?: string;
}

export namespace TranscriptionCreateResponse {
  export interface Data {
    /**
     * Informational message about the request status.
     */
    message?: string;

    /**
     * The processing status of the transcription request. Always 'pending'.
     */
    status?: string;

    /**
     * Unique identifier for the audio transcription request.
     */
    transcriptionId?: string;
  }
}

export interface TranscriptionRetrieveResponse {
  data?: TranscriptionRetrieveResponse.Data;

  /**
   * Timestamp of the response
   */
  date?: string;

  /**
   * Status of the response
   */
  status?: string;
}

export namespace TranscriptionRetrieveResponse {
  export interface Data {
    /**
     * Unique identifier for the audio transcription
     */
    id?: string;

    /**
     * Either markdown or JSON representation of the note. Both can be present as well.
     */
    payload?: Data.Payload;

    timestamp?: Data.Timestamp;
  }

  export namespace Data {
    /**
     * Either markdown or JSON representation of the note. Both can be present as well.
     */
    export interface Payload {
      /**
       * Transcription of the audio
       */
      transcription?: string;
    }

    export interface Timestamp {
      /**
       * Complete timestamp
       */
      complete?: number;

      /**
       * Start timestamp
       */
      start?: number;
    }
  }
}

export interface TranscriptionCreateParams {
  /**
   * Audio file to transcribe (supported formats: wav, mp3, m4a, ogg)
   */
  audio: Uploadable;

  /**
   * Language code for transcription:
   *
   * - English (en-US, en-GB) - Spanish (es) - French (fr) - German (de) - Italian
   *   (it) - Portuguese (pt) - Dutch (nl) - Japanese (ja) - Korean (ko) - Chinese
   *   (zh) - Russian (ru)
   */
  language?: string;
}

Transcriptions.Stream = Stream;

export declare namespace Transcriptions {
  export {
    type TranscriptionCreateResponse as TranscriptionCreateResponse,
    type TranscriptionRetrieveResponse as TranscriptionRetrieveResponse,
    type TranscriptionCreateParams as TranscriptionCreateParams,
  };

  export {
    Stream as Stream,
    type StreamCreateTokenResponse as StreamCreateTokenResponse,
    type StreamCreateTokenParams as StreamCreateTokenParams,
  };
}
