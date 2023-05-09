import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { useApp } from "./context";
import { MenuCNE } from "./pages/menuCNE";
import { AddEleicoes } from "./pages/addEleicoes";
import { ListEleicoes } from "./pages/listEleicoes";
import { AddCandidato } from "./pages/addCandidato";
import { ListCandidato } from "./pages/listCandidato";
import { AddEleitor } from "./pages/addEleitor";
import { ListEleitor } from "./pages/listEleitor";
import { AddVotos } from "./pages/addVotos";

function App() {
  const { user } = useApp();

  return (
    <BrowserRouter>
      <Routes>
        {user?.id ? (
          <>
            <Route path="/" element={<MenuCNE />} />
            <Route path="/add-votos" element={<AddVotos />} />
            <Route path="/menu-cne" element={<MenuCNE />} />
            <Route path="/add-eleicoes" element={<AddEleicoes />} />
            <Route path="/list-eleicoes" element={<ListEleicoes />} />
            <Route path="/add-candidato" element={<AddCandidato />} />
            <Route path="/list-candidato" element={<ListCandidato />} />
            <Route path="/list-candidato/:id" element={<ListCandidato />} />
            <Route path="/add-eleitor" element={<AddEleitor />} />
            <Route path="/list-eleitor" element={<ListEleitor />} />
            <Route path="/list-eleitor/:id" element={<ListEleitor />} />
            <Route path="/edit-eleitor/:id" element={<AddEleitor />} />
            <Route path="/edit-candidato/:id" element={<AddCandidato />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="*" element={"Página não encontrada"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
