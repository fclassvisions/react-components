import React, { Component } from 'react';
import './App.css';
import bgImg from './images/showcase.jpg'
import Showcase from './components/Showcase/Showcase'

class App extends Component {
  render() {
    const navItems = [
      {name: 'Home', url: '#'},
      {name: 'Shop', url: '#'},
      {name: 'About', url: '#'},
      {name: 'Contact', url: '#'}
    ]

    return (
      <div className="App">
        <Showcase bgImg={bgImg} navItems={navItems} header={'Electronics Galore'} content={'We sell alot of electronics. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ducimus deserunt blanditiis perferendis, ex aliquid saepe nisi sapiente, quos id ea iusto fugiat sed consequuntur temporibus eum nemo, ullam sequi'} btnText={'Shop Now'} />
      </div>
    )
  }
}

export default App;
