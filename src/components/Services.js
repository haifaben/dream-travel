//import '../assets/services.css';

function Sevices() {
  return (
    <>
      <div className="container my-5">
        <h2 className="text-center font-weight-bolder text-muted text-uppercase my-3">
          {" "}
          Our best services
        </h2>
        <div className="row">
          <div className="col-12 col-md-4 text-center service">
            <i className="far fa-address-card"></i>
            <h3>Professional Tour Guides</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              hic quas illo ab, possimus neque!
            </p>
          </div>
          <div className="col-12 col-md-4 text-center service">
            <i className="far fa-thumbs-up"></i>
            <h3>Customer satisfaction</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              hic quas illo ab, possimus neque!
            </p>
          </div>

          <div className="col-12 col-md-4 text-center service">
            <i className="fas fa-credit-card"></i>
            <h3>Secure payment</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              hic quas illo ab, possimus neque!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sevices;
