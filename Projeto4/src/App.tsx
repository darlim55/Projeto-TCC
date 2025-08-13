import React, { useState } from "react";
import StudentForm from "./components/student";
import "bootstrap/dist/css/bootstrap.min.css";

interface Student {
  name: string;
  grade: string;
  subject: string;
}

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const handleStudentSubmit = (data: Student) => {
    setStudents([...students, data]);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Plataforma de Aprendizagem Adaptativa</h1>

      <StudentForm onSubmit={handleStudentSubmit} />

      {students.length > 0 && (
        <div className="mt-4">
          <h4>Alunos Cadastrados</h4>
          <ul className="list-group">
            {students.map((student, index) => (
              <li key={index} className="list-group-item">
                {student.name} - {student.grade} ({student.subject || "Sem disciplina informada"})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
