import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
      <Route exact path="/"> 
      <Home />
      </Route>
      <Route path="/stocks">
      <Stocks />
      </Route>
      <Route path="/movies">
      <Movies />
      </Route>
    </div>
  );
}

export default App;
