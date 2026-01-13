import { useState } from "react";
import API from "../services/api";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    phone: "",
    email: ""
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("surname", user.surname);
    formData.append("phone", user.phone);
    formData.append("email", user.email);
    formData.append("photo", photo);

    await API.post("/add", formData);
    alert("User added with image!");
  };

  return (
    <div className="card">
      <h2>Add User</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="surname" placeholder="Surname" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />

      <input
        type="file"
        onChange={(e) => setPhoto(e.target.files[0])}
      />

      <button onClick={submit}>Add</button>
    </div>
  );
};

export default AddUser;
