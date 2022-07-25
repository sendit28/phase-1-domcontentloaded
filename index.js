document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const paragraph = document.getElementById("text")
    paragraph.innerHTML = 'This is really cool!'
  });



  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
