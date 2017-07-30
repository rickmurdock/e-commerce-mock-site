import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './BaseLayout';
import PartInfo from './PartInfo';
import Parts from './Parts';
import Tools from './Tools'
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/parts/:partnum" component={PartInfo}/>
            <Route path="/parts" component={Parts}/>
            <Route path="/tools" component={Tools}/>
            <Route path="/services" component={Services}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
