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
  var modal5 = document.getElementById("modal-5");
  var link5 = document.getElementById("openModalLink5")
  var closeBtn5 = document.getElementById("closebutton5")

  let topZIndex = 100;
  function elevateModal(modalElement) {
    topZIndex += 1; 
    
    modalElement.style.zIndex = topZIndex;
  }
  startButton.addEventListener('click', (event) => {
        event.stopPropagation();
        
        if (startMenu.style.display === 'none' || startMenu.style.display === '') {
            startMenu.style.display = 'block';
        } else {
            startMenu.style.display = 'none';
        }
  });
  if (link1){
    link1.onclick = function(event) {
      event.preventDefault()
      elevateModal(modal1)
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
      elevateModal(modal2)
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
      elevateModal(modal3)
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
      elevateModal(modal4)
      modal4.classList.add('active')
    }
  }
  if (closeBtn4) {
    closeBtn4.onclick = function() {
      modal4.classList.remove('active')
    }
  }
  if (link5){
    link5.onclick = function(event) {
      event.preventDefault()
      elevateModal(modal5)
      modal5.classList.add('active')
    }
  }
  if (closeBtn5) {
    closeBtn5.onclick = function() {
      modal5.classList.remove('active')
    }
  }
  if (modal1) {
      modal1.onclick = function(event) {
        elevateModal(modal1)
      }
  }
  if (modal2) {
      modal2.onclick = function(event) {
        elevateModal(modal2)
      }
  }
  if (modal3) {
      modal3.onclick = function(event) {
        elevateModal(modal3)
      }
  }
  if (modal4) {
      modal4.onclick = function(event) {
        elevateModal(modal4)
      }
  }
  if (modal5) {
      modal5.onclick = function(event) {
        elevateModal(modal5)
      }
  }

})
