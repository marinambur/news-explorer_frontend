import React from "react";
import {Route, Redirect} from "react-router-dom";

export default function ProtectedRoute ({ component: Component, secondComponent: SecondComponent, ...props }) {

    React.useEffect(() => {
        if (!props.loggedIn || !localStorage.getItem("jwt")) {
            props.handleLogin();
        }
    });

    return (
        <Route>
            {
                () => props.loggedIn || localStorage.getItem('jwt') ? <><Component {...props} /> <SecondComponent {...props} /> </> : <Redirect to='./' />
            }
        </Route>
    )
}