const messages = [
  {
    text: "First!",
    user: "ckyzo",
    added: new Date(),
  },
  {
    text: "Second?!",
    user: "chanpan",
    added: new Date(),
  },
];

function postMessage(text, username) {
  messages.push({ text: text, user: username, added: new Date() });
}

export { messages, postMessage };
