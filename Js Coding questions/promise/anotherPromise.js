let userLeft = true;
let userWatching = false;

function promise_tutorial() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "user left",
        message: ":(",
      });
    } else if (userWatching) {
      reject({
        name: "watching video",
        message: "subscribe",
      });
    } else {
      resolve("resolve successfull");
    }
  });
}

promise_tutorial()
  .then((msg) => {
    console.log("Success " + msg);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
