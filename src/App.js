
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* La cabecera fija iría aqui importada */}

        <Header/>

        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/register" exact component={Register}/>

        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
