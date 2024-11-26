import {Route, Routes} from "react-router";
import Home from "./pages/home/Home.tsx";
import Service from "./pages/service/Service.tsx";

function App() {

  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path={'/service/:title'}
        element={<Service />}
      />
    </Routes>
  )
}

export default App
