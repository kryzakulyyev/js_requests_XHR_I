// Information to reach API


// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const xhr = new XMLHttpRequest();
  const url = 'http://api.datamuse.com/words?rel_rhy=' + inputField.value; 

  xhr.responseType = 'json';
  xhr.onreadystatechange = () =>{
  if(xhr.readyState === XMLHttpRequest.DONE){
    renderResponse(xhr.response)
  } 
  }

  xhr.open("GET", url);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault()
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  };
 getSuggestions();  
};

submit.addEventListener('click', displaySuggestions)
