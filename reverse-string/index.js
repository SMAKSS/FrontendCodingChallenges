// Create a function to reverse a string

/*
    reverse('Hello, world!'); // !dlrow ,olleH
*/

function reverse(str) {
  if (!str) return "";

  return str.split().reverse().join();
}
