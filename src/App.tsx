import "./assets/css/App.css";
import NavBar from "./components/navBar";
import Body from "./components/body/body";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
