import { useState, useRef } from 'react';

export default function HooksDemo() {
  const [name, setName] = useState('Guest');
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Directly focuses input box using useRef
    inputRef.current.focus();
  };

  return (
    <div className="card p-4 shadow-sm">
      <h2>useState and useRef Demo</h2>
      <p className="mt-2"><strong>Current Name (useState):</strong> {name}</p>
      
      <div className="mb-3">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Type a new name..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <button className="btn btn-secondary" onClick={handleFocus}>
        Focus Input Box using useRef
      </button>
    </div>
  );
}