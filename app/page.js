"use client";

import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [ok, setOk] = useState(false);

  if (!ok) {
    return (
      <div style={{ padding: 20 }}>
        <h2>ISERSS TC PM</h2>

        <input
          placeholder="Antre kòd"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button onClick={() => setOk(code === "ISERSS2026")}>
          Konekte
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard aktif</h1>
      <button>Ajoute kou</button>
    </div>
  );
}
