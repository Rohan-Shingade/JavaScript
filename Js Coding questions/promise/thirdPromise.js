const recordVideo1 = new Promise ((resolve, reject) => {
  resolve('video 1 recorded')
})

const recordVideo2 = new Promise ((resolve, reject) => {
  resolve('video 2 recorded')
})

const recordVideo3 = new Promise ((resolve, reject) => {
  resolve('video 3 recorded')
})

// Promise.all([
//   recordVideo1,
//   recordVideo2,
//   recordVideo3,
// ]).then((msg) => {
//   console.log(msg)
// })

Promise.race([
  recordVideo1,
  recordVideo2,
  recordVideo3,
]).then((msg) => {
  console.log(msg)
})