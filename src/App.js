import logo from './logo.svg';
import './App.css';
import Player from './components/Player'; 


function App() {
  return (
    <div>
      <div  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}>
        <Player/>
      </div>
    </div>
  );
}

export default App;
