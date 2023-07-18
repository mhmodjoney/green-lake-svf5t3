import React, { useState, useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import { Route, Routes, Link } from "react-router-dom";
import Main from "./component/Main";
import LoginForm from "./component/login";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <>
          <div className="App">
            <Link to="/">home</Link>
            <h1 />
            <Link to="/about">about</Link>
            <Button variant="text">Text</Button>
            <Button variant="contained">Codntained</Button>
            <Button variant="outlined">Outlined</Button>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<h1>ddsd</h1>} />
              <Route path="/Login" element={<LoginForm />} />
            </Routes>
          </div>{" "}
        </>
      )}
    </>
  );
}
