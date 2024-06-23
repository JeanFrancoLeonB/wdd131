const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {

    // Si el campo esta vacío
    if (input.value.trim() !== '') {
        // Crear elementos li y botón de eliminar
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Establecer el contenido de texto del li al valor del input
        li.textContent = input.value;

        // Establecer el texto del botón de eliminar
        deleteButton.textContent = 'X';

        // Agregar el botón de eliminar al li
        li.append(deleteButton);

        // Agregar el li a la lista ul
        list.append(li);

        // Limpiar el campo de entrada después de agregar el elemento
        input.value = '';

        // Establecer el foco en el campo de entrada para facilitar la siguiente entrada
        input.focus();

        // Event listener para el botón de eliminar
        deleteButton.addEventListener('click', function () {
            list.removeChild(li); // Eliminar el li de la lista ul al hacer clic en el botón de eliminar
            input.focus(); // Establecer el foco en el campo de entrada
        });
    } else {
        // Si el campo de entrada está vacío, establecer el foco en el campo de entrada y mostrar una alerta
        input.focus();
        alert('Please enter a chapter before adding.');
    }
});