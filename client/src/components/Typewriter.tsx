import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  delay: number;
}

function Typewriter({ texts, delay }: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex < texts.length) {
      timeout = setTimeout(() => {
        const newText = texts[currentIndex].slice(0, currentText.length + 1);
        setCurrentText(newText);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, delay, texts]);

  useEffect(() => {
    if (currentText.length === texts[currentIndex].length) {
      setTimeout(() => {
        if (currentIndex === texts.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
        setCurrentText("");
      }, delay);
    }
  }, [currentText, currentIndex, delay, texts]);

  return <span key={`${currentText}-${currentIndex}`}>{currentText}</span>;
}

export default Typewriter;
