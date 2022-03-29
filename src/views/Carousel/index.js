import img1 from "../../assets/imgs/01.jpg";
import img2 from "../../assets/imgs/02.jpg";
import img3 from "../../assets/imgs/03.jpg";
import img4 from "../../assets/imgs/04.jpg";

import { useCarouselHook } from "../../customHooks/useCarouselHook";

/*const data = [
  "https://picsum.photos/id/237/700/500",
  "https://picsum.photos/id/238/700/500",
  "https://picsum.photos/id/239/700/500",
  "https://picsum.photos/id/240/700/500",
];*/
const data = [img1, img2, img3, img4];

function Carousel() {
  const [selected, next, prev] = useCarouselHook(data, 5000);

  return (
    <div className="custom-carousel">
      <button className="carousel-prev" onClick={prev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="carousel-next" onClick={next}>
        <i className="fas fa-chevron-right"></i>
      </button>

      {data.map((e, k) => (
        <div
          key={k}
          className={`carousel-item${selected === k ? " active" : ""}`}
        >
          <img src={e} alt={"carousel-" + k} />
        </div>
      ))}
      <div className="Slogan">
        <h1>Dream Travel</h1>
        <h3>Around The World</h3>
      </div>
    </div>
  );
}

export default Carousel;
