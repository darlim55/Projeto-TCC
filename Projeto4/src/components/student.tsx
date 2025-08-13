import React, { useState, useEffect } from "react";

interface StudentFormData {
  name: string;
  grade: string;
  subject: string;
}

interface StudentFormProps {
  onSubmit: (data: StudentFormData) => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<StudentFormData>({
    name: "",
    grade: "",
    subject: ""
  });

  const [message, setMessage] = useState("");

  // useEffect para simular ação inicial
  useEffect(() => {
    setMessage("Preencha o formulário para cadastrar o aluno.");
  }, []);

  // Atualiza o título da aba quando o nome muda
  useEffect(() => {
    if (formData.name) {
      document.title = `Cadastro: ${formData.name}`;
    }
  }, [formData.name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setMessage(`Aluno "${formData.name}" cadastrado com sucesso!`);
    setFormData({ name: "", grade: "", subject: "" });
  };

  return (
    <div className="card shadow-sm p-3">
      <h4 className="mb-3">Cadastro de Aluno</h4>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome do Aluno</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="form-control"
            onChange={handleChange}
            placeholder="Digite o nome do aluno"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Série/Ano</label>
          <select
            name="grade"
            value={formData.grade}
            className="form-select"
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="1º Ano">1º Ano</option>
            <option value="2º Ano">2º Ano</option>
            <option value="3º Ano">3º Ano</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Disciplina Preferida</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            className="form-control"
            onChange={handleChange}
            placeholder="Ex: Matemática"
          />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  );
};

export default StudentForm;
