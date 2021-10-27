import { useState } from "react";

const Form = ({ addEmployee }) => {
  const [newEmployee, setNewEmployee] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    addEmployee(newEmployee);
    setNewEmployee({});
    e.target.reset();
  }

  function handleChange(e) {
    const { name: key, value } = e.target;

    setNewEmployee((employee) => {
      employee[key] = value;

      return employee;
    });
  }

  return (
    <form action="/user/add" method="POST" onSubmit={handleSubmit}>
      <h3>Добавить нового сотрудника</h3>
      <input
        type="text"
        placeholder="Введите имя сотрудника"
        name="first_name"
        value={newEmployee.first_name}
        minLength={2}
        onChange={handleChange}
        required
      />
      <input type="submit" value="Добавить" />
    </form>
  );
};
export default Form;
