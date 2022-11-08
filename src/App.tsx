import { BrowserRouter } from "react-router-dom";
import Menu from "./components/menu";
import { CardProvider } from "./context/cartProvider";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <CardProvider>
        <>
          <Menu />
          <Router />
        </>
      </CardProvider>
    </BrowserRouter>
  );
}

export default App;
