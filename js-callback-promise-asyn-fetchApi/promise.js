// suppose each function is a request to server which takes t, time to respond
// settimeout is a asyncronous function by itself
function register() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('register end');
      resolve();
    }, 3000);
  });
}
function email() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('email varified');
      resolve();
      // reject('fail to send email');
    }, 1000);
  });
}
function login() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('login ended');
      resolve();
    }, 1000);
  });
}
function getUserData() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('get user data');
      resolve();
    }, 1000);
  });
}
function displayUserData() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('user data dispalyed');
      resolve();
    }, 1000);
  });
}

register()
  .then(email)
  .then(login)
  .then(getUserData)
  .then(displayUserData)
  .catch((err) => {
    console.log('error:' + err); //only run if error occur in promise chaning
  });
console.log('other application work');
