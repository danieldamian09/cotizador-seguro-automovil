import React, { useState } from 'react';
import Header from './components/Header'
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spiner from './components/Spiner';

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;

`;

const ContenedorFormulario = styled.div`
    background-color: #fff;
    padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const { cotizacion, datos } = resumen;

  const [cargando, guardarCargando] = useState(false)


  return (
    <Contenedor>
      <Header
        titulo="Cotizador de Seguros"
      />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spiner /> : null}



        <Resumen
          datos={datos}
        />

        {!cargando
          ? <Resultado
            cotizacion={cotizacion}
          />
          : null
        }
      </ContenedorFormulario>
    </Contenedor>

  );
}

export default App;
