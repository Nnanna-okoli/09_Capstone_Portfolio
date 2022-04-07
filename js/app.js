toggleBody = () => {
    var element = document.body;
    element.classList.toggle('dark-mode');
    toggleGithub();
    toggleLines();
}

toggleGithub = () => {
    var elementTwo = document.querySelectorAll('.github-icon');
    // console.log(elementTwo);

    elementTwo.forEach(elementNode => {
        elementNode.classList.toggle("dark-mode-carousel");
    });


};

toggleLines = () => {
    var elementThree = document.querySelectorAll('hr');
    console.log(elementThree);

    elementThree.forEach(elementNode => {
        elementNode.classList.toggle("hr-dark-mode");
    });


};



//

/*Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
