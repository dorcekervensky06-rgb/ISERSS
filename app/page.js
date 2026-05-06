"use client";

import { useState } from "react";

const CODE = "ISERSS2026";

export default function Home() {
  const [code, setCode] = useState("");
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");

  const login = () => {
    if (code === CODE) {
      setUser({ name: "Etidyan" });
    } else {
      alert("Move kòd");
    }
  };

  const addCourse = () => {
    if (!title) return;
    setCourses([...courses, { id: Date.now(), title }]);
    setTitle("");
  };

  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h2>ISERSS TC PM</h2>
        <input
          placeholder="Antre kòd"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={login}>Konekte</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Byenveni {user.name}</h2>

      <div>
        <input
          placeholder="Tit kou"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addCourse}>Ajoute kou</button>

        {courses.map((c) => (
          <div key={c.id}>📘 {c.title}</div>
        ))}
      </div>
    </div>
  );
}
