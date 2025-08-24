import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async () => {
        try {

            const token = localStorage.getItem("token");

            const response = await axios.post(" http://localhost:5000/api/register", {
                email,
                password,
                phone
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Add the token here
                    }
                }
            );
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Server Error");
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f0f4ff",
                margin: 0,
                padding: "20px",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    width: "100%",
                    maxWidth: "400px",
                    textAlign: "center",
                    boxSizing: "border-box",
                }}
            >
                <h2 style={{ color: "#007BFF", marginBottom: "20px", fontSize: "24px" }}>
                    Register
                </h2>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        border: "1px solid #007BFF",
                        borderRadius: "5px",
                        fontSize: "16px",
                        boxSizing: "border-box",
                    }}
                />

                <input
                    type="number"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "15px",
                        border: "1px solid #007BFF",
                        borderRadius: "5px",
                        fontSize: "16px",
                        boxSizing: "border-box",
                    }}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "20px",
                        border: "1px solid #007BFF",
                        borderRadius: "5px",
                        fontSize: "16px",
                        boxSizing: "border-box",
                    }}
                />

                <button
                    onClick={handleRegister}
                    style={{
                        width: "100%",
                        backgroundColor: "green",
                        color: "white",
                        padding: "12px",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "16px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                    }}
                >
                    SignUp
                </button>

                {message && <p style={{ marginTop: "15px", color: "red" }}>{message}</p>}
            </div>
        </div>
    );
};

export default Registration;









