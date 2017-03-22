// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 

            function question() {
 	var x = document.getElementById("name").value;
	if(name=="x")	
	{
		obj = JSON.parse(text);
		document.getElementById("display").innerHTML =
		obj.question[1].first;
	}

    //var d = new Date(x);
    //var n = d.getDay()
    //var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    //document.getElementById("display").innerHTML = days[n];
            });
      });
  
  }
);
