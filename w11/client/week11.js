import makeRequest from './authHelper.js';
import Auth from './auth.js';

makeRequest('login', 'POST', {
  password: 'user1',
  email: 'user1@email.com'
});

const auth = new Auth();

const submitBTN = document.getElementById('submit-btn');
submitBTN.addEventListener('submit', (e) => {
  e.preventDefault();

  auth.login();
});