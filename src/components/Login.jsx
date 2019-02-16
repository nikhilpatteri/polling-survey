import React from 'react';
import FacebookLogin from 'react-facebook-login';

export const Login = () => {
  const responseFacebook = (response) => {
    console.log(response);
  }
  return (<div className="row" style={{paddingTop: '70px'}}>
    <div className="col col-lg-4 offset-lg-4 col-sm-12 login-box">
      <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" placeholder="Enter Username" autoComplete="false" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Password" autoComplete="false" />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary">Login</button>
      </div>
      <div className="form-group d-flex justify-content-center">OR</div>
      <div className="form-group">
        <FacebookLogin
          appId="632625573863658" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="form-control"
        />
      </div>
      <div className="form-group d-flex justify-content-center">OR</div>
      <div className="form-group">
        <button className="form-control btn" disabled>Sign in with Google</button>
      </div>
    </div>
  </div>)
}
