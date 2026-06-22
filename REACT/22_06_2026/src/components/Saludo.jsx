import {
  useActionState,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

const Saludo = () => {
  const [nombre, setNombre] = useState('Agustín');
  const mensaje = 'Hola';

  const clientes = [
    {
      id: 1,
      name: 'Ana',
    },
    {
      id: 2,
      name: 'Agustín',
    },
  ];

  const saludar = () => {
    console.log(mensaje);
  };

  return (
    <div
      id="hola"
      className="adios"
    >
      <p>
        {mensaje}, {nombre}
      </p>
    </div>
  );
};

export default Saludo;
