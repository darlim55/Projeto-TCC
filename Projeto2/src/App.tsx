import React from "react";
import StudentProgressCard from "./components/studentCard";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Plataforma de Aprendizagem Adaptativa</h1>
      
      <StudentProgressCard
        name="Maria Silva"
        course="Machine Learning Básico"
        progress={75}
        alertMessage="Seu desempenho caiu na última semana, revise os conteúdos de regressão linear."
      />

      <StudentProgressCard
        name="João Pereira"
        course="Introdução a Estatística"
        progress={90}
      />
    </div>
  );
};

export default App;
