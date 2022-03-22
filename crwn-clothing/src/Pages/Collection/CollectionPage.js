import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// import {createStructuredSelector} from 'reselect';
// import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../Components/CollectionItem/CollectionItem";

import "./CollectionPage.scss";

const CollectionPage = ({ collection }) => {
  //   const { collectionId } = useParams();
  // const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
