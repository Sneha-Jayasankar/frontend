import { useEffect, useState } from 'react';
import './App.css';
// import InputField from './components/InputField';
// import TextField from './components/TextField';
// import UncontrolledButton from "./components/UncontrolledButton";
import CreateEmployee from './pages/CreateEmployee';

function App() {

  // const [username,setusername]=useState('your name');
  // const [displayname,setdisplayname]=useState('');
  // const [count,setcount]=useState(null);
  // useEffect(()=>{
  //   setusername(username);
  // })
  // useEffect(()=>{
  //   if(count!==null) setcount=0;
  // })

  // useEffect(()=>{
  //   setusername('your name')
  // },[]);

  // useEffect(()=>{
  //   console.log("displayname->",displayname);
  //   if(displayname!=='')
  //   setusername('')
  // },[displayname]);


  // useEffect(()=>{
  //  console.log('username-->',username)
  // },[username]);

  // const onUserNameChange=(value)=>{
  //   setusername(value);
  // };

  // const ondisplay =()=>{
  //     setdisplayname(username);
  // }

  return (
    // <div className="App">
    //     {/* <UncontrolledButton label="Click here" handleClick={ondisplay}/>
    //     <InputField label="Username" value={username} onChange={onUserNameChange}/>
    //     <TextField label={displayname}/> */}

        <CreateEmployee/>
    // </div>
  );
}

export default App;
