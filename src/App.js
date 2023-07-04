import Data from "./assets";
import { useState } from "react";
import Buttons from "./Buttons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "./index.css";

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
      <div>
        <button
          className="list"
          onClick={() => {
            helper2();
          }}
        >
          <h4>List of Items </h4>

          

          <main className="botharrows">
            <span className="downarrow">
              <ArrowDropDownIcon></ArrowDropDownIcon>
            </span>{" "}
            <span className="uparrow">
              <ArrowDropUpIcon></ArrowDropUpIcon>
            </span>
          </main>
          
        </button>

        <section className={List === true ? "listbox" : "listnone"}>
          {Data.map((item) => {
            return (
              <Buttons
                helper={helper}
                name={item.Name}
                id={item.id}
                price={item.Price}
                key={item.id}
                List={List}
              />
            );
          })}
        </section>
      </div>

      <main>
        <div className="biggrey">Card</div>
        <section className="container">
          <div className="shirts">{Changer.Name}</div>
          <div className="price">Price: Rs. {Changer.Price}</div>
          <div className="itemid">Item Id: {Changer.id}</div>
        </section>
      </main>
    </div>
  );
};
export default App;
