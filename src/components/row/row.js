import React from "react";
import propTypes from "prop-types";

const Row = ({
    left,
    right,
}) => {
    return (
        <div className="container d-flex container-bottom">
            {left}
            {right}
        </div>
    );
};

Row.defaultProps = {
    left: propTypes.node,
    right: propTypes.node,
};

export default Row;
