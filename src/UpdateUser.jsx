import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const updateUser = (e) => {
        e.preventDefault();
        axios
            .put(`https://backend-demo-egyl.onrender.com/api/user/update/${id}`, { name, email, address })
            .then((result) => {
                console.log(result);
                alert("User updated successfully!");
                navigate("/");
            })
            .catch((err) => {
                console.error(err);
                alert("Error updating user.");
            });
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Update User</h1>
            <form onSubmit={updateUser} style={formStyle}>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        style={inputStyle}
                        required
                    />
                </div>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        style={inputStyle}
                        required
                    />
                </div>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        name="address"
                        style={inputStyle}
                        required
                    />
                </div>
                <button type="submit" style={buttonStyle}>
                    Update
                </button>
            </form>
        </div>
    );
};

// Styles
const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(135deg, #f3f4f6, #e2e8f0)",
    textAlign: "center",
    fontFamily: "'Inter', sans-serif",
};

const headingStyle = {
    marginBottom: "20px",
    color: "#2d3748",
    fontSize: "1.8rem",
    fontWeight: "600",
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
};

const inputGroupStyle = {
    textAlign: "left",
};

const labelStyle = {
    display: "block",
    marginBottom: "8px",
    color: "#4a5568",
    fontWeight: "500",
};

const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #cbd5e0",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "box-shadow 0.3s ease",
};

inputStyle["focus"] = {
    boxShadow: "0 0 8px rgba(66, 153, 225, 0.6)",
    borderColor: "#3182ce",
};

const buttonStyle = {
    padding: "12px 20px",
    background: "linear-gradient(90deg, #4a90e2, #007bff)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background 0.3s ease",
};

buttonStyle["hover"] = {
    background: "linear-gradient(90deg, #007bff, #0056b3)",
};

export default UpdateUser;
