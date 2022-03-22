import React from "react";

import {
  SpinnerContainer,
  SpinnerOverlay,
} from "../WithSpinner/WithSpinner.styles";

const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
