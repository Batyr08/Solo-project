const React = require('react');
const Layout = require('./Layout');

function Main({ login }) {
  return (
    <Layout login={login}>
      <div className="main-container">
        <p className="welcome">Welcome</p>
      </div>
    </Layout>
  );
}

module.exports = Main;
