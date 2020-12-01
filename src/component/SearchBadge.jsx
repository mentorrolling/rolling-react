import React from 'react'

export default function SearchBadge(props) {
    return (
        <div className="form-group">
            <input type="text"
            className="form-control"
            name="nombre"
            autoComplete="off"
            placeholder="Nombre a buscar..."
            value={props.buscarBadge.nombre}
            onChange={props.handleChange}
            />
        </div>
    )
}
