import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card p-4 text-center mx-auto shadow-sm" style={{ maxWidth: '400px' }}>
      <h2>Counter Component</h2>
      <h1 className="display-3 my-3 text-primary">{count}</h1>
      <div>
        <button className="btn btn-success me-2" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="btn btn-warning me-2" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}