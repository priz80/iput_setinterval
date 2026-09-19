const input = document.getElementById("textInput");
const output = document.getElementById("output");

let timeoutId = null;

input.addEventListener("input", (event) => {
  const value = event.target.value;

  // сбрасываем предыдущий отложенный вызов, если пользователь ещё печатает
  clearTimeout(timeoutId);

  // запускаем новый отложенный вызов
  timeoutId = setTimeout(() => {
    output.textContent = value;
  }, 300);
});
