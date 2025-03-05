import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<h1></h1>} />
        <Route path="/sign-up" element={<h1></h1>} />
        <Route path="/sign-in" element={<h1></h1>} />
        <Route path="/shopkeeper-main" element={<h1></h1>} />
        <Route path="/shopkeeper-history" element={<h1></h1>} />
        <Route path="/customer-main" element={<h1></h1>} />
        <Route path="/customer-history" element={<h1></h1>} />
        <Route path="/delivery-person-main" element={<h1></h1>} />
        <Route path="/delivery-person-earnings" element={<h1></h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



