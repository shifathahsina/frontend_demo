import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
    const {id} = useParams();
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[address,setAddress]=useState();
    const navigate = useNavigate(); 
    const updateUser = (e) =>
    {
        e.preventDefault();
        axios.put(`https://backend-demo-egyl.onrender.com/api/user/update/${id}`,{name,email,address})
        .then(result=>
        {
            console.log(result);
            navigate("/"); 

        })
        .catch(err=>{console.log(err)});
    }

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Update User</h1>
            <form onSubmit={updateUser} style={formStyle} >
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name" style={inputStyle} />
                </div>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" style={inputStyle} />
                </div>
                <div style={inputGroupStyle}>
                    <label style={labelStyle}>Address</label>
                    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} name="address" style={inputStyle} />
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

export default UpdateUser;
