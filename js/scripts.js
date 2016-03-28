$(document).ready(function() {

  $("#form-1 form").submit(function(event) {

    var inputs = ["input1", "input2", "input3"];
    var originalList = [];

    inputs.forEach(function(input){
      var inputList = $("input#" + input).val();
      originalList.push(inputList);
    });

    var sorted = originalList.slice().sort();
    var lowerSorted = sorted.slice();
    var upperSorted =[];

    lowerSorted.forEach(function(lowElement){
      var upperElement = lowElement.toUpperCase();
      upperSorted.push(upperElement);
    });

    $("#result").append("<li>"+originalList+"</li>");
    $("#result").append("<li>"+sorted+"</li>");
    $("#result").append("<li>"+upperSorted+"</li>");

    event.preventDefault();
  });
});
