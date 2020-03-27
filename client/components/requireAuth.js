import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

import query from "../queries/CurrentUser";

export default WrappedComponent => {
  class RequireAuth extends Component {
    componentWillUpdate() {
      const { loading, user } = this.props.data;
      if (!loading && !user) {
        hashHistory.push("/login");
      }
    }
    render() {
      return <WrappedComponent {...props} />;
    }
  }

  return graphql(query)(RequireAuth);
};
