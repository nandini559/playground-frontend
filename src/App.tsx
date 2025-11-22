import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlaygroundHome from "./pages/playgroundHome";
import Userlist from "./pages/userlist";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PlaygroundHome />} />

          <Route path="userlist" element={<Userlist />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
