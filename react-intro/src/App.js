import './App.css';
import Card from './components/Card';

import Logo from './images/Logo.png';
import MenuTop from './images/Menu.png';
import IconOne from './images/Icon1.png';
import IconTwo from './images/Icon2.png';
import IconThree from './images/Icon3.png';
import IconFour from './images/Icon4.png';


function App() {
  return (
    <div className="App">
      
      <div className= "container">

        <div className='topBar'>

          <img src={Logo} alt='Logo'/>
          <img src={MenuTop} alt='Menu'/>

        </div>

        <div className='main'>

          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use</p>
          <p>the most popular frontend library,</p>
          <p>and become a super Ninja developer.</p>
          <button>Awesome!</button>

        </div>

      </div>
      
      <div className = 'cards'>

      <Card icon = {IconOne} titlecard = 'Declarative' textcard = 'React makes it painless to create interactive UIs.'/>
      <Card icon = {IconTwo} titlecard = 'Components' textcard = 'Build encapsulated components that manage their state.'/>
      <Card icon = {IconThree} titlecard = 'Single-Way' textcard = "A set of immutable values are passed to the component's."/>
      <Card icon = {IconFour} titlecard = 'JSX' textcard = 'Statically-typed, designed to run on mordern browsers.'/>

      </div>

    </div>
  );
}

export default App;
