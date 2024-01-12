const React = require('react');
const Layout = require('./Layout');

function About({ login, reviews }) {
  return (
    <Layout login={login}>
      <div>
        <h3>About us</h3>
        <p>
          Welcome to our hunting blog! Our pages are intended for true lovers of hunting and nature.
          We provide a unique experience by bringing the hunting community together and providing
          helpful resources to improve your skills. About Us: Our pages are created for those who
          share a passion for hunting. We provide information on the best places to hunt, tips on
          equipment and techniques, and a community where you can share your experiences and
          experiences. Product Catalog: Check out our extensive catalog of high quality hunting
          equipment and accessories. We partner with top brands to bring you the best selection of
          shotguns, binoculars, apparel and more. Articles and resources: Dive into our informative
          articles on hunting techniques, safety, and equipment care. We're committed to sharing
          expert tips to help you become a more successful hunter. Photo gallery: Check out our
          gallery where we share beautiful hunting moments. Here you can find inspiration, get ideas
          for future hikes, and share your hunting photos. Forum and discussions: Join our community
          of hunters on our forum. Exchange experiences, ask questions, find like-minded people and
          share fascinating stories. Join us on this exciting journey through the world of hunting.
          Whether you're an experienced hunter or a newbie, there's always something here for you to
          enjoy!
        </p>
      </div>
    </Layout>
  );
}

module.exports = About;
