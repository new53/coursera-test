# coursera-test
coursera test rep
-------------------
// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("#btn")
      .addEventListener("click", function () {
        
        // Call server to get the name

	if(document.getElementById("btn").value === "Start Test"){
	$ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = res.q1; 
              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
	}
        
	if(document.getElementById("btn").value === "Submit"){
		$ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var answer = res.a1;
	      var response = " "; 
	      if(document.getElementById("ans1").checked){
	      	response = "true"; 
              }else{
		response = "false"; 
	      }
              var message = " "; 
	      if(response == answer){
	      	message = "Your answer is correct!"; 
	      }else{
		 message = "Your answer is wrong!"; 
	      }
		document.querySelector("#content")
                	.innerHTML = "<h2>" + message + "</h2>";
            });
	}
	document.getElementById("btn").value = "Submit";
	


 		
      });
  }
);


-------------:----

octype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <script src="js/ajax-utils.js"></script>
    <script src="js/script.js"></script>
  </head>
<body>
  <h1 id="title">WP A2 Practical Solution // Test on Firefox</h1>
  <div id="content"></div>

  <input type="radio" name="answer" id="ans1" value="true" checked> True<br>
  <input type="radio" name="answer" id= "ans2" value="false"> False<br>
  <input type="button" value="Start Test" id="btn"/>

  
  
</body>
</html>

