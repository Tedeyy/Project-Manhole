import "./assets/css/App.css";
import NavBar from "./components/navBar";
import Body from "./components/body/body";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Body />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
