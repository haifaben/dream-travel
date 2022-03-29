import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

function CreateResevation() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const [resrvationstate, setresrvationstate] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post("/reservation", data)
      .then((res) => {
        setLoading(false);

        setresrvationstate(true);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  //if (studentUsername) return <Redirect to={'/dashboard/' + studentUsername} />
  if (resrvationstate) return <Redirect to={"/reservation"} />;
  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3 mt-5">
          <fieldset>
            <legend>Informations Personnelles</legend>
            <label for="nom" class="form-label">
              Nom
            </label>
            <input
              type="text"
              class="form-control"
              id="nom"
              {...register("lastName")}
            />
            <label for="prenom" class="form-label">
              Prenom
            </label>
            <input
              type="text"
              class="form-control"
              id="prenom"
              {...register("firstName")}
            />
            <label for="telephone" class="form-label">
              Telephone
            </label>
            <input
              type="text"
              class="form-control"
              id="telephone"
              {...register("mobile")}
            />
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              {...register("email")}
            />
            {/*<label for="passport" class="form-label">
              Passeport
            </label>
  <input type="file" class="form-control" id="passport" />*/}
          </fieldset>
          <fieldset>
            <legend>Informations Voyages</legend>
            <label for="datedep" class="form-label">
              Date de départ
            </label>
            <input
              type="date"
              class="form-control"
              id="datedep"
              {...register("dateDep")}
            />
            <label for="datert" class="form-label">
              Date de retour
            </label>
            <input
              type="date"
              class="form-control"
              id="datetr"
              {...register("datert")}
            />

            <p>
              Destinations <span class="star">*</span>
            </p>
            <div class="form-check">
              <label htmlFor="Tunisia">
                <input
                  {...register("destinations")}
                  class="form-check-input"
                  type="radio"
                  name="destinations"
                  value="Tunisia"
                  id="Tunisia"
                />
                Tunisia
              </label>
            </div>
            <div class="form-check">
              <label htmlFor="Egypt">
                <input
                  {...register("destinations")}
                  class="form-check-input"
                  type="radio"
                  name="destinations"
                  value="Egypt"
                  id="Egypt"
                />
                Egypt
              </label>
            </div>
            <div class="form-check">
              <label htmlFor="Coratia">
                <input
                  {...register("destinations")}
                  class="form-check-input"
                  type="radio"
                  name="destinations"
                  value="Coratia"
                  id="Coratia"
                />
                Coratia
              </label>
            </div>
          </fieldset>
        </div>

        <button type="submit" class="btn btn-primary">
          Reserver
        </button>
        <button className="btn btn-danger" type="reset">
          <i className="fas fa-times me-3"></i> Cancel
        </button>
      </form>
    </div>
  );
}
export default CreateResevation;
