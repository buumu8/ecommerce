import React from "react";
import { HomePageContainer } from "./Homepage.styles";
// import './Homepage.scss';
import Directory from "../../Components/Directory/Directory";

export default function Homepage() {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}
