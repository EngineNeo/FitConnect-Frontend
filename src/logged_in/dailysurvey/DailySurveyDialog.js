import React, { useState } from "react";
import PropTypes from "prop-types";

function DailySurveyDialog(props) {
    const { onClose } = props;
    const [isLoading, setIsLoading] = useState(false);


    return (
        <div>
            
        </div>
    );
}

DailySurveyDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default DailySurveyDialog;
