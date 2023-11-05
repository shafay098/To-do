import { Provider } from 'react-redux';
import './App.css';
import Index from './page/todo_Page';
import Store from './store/redux';

function App() {
  return (
   <>
   <Provider store={Store}>
   <Index/>
   </Provider>
   </>
  );
}

export default App;
