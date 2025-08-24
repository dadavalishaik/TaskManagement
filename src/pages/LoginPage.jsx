import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password,
            });
            setMessage(response.data.message);
            localStorage.setItem("token", response.data.token);
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
                padding: "20px", // Ensures padding on small screens
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
                    maxWidth: "400px", // Makes it responsive
                    textAlign: "center",
                    boxSizing: "border-box",
                }}
            >
                <h2
                    style={{
                        color: "#007BFF",
                        marginBottom: "20px",
                        fontSize: "24px",
                    }}
                >
                    Login
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
                    onClick={handleLogin}
                    style={{
                        width: "100%",
                        backgroundColor: "#007BFF",
                        color: "white",
                        padding: "12px",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "16px",
                        cursor: "pointer",
                        boxSizing: "border-box",
                    }}
                >
                    Login
                </button>
                {message && <p style={{ marginTop: "15px", color: "red" }}>{message}</p>}
            </div>
        </div>
    );
};

export default LoginPage;
