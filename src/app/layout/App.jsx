import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from 'react-router-dom'
import EventDashBoard from "../../features/event/EventDashboard/EventDashBoard";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventForm from '../../features/event/EventForm/EventForm'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage'
import HomePage from '../../features/home/HomePage'
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>

        <Route path="/(.+)" render={() => (
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path='/kitchen' component={EventDashBoard}/>
                <Route path='/event/:id' component={EventDetailedPage}/>
                <Route path='/manage/:id' component={EventForm}/>
                <Route path='/createEvent' component={EventForm}/>
              </Switch> 
            </Container>
          </div>
        )}/>
        
      </div>
    );
  }
}

export default App;
