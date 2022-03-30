import "./App.css";
import React, { useState, useEffect } from "react";
import LoginForm from "./comps/login/Login";
import SignUp from "./comps/signup/SignUp";
import Header from "./comps/nav/Header";
import Logout from "./comps/logout/Logout";
import { View } from "./comps/view/View";
import { Route, Routes } from "react-router-dom";
import { RequireAuth, PublicAuth } from "./comps/Auth";

// import { ParticlesBackground } from "./ParticlesBackground";

function App() {
    const [logged, setLogged] = useState(false);
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("token");
        if (isLoggedIn) {
            setLogged(true);
        } else {
            setLogged(false);
        }
    }, []);

    return (
        <div className="app">
            <div id="particles">{/* <ParticlesBackground /> */}</div>
            <div className="main">
                <Header logged={logged} />
                <Routes>
                    <Route
                        path="*"
                        element={
                            <RequireAuth redirectTo="/login">
                                <View />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <PublicAuth redirectTo="/">
                                <SignUp setLogged={setLogged} />
                            </PublicAuth>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicAuth redirectTo="/">
                                <LoginForm setLogged={setLogged} />
                            </PublicAuth>
                        }
                    />
                    <Route
                        path="/logout"
                        element={
                            <RequireAuth redirectTo="/login">
                                <Logout setLogged={setLogged} />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
