import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  redirect,
} from "react-router-dom";
import "./App.css";
import Layout from "./assets/components/Layout";
import HomeParalax from "./assets/pages/HomeParalax";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomeParalax/>} />

    </Route>
  )
);

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
