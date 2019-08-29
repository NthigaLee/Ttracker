function myFunction(){
    var a = parseInt(document.getElementById("sideA").value);
    var b = parseInt(document.getElementById("sideB").value);
    var c = parseInt(document.getElementById("sideC").value);
  if (a===b&&b===c){
      alert("This is an equilateral triangle");
  }
  else if(a===b&&c!==a||b===c&&a!==b||c===a&&b!==a){
    alert("This is an isosceles triangle.");
}
  else if(a+b>c&&b+c>a&&c+a>b){
      alert("This is a scalene triangle.");
  }
  
  else{
      alert("This is not a triangle.");
  }
}
