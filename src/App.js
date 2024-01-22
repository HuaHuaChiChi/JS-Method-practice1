import "./App.css";
import React, { useState } from "react";

function App() {
  const initialArray = ["apple", "banana", "cherry", "date", "elderberry"];

  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState(""); //useState 함수(훅)를 실행 시켰다.
  const [query, setQuery] = useState("");

  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit) {
      tempResult += `${fruit}, `;
    });
    setResult(tempResult.slice(0, -2));
  };
  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      // 얘를 필터링을 할지 말지를 결정한다.
      if (fruit.includes(query)) {
        return true;
      } else {
        return false; // 여기서 결정한다.
      }
    });
    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    const mappedList = array.map((fruit) => {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  };

  const handleReduce = () => {
    const reduceList = array.reduce((acc, cur) => {
      return `${acc}, ${cur}`;
    });
    setResult(reduceList);
  };

  const handlePush = () => {
    if (!query) {
      alert("없다");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = () => {
    const popArray = [...array];
    popArray.pop();
    setArray(popArray);
    setResult(popArray.join(", "));
  };

  const handleSlice = () => {
    const sliceArray = [...array];
    const slicedList = sliceArray.slice(1, 4);
    setResult(slicedList.join(", "));
  };

  const handleSplice = () => {
    const spliceArray = [...array];
    spliceArray.splice(2, 2, "kiwi", "lame");
    setArray(spliceArray);
    setResult(spliceArray.join(", "));
  };

  const handleIndexOf = () => {
    const index = array.indexOf(query);
    setResult(index);
  };

  const handleIncludes = () => {
    const included = array.includes(query);
    setResult(included.toString());
  };

  const handleFind = () => {
    const find = array.find((fruit) => fruit === query);
    setResult(find ? find : "Not found");
  };

  //중괄호가 들어가면 꼭 리턴문이 들어가야한다.
  const handleSome = () => {
    const findSome = array.some((fruit) => {
      return fruit === query;
    });
    setResult(findSome.toString());
  };

  //없으면 생략 가능
  const handleEvery = () => {
    const everyArray = array.every((fruit) => fruit.length > 5);
    setResult(everyArray.toString());
  };

  function handleSort() {
    const sortedArrays = [...array]; //불변성을 지켜오며 가져오기
    const sortedArray = sortedArrays.sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      if (a === b) return 0;
    });
    setResult(sortedArray.join(", "));
  }

  function handleJoin() {
    const newArray = [...array];
    const joinArray = newArray.join("--");
    setResult(joinArray);
  }

  return (
    <div className="wrap">
      <h1>Array API Practice</h1>
      {/* <button onClick={window.location.reload()}>reset</button> */}
      <div>
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>Map</button>
        <button onClick={handleReduce}>Reduce</button>
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexof</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <strong>원본 배열</strong> : {array.join(", ")}
      </div>
      <div>
        <strong>결과물</strong> : {result}
      </div>
    </div>
  );
}

export default App;
