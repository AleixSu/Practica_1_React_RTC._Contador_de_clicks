# Práctica 1 RTC. Contador de clicks

## Descripción

Aplicación mínima en React que incrementa o decrementa un contador
mediante dos botones. El valor del contador se almacena en el componente
principal y se muestra en un componente independiente.

## Estructura

    src/
    ├─ App.jsx
    ├─ components/
    │  ├─ Button/
    │  │  └─ Button.jsx
    │  └─ ShowCount/
    │     └─ ShowCount.jsx
    └─ App.css

## Lógica

-   `App.jsx` mantiene el estado `countNum`.
-   `Button` recibe la función de click como prop y ejecuta la
    modificación del estado.
-   `ShowCount` recibe el valor del contador y lo presenta.

## Código esencial

**App.jsx**

``` jsx
import React from 'react'
import './App.css'
import Button from './components/Button/Button'
import ShowCount from './components/ShowCount/ShowCount'

function App() {
  const [countNum, setCountNum] = React.useState(0)

  return (
    <div className='App'>
      <ShowCount countNum={countNum} />
      <div className='buttonsDiv'>
        <Button
          className='RestarButton'
          buttonText='Restar'
          onClick={() => setCountNum(countNum - 1)}
        />
        <Button
          className='SumarButton'
          buttonText='Sumar'
          onClick={() => setCountNum(countNum + 1)}
        />
      </div>
    </div>
  )
}

export default App
```

**Button.jsx**

``` jsx
import React from 'react'

const Button = ({ className, buttonText, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default Button
```

**ShowCount.jsx**

``` jsx
import React from "react";

const ShowCount = ({countNum})=> {
  return(
    <p>
      You clicked here {countNum} {countNum === 1 ? "time" : "times"}
    </p>
  )
}

export default ShowCount
```

## Objetivo

Practicar estados en React, props entre componentes y eventos `onClick`.
