import "./categories.scss"
import "../Cards/cards.scss"
import { FiArrowRight } from "react-icons/fi";
import { useState, useEffect, useContext } from "react"
import data from "../../data";

const Categories = () => {
  const [tab, setTab] = useState("all");
  const [activeAll, setActiveAll] = useState(false);
  const [activeBurger, setActiveBurger] = useState(false);
  const [activeBreakfast, setActiveBreakfast] = useState(false);
  const [activeLunch, setActiveLunch] = useState(false);
  const [activeDinner, setActiveDinner] = useState(false);
  const [activeDrinks, setActiveDrinks] = useState(false);

  useEffect(() => {
    setActiveAll(true)
  },[])

  return (
    <>
    <div className="categories">
        <div className="categories_container">
            <div className={`all category ${activeAll ? "active" : ""} `} onClick={() => {
              setActiveAll(true)
              setActiveBreakfast(false)
              setActiveBurger(false)
              setActiveLunch(false)
              setActiveDinner(false)
              setActiveDrinks(false)
              setTab("all");
            }}>All</div>
            <div className={`all category ${activeBurger ? "active" : ""} `} onClick={() => {
              setActiveAll(false)
              setActiveBurger(true)
              setActiveBreakfast(false)
              setActiveLunch(false)
              setActiveDinner(false)
              setActiveDrinks(false)
              setTab("burger");
            }}>Burger</div>
            <div  className={`all category ${activeBreakfast ? "active" : ""} `} onClick={() => {
              setActiveAll(false)
              setActiveBurger(false)
              setActiveBreakfast(true)
              setActiveLunch(false)
              setActiveDinner(false)
              setActiveDrinks(false)
              setTab("breakfast");
            }}>Breakfast</  div>
            <div  className={`all category ${activeLunch ? "active" : ""} `} onClick={() => {
              setActiveAll(false)
              setActiveBurger(false)
              setActiveBreakfast(false)
              setActiveLunch(true)
              setActiveDinner(false)
              setActiveDrinks(false)
              setTab("lunch");
            }}>Lunch</div>
            <div  className={`all category ${activeDinner ? "active" : ""} `} onClick={() => {
              setActiveAll(false)
              setActiveBurger(false)
              setActiveBreakfast(false)
              setActiveLunch(false)
              setActiveDinner(true)
              setActiveDrinks(false)
              setTab("dinner");
            }}>Dinner</div>
            <div className={`all category ${activeDrinks ? "active" : ""} `} onClick={() => {
              setActiveAll(false)
              setActiveBurger(false)
              setActiveBreakfast(false)
              setActiveLunch(false)
              setActiveDinner(false)
              setActiveDrinks(true)
              setTab("drinks");
            }}>Drinks</div>
        </div>
    </div>
                   <div className="cards">
        <div className="cards_container">
    {
        // useEffect(() =>{
          data.map((element) => {
            if ( tab.toLowerCase() === (element.category).toLowerCase()) {
              return (
            <div className="card">
                <div className="card_overley"></div>
                <img src= {element.image} />
                <div className="card_contacts">
                    <div className="card_title">{element.name}</div>
                    <div className="card_desc">{element.description}</div>
                    <div className="ordernow">
                        <p>order now</p>
                        <FiArrowRight/>
                    </div>
                </div>
            </div>
              )
            }
            else if (tab.toLowerCase() === "all"){
              return (
                <div className="card">
                <div className="card_overley"></div>
                <img src= {element.image} />
                <div className="card_contacts">
                    <div className="card_title">{element.name}</div>
                    <div className="card_desc">{element.description}</div>
                    <div className="ordernow">
                        <p>order now</p>
                        <FiArrowRight/>
                    </div>
                </div>
            </div>
              )
            }
          })
        // },[tab])
        
    }
        </div>
    </div>


    </>
  )
}

export default Categories