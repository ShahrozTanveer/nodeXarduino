function myFunction() {
  var checkBox = document.getElementById("switch1");
  
  if (checkBox.checked == true){
      var http = new XMLHttpRequest();
      var url = "http://192.168.10.17:8080/led/on";
    var params = "tesr=1";
  http.open("POST", url, true);


http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
    }
}
http.send(params);

  } else {
     var http = new XMLHttpRequest();
      var url = "http://192.168.10.17:8080/led/off";
    var params = "tesr=1";
  http.open("POST", url, true);


http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
    }
}
http.send(params);
  }
}
