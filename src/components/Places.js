function Place(props) {
  return (
    <div className="col-12 col-md-4 text-center">
      <div className="place">
        <img src={props.img} alt="" className="img-fluid img-responsive" />
        <div className="name-place">
          <h3>{props.title}</h3>
        </div>
      </div>
    </div>
  );
}
function Places(props) {
  // let data = []
  // if (props.data) {
  //   data = props.data
  // }
  const data = props.data ?? [];
  return (
    <div className="container my-5 overflow-hidden">
      <h2 className="text-center font-weight-bolder text-muted text-uppercase my-3">
        Most Visied Places
      </h2>
      <div className="row gx-2 gy-2">
        {data.map((e, k) => (
          <Place {...e} key={k} />
        ))}
      </div>
      {/*<a className="btn" href="/">
        See more{" "}
        </a>*/}
    </div>
  );
}
export default Places;
