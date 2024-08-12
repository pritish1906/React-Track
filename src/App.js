

import './App.css';
import Component from './Components/Component';
import HelloXml from './Components/HelloXml';
import Props from './Components/Props';
import List from './Components/List';
import States from './Components/States';
function App() {
  return (
    <div className="App">
     <HelloXml/>
     {/* <Component/>
     <Props name="Pritish" age={21} email="xyz@gmail.com"/>
     <List/> */}
     <States/>
    </div>
  );
}

export default App;
