import { useTransition } from "react";
import "./App.css";

function App() {
  const [isLoading, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      setTimeout(console.log("Hello"), 5000);
    });
  };

  return (
    <div className="App">
      <button onClick={handleClick} disabled={isLoading}>
        Submit
      </button>
    </div>
  );
}

export default App;
