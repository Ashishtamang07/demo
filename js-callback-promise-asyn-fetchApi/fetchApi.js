fetch('https://reqres.in/api/users', {         // fetch return promise so to resolve promise we use .then
  method: 'post',
  headers: {
    'content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'ashish',
  }),
})
  .then((res) => res.json())                          //json()also return promise
  .then((data) => console.log(data))
  .catch((err) => console.log('error'));
