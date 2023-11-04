import './App.css'
import NavBar from './components/NavBar'
import Title from '/src/components/Title.jsx'
import Text from '/src/components/Text.jsx'
import Button from '/src/components/Button.jsx'
import Declarative from '/src/components/Declarative.jsx'
import Components from '/src/components/Components.jsx'
import SingleWay from '/src/components/SingleWay.jsx'
import JSX from '/src/components/JSX.jsx'
import backgroundImg from './assets/background.jpg'

const App = ()=> {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh',
  };
    return (
    <>
      <div style={backgroundStyle}>
        <div className='navBar'>
          <NavBar />
        </div>
        <div className='text'>
        <Title />
        <Text />
        <br/>
        <Button />
        </div>
        </div>
        <div className="container">
          <Declarative />
          <Components />
          <SingleWay />
          <JSX />
        </div>
    </>
    );
  }
  

export default App
