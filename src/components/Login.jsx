import React from 'react';
import { withRouter } from 'react-router-dom';
// import FacebookLogin from 'react-facebook-login';

export const Login = withRouter(({ history }) => {
  const gotoQuestions = () => {
    history.push('/questions');
  };
  // const responseFacebook = (response) => {
  //   console.log(response);

  // }

  return (
    <div className="row" style={{ paddingTop: '70px' }}>
      <div className="col col-lg-4 offset-lg-4 col-sm-12 login-box">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" className="form-control" placeholder="Enter Username" autoComplete="false" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className="form-control" placeholder="Password" autoComplete="false" />
        </div>
        <div className="form-group">
          <button type="button" className="form-control btn btn-primary" onClick={gotoQuestions}>Login</button>
        </div>
        <div className="form-group d-flex justify-content-center">OR</div>
        <div className="form-group">
          {/* <FacebookLogin
          appId="632625573863658" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="form-control"
        /> */}
        </div>
        <div className="form-group d-flex justify-content-center">OR</div>
        <div className="form-group">
          <button type="button" className="form-control btn" disabled>Sign in with Google</button>
        </div>
      </div>
    </div>
  );
});
