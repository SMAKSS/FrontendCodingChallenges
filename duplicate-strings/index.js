// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */

function removeDuplicates(str) {
  if (!str) return "";

  const strArr = str.split(" ");
  const uniqueItems = new Set(strArr);

  return Array.from(uniqueItems).join(" ");
}
