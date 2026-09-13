import { useCallback, useState, type ChangeEvent } from "react";
import "./App.css";
import "./Styles.css";
import Row from "./Row";

function App() {
  const secretWord = "CHAIR";
  const [word, setWord] = useState("");
  // const [countWord, setCountWord] = useState(0);
  const [msg, setMsg] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [disableButton, setDisableButton] = useState(false);

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setWord(e.target.value);
    },
    [setWord],
  );

  const validateWord = () => {
    const upperWord = word.toUpperCase();
    if (word.length != 5) {
      setMsg("The word should be 5 characters.");
    } else if (words.length === 5) {
      setMsg("You already have 5 words");
    } else {
      if (words.find((w) => w === upperWord)) {
        setMsg("The word already exists");
      } else {
        setWords((prev) => [...prev, upperWord]);
        setWord("");
        if (words.length === 5) {
          setDisableButton(true);
        }
      }
    }
    const secretFound = words.find((w) => w === word);
    if (secretFound || upperWord === secretWord) {
      setMsg("You have guessed the secret word");
      setDisableButton(true);
    }
  };

  const handlOnSubmit = useCallback(() => {
    validateWord();
  }, [word, words]);

  const handleReStartGame = useCallback(() => {
    setDisableButton(false);
    setWords([]);
  }, []);

  return (
    <div className="container">
      <div className="grid">
        {words.map((word: string, index: number) => {
          return <Row key={index} word={word} secretWord={secretWord} />;
        })}
      </div>
      <div className="wordContainer">
        <input value={word} maxLength={5} onChange={handleOnChange} />
        <button disabled={disableButton} onClick={handlOnSubmit}>
          Type your word
        </button>
        <p>{msg}</p>
        <button onClick={handleReStartGame} hidden={!disableButton}>
          Restart game
        </button>
      </div>
    </div>
  );
}

export default App;
