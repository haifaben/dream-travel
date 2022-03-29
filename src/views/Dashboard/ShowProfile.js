//import { useParams } from "react-router-dom";
import axios from "axios";
import { MEDIA_URL } from "../../params";
import { connect } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Avatar({ src, alt, nameUser }) {
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

    axios
      .post(`auth/${nameUser}/update-avatar`, formData)
      .then((res) => {})
      .catch(() => {});
  };

  return (
    <>
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
    </>
  );
}

function ShowProfile({ user }) {
  //const { nameUser } = useParams();
  const [redirectTo, setRedirectTo] = useState(null);
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
              alt=""
            />{" "}
          </div>

          <Avatar
            nameUser={user.name}
            src={MEDIA_URL + user.avatar}
            alt={user.name}
          />

          <div className="text-center">
            <h4 className="mb-0">{user.name}</h4>{" "}
            <span className="text-muted d-block mb-2">{user.email}</span>{" "}
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

export default connect(mapStateToProps, {})(ShowProfile);
