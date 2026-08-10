// Nested Component 1: Card Container (Demonstrates Children / Containment)
function CardContainer({ title, children }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="m-0">{title}</h5>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

// Main Functional Component
export default function Concepts() {
  const isLoggedIn = true;
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

  return (
    <div>
      <h2 className="mb-4">React Core Concepts</h2>

      {/* Requirement: Children Containment & Nested Components */}
      <CardContainer title="1. Conditional Rendering Example">
        {isLoggedIn ? (
          <p className="text-success fw-bold">Welcome back, User! (Logged In)</p>
        ) : (
          <p className="text-danger">Please log in to continue.</p>
        )}
      </CardContainer>

      <CardContainer title="2. List Rendering Example">
        <ul className="list-group">
          {fruits.map((fruit, index) => (
            <li key={index} className="list-group-item">
              {index + 1}. {fruit}
            </li>
          ))}
        </ul>
      </CardContainer>
    </div>
  );
}