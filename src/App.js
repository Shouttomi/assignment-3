import Data from "./assets";
import { useState } from "react";
import "./index.css";
import Section1 from "./Section1";
import Section2 from "./Section2";

const App = () => {
  const [Changer, setChanger] = useState(Data[2]);
  const [List, setList] = useState(true);

  function helper(Name, id, Price) {
    setChanger({ id, Name, Price });
  }

  function helper2() {
    List === true ? setList(false) : setList(true);
  }

  return (
    <div className="flex1">
      <Section1 helper2={helper2} Data={Data} helper={helper} List={List} />

      <Section2 Changer={Changer} />
    </div>
  );
};
export default App;
