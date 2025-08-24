import React, { useState } from "react";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#fff" : "#000",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          position: "absolute",
          top: "70px",
          right: "20px",
          backgroundColor: darkMode ? "#444" : "#007bff",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Main Section */}
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          overflow: "hidden",
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: 1,
            paddingRight: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}>
            Welcome to Power Pages,
          </h1>
          <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            We'll start with a few questions that will help us customize your
            product experience and build your new site.
          </p>
          <button
            style={{
              backgroundColor: darkMode ? "#555" : "#007bff",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "6px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              marginBottom: "16px",
              width: "fit-content",
            }}
          >
            Get started
          </button>
          <p
            style={{
              fontSize: "12px",
              lineHeight: "1.6",
              maxWidth: "400px",
            }}
          >
            0 questions • about 2 min to complete
            <br />
            By accessing this service, you agree to the{" "}
            <a
              href="#"
              style={{
                color: darkMode ? "#4da3ff" : "#007bff",
                textDecoration: "underline",
              }}
            >
              terms of service
            </a>{" "}
            and{" "}
            <a
              href="#"
              style={{
                color: darkMode ? "#4da3ff" : "#007bff",
                textDecoration: "underline",
              }}
            >
              Preview terms
            </a>
            .<br />
            <a
              href="#"
              style={{
                color: darkMode ? "#4da3ff" : "#007bff",
                textDecoration: "underline",
              }}
            >
              Microsoft Privacy Statement
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5775/5775996.png"
            alt="illustration"
            style={{
              width: "80%",
              maxWidth: "400px",
            }}
          />
        </div>
      </div>

      {/* About Section */}
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: darkMode ? "#1e1e1e" : "#f8f9fa",
          padding: "60px 20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transition: "all 0.3s ease",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>About Us</h2>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "800px",
            margin: "0 auto 20px",
            lineHeight: "1.8",
          }}
        >
          Power Pages is a next-generation platform built to simplify website
          creation for businesses of all sizes. With a focus on speed,
          efficiency, and ease of use, our platform empowers users to design,
          develop, and launch websites without requiring deep technical skills.
        </p>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Our mission is to bridge the gap between technology and creativity. We
          believe that anyone should have the power to bring their ideas to
          life online, whether it's for a small business, a large enterprise, or
          a personal project. With hundreds of templates, integrations, and
          support, Power Pages is your partner in building a strong digital
          presence.
        </p>
      </div>

      {/* Contact Section */}
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: darkMode ? "#2a2a2a" : "#e9ecef",
          padding: "60px 20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transition: "all 0.3s ease",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Contact Us</h2>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Email: support@powerpages.com
        </p>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Phone: +1 (234) 567-890
        </p>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Address: 123 Main Street, New York, USA
        </p>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          We value our customers and are always here to help. Whether you have
          a question, feedback, or just want to say hello, don't hesitate to
          reach out. Our support team is available 24/7 to assist you with any
          queries.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;









// import React from "react";
// import Navbar from "../components/Navbar";
// const LandingPage = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#fff",
//         color: "#000",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//         <Navbar/>
//       {/* Main Section */}
//       <div
//         style={{
//           display: "flex",
//           minHeight: "100vh",
//           overflow: "hidden",
//           padding: "40px",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* Left Section */}
//         <div
//           style={{
//             flex: 1,
//             paddingRight: "40px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <h1
//             style={{
//               fontSize: "32px",
//               fontWeight: "bold",
//               marginBottom: "16px",
//             }}
//           >
//             Welcome to Power Pages,
//           </h1>
//           <p
//             style={{
//               fontSize: "16px",
//               marginBottom: "24px",
//             }}
//           >
//             We'll start with a few questions that will help us customize your
//             product experience and build your new site.
//           </p>
//           <button
//             style={{
//               backgroundColor: "#007bff",
//               color: "#fff",
//               padding: "12px 24px",
//               borderRadius: "6px",
//               border: "none",
//               fontSize: "16px",
//               cursor: "pointer",
//               marginBottom: "16px",
//               width: "fit-content",
//             }}
//           >
//             Get started
//           </button>
//           <p
//             style={{
//               fontSize: "12px",
//               lineHeight: "1.6",
//               maxWidth: "400px",
//             }}
//           >
//             0 questions • about 2 min to complete
//             <br />
//             By accessing this service, you agree to the{" "}
//             <a
//               href="#"
//               style={{
//                 color: "#007bff",
//                 textDecoration: "underline",
//               }}
//             >
//               terms of service
//             </a>{" "}
//             and{" "}
//             <a
//               href="#"
//               style={{
//                 color: "#007bff",
//                 textDecoration: "underline",
//               }}
//             >
//               Preview terms
//             </a>
//             .<br />
//             <a
//               href="#"
//               style={{
//                 color: "#007bff",
//                 textDecoration: "underline",
//               }}
//             >
//               Microsoft Privacy Statement
//             </a>
//           </p>
//         </div>

//         {/* Right Section */}
//         <div
//           style={{
//             flex: 1,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/5775/5775996.png"
//             alt="illustration"
//             style={{
//               width: "80%",
//               maxWidth: "400px",
//             }}
//           />
//         </div>
//       </div>

//       {/* About Section */}
//       <div
//         style={{
//           minHeight: "100vh",
//           backgroundColor: "#f8f9fa",
//           padding: "60px 20px",
//           textAlign: "center",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>About Us</h2>
//         <p
//           style={{
//             fontSize: "18px",
//             maxWidth: "800px",
//             margin: "0 auto 20px",
//             lineHeight: "1.8",
//           }}
//         >
//           Power Pages is a next-generation platform built to simplify website
//           creation for businesses of all sizes. With a focus on speed,
//           efficiency, and ease of use, our platform empowers users to design,
//           develop, and launch websites without requiring deep technical skills.
//         </p>
//         <p
//           style={{
//             fontSize: "18px",
//             maxWidth: "800px",
//             margin: "0 auto",
//             lineHeight: "1.8",
//           }}
//         >
//           Our mission is to bridge the gap between technology and creativity. We
//           believe that anyone should have the power to bring their ideas to
//           life online, whether it's for a small business, a large enterprise, or
//           a personal project. With hundreds of templates, integrations, and
//           support, Power Pages is your partner in building a strong digital
//           presence.
//         </p>
//       </div>

//       {/* Contact Section */}
//       <div
//         style={{
//           minHeight: "100vh",
//           backgroundColor: "#e9ecef",
//           padding: "60px 20px",
//           textAlign: "center",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Contact Us</h2>
//         <p style={{ fontSize: "18px", marginBottom: "10px" }}>
//           Email: support@powerpages.com
//         </p>
//         <p style={{ fontSize: "18px", marginBottom: "10px" }}>
//           Phone: +1 (234) 567-890
//         </p>
//         <p style={{ fontSize: "18px", marginBottom: "30px" }}>
//           Address: 123 Main Street, New York, USA
//         </p>
//         <p
//           style={{
//             fontSize: "18px",
//             maxWidth: "800px",
//             margin: "0 auto",
//             lineHeight: "1.8",
//           }}
//         >
//           We value our customers and are always here to help. Whether you have
//           a question, feedback, or just want to say hello, don't hesitate to
//           reach out. Our support team is available 24/7 to assist you with any
//           queries.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
