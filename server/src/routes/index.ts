import { Router } from 'express';
import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';

const routes = Router();

const assistant = new AssistantV2({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({
    apikey: process.env.ASSISTANT_IAM_APIKEY,
  }),
  serviceUrl: process.env.ASSISTANT_URL,
});

const sessionId = { id: '' }

async function callMessage() {
  try {
    const message = await assistant.message({
      assistantId: 'a299dc5a-ec14-4483-ae5f-4eeefba8aeba',
      sessionId: sessionId.id,
      input: {
        message_type: 'text',
        text: 'Vocês tem a cor azul?'
      }
    });

    console.log(message.result.output);
  } catch (err) {
    console.log(err);
  }
}

assistant.createSession({
  assistantId: 'a299dc5a-ec14-4483-ae5f-4eeefba8aeba',
}).then(async res => {
  sessionId.id = res.result.session_id;

  await callMessage();
});

export default routes;
