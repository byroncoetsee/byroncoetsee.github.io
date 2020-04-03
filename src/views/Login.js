import React, {
  useState
} from 'react';
import axios from 'axios';
import AuthLayout from '../components/layouts/auth';
import { useHistory as history } from 'react-router-dom';
import {
  storeAuth
} from '../state/actions/index';
import {
  connect
} from 'react-redux';
import {
  Link
} from 'react-router-dom';
function mapDispatchToProps(dispatch) {
  return {
    storeAuth: auth => dispatch(storeAuth(auth))
  }
}

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState(false)

  const setError = (name, message) => {
    var error = document.getElementById(name);
    if(error)
      error.innerHTML = message;

  }
  const validate = () => {
    let valid = true;

    let passRegex = new RegExp(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/g);
    let emailRegex = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);

    if(email.length < 1) {
      setError("emailError", "Email Address is required");
      valid = false;
    } else if(!emailRegex.test(email)) {
      setError("emailError", "Please provide a valid email address");
      valid = false;
    }

    if(password.length < 1) {
      setError("passError", "Password is required");
      valid = false;
    } else if(!passRegex.test(password)) {
      setError("passError", "Please provide a valid password");
      valid = false;
    }

    return valid;
  }

  const  signin = (e) => {
    e.preventDefault()
    setError("emailError", "")
    setError("passError", "")
    setError("showError", "")

    return validate() ? postSignIn() : false
  }

  const postSignIn = () => {
    let apiUrl = 'https://yr2yl0lpui.execute-api.us-east-1.amazonaws.com/dev';

    setLoader(true)

    axios.post(apiUrl + '/users/login', {
      email: email,
      password: password
    }, {
      headers: {
        'x-api-key': 'A8x8nBruJt5Obic2pzNdF3AtEzL4QOea6hN13D8A'
      }
    })
    .then(function (response) {
      props.storeAuth({
        authenticated: true,
        guid: response.data.guid,
      })
      // history.push('/dashboard')
    })
    .catch(function (error) {
      console.log(error)
      if(error.response.data.message) {
        setError("showError", '<div class="error-wrapper"><h4>' + error.response.data.message + '</h4></div>')
      }
      setLoader(false)
    })
  }
  return (
    <AuthLayout>
    <form className="login100-form validate-form">
      <span className="login100-form-title p-b-55">
        Sign In
      </span>
      <div id="showError">

      </div>
      <div className="wrap-input100 m-b-16">
        <input className="input100" type="text" name="email" id="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <small className="err-msg" id="emailError"></small>
        <span className="focus-input100"></span>
        <span className="symbol-input100">
          <span className="lnr lnr-envelope"></span>
        </span>
      </div>
      <div className="wrap-input100 m-b-16">
        <input className="input100" type="password" name="pass" id="pass" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <small className="err-msg" id="passError"></small>
        <span className="focus-input100"></span>
        <span className="symbol-input100">
          <span className="lnr lnr-lock"></span>
        </span>
      </div>
      <div className="contact100-form-checkbox m-l-4">
        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
        <label className="label-checkbox100" htmlFor="ckb1">
          Remember me
        </label>
      </div>
      <div className="container-login100-form-btn p-t-25">
        <button className="login100-form-btn" onClick={signin}>
          Login
          {loader ? (
            <span id="loaderSpinner">
              <i class="fa fa-spinner fa-spin"></i>
            </span>
          ) : null}
        </button>
      </div>
      <div className="text-center w-full p-t-50">
        <span className="txt1">
          Not a member?
        </span>
        <Link className="txt1 bo1 hov1" to="/register">
          Sign up now
        </Link>
      </div>
    </form>
    </AuthLayout>
  )
}

export default connect(null, mapDispatchToProps)(Login);
