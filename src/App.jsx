<<<<<<< HEAD
import React from "react";
import LibraryManagement from "./components/LibraryManagement";

function App() {
  return (
    <div>
      <LibraryManagement />
=======
// App.jsx
import React from "react";
import "./App.css";

function App() {
  const products = [
    { name: "Wireless Mouse", price: 25.99, status: "In Stock" },
    { name: "Keyboard", price: 45.5, status: "Out of Stock" },
    { name: "Monitor", price: 199.99, status: "In Stock" },
  ];

  return (
    <div className="container">
      <h1>Products List</h1>
      <div className="products">
        {products.map((p, index) => (
          <div className="card" key={index}>
            <h3>{p.name}</h3>
            <p><b>Price:</b> ${p.price}</p>
            <p><b>Status:</b> {p.status}</p>
          </div>
        ))}
      </div>
>>>>>>> a0ea59b8fb6716487886a59f9458ef90673edf32
    </div>
  );
}

export default App;
