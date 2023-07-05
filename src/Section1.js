import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Buttons from "./Buttons";

const Section1 = ({helper2,Data,helper,List}) => {
  return (
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
  )
}
export default Section1