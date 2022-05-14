import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const UserProfileForm = () => {
  const [values, setValues] = useState({
    bio: "",
    images: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, bio: e.target.value });
  };

  const onDrop = (image) => {
    setValues({ ...values, images: [...values.images, image] });
  };

  const handleSubmit = () => {
    //ToDo: put your logic here
  };
  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <div className="form-inputs">
        <label className="form-label">Bio</label>
        <textarea
          className="form-input"
          type="ric"
          name="username"
          placeholder="Enter your username"
          value={values.bio}
          onChange={handleChange}
        />
        {errors.bio && <p>{errors.bio}</p>}
      </div>
      <div
        style={{
          overflowY: "auto",
          marginBottom: "0.5rem",
          width: "80%",
        }}
      >
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          withPreview={true}
          style={{ maxHeight: "300px" }}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button className="form-input-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UserProfileForm;
