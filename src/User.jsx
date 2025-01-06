import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function User() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios
            .get("https://backend-demo-egyl.onrender.com/api/user/fetch")
            .then((result) => {
                setUser(result.data.user);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const deleteUser = (id) =>
    {
        axios.delete(`https://backend-demo-egyl.onrender.com/api/user/remove/${id}`)
        .then(result=>{
            console.log("User deleted Successfully");
        })
        .catch(err=>{console.log(err)})
    }

    return (
        <div style={containerStyle}>
            <center>
                <h1 style={headingStyle}>User List</h1>
            </center>
            <div style={actionContainerStyle}>
                <Link to="/create" style={createLinkStyle}>
                    Create New User
                </Link>
            </div>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Address</th>
                        <th style={thStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr key={user.email}>
                            <td style={tdStyle}>{user.name}</td>
                            <td style={tdStyle}>{user.email}</td>
                            <td style={tdStyle}>{user.address}</td>
                            <td style={tdStyle}>
                                <Link to={`/update/${user._id}`}style={actionLinkStyle}>
                                    Update
                                </Link>{" "}
                                <button style={deleteButtonStyle} onClick={() => deleteUser(user._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Styles
const containerStyle = {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
};

const headingStyle = {
    marginBottom: "20px",
    color: "#333",
};

const actionContainerStyle = {
    textAlign: "right",
    marginBottom: "10px",
};

const createLinkStyle = {
    padding: "10px 15px",
    backgroundColor: "#007BFF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "14px",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
};

const thStyle = {
    padding: "10px",
    borderBottom: "2px solid #ddd",
    textAlign: "left",
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
};

const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
};

const actionLinkStyle = {
    color: "#007BFF",
    textDecoration: "none",
    marginRight: "10px",
};

const deleteButtonStyle = {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
};

export default User;
