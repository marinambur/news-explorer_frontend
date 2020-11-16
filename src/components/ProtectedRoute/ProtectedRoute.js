import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute ({ component: Component, secondComponent: SecondComponent, ...props }) {

    return (
        <Route>
            {
                () => props.loggedIn ? <><Component {...props} /> <SecondComponent {...props} /> </> : <Redirect to='./' />
            }
        </Route>
    )
}