import React, { useState } from "react";

interface Lesson {
  id: number;
  title: string;
  description: string;
  level: "Básico" | "Intermediário" | "Avançado";
}

const initialLessons: Lesson[] = [
  { id: 1, title: "Matemática - Funções do 1º Grau", description: "Introdução às funções lineares e suas aplicações no cotidiano.", level: "Básico" },
  { id: 2, title: "Física - Leis de Newton", description: "Compreendendo as três leis fundamentais do movimento.", level: "Intermediário" },
  { id: 3, title: "Química - Ligações Químicas", description: "Exploração das ligações iônicas, covalentes e metálicas.", level: "Básico" },
  { id: 4, title: "História - Revolução Industrial", description: "Impactos econômicos e sociais da Revolução Industrial.", level: "Avançado" }
];

const LessonCatalog: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);
  const [search, setSearch] = useState("");
  const [newLessonTitle, setNewLessonTitle] = useState("");
  const [newLessonDesc, setNewLessonDesc] = useState("");
  const [newLessonLevel, setNewLessonLevel] = useState<"Básico" | "Intermediário" | "Avançado">("Básico");

  const filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(search.toLowerCase())
  );

  const addLesson = () => {
    if (!newLessonTitle.trim() || !newLessonDesc.trim()) return;
    const newLesson: Lesson = {
      id: lessons.length + 1,
      title: newLessonTitle,
      description: newLessonDesc,
      level: newLessonLevel
    };
    setLessons([...lessons, newLesson]);
    setNewLessonTitle("");
    setNewLessonDesc("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Catálogo de Aulas</h2>

      {/* Campo de busca */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar aula..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Lista de aulas */}
      <div className="row">
        {filteredLessons.length > 0 ? (
          filteredLessons.map(lesson => (
            <div className="col-md-6 mb-3" key={lesson.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{lesson.title}</h5>
                  <p className="card-text">{lesson.description}</p>
                  <span className="badge bg-primary">{lesson.level}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">Nenhuma aula encontrada.</p>
        )}
      </div>

      {/* Adicionar nova aula */}
      <div className="mt-4">
        <h5>Adicionar Nova Aula</h5>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Título da aula"
          value={newLessonTitle}
          onChange={(e) => setNewLessonTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Descrição da aula"
          value={newLessonDesc}
          onChange={(e) => setNewLessonDesc(e.target.value)}
        ></textarea>
        <select
          className="form-select mb-2"
          value={newLessonLevel}
          onChange={(e) => setNewLessonLevel(e.target.value as any)}
        >
          <option value="Básico">Básico</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button className="btn btn-success" onClick={addLesson}>Adicionar Aula</button>
      </div>
    </div>
  );
};

export default LessonCatalog;
