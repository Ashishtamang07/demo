function waitThreeSecond() {
  // waitthreesecond is syncronous function thats takes 3 second to run
  let ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
}
function register() {
  waitThreeSecond();
  console.log('register end');
}
function email() {
  waitThreeSecond();
  console.log('email varified');
}
function login() {
  waitThreeSecond();
  console.log('login ended');
}
function getUserData() {
  waitThreeSecond();
  console.log('get user data');
}
function displayUserData() {
  waitThreeSecond();
  console.log('user data dispalyed');
}
// syncronous process or blocking cdoe, run each code only after complication of another code
register();
email();
login();
getUserData();
displayUserData();
console.log('other application work');
