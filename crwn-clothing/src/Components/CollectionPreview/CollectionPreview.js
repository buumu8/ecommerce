import React from "react";

import { withRouter } from "react-router-dom";
import {
  TitleLink,
  PreviewComponent,
  CollectionPreviewContainer,
} from "./CollectionPreview.styles";

import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items, match }) => {
  return (
    <CollectionPreviewContainer>
      <TitleLink to={`${match.path}/${title.toLowerCase()}`}>
        {title.toUpperCase()}
      </TitleLink>
      <PreviewComponent>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewComponent>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
