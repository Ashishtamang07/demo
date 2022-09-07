// suppose each function is a request to server which takes t, time to respond
// settimeout is a asyncronous function by itself
function register(callback) {
  setTimeout(() => {
    console.log('register end');
    callback(); //we call callback function after our task is complete
  }, 3000);
}
function email(callback) {
  setTimeout(() => {
    console.log('email varified');
    callback();
  }, 1000);
}
function login(callback) {
  setTimeout(() => {
    console.log('login ended');
    callback();
  }, 1000);
}
function getUserData(callback) {
  setTimeout(() => {
    console.log('get user data');
    callback();
  }, 1000);
}
function displayUserData(callback) {
  setTimeout(() => {
    console.log('user data dispalyed');
    // callback();
  }, 1000);
}
// exceution runs asyncronously or non-blocking, doesnt wait for another line of code to finish
//   but we want to excute each function only after another function is completed excuting like syncrously but dont want blocking.
// to achive this we have callback which looks like syncronous process but doesnt block whole exceution.
register(function () {
  email(function () {
    login(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });
});
console.log('other application work');
