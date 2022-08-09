import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/Store'
import { Provider } from 'react-redux'
import CreateEmployee from './pages/createemployee/CreateEmployee';
import EmployeeList from './pages/employeelist/EmployeeList';
import EmployeeDetails from './pages/employeedetails/EmployeeDetails';
import UpdateEmployee from './pages/createemployee/UpdateEmployee';
import Login from './pages/login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <Routes>
           <Route path="/" element={<Login/>}/>
           <Route path="/create" element={<CreateEmployee/>}/>
           <Route path="/list" element={<EmployeeList/>}/>
           <Route path="/list/:id" element={<EmployeeDetails />} />
           <Route path="/edit/:id" element={<UpdateEmployee />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
