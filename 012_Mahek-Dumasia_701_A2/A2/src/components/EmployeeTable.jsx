import { useState, useEffect } from 'react';

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('/employees.json')
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error('Error fetching employees:', err));
  }, []);

  return (
    <div className="card p-4 shadow-sm">
      <h2>Employee List</h2>
      <table className="table table-striped table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>₹{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}