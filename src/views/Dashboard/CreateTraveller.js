import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

function CreateTraveller(props) {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [travellerUsername, setTravellerUsername] = useState(null);

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post("/traveller", data)
      .then((res) => {
        setLoading(false);
        setTravellerUsername(res.data.username);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  if (travellerUsername)
    return <Redirect to={"/dashboard/" + travellerUsername} />;

  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <div className="card-header">
            <h3>Create new Traveller</h3>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="travelller-first-name" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="travelller-first-name"
                placeholder="Mohamed"
                {...register("firstName")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="travelller-last-name" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="travelller-last-name"
                placeholder="Trabelsi"
                {...register("lastName")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="travelller-email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="travelller-email"
                placeholder="name@example.com"
                {...register("email")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="travelller-birth-day" className="form-label">
                Birth day
              </label>
              <input
                type="date"
                className="form-control"
                id="travelller-birth-day"
                {...register("birthDay")}
              />
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-end" style={{ gap: "1rem" }}>
              <button className="btn btn-primary" disabled={loading}>
                <i className="fas fa-plus me-3"></i> Add new travelller
              </button>
              <button className="btn btn-danger" type="reset">
                <i className="fas fa-times me-3"></i> Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTraveller;
