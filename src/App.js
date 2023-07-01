import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
import FirstMain from './FirstMain';
import SecondMain from './SecondMain';
import Apicall from './Apicall';
// Add the solid icons to the library
library.add(fas);

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className='first-new-app'>
        <FirstMain />
      </div>
      <div className='second-new-app'>
        <SecondMain />

      </div>
      <Apicall />
    </div>
  );
}
