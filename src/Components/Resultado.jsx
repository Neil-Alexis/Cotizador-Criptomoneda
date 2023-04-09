import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
color: #FFF;
font-family: 'LATO', sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;
`
const Precio = styled.p`
font-size: 24px;
span{
  font-weight: 700;
}
`
const Texto = styled.p`
font-size: 18px;
span{
  font-weight: 700;
}

`
const Imagen = styled.img`
display: block;
width: 120px;
`
export const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPC24HOUR, LASTUPDATE, IMAGEURL } =
    resultado
  return (

    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen cripto'></Imagen>
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultima 24 horas: <span>{CHANGEPC24HOUR}</span></Texto>
        <Texto>Ultima Actualizacion: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}
