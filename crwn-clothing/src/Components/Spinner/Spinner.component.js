import React from "react";

import {
  SpinnerContainer,
  SpinnerOverlay,
} from "../WithSpinner/WithSpinner.styles";

export const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);
