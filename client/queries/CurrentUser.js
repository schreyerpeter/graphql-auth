import graphql from "graphql-tag";

const query = graphql`
  {
    user {
      id
      email
    }
  }
`;

export default query;
