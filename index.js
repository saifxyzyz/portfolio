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
  var judgmentModal = document.getElementById("judgmentModal");
  var closeJudgmentBtn = document.getElementById("closeJudgmentModal")

  // Window dragging functionality
  function makeWindowDraggable(window) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    const titleBar = window.querySelector('.closecontainer');
    
    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target.closest('.closebutton')) return;
      
      isDragging = true;
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;
      isDragging = false;
    }

    function drag(e) {
      if (isDragging) {
        e.preventDefault();
        
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        window.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
    }

    titleBar.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
  }

  // Make all modal windows draggable
  [modal1, modal2, modal3, modal4, modal5].forEach(modal => {
    if (modal) makeWindowDraggable(modal);
  });

  // Judgment modal specific functionality
  function makeJudgmentModalDraggable() {
    const judgmentModal = document.getElementById("judgmentModal");
    if (judgmentModal && !judgmentModal.dataset.draggable) {
      makeWindowDraggable(judgmentModal);
      judgmentModal.dataset.draggable = "true";
    }
  }

  function elevateJudgmentModal() {
    const judgmentModal = document.getElementById("judgmentModal");
    if (judgmentModal) {
      judgmentModal.style.zIndex = topZIndex + 10;
    }
  }

  // Window management for taskbar
  const openWindows = new Map();
  const windowButtonsContainer = document.getElementById('windowButtons');

  function updateTaskbarButtons() {
    windowButtonsContainer.innerHTML = '';
    
    openWindows.forEach((title, id) => {
      const windowElement = document.getElementById(id);
      if (windowElement && windowElement.classList.contains('active')) {
        const button = document.createElement('div');
        button.className = 'window-button';
        button.textContent = title;
        button.onclick = () => elevateModal(windowElement);
        windowButtonsContainer.appendChild(button);
      }
    });
  }

  // Map windows to their titles
  const windowTitles = {
    'modal-1': 'About Me',
    'modal-2': 'Contact',
    'modal-3': 'Projects',
    'modal-4': 'Contributions',
    'modal-5': 'AITP Judge'
  };

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
      openWindows.set('modal-1', windowTitles['modal-1'])
      updateTaskbarButtons()
    }
  }
  if (closeBtn1) {
    closeBtn1.onclick = function() {
      modal1.classList.remove('active')
      openWindows.delete('modal-1')
      updateTaskbarButtons()
    }
  }
  if (link2){
    link2.onclick = function(event) {
      event.preventDefault()
      elevateModal(modal2)
      modal2.classList.add('active')
      openWindows.set('modal-2', windowTitles['modal-2'])
      updateTaskbarButtons()
    }
  }
  
  if (closeBtn2) {
    closeBtn2.onclick = function() {
      modal2.classList.remove('active')
      openWindows.delete('modal-2')
      updateTaskbarButtons()
    }
  }
  if (link3){
    link3.onclick = function(event) {
      event.preventDefault()
      elevateModal(modal3)
      modal3.classList.add('active')
      openWindows.set('modal-3', windowTitles['modal-3'])
      updateTaskbarButtons()
    }
  }
  if (closeBtn3) {
    closeBtn3.onclick = function() {
      modal3.classList.remove('active')
      openWindows.delete('modal-3')
      updateTaskbarButtons()
    }
  }
  if (link4){
    link4.onclick = function(event) {
      event.preventDefault()
      elevateModal(modal4)
      modal4.classList.add('active')
      openWindows.set('modal-4', windowTitles['modal-4'])
      updateTaskbarButtons()
    }
  }
  if (closeBtn4) {
    closeBtn4.onclick = function() {
      modal4.classList.remove('active')
      openWindows.delete('modal-4')
      updateTaskbarButtons()
    }
  }
  if (link5){
    link5.onclick = function(event) {
      event.preventDefault()
      elevateModal(modal5)
      modal5.classList.add('active')
      openWindows.set('modal-5', windowTitles['modal-5'])
      updateTaskbarButtons()
    }
  }
  if (closeBtn5) {
    closeBtn5.onclick = function() {
      modal5.classList.remove('active')
      openWindows.delete('modal-5')
      updateTaskbarButtons()
    }
  }

  if (closeJudgmentBtn) {
    closeJudgmentBtn.onclick = function() {
      judgmentModal.style.display = 'none'
    }
  }

  // Make functions globally available
  window.closeJudgmentModal = function() {
    if (judgmentModal) {
      judgmentModal.style.display = 'none'
    }
  }

  window.showJudgmentModal = function(isYTP, confidence, isError = false, errorMessage = "") {
    const verdictIcon = document.getElementById("verdictIcon");
    const verdictText = document.getElementById("verdictText");
    const confidenceText = document.getElementById("confidenceText");

    if (isError) {
        verdictIcon.innerHTML = "!";
        verdictIcon.className = "verdict-icon";
        verdictText.innerHTML = "Error: " + errorMessage;
        verdictText.className = "judgment-content verdict-text";
        confidenceText.innerText = "Please try again later";
    } else if (isYTP) {
        verdictIcon.className = "verdict-icon ytp";
        verdictText.innerHTML = "YTP (You're The Problem)";
        verdictText.className = "judgment-content verdict-text";
        confidenceText.innerText = "Confidence: " + confidence.toFixed(1) + "%";
    } else {
        verdictIcon.className = "verdict-icon ntp";
        verdictText.innerHTML = "NTP (You're Not The Problem)";
        verdictText.className = "judgment-content verdict-text";
        confidenceText.innerText = "Confidence: " + confidence.toFixed(1) + "%";
    }

    judgmentModal.style.display = "block";
    // Make judgment modal draggable and elevate it
    makeJudgmentModalDraggable();
    elevateJudgmentModal();
  }

})
