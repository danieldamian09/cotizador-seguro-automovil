import React, { Fragment } from 'react'

function Resumen({datos}) {

    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null

    return (
        <Fragment>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: </li>
                <li>Año del Auto: </li>
                <li>Plan: </li>
            </ul>

        </Fragment>
    )
}

export default Resumen
