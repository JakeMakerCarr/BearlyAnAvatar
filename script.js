const greetings = [
  "Hi! I love cozy naps.",
  "Do you want to play today?",
  "I could use a honey snack.",
  "Let's go on a tiny adventure!",
  "I am feeling super snuggly.",
];

const bubble = document.querySelector("#bubble");
const button = document.querySelector("#greet");

let greetingIndex = 0;

const showGreeting = () => {
  if (!bubble) {
    return;
  }

  greetingIndex = (greetingIndex + 1) % greetings.length;
  bubble.textContent = greetings[greetingIndex];
  bubble.classList.add("show");

  window.setTimeout(() => {
    bubble.classList.remove("show");
  }, 2500);
};

if (button) {
  button.addEventListener("click", showGreeting);
}
