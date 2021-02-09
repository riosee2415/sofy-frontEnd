import { gql } from "apollo-boost";

export const REGISTER_VIDEO = gql`
  mutation registerVideo($path: String!, $title: String!, $desc: String!) {
    registerVideo(path: $path, title: $title, desc: $desc)
  }
`;
