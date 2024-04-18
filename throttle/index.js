// Implement throttle

function throttle(fn, time) {
  if (!fn || !time) return null;

  let setTimeoutId = null;

  return function () {
    if (setTimeoutId) {
      return null;
    }

    setTimeoutId = setTimeout(() => {
      fn.apply(this);

      setTimeoutId = null;
    }, time);
  };
}
