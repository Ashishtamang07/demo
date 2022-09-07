// suppose each function is a request to server which takes t, time to respond
// settimeout is a asyncronous function by itself
function register() {
  setTimeout(() => {
    console.log('register end');
  }, 3000);
}
function email() {
  setTimeout(() => {
    console.log('email varified');
  }, 1000);
}
function login() {
  setTimeout(() => {
    console.log('login ended');
  }, 1000);
}
function getUserData() {
  setTimeout(() => {
    console.log('get user data');
  }, 1000);
}
function displayUserData() {
  setTimeout(() => {
    console.log('user data dispalyed');
  }, 1000);
}
// exceution runs asyncronously, doesnt wait for another line of code to finish
register();
email();
login();
getUserData();
displayUserData();
console.log('other application work');
