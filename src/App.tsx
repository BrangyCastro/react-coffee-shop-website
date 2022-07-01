import "./styles.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
