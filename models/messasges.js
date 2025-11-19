const getCurrentUTCDateTime = () => {
  return new Date().toISOString();
};

const messages = [
  {
    text: "Last year",
    user: "ckyzo",
    added: "2024-07-01T23:42:13.787Z",
  },
  {
    text: "Last month",
    user: "chanpan",
    added: "2025-10-01T11:02:53.787Z",
  },
  {
    text: "Yesterday",
    user: "ninajirachi",
    added: "2025-11-18T23:42:13.787Z",
  },
  {
    text: "An hour ago",
    user: "fike",
    added: "2025-11-19T22:42:13.787Z",
  },
  {
    text: "Just then",
    user: "garchomp",
    added: getCurrentUTCDateTime(),
  },
];

function postMessage(text, username) {
  messages.push({ text: text, user: username, added: getCurrentUTCDateTime() });
}

export { messages, postMessage };
