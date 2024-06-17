'use strict';
// Waiting for a promise to resolve.
const posts = [
  {
    title: 'post one',
    body: 'this is post one',
  },
  {
    title: 'post two',
    body: 'this is post two',
  },
];
const getPosts = () => {
  setTimeout(() => {
    let outPut = '';
    posts.forEach((post) => {
      outPut += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = outPut;
  }, 1000);
};
const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve('testing');
      } else {
        reject('Error, something went wrong');
      }
    }, 2000);
  });
};

// createPost({ title: 'post three', body: 'this is post three' })
//   .then(getPosts)
//   .catch((error) => console.log(error));

const init = async () => {
  const message = await createPost({
    title: 'post three',
    body: 'this is post three',
  });
  console.log(message);
  getPosts();
};
await init();

// const promiseOne = Promise.resolve('Hello world');
// const promiseTwo = 10;
// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('yo');
//   }, 2000);
// });
// Promise.all([promiseOne, promiseTwo, promiseThree]).then((values) => {
//   console.log(values);
// });
