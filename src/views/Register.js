import React, {
  useState
} from 'react';
import axios from 'axios';
import { useHistory as history } from 'react-router-dom';
import AuthLayout from '../components/layouts/auth';
import {
  storeAuth,
  setRegistered
} from '../state/actions/index';
import {
  Link
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function mapDispatchToProps(dispatch) {
  return {
    storeAuth: auth => dispatch(storeAuth(auth)),
    setRegistered: data => dispatch(setRegistered(data))
  }
}

const Register = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [apiKey, setApiKey] = useState("")
  const [loader, setLoader] = useState(false)

  const setError = (name, message) => {
    var error = document.getElementById(name);
    error.innerHTML = message;

  }
  const validate = () => {
    let valid = true;

    let passRegex = new RegExp(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/g);
    let emailRegex = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g);

    if(firstName.length < 1) {
        setError("nameError", "Firstname is required")
    }

    if(lastName.length < 1) {
      setError("surnameError", "Surname is required.")
    }

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

    if(apiKey.length < 1) {
      setError("apiError", "Api Key is required.")
    }

    return valid;
  }
  const signup = (e) => {
    e.preventDefault()
    setError("nameError", "")
    setError("surnameError", "")
    setError("emailError", "")
    setError("passError", "")
    setError("showError", "")

    return validate() ? postSignup() : false

  }

  const postSignup = () => {
    let apiUrl = 'https://yr2yl0lpui.execute-api.us-east-1.amazonaws.com/dev';

    setLoader(true)
    axios.post(apiUrl + '/users/signup', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      apiKey: apiKey
    }, {
      headers: {
        'x-api-key': 'A8x8nBruJt5Obic2pzNdF3AtEzL4QOea6hN13D8A'
      }
    })
    .then(function (response) {
      props.setRegistered({
        registered: 1,
        showModal: 1
      })

      props.storeAuth({
        authenticated: true,
        guid: response.data.guid
      })


    })
    .catch(function (error) {
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
          Create Account
        </span>
          <div id="showError">

          </div>
        <div className="wrap-input100 m-b-16">
          <input className="input100" type="text" name="first_name" id="first_name" placeholder="Firstname" value={firstName} onChange={(event) => setFirstName(event.target.value) }/>
          <small className="err-msg" id="nameError"></small>
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <span className="lnr lnr-user"></span>
          </span>
        </div>
        <div className="wrap-input100 m-b-16">
          <input className="input100" type="text" name="last_name" id="last_name" placeholder="Surname" value={lastName} onChange={(event) => setLastName(event.target.value) }/>
          <small className="err-msg" id="surnameError"></small>
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <span className="lnr lnr-user"></span>
          </span>
        </div>
        <div className="wrap-input100 m-b-16">
          <input className="input100" type="text" name="email" id="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value) }/>
          <small className="err-msg" id="emailError"></small>
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <span className="lnr lnr-envelope"></span>
          </span>
        </div>
        <div className="wrap-input100 m-b-16">
          <input className="input100" type="text" name="apikey" id="apikey" placeholder="Api Key" value={apiKey} onChange={(event) => setApiKey(event.target.value) }/>
          <small className="err-msg" id="apiError"></small>
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <span className="lnr lnr-envelope"></span>
          </span>
        </div>
        <div className="wrap-input100 m-b-16">
          <input className="input100" type="password" name="pass" id="pass" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value) }/>
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
          <button className="login100-form-btn" onClick={signup}>
            Sign Up
            {loader ? (
              <span id="loaderSpinner">
                <i class="fa fa-spinner fa-spin"></i>
              </span>
            ) : null}
          </button>
        </div>
        <div className="text-center w-full p-t-50">
          <span className="txt1">
            Already have an account?
          </span>
          <Link className="txt1 bo1 hov1" to="/">
            Sign in now
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}

export default connect(null, mapDispatchToProps)(Register);
