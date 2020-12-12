// Please construct the XHR GET request boilerplate code step-by-step until you have written a complete GET request.

const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/users'; 

xhr.responseType = 'json';
xhr.onreadystatechange = () =>{
 if(xhr.readyState === XMLHttpRequest.DONE){
   console.log(xhr.response)
 } 
}

xhr.open("GET", url);
xhr.send()    ; 