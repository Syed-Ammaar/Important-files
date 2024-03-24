import Sidebar from "./Sidebar";

const Bee=()=>{
    var links = document.querySelectorAll('.sidebarcontent');

links.forEach(function(link) {
  link.addEventListener('click', function() {
    // Remove 'selected' class from all links
    links.forEach(function(innerLink) {
      innerLink.classList.remove('selected');
    });

    // Add 'selected' class to the clicked link
    link.classList.add('selected');
  });
});
}

export default Bee;