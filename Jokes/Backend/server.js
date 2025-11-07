import express from "express";
const app = express();

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      setup: "Why do programmers prefer dark mode?",
      punchline: "Because light attracts bugs.",
    },
    {
      id: 2,
      setup: "Why did the developer go broke?",
      punchline: "Because he used up all his cache.",
    },
    {
      id: 3,
      setup: "What’s a JavaScript developer’s favorite type of music?",
      punchline: "Async-chronized beats.",
    },
    {
      id: 4,
      setup: "Why did the React component feel lonely?",
      punchline: "Because it didn’t get any props.",
    },
    {
      id: 5,
      setup: "How do you comfort a JavaScript bug?",
      punchline: "You console it.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
