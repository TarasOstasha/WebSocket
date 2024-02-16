import { useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { ws } from '../../api';
import { getMessagesThunk } from '../../store/slices/messagesSlice';

function MessageList({ messages, isFetching, error, limit, get }) {
    useEffect(() => {
        get(limit);
      }, [limit]);

      useLayoutEffect(() => {
        // window.scrollTo(0, document.body.scrollHeight);
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }, [messages.length]);

      const deleteMessage = (id) => {
        ws.removeMessage(id)
      }
  return (
    <div>
      {error && <div style={{ color: 'red' }}>ERROR!!!</div>}
      {isFetching && <div>Messages is loading. Please, wait...</div>}
      {!isFetching && !error && (
        <ol>
          {messages.map(m => (
            <li key={m._id}>{JSON.stringify(m)}
              <button onClick={() => deleteMessage(m._id)}>Remove</button>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

const mapStateToProps = ({ chat }) => chat;

const mapDispatchToProps = dispatch => ({
  get: limit => dispatch(getMessagesThunk(limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);




