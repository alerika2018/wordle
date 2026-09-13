import { useEffect, useState } from "react";
import "./Styles.css";

const Cell = ({
  letter,
  secretWord,
  arrWord,
}: {
  letter: string;
  secretWord: string;
  arrWord: string[];
}) => {
  const upperLetter = letter.toUpperCase();
  const letterIsIncluded = secretWord.includes(upperLetter);
  const indexInSecretWord = secretWord
    .split("")
    .findIndex((x) => x === upperLetter);
  const indexInNewWord = arrWord.findIndex((x) => x === upperLetter);
  const [letterStyle, setLetterStyle] = useState("");

  useEffect(() => {
    if (letterIsIncluded && indexInSecretWord == indexInNewWord) {
      setLetterStyle("green");
    } else if (letterIsIncluded && indexInSecretWord != indexInNewWord) {
      setLetterStyle("yellow");
    } else {
      setLetterStyle("gray");
    }
  }, []);

  return (
    <div className={`cell ${letterStyle}`}>
      <p>{letter}</p>
    </div>
  );
};

export default Cell;
