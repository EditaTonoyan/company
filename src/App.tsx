import { LoginForm, CompanyList } from "./containers";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<CompanyList />} />
      </Routes>
    </div>
  );
};

export default App;
