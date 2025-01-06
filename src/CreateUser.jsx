import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate(); 

    const submit = (e) => {l 
        e.preventDefault();
        axios
            .post("https://backend-demo-egyl.onrender.com/api/user/create", { name, email, address })
            .then((result) => {
                console.log(result.data);
                alert("User created successfully!");
                navigate("/"); 
            })
            .catch((err) => {
                console.error(err);
                alert("Error creating user.");
            });
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Create New User</h2>
            <form onSubmit={submit} style={formStyle}>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                        required
                    />
                </div>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={inputStyle}
                        required
                    />
                </div>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={inputStyle}
                        required
                    />
                </div>
                <button type="submit" style={buttonStyle}>
                    Create User
                </button>
            </form>
        </div>
    );
}

// Styles
const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
};

const headingStyle = {
    marginBottom: "20px",
    color: "#333",
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
};

const inputGroupStyle = {
    marginBottom: "15px",
    textAlign: "left",
};

const labelStyle = {
    display: "block",
    marginBottom: "5px",
    color: "#555",
    fontWeight: "bold",
};

const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
};

const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
};

export default CreateUser;
