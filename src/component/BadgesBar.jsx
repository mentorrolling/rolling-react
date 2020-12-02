import React from "react";
import "../css/form.css";

export default function BadgesBar({ buscarBadge, handleChange }) {
  return (
    <div className="form-group formInput">
      <input
        type="text"
        className="form-control"
        name="nombre"
        value={buscarBadge.nombre}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Nombre del asistente..."
      />
    </div>
  );
}
