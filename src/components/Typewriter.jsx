import React, { useState, useEffect } from "react";

const phrases = [
  "Building intelligent systems",
  "Engineering clean, scalable code",
  "Creating full-stack AI applications",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 40 : 80;

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentPhrase.slice(0, charIndex - 1)
        : currentPhrase.slice(0, charIndex + 1);
      setText(updatedText);
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCharIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <span style={{ whiteSpace: "pre" }}>
      {text}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default Typewriter;
