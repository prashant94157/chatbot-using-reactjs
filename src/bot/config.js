import { createChatBotMessage } from 'react-chatbot-kit';
import StartBtn from '../components/StartBtn';
import GotIt from '../components/GotIt';
import PickSlot from '../components/PickSlot';
import Name from '../components/Name';
import Age from '../components/Age';
import ExitScreen from '../components/ExitScreen';

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
      widgetName: 'name',
      widgetFunc: (props) => <Name {...props} />,
    },
    {
      widgetName: 'age',
      widgetFunc: (props) => <Age {...props} />,
    },
    {
      widgetName: 'exitScreen',
      widgetFunc: (props) => <ExitScreen {...props} />,
    },
  ],
};

export default config;
