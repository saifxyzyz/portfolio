document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("myModal");
  var link = document.getElementById("openModalLink")
  var closeBtn = document.getElementById("closebutton")
  if (link){
    link.onclick = function(event) {
      event.preventDefault()
      modal.classList.add('active')
    }
  }
  if (closeBtn) {
    closeBtn.onclick = function() {
      modal.classList.remove('active')
    }
  }

})
