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




let chaptersArray = getChapterList() || [];

button.addEventListener('click', () => {
    if (input.value.trim() !== '') { // Check if input is not empty
      displayList(input.value); // Display the submitted chapter
      chaptersArray.push(input.value); // Add the chapter to the array
      setChapterList(); // Update localStorage with the new array
      input.value = ''; // Clear the input
      input.focus(); // Set focus back to the input
    }
  });

  function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item; // Set the text content of the list item
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // Add 'delete' class for styling
    li.append(deleteButton); // Append delete button to list item
    list.append(li); // Append list item to the list
  
    deleteButton.addEventListener('click', () => {
      list.removeChild(li); // Remove list item from the DOM
      deleteChapter(li.textContent); // Remove chapter from chaptersArray and localStorage
      input.focus(); // Set focus back to the input
    });
  }


  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove '❌' character
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Filter out the chapter
    setChapterList(); // Update localStorage
  }