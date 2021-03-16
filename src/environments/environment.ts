const host = 'https://grouper-8team-api.herokuapp.com';

export const environment = {
  production: false,
  userURLs: {
    signUp: host + '/api/User/sign-up',
    signIn: host + '/api/User/sign-in',
    userInfo: host + '/api/User/user-info',
  }
};
