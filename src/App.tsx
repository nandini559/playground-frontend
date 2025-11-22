import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlaygroundHome from "./pages/playgroundHome";
import Userlist from "./pages/userlist";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="profile" element={<PlaygroundHome />} />

          <Route path="/" element={<Userlist />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
