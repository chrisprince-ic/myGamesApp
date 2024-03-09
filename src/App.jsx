import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Sidebar from "./components/sideBar.jsx";
function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar></Sidebar>
        <div className="containCards">
          {" "}
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
}

export default App;
