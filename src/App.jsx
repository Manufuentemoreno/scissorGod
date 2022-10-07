import './App.css';
import { useRef } from 'react';
import Game from './components/Game/Game';
import Footer from './components/Footer/Footer';
import HighScore from './components/HighScore/HighScore';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

function App() {

  return (
    <>
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Game}></Route>
          <Route path="/score" exact={true} component={HighScore}></Route>
        </Switch>
      </BrowserRouter>
    </main>
    <Footer/>
    </>
  );
}

export default App;
