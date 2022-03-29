import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useParams } from "react-router-dom";
import dayjs from "dayjs";

function EditTraveller() {
  const { travellerUsername } = useParams();
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [traveller, setTravellers] = useState(null);
  const [redirectTo, setRedirectTo] = useState(null);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setLoading(true);
    axios
      .get("/traveller/" + travellerUsername)
      .then((res) => {
        setTravellers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setTravellers(null);
        console.log("erreur ici edit traveler");
        setLoading(false);
      });
  }, [travellerUsername]);

  const onSubmit = (data) => {
    setSending(true);
    axios
      .patch("/traveller/" + traveller.id, data)
      .then((res) => {
        setSending(false);
        setRedirectTo(res.data.username);
      })
      .catch((err) => {
        setSending(false);
      });
  };

  if (loading) return <></>;
  if (!traveller) return <Redirect to="/dashboard"></Redirect>;
  if (redirectTo) return <Redirect to={"/dashboard/" + redirectTo}></Redirect>;

  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <div className="card-header">
            <h3>Update {travellerUsername}</h3>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="traveller-username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="traveller-username"
                placeholder="@username"
                defaultValue={traveller.username}
                {...register("username", { required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="traveller-first-name" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="traveller-first-name"
                placeholder="Mohamed"
                defaultValue={traveller.firstName}
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="traveller-last-name" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="traveller-last-name"
                defaultValue={traveller.lastName}
                placeholder="Trabelsi"
                {...register("lastName", { required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="traveller-email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="traveller-email"
                defaultValue={traveller.email}
                placeholder="name@example.com"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="traveller-birth-day" className="form-label">
                Birth day
              </label>
              <input
                type="date"
                className="form-control"
                id="traveller-birth-day"
                defaultValue={dayjs(traveller.birthDay).format("YYYY-MM-DD")}
                {...register("birthDay", { required: true })}
              />
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-end" style={{ gap: "1rem" }}>
              <button className="btn btn-primary" disabled={sending}>
                <i className="fas fa-edit me-3"></i> Update traveller
              </button>
              <button
                className="btn btn-danger"
                type="reset"
                disabled={sending}
              >
                <i className="fas fa-times me-3"></i> Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default EditTraveller;
