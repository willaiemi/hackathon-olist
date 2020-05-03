import assistantConfig from '../configs/watsonConfig';
import { MessageResponse } from 'ibm-watson/assistant/v2';

declare const process: {
  env: {
    ASSISTANT_ID: string;
  }
}

interface RequestDTO {
  answer: string;
}

class WatsonAssistantService {
  public async execute({ answer }: RequestDTO): Promise<MessageResponse> {


    const session = await assistantConfig.createSession({
      assistantId: process.env.ASSISTANT_ID,
    });

    const message = await assistantConfig.message({
      assistantId: process.env.ASSISTANT_ID,
      sessionId: session.result.session_id,
      input: {
        message_type: 'text',
        text: answer,
      }
    });

    return message.result;
  }
}

export default WatsonAssistantService;
