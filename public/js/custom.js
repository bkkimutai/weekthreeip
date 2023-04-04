$(document).ready(function() {
    $("h1").click(()=> {
      alert("This is a header.");
    });
  
    $("p").click(() => {
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
      });
    $("#green").click(()=>{
        $("body").removeClass();
        $("body").addClass("green-background");
    });
    $("#yellow").click(()=>{
        $("body").removeClass();
        $("body").addClass("yellow-background");
    });
    $("#red").click(()=>{
        $("body").removeClass();
        $("body").addClass("red-background");
    });
    })