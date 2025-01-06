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

    const deleteUser = (id) => {
        axios
            .delete(`https://backend-demo-egyl.onrender.com/api/user/remove/${id}`)
            .then((result) => {
                alert("User deleted successfully!");
                setUser(user.filter((u) => u._id !== id));
            })
            .catch((err) => {
                console.error(err);
                alert("Error deleting user.");
            });
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>User List</h1>
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
                        <tr key={user._id}>
                            <td style={tdStyle}>{user.name}</td>
                            <td style={tdStyle}>{user.email}</td>
                            <td style={tdStyle}>{user.address}</td>
                            <td style={tdStyle}>
                                <Link to={`/update/${user._id}`} style={actionLinkStyle}>
                                    Update
                                </Link>
                                <button
                                    style={deleteButtonStyle}
                                    onClick={() => deleteUser(user._id)}
                                >
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
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(135deg, #f3f4f6, #e2e8f0)",
    fontFamily: "'Inter', sans-serif",
    textAlign: "center",
};

const headingStyle = {
    marginBottom: "20px",
    color: "#2d3748",
    fontSize: "1.8rem",
    fontWeight: "600",
};

const actionContainerStyle = {
    textAlign: "right",
    marginBottom: "20px",
};

const createLinkStyle = {
    padding: "10px 20px",
    background: "linear-gradient(90deg, #4a90e2, #007bff)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background 0.3s ease",
};

createLinkStyle["hover"] = {
    background: "linear-gradient(90deg, #007bff, #0056b3)",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const thStyle = {
    padding: "12px",
    textAlign: "left",
    background: "linear-gradient(135deg, #e9ecef, #dee2e6)",
    fontWeight: "bold",
    color: "#2d3748",
};

const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #e2e8f0",
    color: "#4a5568",
};

const actionLinkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "600",
    marginRight: "10px",
    transition: "color 0.3s ease",
};

actionLinkStyle["hover"] = {
    color: "#0056b3",
};

const deleteButtonStyle = {
    padding: "8px 12px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background 0.3s ease",
};

deleteButtonStyle["hover"] = {
    backgroundColor: "#a71d2a",
};

export default User;
