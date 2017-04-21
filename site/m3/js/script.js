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
   document.getElementById("student").value;
                 
              if ( temp === res.sap1||temp === res.email1||temp === res.contact1||temp === res.dob1||temp === res.cgpa1) {
             
                
	document.getElementById("display").innerHTML =
		res.name1;
              }
              else if ( temp === res.sap2||temp === res.email2||temp === res.contact2||temp === res.dob2||temp === res.cgpa2) {
               
	document.getElementById("display").innerHTML =
		res.name2;
              }
	else if ( temp === res.sap3||temp === res.email3||temp === res.contact3||temp === res.dob3||temp === res.cgpa3) {
               
	document.getElementById("display").innerHTML =
		res.name3;
              }
              
            });
      });
  }
);

