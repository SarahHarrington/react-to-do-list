import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AddToDo from './components/AddToDo';
import Listicle from './components/Listicle';
import NotFound from './components/NotFound';

class App extends React.Component {
  state = {
    toDos: {}
  }

  addToDoToListicle = (toDo) => {
    const toDos = {...this.state.toDos };

    toDos[`toDo${Date.now()}`] = toDo;
    
    this.setState({toDos: toDos})
  }

  render() {
    return (
      <main>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/home" component={Home}/>
          <Route component={NotFound} />
        </Switch>
        <AddToDo addToDoToListicle={this.addToDoToListicle}/>
        <Listicle allToDos={this.state.toDos}/>
      </main>
    );
  }
}

export default App;
