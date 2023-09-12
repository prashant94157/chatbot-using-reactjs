import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Siri';

const config = {
  initialMessages: [createChatBotMessage('Enter into Student Info System')],
  botName,
};

export default config;
