import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Test from "./pages/Test";
import Result from "./pages/Result";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Layout>
  );
}

export default App;
