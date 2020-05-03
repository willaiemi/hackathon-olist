import 'dotenv/config';

import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';

declare const process: {
  env: {
    ASSISTANT_IAM_APIKEY: string;
    ASSISTANT_URL: string;
  }
}

const assistant = new AssistantV2({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({
    apikey: process.env.ASSISTANT_IAM_APIKEY,
  }),
  serviceUrl: process.env.ASSISTANT_URL,
});

export default assistant;
