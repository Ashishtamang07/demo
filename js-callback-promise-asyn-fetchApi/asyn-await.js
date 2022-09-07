// suppose each function is a request to server which takes t, time to respond
// settimeout is a asyncronous function by itself
function register() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('register end');
      resolve('register');
    }, 3000);
  });
}
function email() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('email varified');
      resolve();
      //   reject('fail to send email');
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

//asyc function return promise by defult
async function validate() {
  try {
    const message = await register();
    await email();
    await login();
    await getUserData();
    await displayUserData();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
  //   console.log(message);
}
validate().then(() => {
  console.log('all set');
});

console.log('other application work');
