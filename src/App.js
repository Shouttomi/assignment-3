import Data from "./assets";
import { useState } from "react";
import Buttons from "./Buttons";
import "./index.css";

/* const Data = [
  { id: 1, Name: "Shirt 1", Price: 100 },
  { id: 2, Name: "Shirt 2", Price: 120 },
  { id: 3, Name: "Shirt 3", Price: 150 },
  { id: 4, Name: "Shirt 4", Price: 160 },
  { id: 5, Name: "Shirt 5", Price: 170 },
  { id: 6, Name: "Shirt 6", Price: 180 },
  { id: 7, Name: "Trouser 1", Price: 170 },
  { id: 8, Name: "Trouser 2", Price: 190 },
  { id: 9, Name: "Trouser 3", Price: 200 },
  { id: 10, Name: "Trouser 4", Price: 270 },
]; */

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
          <h4>List of Items</h4>
        </button>

        <section className={List===true?"listbox":"listnone"}>
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
