import React from "react";

const View = ({ className, children }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
}

export default View;