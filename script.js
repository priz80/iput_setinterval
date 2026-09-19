const input = document.getElementById("textInput");
const output = document.getElementById("output");

let timeoutId = null;

input.addEventListener("input", (event) => {
  const value = event.target.value;

  
  clearTimeout(timeoutId);


  timeoutId = setTimeout(() => {
    output.textContent = value;
  }, 300);
});
