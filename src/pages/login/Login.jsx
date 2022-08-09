
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "/home/sneha/Desktop/frontend-folder/reactapp/src/images/kv-logo.png";
import sideImg from "/home/sneha/Desktop/frontend-folder/reactapp/src/images/large-image.png";
// import { useLoginMutation } from "/home/sneha/Desktop/frontend-folder/reactapp/src/services/api.js";
import {setStorage} from "/home/sneha/Desktop/frontend-folder/reactapp/src/services/utils.js";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useLoginMutation } from "./LoginApi";
/*credentials for login:
admin:
username: sneha123
password: sneha123

general:
username: joel123
password:joel123
*/

const Login = () => {

  const [login]=useLoginMutation();
  const [loginInfo, setLoginInfo] = useState({});
  const navigate = useNavigate();

  const onChangeValue = (key, value) => {
    setLoginInfo((prev) => {
      console.log(prev);
      return { ...prev, [key]: value };
    });
    console.log(key, value);

    setLoginInfo({
      ...loginInfo,
      [key]: value,
    });
  };

  const handleLogin = async() => {
    const newlogin = {
        username: loginInfo.username,
        password:loginInfo.password
    }
    const response=await login(newlogin);
    const token=response.data.data.idToken;
    setStorage("idToken",token)
    console.log(response);

    navigate("/list");
  };

  return (
    <>
      <div className="login-page">
        <div className="login-part img">
          <img src={sideImg} alt="" width="940px" height="97%" />
        </div>
        <div className="login-part-form">
          <img src={logo} alt="KeyValue Logo" width="209" height="45" />
          <div className="login-form">
      
            <InputField
              label=""
              className="username"
              type="text"
              name="username"
              placeholder="User name"
              onChange={(value) => onChangeValue("username", value)}
            />
            <InputField
              label=""
              type="text"
              value={loginInfo.password}
              placeholder="Password"
              name="password"
              onChange={(value) => onChangeValue("password", value)}
            />

            <Button
              label="Login In"
              className="loginb"
              handleClick={() => handleLogin()}
            />
          </div>
          {/* {console.log("logininfo",loginInfo)} */}
        </div>
      </div>
    </>
  );
};

export default Login;