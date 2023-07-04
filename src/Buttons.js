const Buttons = ({ helper, id, price, name,List }) => {
  return (
    <main className="buttonclass">
      <button
        onClick={() => {
          helper(name, id, price);
        }}
        className= {name==="Trouser 4"?"bottombordernone fullwidth":"fullwidth"}
      >
        
        <h4>
          {name}  
        </h4>
      </button>
    </main>
  );
};
export default Buttons;
