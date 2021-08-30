import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextForm heading="Enter Your Text Below to Analyze" />
    </>
  );
}

export default App;