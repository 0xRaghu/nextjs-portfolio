import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw" }}>
      Deserunt sunt officia irure eiusmod proident pariatur elit in eiusmod.
      Occaecat do consequat ex ut reprehenderit ex quis adipisicing. Adipisicing
      officia adipisicing ad tempor exercitation ipsum sit tempor.{" "}
    </p>
  </Layout>
);

export default withRouter(Post);
