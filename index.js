/* The script starts by adding an event listener that waits for the DOM (Document Object Model) to be fully loaded and ready. This ensures that all HTML elements are available for manipulation.*/
document.addEventListener('DOMContentLoaded', function () {     
  const cardForm = document.getElementById('cardForm');     /*Vairable initialization is used to referecence the form (`cardForm`)*/
  const modal = document.getElementById('modal');           /*Vairable initialization is used to referecence the modal window (`modal`)*/
  const certificateContent = document.getElementById('certificateContent'); /*Vairable initialization is used to referecence where the certificate will be displayed  (`certificateContent`)*/
  const closeModal = document.querySelector('.close');      /*Vairable initialization is used to referecence the close button (`closeModal`)*/

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {        /*an event listener is attactched to the "cardForm" to listen to the "submit" after that, the (e.ptrventDefault()) is used to prevent defualt refreshing of the page */
      e.preventDefault();

      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');

      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

      if (studentName.trim() === '' || personalMessage.trim() === '') {
          alert('Please fill in all fields');
          return;
      }

      // 🚨 Generate certificate content dynamically
      //if the inputs are valid, it will dynamically generate HTML content based on the input values and insert content into "certificateContent"
      certificateContent.innerHTML = `                  
          <h2>${studentName}</h2>
          <p>Course Name: ${courseName}</p>
          <p>Personalized Message: ${personalMessage}</p>
      `;

      //  Display the modal
      modal.style.display = 'block';    //set to block to making it visible and overlaying it on the page.

      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if (courseNameInput) courseNameInput.value = '';
  });

  //  🚨 Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });
});
