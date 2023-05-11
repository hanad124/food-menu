import "./home.scss";
import Categories from "../Categories/Categories";
import Cards from "../Cards/Cards";

const Home = () => {
  return (
    <>
      <div className="home">
          <p className="home-title">Menu That Always <br /> <span>Makes You Fall In Love</span></p>
      </div>
      <Categories />
      <div className="cards-wrapper">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  )
}

export default Home