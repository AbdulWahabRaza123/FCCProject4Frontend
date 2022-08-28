import React, { useState } from "react";
import { evaluate } from "mathjs";
const App = () => {
  const [num, setNum] = useState("0");
  const [check, setCheck] = useState(true);
  const calculateNum = () => {
    console.log("Expression is ", num);
    let value = evaluate(num);
    console.log("Answer is ", value);
    setNum(value);
    setCheck(false);
  };
  const dotRule = () => {
    if (num[num.length - 1] === "." || num[num.length - 2] === ".") {
    } else {
      setNum(num + ".");
    }
  };
  return (
    <>
      <div className="text-center container container-fluid box-style">
        <div className="calculator">
          <div id="display" className="container mt-5 display">
            {num}
          </div>
          <button
            onClick={() => {
              setCheck(true);
              setNum("0");
            }}
            id="clear"
          >
            C
          </button>
          <button
            onClick={() => {
              if (check === true) {
                if (num === "0") {
                  setNum("0");
                } else {
                  if (
                    num[num.length - 1] === "+" ||
                    num[num.length - 1] === "-" ||
                    num[num.length - 1] === "*" ||
                    num[num.length - 1] === "/"
                  ) {
                  } else {
                    setNum(num + "0");
                  }
                }
              } else {
                setNum("0");
                setCheck(true);
              }
            }}
            id="zero"
          >
            0
          </button>
          <button
            onClick={() => {
              if (check === true) {
                if (num === "0") {
                  setNum("1");
                } else {
                  setNum(num + "1");
                }
              } else {
                setNum("1");
                setCheck(true);
              }
            }}
            id="one"
          >
            1
          </button>
          <button
            onClick={() => {
              if (check === true) {
                if (num === "0") {
                  setNum("2");
                } else {
                  setNum(num + "2");
                }
              } else {
                setNum("2");
                setCheck(true);
              }
            }}
            id="two"
          >
            2
          </button>
          <button
            onClick={() => {
              if (check === true) {
                if (num === "0") {
                  setNum("3");
                } else {
                  setNum(num + "3");
                }
              } else {
                setNum("3");
                setCheck(true);
              }
            }}
            id="three"
          >
            3
          </button>
          <button
            onClick={() => {
              if (check === true) {
                if (num === "0") {
                  setNum("4");
                } else {
                  setNum(num + "4");
                }
              } else {
                setNum("4");
                setCheck(true);
              }
            }}
            id="four"
          >
            4
          </button>
          <button
            onClick={() => {
              if (check === true) {
                if (num === "0") {
                  setNum("5");
                } else {
                  setNum(num + "5");
                }
              } else {
                setNum("5");
                setCheck(true);
              }
            }}
            id="five"
          >
            5
          </button>
          <button
            onClick={() => {
              if (check === true) {
                if (num === "0") {
                  setNum("6");
                } else {
                  setNum(num + "6");
                }
              } else {
                setNum("6");
                setCheck(true);
              }
            }}
            id="six"
          >
            6
          </button>
          <button
            onClick={() => {
              if (check === true) {
                if (num === "0") {
                  setNum("7");
                } else {
                  setNum(num + "7");
                }
              } else {
                setNum("7");
                setCheck(true);
              }
            }}
            id="seven"
          >
            7
          </button>
          <button
            onClick={() => {
              if (check === true) {
                if (num === "0") {
                  setNum("8");
                } else {
                  setNum(num + "8");
                }
              } else {
                setNum("8");
                setCheck(true);
              }
            }}
            id="eight"
          >
            8
          </button>
          <button
            onClick={() => {
              if (check === true) {
                if (num === "0") {
                  setNum("9");
                } else {
                  setNum(num + "9");
                }
              } else {
                setNum("9");
                setCheck(true);
              }
            }}
            id="nine"
          >
            9
          </button>
          <button
            onClick={() => {
              setCheck(true);
              if (num === "0") {
                setNum("+");
              } else {
                if (num[num.length - 1] === "+") {
                } else {
                  if (
                    (num[num.length - 1] === "+" ||
                      num[num.length - 1] === "-" ||
                      num[num.length - 1] === "*" ||
                      num[num.length - 1] === "/") &&
                    (num[num.length - 2] === "+" ||
                      num[num.length - 2] === "-" ||
                      num[num.length - 2] === "*" ||
                      num[num.length - 2] === "/")
                  ) {
                    console.log("Redundant Found ", "+");
                    let sum = "";
                    for (let i = 0; i < num.length - 2; i++) {
                      sum = sum + num[i];
                    }
                    setNum(sum + "+");
                  } else if (
                    num[num.length - 1] === "-" ||
                    num[num.length - 1] === "*" ||
                    num[num.length - 1] === "/"
                  ) {
                    let sum = "";
                    for (let i = 0; i < num.length - 1; i++) {
                      sum = sum + num[i];
                    }
                    setNum(sum + "+");
                  } else {
                    setNum(num + "+");
                  }
                }
              }
            }}
            id="add"
          >
            +
          </button>
          <button
            onClick={() => {
              setCheck(true);
              if (num === "0") {
                setNum("-");
              } else {
                if (
                  num[num.length - 1] === "-" &&
                  num[num.length - 2] === "-"
                ) {
                } else {
                  if (
                    (num[num.length - 1] === "+" ||
                      num[num.length - 1] === "-" ||
                      num[num.length - 1] === "*" ||
                      num[num.length - 1] === "/") &&
                    (num[num.length - 2] === "+" ||
                      num[num.length - 2] === "-" ||
                      num[num.length - 2] === "*" ||
                      num[num.length - 2] === "/")
                  ) {
                    console.log("Redundant Found ", "-");
                    let sum = "";
                    for (let i = 0; i < num.length - 2; i++) {
                      sum = sum + num[i];
                    }
                    setNum(sum + "-");
                  } else {
                    setNum(num + "-");
                  }
                }
              }
            }}
            id="subtract"
          >
            -
          </button>
          <button
            onClick={() => {
              setCheck(true);
              if (num === "0") {
                setNum("*");
              } else {
                if (num[num.length - 1] === "*") {
                } else {
                  if (
                    (num[num.length - 1] === "+" ||
                      num[num.length - 1] === "-" ||
                      num[num.length - 1] === "*" ||
                      num[num.length - 1] === "/") &&
                    (num[num.length - 2] === "+" ||
                      num[num.length - 2] === "-" ||
                      num[num.length - 2] === "*" ||
                      num[num.length - 2] === "/")
                  ) {
                    console.log("Redundant Found ", "*");
                    let sum = "";
                    for (let i = 0; i < num.length - 2; i++) {
                      sum = sum + num[i];
                    }
                    setNum(sum + "*");
                  } else if (
                    num[num.length - 1] === "+" ||
                    num[num.length - 1] === "-" ||
                    num[num.length - 1] === "/"
                  ) {
                    let sum = "";
                    for (let i = 0; i < num.length - 1; i++) {
                      sum = sum + num[i];
                    }
                    setNum(sum + "*");
                  } else {
                    setNum(num + "*");
                  }
                }
              }
            }}
            id="multiply"
          >
            *
          </button>
          <button
            onClick={() => {
              setCheck(true);
              if (num === "0") {
                setNum("/");
              } else {
                if (num[num.length - 1] === "/") {
                } else {
                  if (
                    (num[num.length - 1] === "+" ||
                      num[num.length - 1] === "-" ||
                      num[num.length - 1] === "*" ||
                      num[num.length - 1] === "/") &&
                    (num[num.length - 2] === "+" ||
                      num[num.length - 2] === "-" ||
                      num[num.length - 2] === "*" ||
                      num[num.length - 2] === "/")
                  ) {
                    console.log("Redundant Found ", "/");
                    let sum = "";
                    for (let i = 0; i < num.length - 2; i++) {
                      sum = sum + num[i];
                    }
                    setNum(sum + "/");
                  } else if (
                    num[num.length - 1] === "+" ||
                    num[num.length - 1] === "-" ||
                    num[num.length - 1] === "*"
                  ) {
                    let sum = "";
                    for (let i = 0; i < num.length - 1; i++) {
                      sum = sum + num[i];
                    }
                    setNum(sum + "/");
                  } else {
                    setNum(num + "/");
                  }
                }
              }
            }}
            id="divide"
          >
            /
          </button>
          <button onClick={dotRule} id="decimal">
            .
          </button>
          <button onClick={calculateNum} id="equals">
            =
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
