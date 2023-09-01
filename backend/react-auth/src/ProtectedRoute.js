import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, isAuthenticated, ...rest }) => {
    if (isAuthenticated) {
        return <Route {...rest} element={<Element />} />;
    } else {
        // Redirect to login if not authenticated
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
