
// async and await : only async functions can utilize the await keyword. it's used to call an async function and then wait for it to resolve or reject the request.

function person() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Mom went out earlier');
    }, 100);
  });
}

function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('to buy some apples');
    }, 400);
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('in walmart');
    }, 600);
  });
}

async function final() {
  const a = await person();
  const b = await what();
  const c = await where();

 console.log(a)
 console.log(b)
 console.log(c)
}

final();

