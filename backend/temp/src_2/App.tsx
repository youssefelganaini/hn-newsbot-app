import "./App.css";
import Sidenav from "./components/Sidenav";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <>
      <div className="d-flex justify-content-start bg-white">
        <Sidenav />
        <MainContent />
      </div>
    </>
  );
}
