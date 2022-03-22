import React from "react";

import { default as CollectionOverviewContainer } from "../../Components/CollectionOverview/CollectionOverview.containergql";
import { default as CollectionPageContainer } from "../Collection/Collection.containergql";
import { Route } from "react-router-dom";

import "./Shoppage.scss";

const Shoppage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default Shoppage;
