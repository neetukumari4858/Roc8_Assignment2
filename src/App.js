import "./styles.css";
import { Navbar } from "./Navbar";
import { AppRouter } from "./Router";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}
