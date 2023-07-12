import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">
        {" "}
        Thoughts of our Collective Minds
      </span>
    </h1>
    <p className="desc text-center">
      SharedThoughts is an open-source tool for our world to discover, create
      and share thoughts, ideas, memories with the world.
    </p>

    <Feed />
  </section>
);

export default Home;
