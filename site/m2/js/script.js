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
          else {
            document.getElementById("display").innerHTML =
		"enter valid name";
          }
              document.querySelector("#content")
                .innerHTML = "<h2>" + temp+ "</h2>";

              document.querySelector("#content")
                .innerHTML = "<h2>" + temp2+ "</h2>";
          document.querySelector("#content1")
                .innerHTML = "<h2>" + temp1+ "</h2>";
            });
      });
  
  }
);
