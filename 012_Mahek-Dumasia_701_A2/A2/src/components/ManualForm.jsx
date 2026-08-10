import { useState } from 'react';

export default function ManualForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setEmail(val);

    // Live manual validation rules
    if (!val) {
      setError('Email is required!');
    } else if (!val.includes('@') || !val.includes('.')) {
      setError('Please enter a valid email address!');
    } else {
      setError(''); // Clear error if valid
    }
  };

  return (
    <div className="card p-4 shadow-sm" style={{ maxWidth: '500px' }}>
      <h2>Manual Live Validation</h2>
      <div className="mt-3">
        <label className="form-label">Email Address:</label>
        <input
          type="text"
          className={`form-control ${error ? 'is-invalid' : email ? 'is-valid' : ''}`}
          value={email}
          onChange={handleChange}
          placeholder="example@domain.com"
        />
        {error && <div className="invalid-feedback">{error}</div>}
        {!error && email && <div className="valid-feedback">Looks good!</div>}
      </div>
    </div>
  );
}