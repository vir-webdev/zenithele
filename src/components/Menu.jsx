import React from 'react'
import { data } from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR PRODUCTS</h1>
            <p>
              Discover our range of popular electrical panel accessories, including premium cable lugs,connectors, durable switches, and efficient panel fans. Each product is selected for its quality and reliability to meet your project needs with excellence.
            </p>
          </div>
          <br/>
          <div className="dishes_container">
            {
              data[0].dishes.map(element => (
                <div className="card" key={element.id}>
                  <img src={element.image} alt={element.title} />
                  <h3>{element.title}</h3>
                  <button>{element.category}</button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu
