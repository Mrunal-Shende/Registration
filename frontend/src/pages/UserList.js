import { useEffect, useState } from "react";
import API from "../services/api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="grid">
      {users.length === 0 ? (
        <p style={{ textAlign: "center" }}>No users found</p>
      ) : (
        users.map((user) => (
          <div className="card" key={user._id}>
            <img
              src={`http://localhost:5000/uploads/${user.photo}`}
              alt="User"
            />

            <h3>
              {user.name} {user.surname}
            </h3>

            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
