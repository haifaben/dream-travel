/*import { tours } from "../data/simpleData"*/

function Tour(props) {
  /*{`carousel-item${carouselClass}`}*/
  return (
    <div className={`${props.nbtour}`}>
      <img src={props.img} alt="" />
      <div className="info-tour">
        <h3>{props.title}</h3>
        <p>From {props.price}</p>
      </div>
    </div>
  );
}
function Tours(props) {
  // let data = []
  // if (props.data) {
  //   data = props.data
  // }
  const data = props.data ?? [];
  return (
    <>
      <div>
        <h2 className="text-center font-weight-bolder text-muted text-uppercase my-3">
          Best Tours
        </h2>
        <div className="tours">
          {data.map((e, k) => (
            <Tour {...e} key={k} />
          ))}
        </div>
        {/*<a className="btn" href="/">
          See more{" "}
          </a>*/}
      </div>
    </>
  );
}

export default Tours;
