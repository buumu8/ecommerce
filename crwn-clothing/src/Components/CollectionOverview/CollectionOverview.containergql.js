import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import CollectionOverview from "./CollectionOverview";
import Spinner from "../Spinner/Spinner";

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;
      const { collections } = data;

      return <CollectionOverview collections={collections} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
