const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "C") {
      input.value = ""; // clear
    } else if (value === "=") {
      if (input.value.trim() === "") {
        input.value = "";
        return;
      }
      try {
        const result = eval(input.value);
        if (result !== undefined) {
          input.value = result;
        }
      } catch {
        // Instead of showing native Error function, just clear
        input.value = "";
      }
    } else {
      input.value += value;
    }
  });
});
