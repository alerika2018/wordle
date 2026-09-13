import Cell from "./Cell";
import "./Styles.css";

const Row = ({ word, secretWord }: { word: string; secretWord: string }) => {
  const arrWord = word.split("");
  return (
    <div className="row">
      {arrWord.map((c: string, index: number) => {
        return (
          <Cell
            key={index}
            letter={c}
            secretWord={secretWord}
            arrWord={arrWord}
          />
        );
      })}
    </div>
  );
};

export default Row;
