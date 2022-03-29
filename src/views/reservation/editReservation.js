import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useParams } from "react-router-dom";
import dayjs from "dayjs";

function EditReservation() {
  const { reservationId } = useParams();
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [reservation, setReservation] = useState(null);

  const [redirectTo, setRedirectTo] = useState(null);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setLoading(true);
    axios
      .get("/reservation/" + reservationId)
      .then((res) => {
        setReservation(res.data);

        setLoading(false);
      })
      .catch(() => {
        setReservation(null);
        console.log("null");
        setLoading(false);
      });
  }, [reservationId]);

  const onSubmit = (data) => {
    setSending(true);
    axios
      .patch("/reservation/" + reservation.id, data)
      .then((res) => {
        setSending(false);
        setRedirectTo(res.data.id);
      })
      .catch((err) => {
        setSending(false);
      });
  };

  if (loading) return <></>;
  if (!reservation) return <Redirect to="/reservation"></Redirect>;
  if (redirectTo)
    return <Redirect to={"/reservation/" + redirectTo}></Redirect>;

  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <div className="card-header">
            <h3>Update Reservation</h3>
          </div>
          <div className="card-body">
            <div className="mb-3 mt-5">
              <fieldset>
                <legend>Informations Personnelles</legend>
                <label htmlFor="nom" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  defaultValue={reservation.lastName}
                  {...register("lastName", { required: true })}
                />

                <label htmlFor="prenom" className="form-label">
                  Prenom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  defaultValue={reservation.firstName}
                  {...register("firstName", { required: true })}
                />
                <label htmlFor="telephone" className="form-label">
                  Telephone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telephone"
                  defaultValue={reservation.mobile}
                  {...register("mobile", { required: true })}
                />
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  defaultValue={reservation.email}
                  {...register("email", { required: true })}
                />
                {/*<label htmlFor="passport" className="form-label">
                  Passeport
                </label>
  <input type="file" className="form-control" id="passport" />*/}
              </fieldset>
              <fieldset>
                <legend>Informations Voyages</legend>
                <label htmlFor="dateDep" className="form-label">
                  Date de départ
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dateDep"
                  defaultValue={dayjs(reservation.dateDep).format("YYYY-MM-DD")}
                  {...register("dateDep", { required: true })}
                />
                <label htmlFor="datert" className="form-label">
                  Date de retour
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="datert"
                  defaultValue={dayjs(reservation.datert).format("YYYY-MM-DD")}
                  {...register("datert", { required: true })}
                />

                <p>
                  Destinations <span className="star">*</span>
                </p>
                <div className="form-check">
                  <label htmlFor="Tunisia">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="destinations"
                      id="Tunisia"
                      value="Tunisia"
                      checked={reservation.destinations === "Tunisia"}
                      {...register("destinations", { required: true })}
                    />
                    Tunisia
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="Egypt">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="destinations"
                      id="Egypt"
                      value="Egypt"
                      checked={reservation.destinations === "Egypt"}
                      {...register("destinations", { required: true })}
                    />
                    Egypt
                  </label>
                </div>
                <div className="form-check">
                  <label htmlFor="Coratia">
                    <input
                      {...register("destinations")}
                      className="form-check-input"
                      type="radio"
                      name="destinations"
                      id="Coratia"
                      value="Coratia"
                      checked={reservation.destinations === "Coratia"}
                      {...register("destinations", { required: true })}
                    />
                    Coratia
                  </label>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="card-footer">
            <div className="d-flex justify-content-end" style={{ gap: "1rem" }}>
              <button className="btn btn-primary" disabled={sending}>
                <i className="fas fa-edit me-3"></i> Update reservation
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
export default EditReservation;
