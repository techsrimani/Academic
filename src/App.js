import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Careers from './pages/careers/careers.component';
import ContactUs from './pages/contactus/contact-us.component';
import Header from './components/header/header.component'

class App extends React.Component {


  render() { 
    return (
    <div>
       <div className="head">
     <Header/>
     </div>
      {/* routes */}
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/careers' component={Careers} />
          <Route path='/contact-us' component={ContactUs} />
      </Switch>
   
   </div>
  );
}
}

export default App;
