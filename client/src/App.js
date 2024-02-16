import './App.css';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';


function App () {
  return (
    <>
      <MessageList />
      <hr />
      <MessageForm initialValues={{ body: '' }} />
    </>
  );
}

export default App;
