import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";

import Bienvenida from "./pages/Bienvenida";
import Inicio from "./pages/Inicio";

import QueEsUnBucle from "./pages/Conceptualizacion/QueEsUnBucle";
import PracticarConceptualizacion from "./pages/Conceptualizacion/PracticarConceptualizacion";
import CompruebaConceptualizacion from "./pages/Conceptualizacion/CompruebaConceptualizacion";

import QueEsUnBucleFor from "./pages/BucleFor/QueEsUnBucleFor";
import PracticarBucleFor from "./pages/BucleFor/PracticarBucleFor";
import CompruebaBucleFor from "./pages/BucleFor/CompruebaBucleFor";

import QueEsUnBucleWhile from "./pages/BucleWhile/QueEsUnBucleWhile";
import PracticarBucleWhile from "./pages/BucleWhile/PracticarBucleWhile";
import CompruebaBucleWhile from "./pages/BucleWhile/CompruebaBucleWhile";

import ActividadRecreativa from "./pages/ActividadRecreativa";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/bienvenida" replace />} />
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/inicio" element={<Inicio />} />

          <Route path="/conceptualizacion/queEsUnBucle" element={<QueEsUnBucle />} />
          <Route path="/conceptualizacion/horaDePracticar" element={<PracticarConceptualizacion />} />
          <Route path="/conceptualizacion/compruebaAprendizaje" element={<CompruebaConceptualizacion />} />

          <Route path="/bucleFor/queEsUnBucleFor" element={<QueEsUnBucleFor />} />
          <Route path="/bucleFor/horaDePracticar" element={<PracticarBucleFor />} />
          <Route path="/bucleFor/compruebaAprendizaje" element={<CompruebaBucleFor />} />

          <Route path="/bucleWhile/queEsUnBucleWhile" element={<QueEsUnBucleWhile />} />
          <Route path="/bucleWhile/horaDePracticar" element={<PracticarBucleWhile />} />
          <Route path="/bucleWhile/compruebaAprendizaje" element={<CompruebaBucleWhile />} />

          <Route path="/actividadRecreativa" element={<ActividadRecreativa />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
