// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SullyaiAPI from '@sullyai/sullyai';

const client = new SullyaiAPI({
  apiKey: 'My API Key',
  accountID: 'My Account ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stream', () => {
  // skipped: tests are disabled for the time being
  test.skip('createToken: only required params', async () => {
    const responsePromise = client.audio.transcriptions.stream.createToken({ expiresIn: 3600 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createToken: required and optional params', async () => {
    const response = await client.audio.transcriptions.stream.createToken({ expiresIn: 3600 });
  });
});
