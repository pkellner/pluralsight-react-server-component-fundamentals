import Layout from "../common/layout";

export default function Home() {
  return (
    <Layout>
      <div className="container px-4 py-5 mx-auto text-center">
        <h1 className="display-6 fw-bold">
          Silicon Valley Code Camp and Campfire
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 p-3">
            Our events are technical conferences in Silicon Valley where
            developers learn from developers focusing on open source, the latest
            enterprise-focused technologies, software branding, legal issues
            around software as well as other topics developers are interested in
            hearing about such as career building and other topics of interest.
            Lately, we have also added Silicon Valley Code Campfire events as
            something we now do online.
          </p>
        </div>
      </div>
    </Layout>
  );
}
