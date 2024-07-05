import "./App.css";
import { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

function App() {
  const [calculater, setCalculater] = useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "+",
    "-",
    "x",
    "/",
  ]);
  const [itemValue, setItemValue] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target.dataset.id);
    let event = e.target.dataset.id;

    setItemValue((prevItem) => {
      return prevItem + event;
    });
  };
  const handleSubmit = () => {
    let copyItem = [...itemValue];
    let N = copyItem.length;
    let result = 0;
    let A = "";
    let B = "";
    let C = "";
    for (let i = 0; i < N; i++) {
      let x = copyItem[i];
      let p1 = 0;
      let p2 = 0;
      while (x === "+" || x === "-" || x === "x" || x === "/") {
        p2 = i;
        while (p1 < p2) {
          A = A + copyItem[p1];
          p1++;
          console.log(A);
        }
        B = x;
      }
    }
    let a = copyItem[0];

    let b = copyItem[1];

    let c = copyItem[2];

    if (b === "+") {
      result = +a + +c;
    } else if (b === "-") {
      result = a - c;
    } else if (b === "x") {
      result = a * c;
    } else {
      result = a / c;
    }
    setItemValue(result);
  };
  const handleReset = () => {
    setItemValue("");
  };
  const handleEdit = (item) => {
    setItemValue((prevItem) => {
      //console.log(prevItem.length);
      prevItem = [...prevItem];
      prevItem.pop();
      setItemValue(prevItem);
    });
  };

  return (
    <div className="App">
      <div className="calculater-wraper">
        <input type="text" placeholder="00000000000000" value={itemValue} />

        {calculater.map((item) => (
          <div
            className="calculater-item"
            data-id={item}
            onClick={handleChange}
          >
            {item}
          </div>
        ))}
        <button onClick={handleSubmit}> = </button>
        <button onClick={handleReset}> C</button>
        <button onClick={handleEdit} value={itemValue}>
          <RiDeleteBack2Fill />
        </button>
      </div>
    </div>
  );
}

export default App;
