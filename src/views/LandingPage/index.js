import Carousel from "../../components/Carousel";
import Services from "../../components/Services";
import Places from "../../components/Places";
import Tours from "../../components/Tours";
import { carouselItems, places, tours } from "../../data/simpleData";

function LandingPage(props) {
  return (
    <div id="carousel-view">
      <main>
        <Carousel data={carouselItems} />
        <div className="container marketing">
          {props.popup ? (
            <div className="alert alert-danger">{props.popup}</div>
          ) : (
            <></>
          )}
          <Services />
          <Places data={places} />
          <Tours data={tours} />
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
