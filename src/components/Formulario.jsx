import { useState } from 'react';



const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault()

        if (nombre.trim().length < 3 || color.trim().length < 6) {
            setError('El nombre debe tener al menos 3 caracteres y el color debe tener al menos 6 caracteres .');
            return;
        } else

        setError('');
        onDatosCorrectos(true);

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Nombre:</label>
                <input
                    type='text'
                    placeholder='Ingresá tu nombre'
                    id='nombre'
                    value={nombre}
                    onChange={(e) => {
                        setNombre(e.target.value);
                        setError('');
                    }}
                />

                <label>Color:</label>
                <input
                    type='text'
                    placeholder='Ingresá un color'
                    value={color}
                    onChange={(e) => {
                        setColor(e.target.value);
                        setError('');
                    }}
                />

                <input type='submit' value='Enviar datos' />
            </form>

            <p>{error}</p>
        </>
    );
};

export default Formulario;