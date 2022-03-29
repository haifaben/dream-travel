import { Link, Redirect, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { MEDIA_URL } from "../../params";
import { connect } from "react-redux";

function Avatar({ src, alt, travellerId }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);
  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }

    const formData = new FormData();

    formData.append("avatar", file, file.name);

    axios.post(`/traveller/${travellerId}/update-avatar`, formData);
  };

  return (
    <div className="avatar-container">
      {preview ? <img src={preview} /> : <img src={src} alt={alt} />}
      <label htmlFor="upload-avatar">Upload new avatar</label>

      <input
        id="upload-avatar"
        accept="image/*"
        onChange={onFileChange}
        type="file"
        style={{ display: "none" }}
      ></input>
    </div>
  );
}

function ShowTraveller({ user }) {
  const [traveller, setTraveller] = useState(null);
  const [loadingTraveller, setLoadingTraveller] = useState(true);
  const [deleted, setDeleted] = useState(false);
  // const params = useParams()
  // const project_slug = params.project_slug
  const { travellerUsername } = useParams();

  document.title = travellerUsername;
  const deleteTraveller = () => {
    axios
      .delete("/traveller/" + travellerUsername)
      .then((res) => {
        setDeleted(true);
      })
      .catch((err) => {
        setDeleted(false);
      });
  };

  useEffect(() => {
    setLoadingTraveller(true);
    axios
      .get("/traveller/" + travellerUsername)
      .then((res) => {
        setTraveller(res.data);
        setLoadingTraveller(false);
      })
      .catch((err) => {
        setLoadingTraveller(false);
        setTraveller(null);
      });
  }, [travellerUsername]);

  /*const SuperUserActions = () => {
    if (user.role === "ADMIN")
      return (
        <>
          <Link
            to={`/dashboard/${travellerUsername}/edit`}
            className="btn btn-primary"
          >
            <i className="fas fa-edit"></i>
          </Link>
          <button className="btn btn-danger" onClick={deleteTraveller}>
            <i className="fas fa-trash"></i>
          </button>
        </>
      );
    return <></>;
  };*/

  if (deleted) return <Redirect to="/dashboard"></Redirect>;

  if (loadingTraveller) return <>Loading</>;
  if (traveller === null)
    return (
      <h1 className="text-center text-danger">No results for this traveller</h1>
    );
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="upper text-center">
            {" "}
            <h3> Profile Setting</h3>
            <img
              src="https://i.imgur.com/Qtrsrk5.jpg"
              className="img-fluid"
              alt="img"
            />{" "}
          </div>

          <Avatar
            travellerId={traveller.id}
            src={MEDIA_URL + traveller.avatar}
            alt={traveller.fullName}
          />

          <div className="text-center">
            <h4 className="mb-0">{traveller.fullName}</h4>{" "}
            <span className="text-muted d-block mb-2">{traveller.email}</span>{" "}
            <span className="text-muted d-block mb-2">
              {traveller.birthDay}
            </span>{" "}
            <button className="btn btn-primary btn-sm follow">Follow</button>
            <div className="d-flex justify-content-between align-items-center mt-4 px-4">
              <div className="stats">
                <h6 className="mb-0">Followers</h6> <span>8,797</span>
              </div>
              <div className="stats">
                <h6 className="mb-0">Projects</h6> <span>142</span>
              </div>
              <div className="stats">
                <h6 className="mb-0">Ranks</h6> <span>129</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps, {})(ShowTraveller);
