import Header from "./components/header";
import Footer from "./components/footer";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <Footer />
    </div>
  );
}

export default App;
