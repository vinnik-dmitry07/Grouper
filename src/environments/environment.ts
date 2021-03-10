const host = 'https://grouper-8team-api.herokuapp.com';

export const environment = {
  production: false,
  user: {
    signupURL: host + '/api/User/sign-up',
    signinURL: host + '/api/User/sign-in',
  }
};
