// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var temp =
   document.getElementById("name").value;
                 
              if ( temp === res.student1) {
             
                
	document.getElementById("display").innerHTML =
		res.q1;
              }
              else if (temp === res.student2) {
               
	document.getElementById("display").innerHTML =
		res.q2;
              }
        
  
  }
);
