function CarouselItem(props) {
  // let carouselClass
  // if (props.isFirst) {
  //   carouselClass = ' active'
  // }else{
  //   carouselClass = ''
  // }
  const carouselClass = props.isFirst ? " active" : "";
  return (
    <div className={`carousel-item${carouselClass}`}>
      <img
        className="bd-placeholder-img"
        width="100%"
        height="100%"
        src={props.image}
        alt={props.title}
      />

      <div className="container">
        <div className={`carousel-caption text-${props.position}`}>
          <h1>{props.title}</h1>
          <p>{props.paragraph}</p>
          <p>
            <a className="btn btn-lg btn-primary" href="/">
              {props.button}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function Carousel(props) {
  // let data = []
  // if (props.data) {
  //   data = props.data
  // }
  const data = props.data ?? [];

  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {data.map((e, k) => (
          <button
            key={k}
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={k}
            className={k === 0 ? "active" : ""}
            aria-current={k === 0 ? "true" : "false"}
            aria-label={e.name}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {data.map((e, k) => (
          <CarouselItem {...e} isFirst={k === 0} key={k} />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
