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
              x=document.getElementById("myText").value;
             
              var message = 
                res.name1 + " " + res.name2
              message +=x;
              if (res.name1==x) {
                message += "question for one";
              }
	if (res.name1==x) {
                	message += "question for two";
              }
              else {
                message += "enter a name";
              }
             
              message += res.numberOfDisplays + 1;
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
