import { io } from 'socket.io-client';
import {
  newMessageError,
  newMessageSuccess,
  removeMessageSuccess,
  removeMessageError
} from '../store/slices/messagesSlice';
import CONSTANTS from './../constants';

const {
  SOCKET_EVENTS: { NEW_MESSAGE, NEW_MESSAGE_SUCCESS, NEW_MESSAGE_ERROR, REMOVE_MESSAGE, REMOVE_MESSAGE_SUCCESS, REMOVE_MESSAGE_ERROR },
} = CONSTANTS;

const socket = io('ws://localhost:5000');

export const createMessage = payload => socket.emit(NEW_MESSAGE, payload);
export const removeMessage = payload => socket.emit(REMOVE_MESSAGE, payload);

export const bringStoreToSocket = store => {
  socket.on(NEW_MESSAGE_SUCCESS, payload => {
    store.dispatch(newMessageSuccess(payload));
  });

  socket.on(NEW_MESSAGE_ERROR, error => {
    store.dispatch(newMessageError(error));
  });
  /////////////////////////////////////////
  socket.on(REMOVE_MESSAGE_SUCCESS, payload => {
    const { removeMessage: { _id } } = payload;
    console.log(_id);
   //console.log(payload.removeMessage._id);
    store.dispatch(removeMessageSuccess(_id));
  });
  socket.on(REMOVE_MESSAGE_ERROR, payload => {
    store.dispatch(removeMessageError(payload));
  });
};
