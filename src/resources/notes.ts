// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Notes extends APIResource {
  /**
   * Creates a new note
   */
  create(body: NoteCreateParams, options?: RequestOptions): APIPromise<NoteCreateResponse> {
    return this._client.post('/v1/notes', { body, ...options });
  }

  /**
   * Gets a single note based on the ID supplied
   */
  retrieve(noteID: string, options?: RequestOptions): APIPromise<NoteRetrieveResponse> {
    return this._client.get(path`/v1/notes/${noteID}`, options);
  }

  /**
   * Deletes a single note based on the ID supplied
   */
  delete(noteID: string, options?: RequestOptions): APIPromise<DeleteResponse> {
    return this._client.delete(path`/v1/notes/${noteID}`, options);
  }
}

export interface DeleteResponse {
  /**
   * Timestamp of the response
   */
  date?: string;

  /**
   * Status of the response
   */
  status?: string;
}

export interface NoteCreateResponse {
  data?: NoteCreateResponse.Data;

  /**
   * Timestamp of the response
   */
  date?: string;

  /**
   * Status of the response
   */
  status?: string;
}

export namespace NoteCreateResponse {
  export interface Data {
    /**
     * Unique identifier for the created note
     */
    noteId?: string;
  }
}

export interface NoteRetrieveResponse {
  data?: NoteRetrieveResponse.Data;

  /**
   * Timestamp of the response
   */
  date?: string;

  /**
   * Status of the response
   */
  status?: string;
}

export namespace NoteRetrieveResponse {
  export interface Data {
    /**
     * Unique identifier for the audio transcription
     */
    id?: string;

    /**
     * Either markdown or JSON representation of the note. Both can be present as well.
     */
    payload?: Data.Payload;

    /**
     * Processing status of the note
     */
    status?: string;

    timestamp?: Data.Timestamp;
  }

  export namespace Data {
    /**
     * Either markdown or JSON representation of the note. Both can be present as well.
     */
    export interface Payload {
      /**
       * JSON object of the note. The note style used will determine which fields are
       * present. See the [SOAP Note](/api-reference/schemas/soap-note) example.
       */
      json?: unknown;

      /**
       * Markdown string of the note
       */
      markdown?: string;
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

export interface NoteCreateParams {
  /**
   * Date of the patient encounter
   */
  date: string;

  transcript: string;

  /**
   * Additional context for note generation. This field is optional.
   */
  context?: string | null;

  /**
   * Special instructions for note generation. This field is optional.
   */
  instructions?: Array<string> | null;

  /**
   * List of up to 50 medications (comma separated) to use as reference for fixing
   * spelling errors. This field is optional.
   */
  medicationList?: string;

  noteType?: NoteCreateParams.NoteType;

  /**
   * Optional patient information
   */
  patientInfo?: NoteCreateParams.PatientInfo;

  /**
   * Reference to a previous note if this is a follow-up. This field is optional.
   */
  previousNote?: string;
}

export namespace NoteCreateParams {
  export interface NoteType {
    /**
     * A brief overview of the note.
     */
    description?: string;

    /**
     * Determines whether to include a JSON payload in the custom note output. This
     * option is applicable only for custom notes and defaults to `false`. Enabling
     * this will increase latency and payload size.
     */
    includeJson?: boolean;

    /**
     * Custom template to generate the note. This is applicable only when `type` is set
     * to `note_style` or `note_template`.
     *
     * - When `type` is `note_style`, this is a note style string
     * - When `type` is `note_template`, this is a
     *   [Note Template](/api-reference/schemas/note-template) payload
     */
    template?: string | unknown;

    /**
     * Determines the type of note to generate.
     *
     * - Use `note_style` to provide a note style string
     * - Use `note_template` to provide a
     *   [Note Template](/api-reference/schemas/note-template) payload
     * - Use `soap` for the default SOAP template
     */
    type?: 'soap' | 'note_style' | 'note_template';
  }

  /**
   * Optional patient information
   */
  export interface PatientInfo {
    dateOfBirth?: string;

    gender?: 'male' | 'female' | 'other' | 'prefer not to say' | 'unspecified';

    name?: string;
  }
}

export declare namespace Notes {
  export {
    type DeleteResponse as DeleteResponse,
    type NoteCreateResponse as NoteCreateResponse,
    type NoteRetrieveResponse as NoteRetrieveResponse,
    type NoteCreateParams as NoteCreateParams,
  };
}
