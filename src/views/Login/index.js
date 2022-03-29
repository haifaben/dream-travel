import { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { loginUser } from "../../reducers/actions/userAction";

function Login(props) {
  const [checked, setChecked] = useState(false);
  const { register, handleSubmit, watch } = useForm();

  const isGoogPassword = watch("password")?.length >= 8;

  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <form
          className="col col-md-6 border border-1 border-dark rounded-3 p-5"
          onSubmit={handleSubmit(props.loginUser)}
        >
          {props.errorLogin && (
            <div className="alert alert-danger">
              Login or password incorrect
            </div>
          )}
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                defaultValue="haifa.benmassoud@gmail.com"
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
                defaultValue="HaBen123"
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
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input
                checked={checked}
                onChange={() => setChecked(true)}
                className="form-check-input"
                type="checkbox"
                value=""
              />
              Remember me
            </label>
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  errorLogin: state.user.errorLogin,
});

export default connect(mapStateToProps, { loginUser })(Login);
