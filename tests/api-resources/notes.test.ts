// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SullyaiAPI from '@sullyai/sullyai';

const client = new SullyaiAPI({
  apiKey: 'My API Key',
  accountID: 'My Account ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource notes', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.notes.create({
      date: '2019-12-27',
      transcript:
        "Hey, how's it going? Good good yeah, so what's going on? Yeah, hi I'm Edward yeah hi hi Edward. How's it going? Yeah, good good. So I've been having a couple of issues like my back pain and knee pain.",
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.notes.create({
      date: '2019-12-27',
      transcript:
        "Hey, how's it going? Good good yeah, so what's going on? Yeah, hi I'm Edward yeah hi hi Edward. How's it going? Yeah, good good. So I've been having a couple of issues like my back pain and knee pain.",
      context: 'context',
      instructions: [
        'Use a professional and concise tone.',
        'Include key details without unnecessary elaboration.',
        'Ensure clarity for a general audience.',
      ],
      medicationList: 'medicationList',
      noteType: {
        description: 'description',
        includeJson: true,
        template:
          'write a standard clinical SOAP note with the following sections: - **Subjective**: Contains detailed HPI. - **Objective**: Contains PE and ROS. - **Assessment**: Contains differential diagnoses with corresponding plans. - **Patient Instructions**: Contains a list of instructions for the patient.',
        type: 'soap',
      },
      patientInfo: { dateOfBirth: '2019-12-27', gender: 'male', name: 'name' },
      previousNote: 'previousNote',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.notes.retrieve('noteId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.notes.delete('noteId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
