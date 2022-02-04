const fonts = document.querySelectorAll('.fonts');

fonts.forEach(function(font){
font.addEventListener('click', function(e) {
    const faxItem = e.currentTarget.parentElement.parentElement;
    faxItem.classList.toggle("show-text");
})
})