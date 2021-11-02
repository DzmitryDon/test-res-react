import { useState, useEffect } from "react";

import { EmployeesList } from "../components/EmployeesList";
import { EmployeesForma } from "../components/EmployeesFormayarn add eslint --dev";

export const Employees = () => {
  const [employeesList, setEmployeesList] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=12")
      .then((res) => res.json())
      .then((obj) => setEmployeesList(obj.data));
  }, []);

  function deleteEmployee(id) {
    setEmployeesList((list) => list.filter((employee) => employee.id !== id));
  }

  function addEmployee(newEmployee) {
    newEmployee.id =
      employeesList.length > 0
        ? employeesList[employeesList.length - 1].id + 1
        : 1;

    setEmployeesList((list) => list.concat(newEmployee));
  }

  return (
    <section id="employeers-page">
      <EmployeesList list={employeesList} deleteEmployee={deleteEmployee} />
      <EmployeesForma addEmployee={addEmployee} />
    </section>
  );
};
