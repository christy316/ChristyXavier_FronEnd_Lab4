import { Route , Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ExpenseTracker from './components/ExpenseTracker';
import ShowData from './components/ShowList';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/add" component={ExpenseTracker} />
          <Route path="/" component={ShowData} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
