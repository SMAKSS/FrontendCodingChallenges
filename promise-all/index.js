// Implement Promise.all() from scratch
/**
 * It accepts an array of promises
 * It returns a promise
 * It returns an array of those promises' returned value
 * It errors if any of the passed in promises fail
 */

function promiseAll(promises) {
  const results = [];
  let completedCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = result;
          completedCount++;

          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });
  });
}
