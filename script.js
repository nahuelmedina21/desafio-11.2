document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');

    registroForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        const data = {
            nombre,
            apellido,
            fechaNacimiento
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
            } else {
                console.error('Error en la solicitud.');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error.message);
        }
    });
});

