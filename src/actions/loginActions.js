import axios from 'axios';

export const saveFacebookLogin = user => {
  const url = 'http://localhost:4301/person';
  return axios.post(url, user).then(response => {
    console.warn(response);
    return true;
  }).catch(err => {
    console.warn(err);
    return false;
  });
};
