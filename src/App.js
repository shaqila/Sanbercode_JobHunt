import "./App.css";
import RouteComponent from "./router/RouteComponent";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function App() {
  return (
    <>
      {/* <Navbar />
      <Jumbotron />
      <Card />
      <Footer /> */}
      <RouteComponent />
    </>
  );
}

export default App;
