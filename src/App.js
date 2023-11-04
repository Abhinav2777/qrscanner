import "./App.css";
import Scanner from "./components/Scanner";
function App() {
  return (
    <div className="App">
      <h1>QR Code Scanning in React</h1>
      {/* <div id="reader"> */}
      <Scanner />
      {/* </div> */}
    </div>
  );
}

export default App;
