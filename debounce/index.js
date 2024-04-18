// Implement debounce

function debounce(fn, time) {
  if (!fn || !time) return null;

  let setTimeoutId = null;

  return function () {
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }

    setTimeoutId = setTimeout(() => {
      fn.apply(this);

      setTimeoutId = null;
    }, time);
  };
}
