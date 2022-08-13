
window.onhashchange = function(e) {
    const oldURL = e.oldURL.split('#')[1]
    const newURL = e.newURL.split('#')[1]
    const oldLink = document.querySelector(`.menu-main a[href="#${oldURL}"]`)
    const newLink = document.querySelector(`.menu-main a[href="#${newURL}"]`)
    oldLink && oldLink.classList.remove('selected')
    newLink && newLink.classList.add('selected')
}

function msg() {
    $("#mensagem").addClass('ver');
    setTimeout(function() {$("#mensagem").removeClass('ver'); }, 3000);
  }

function msgError() {
    $("#booking-error").addClass('ver');
    setTimeout(function() {$("#booking-error").removeClass('ver'); }, 3000);
}

function subsOk() {
    $("#newsletter-ok").addClass('ver');
    setTimeout(function() {$("#newsletter-ok").removeClass('ver'); }, 3000);
}