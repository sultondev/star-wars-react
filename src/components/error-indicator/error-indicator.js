import React from "react";
import "./error-indicator.css";
import icon from "./death-star.png"


const ErrorIndicator = () => {
    return (
        <div className="error">
            <img src={icon} alt="Error Icon" className="error-icon" />
            <h4 className="error-header">
                Boom!
            </h4>
            <p className="error-subheader">
                Something has gone terribly wrong
                <br />
                <span className="error-subheader__message">
                    (However we sent droids to fix it)
                </span>
            </p>
        </div>
    )
}






export default ErrorIndicator;
