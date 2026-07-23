import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-xl">Hello my dear</h1>
      <h3 className="text-center text-blue-500 text-lg">
        Let's move on building something wonderful
      </h3>
    </div>
  );
}


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
