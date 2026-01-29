// import logo from "./logo.svg";
// import "./style.css";
import "./App.css";
// import { Content, Header,Footer} from './func-components'
// import Button from './class-components'
import {Calculator2} from './calculator'
import {EventData2} from './event-data'
import RefsFunc from './refs-class'
import RefArray from './refs-array'
import MessageBox from './state-func'
import {userContext} from './context'
// import Content  from './context-content'
import Header2 from './context-header2'
import Content2 from './context-content2'
import React from "react";
function App() {

  // return (
  //   <><Header/>
  //   <p><center><Calendar/></center></p>
  //   <Content/>
  //   <Footer/></>
    
  // );
  // return <Button/> 
  // return <Calculator2/> 
  let [user, setUser] = React.useState()
  return (
    <userContext.Provider value = {[user,setUser]}>
      <Header2/>  
      <Content2/>
    </userContext.Provider>
  )
}

export default App;
