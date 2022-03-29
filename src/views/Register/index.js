//import { useState } from 'react'
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { registerUser } from "../../reducers/actions/userAction";

function Register(props) {
  //const [checked, setChecked] = useState(false)
  const { register, handleSubmit, watch } = useForm();

  const isGoogPassword = watch("password")?.length >= 8;

  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <form
          className="col col-md-6 border border-1 border-dark rounded-3 p-5"
          onSubmit={handleSubmit(props.registerUser)}
        >
          {props.errorRegistr && (
            <div className="alert alert-danger">Error Registration</div>
          )}
          <div className="mb-3 row">
            <label htmlFor="Name" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="Name"
                {...register("name")}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="staticEmail"
                {...register("email")}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className={
                  "form-control" + (isGoogPassword ? "" : " is-invalid")
                }
                id="inputPassword"
                {...register("password", {
                  minLength: 8,
                })}
              />
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  errorRegister: state.user.errorRegister,
});

export default connect(mapStateToProps, { registerUser })(Register);
