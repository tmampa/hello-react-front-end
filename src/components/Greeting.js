import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/messages/messages';

const Greeting = () => {
  const message = useSelector((state) => state.messagesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  return (
    <h1>
      {message.greeting}
    </h1>
  );
};

export default Greeting;
