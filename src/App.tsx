import Blog from "./components/Blog.tsx";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import OnlyCats from "./components/OnlyCats.tsx";
export default function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/onlycats" element={<OnlyCats/>} />
                <Route path="/" element={<Blog/>} />
            </Routes>
        </Router>
    </>
  )
}


