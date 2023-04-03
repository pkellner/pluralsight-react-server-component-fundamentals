import React, {useState} from "react";

type LegendProps = {
  legendTitle: string;
};

function Legend({ legendTitle }: LegendProps) {
  const [reactServer, setReactServer] = useState<boolean>(false);
  const [reactClient, setReactClient] = useState<boolean>(false);

  const legendStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    backgroundColor: "#eee",
  };

  const checkboxStyle: React.CSSProperties = {
    marginBottom: "10px",
  };

  return (
    <div style={legendStyle}>
      <h4 style={{ marginBottom: "20px" }}>{legendTitle}</h4>
      <div className="form-check" style={checkboxStyle}>
        <input
          className="form-check-input"
          type="checkbox"
          id="reactServer"
          checked={reactServer}
          onChange={() => setReactServer(!reactServer)}
        />
        <label
          className="form-check-label"
          htmlFor="reactServer"
          style={{ color: "blue" }}
        >
          React Server Components
        </label>
      </div>
      <div className="form-check" style={checkboxStyle}>
        <input
          className="form-check-input"
          type="checkbox"
          id="reactClient"
          checked={reactClient}
          onChange={() => setReactClient(!reactClient)}
        />
        <label
          className="form-check-label"
          htmlFor="reactClient"
          style={{ color: "green" }}
        >
          React Client Components
        </label>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: "#ddd", padding: "20px" }}>
      <Legend legendTitle="Display Options for Server and Client Components" />
    </div>
  );
}
