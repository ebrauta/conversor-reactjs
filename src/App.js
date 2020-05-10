import React from "react";
import Header from "./components/OutrosComp/Header";
import Footer from "./components/OutrosComp/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="interno">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
