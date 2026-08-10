import { useState, useEffect } from 'react';

export default function StudentSearch() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [semesterFilter, setSemesterFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  useEffect(() => {
    fetch('/students.json')
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error('Error fetching students:', err));
  }, []);

  // Filter logic based on Search and Filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.firstName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    
    const matchesSem = semesterFilter === '' || student.semester === semesterFilter;
    const matchesGender = genderFilter === '' || student.gender === genderFilter;

    return matchesSearch && matchesSem && matchesGender;
  });

  return (
    <div className="card p-4 shadow-sm">
      <h2>Student Directory (Search & Filter)</h2>

      {/* Controls Area */}
      <div className="row g-3 my-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by First Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={semesterFilter}
            onChange={(e) => setSemesterFilter(e.target.value)}
          >
            <option value="">All Semesters</option>
            <option value="Sem 3">Sem 3</option>
            <option value="Sem 5">Sem 5</option>
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* Table Display */}
      <table className="table table-hover table-bordered mt-3">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Semester</th>
            <th>Division</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.firstName}</td>
                <td>{s.semester}</td>
                <td>{s.div}</td>
                <td>{s.gender}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                No students found matching criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}