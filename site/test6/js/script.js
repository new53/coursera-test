// Unobtrusive event binding
document.querySelector("#btn")
  .addEventListener("click", function () {
    
    // Call server to get the name
$ajaxUtils
      .sendGetRequest("data/name.json", 
        function (res) {
      var num = Number(document.getElementById("fname").value); 
      var arr = res.arr;
      var arr2 = res.arr2; 
      var message = "not found"; 

    for(var i = 0; i < 6; i++){
      	console.log(arr[i]); 
	if(arr[i] == num){
var message = res.name[i];
			   	 
           break; 
	}
      }
	
          document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
        });


	
  });
} );
