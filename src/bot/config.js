import { createChatBotMessage } from 'react-chatbot-kit';
import StartBtn from '../components/StartBtn';
import GotIt from '../components/GotIt';
import PickSlot from '../components/PickSlot';
import BookedSlot from '../components/BookedSlot';

const botName = 'Siri';

const config = {
  initialMessages: [
    createChatBotMessage('Enter into Student Info System', {
      widget: 'startBtn',
    }),
  ],
  botName,
  state: {
    date: '',
    time: '',
  },
  widgets: [
    {
      widgetName: 'startBtn',
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: 'gotIt',
      widgetFunc: (props) => <GotIt {...props} />,
    },
    {
      widgetName: 'pickSlot',
      widgetFunc: (props) => <PickSlot {...props} />,
    },
    {
      widgetName: 'bookedSlot',
      widgetFunc: (props) => <BookedSlot {...props} />
    }
  ],
};

export default config;
