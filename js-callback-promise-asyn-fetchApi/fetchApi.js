fetch('https://reqres.in/api/users', {
  method: 'post',
  headers: {
    'content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'ashish',
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log('error'));
