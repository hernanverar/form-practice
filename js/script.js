function resetFields() {
    
}

function handleSelect(event) {
    event.preventDefault();
    let selection = document.getElementById("pais");
    let age = document.getElementById("age");
    let h2El = document.getElementById("print");
    h2El.innerText = 'You are ' + age.value + ' years old. And vas a ' + selection.value + '.';
   
    // document.getElementById("age").value = '';
    age.value = '';


  }
  
  window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", handleSelect);

  });