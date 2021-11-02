export const EmployeesList = ({ list, deleteEmployee }) => (
  <table>
    <tbody>
      {list.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.first_name}</td>
          <td>
            <button type="button" onClick={() => deleteEmployee(employee.id)}>
              Удалить
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
