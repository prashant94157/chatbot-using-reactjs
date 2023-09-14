import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const startBtnHandler = () => {
    const botMessage = createChatBotMessage(
      `Hello, Welcome to student info system!`,
      {
        widget: 'gotIt',
      }
    );

    removeAllMessages(botMessage);
  };

  const gotItHandler = () => {
    const botMessage = createClientMessage(`Got it!`);

    addNewMessage(botMessage);
    pickSlotHandler();
  };

  const pickSlotHandler = () => {
    const botMessage = createChatBotMessage('Pick a Date', {
      widget: 'pickSlot',
    });

    addNewMessage(botMessage);
  };

  const bookSlotHandler = (date, time) => {
    const botMessage = createClientMessage(`${date.date}, ${date.day} ${time}`);
    addNewMessage(botMessage);

    nameHandler();
  };

  const nameHandler = () => {
    const botMessage = createChatBotMessage('Enter your Name', {
      widget: 'name',
    });

    addNewMessage(botMessage);
  };

  const submitNameHandler = (name) => {
    const botMessage = createClientMessage(`${name}`);
    addNewMessage(botMessage);

    ageHandler();
  };

  const ageHandler = () => {
    const botMessage = createChatBotMessage('Enter your Age', {
      widget: 'age',
    });

    addNewMessage(botMessage);
  };

  const submitAgeHandler = (age) => {
    const botMessage = createClientMessage(`${age} years`);
    addNewMessage(botMessage);

    exitMessageHandler();
  };

  const exitMessageHandler = () => {
    const botMessage = createChatBotMessage(
      'Thank you. In 5 seconds, bot will exit',
      {
        widget: 'exitScreen',
      }
    );

    addNewMessage(botMessage);
  };

  const addNewMessage = (message) => {
    setState((prev) => {
      prev.messages.map((i) => {
        delete i.widget;
        return i;
      });
      return {
        ...prev,
        messages: [...prev.messages, message],
      };
    });
  };

  const removeAllMessages = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            startBtnHandler,
            gotItHandler,
            bookSlotHandler,
            submitNameHandler,
            submitAgeHandler,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
