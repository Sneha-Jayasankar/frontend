// import { useEffect, useState } from 'react';
// import './styles/App.css';
// // import InputField from './components/InputField';
// // import TextField from './components/TextField';
// // import UncontrolledButton from "./components/UncontrolledButton";
// import CreateEmployee from './pages/CreateEmployee';

import Counter from "./pages/Counter";
import Login from "./pages/Login";

function App() {

//   // const [username,setusername]=useState('your name');
//   // const [displayname,setdisplayname]=useState('');
//   // const [count,setcount]=useState(null);
//   // useEffect(()=>{
//   //   setusername(username);
//   // })
//   // useEffect(()=>{
//   //   if(count!==null) setcount=0;
//   // })

//   // useEffect(()=>{
//   //   setusername('your name')
//   // },[]);

//   // useEffect(()=>{
//   //   console.log("displayname->",displayname);
//   //   if(displayname!=='')
//   //   setusername('')
//   // },[displayname]);


//   // useEffect(()=>{
//   //  console.log('username-->',username)
//   // },[username]);

//   // const onUserNameChange=(value)=>{
//   //   setusername(value);
//   // };

//   // const ondisplay =()=>{
//   //     setdisplayname(username);
//   // }

  return (
    <div className="App">
        <Login/>

    </div>
  );
}

export default App;
