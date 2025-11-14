document.addEventListener('DOMContentLoaded', function() {
  var modal1 = document.getElementById("modal-1");
  var modal2 = document.getElementById("modal-2")
  var link1 = document.getElementById("openModalLink1")
  var link2 = document.getElementById("openModalLink2")
  var closeBtn1 = document.getElementById("closebutton1")
  var closeBtn2 = document.getElementById("closebutton2")
  const startButton = document.getElementById("startMenuToggle")
  const startMenu = document.getElementById("startMenu")
  var modal3 = document.getElementById("modal-3");
  var link3 = document.getElementById("openModalLink3")
  var closeBtn3 = document.getElementById("closebutton3")
  var modal4 = document.getElementById("modal-4");
  var link4 = document.getElementById("openModalLink4")
  var closeBtn4 = document.getElementById("closebutton4")

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
  if (link3){
    link3.onclick = function(event) {
      event.preventDefault()
      modal3.classList.add('active')
    }
  }
  if (closeBtn3) {
    closeBtn3.onclick = function() {
      modal3.classList.remove('active')
    }
  }
  if (link4){
    link4.onclick = function(event) {
      event.preventDefault()
      modal4.classList.add('active')
    }
  }
  if (closeBtn4) {
    closeBtn4.onclick = function() {
      modal4.classList.remove('active')
    }
  }

})
