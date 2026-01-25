import { ViewProvider } from "./context/ViewContext";
import Nav from "./components/Nav";
import Layout from "./pages/Layout";

function App() {
  return (
    <ViewProvider>
      <Nav />
      <Layout />
    </ViewProvider>
  );
}

export default App;
