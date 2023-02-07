import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    apiUrl();
  }, []);
  const apiUrl = async () => {
    try {
      const good = await fetch("https://mul14.github.io/data/employees.json");
      const value = await good.json();
      const result = value.addresses.map((data, index) => {
        return (
          <>
            <p key={index}>{data.salary}</p>
          </>
        );
      });
      setPosts(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h3>Json Manipulation 1</h3>
        <button>Soal Pertama</button>
        <table style={{ textAlign: "flex-center" }}>
          <thead>
            <tr>
              <th>nama</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{posts}</td>
              <td>{posts}</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
