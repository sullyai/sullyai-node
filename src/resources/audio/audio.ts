// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TranscriptionsAPI from './transcriptions/transcriptions';
import {
  TranscriptionCreateParams,
  TranscriptionCreateResponse,
  TranscriptionRetrieveResponse,
  Transcriptions,
} from './transcriptions/transcriptions';

export class Audio extends APIResource {
  transcriptions: TranscriptionsAPI.Transcriptions = new TranscriptionsAPI.Transcriptions(this._client);
}

Audio.Transcriptions = Transcriptions;

export declare namespace Audio {
  export {
    Transcriptions as Transcriptions,
    type TranscriptionCreateResponse as TranscriptionCreateResponse,
    type TranscriptionRetrieveResponse as TranscriptionRetrieveResponse,
    type TranscriptionCreateParams as TranscriptionCreateParams,
  };
}
