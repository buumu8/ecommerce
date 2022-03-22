import React from "react";

import CollectionPreview from "../CollectionPreview/CollectionPreview";

import "./CollectionOverview.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export default CollectionOverview;
