import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
// import CollectionOverviewContainer from "../../Components/CollectionOverview/CollectionOverview.container";
// import CollectionPageContainer from "../Collection/CollectionPage.container";
import { Route } from "react-router-dom";

import "./Shoppage.scss";
// import { fetchCollectionStartAsync } from '../../redux/shop/shop.action';
import { fetchCollectionStart } from "../../redux/shop/shop.action";
import { Spinner } from "../../Components/Spinner/Spinner.component";

const CollectionOverviewContainer = lazy(() =>
  import("../../Components/CollectionOverview/CollectionOverview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../Collection/CollectionPage.container")
);
class Shoppage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(Shoppage);
