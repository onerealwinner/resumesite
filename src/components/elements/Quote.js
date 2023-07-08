import React from "react";

const quotes = [
  "'Wisdom is not a product of schooling but of the lifelong attempt to acquire it.' — Albert Einstein",
  "'If you think education is expensive, try estimating the cost of ignorance.' — Howard Gardner",
  "'If you learn from defeat, you haven't really lost.' — Zig Ziglar",
  "'It is what we know already that often prevents us from learning.' — Claude Bernard",
  "'The best thing a human being can do is to help another human being know more.' — Charlie Munger",
  "'Education is learning what you didn't even know you didn't know.' — Daniel Boorstin",
  "'Formal education will make you a living. Self-education will make you a fortune.' — Jim Rohn",
  "'The more that you read, the more things you will know, the more that you learn, the more places you'll go.' — Dr. Seuss",
  "'Don't let schooling interfere with your education' - Mark Twain",
  "'If it is too hard, you are probably doing it wrong' - Dan Mudge",
];

const getQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function Quote() {
  return <>{getQuote()}</>;
}

export default Quote;
