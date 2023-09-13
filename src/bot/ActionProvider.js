import React from 'react';

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
    const userMessage = createChatBotMessage(`Got it!`);

    removeAllMessages(userMessage);
    pickSlotHandler();
  };

  const pickSlotHandler = () => {
    const botMessage = createChatBotMessage('Pick a Date', {
      widget: 'pickSlot',
      delay: 3000,
    });

    addNewMessage(botMessage);
  };

  const bookSlotHandler = (date, time) => {
    const botMessage = createChatBotMessage('Booked slot successfully!!!', {
      widget: 'bookedSlot',
    });
    console.log(date, time);
    setState((prev) => ({
      ...prev,
      date,
      time,
    }));
    removeAllMessages(botMessage);
  };

  const addNewMessage = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
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
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
