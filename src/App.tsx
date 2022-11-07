import { BrowserRouter } from "react-router-dom";
import Menu from "./components/menu";
// import reactLogo from "./assets/react.svg";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Router />
    </BrowserRouter>
  );
}

export default App;
