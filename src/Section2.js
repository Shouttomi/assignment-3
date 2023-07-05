const Section2 = ({Changer}) => {
  return (
    <main>
        <div className="biggrey">Card</div>
        <section className="container">
          <div className="shirts">{Changer.Name}</div>
          <div className="price">Price: Rs. {Changer.Price}</div>
          <div className="itemid">Item Id: {Changer.id}</div>
        </section>
      </main>
  )
}
export default Section2