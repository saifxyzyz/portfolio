document.addEventListener('DOMContentLoaded', function() {
  var modal1 = document.getElementById("modal-1");
  var modal2 = document.getElementById("modal-2")
  var link1 = document.getElementById("openModalLink1")
  var link2 = document.getElementById("openModalLink2")
  var closeBtn1 = document.getElementById("closebutton1")
  var closeBtn2 = document.getElementById("closebutton2")
  const startButton = document.getElementById("startMenuToggle")
  const startMenu = document.getElementById("startMenu")
  startButton.addEventListener('click', (event) => {
        // Stop event from propagating (if needed)
        event.stopPropagation();
        
        // Toggle display
        if (startMenu.style.display === 'none' || startMenu.style.display === '') {
            startMenu.style.display = 'block';
        } else {
            startMenu.style.display = 'none';
        }
  });
  if (link1){
    link1.onclick = function(event) {
      event.preventDefault()
      modal1.classList.add('active')
    }
  }
  if (closeBtn1) {
    closeBtn1.onclick = function() {
      modal1.classList.remove('active')
    }
  }
  if (link2){
    link2.onclick = function(event) {
      event.preventDefault()
      modal2.classList.add('active')
  }
  }
  if (closeBtn2) {
    closeBtn2.onclick = function() {
      modal2.classList.remove('active')
    }
  }
})
