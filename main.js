// $('.faq-head').each(function(){
//     $(this).click(function(){
//         $(this).next().toggleClass('show-faq-content');
//         let icon = $(this).children('span').children("i").attr('class');


//         if(icon == "fas fa-plus"){
//             $(this).children('span').html('<i class = "fa fa-times"></i>');
//         } else {
//             $(this).children('span').html('<i class = "fa fa-plus"></i>');
//         }
//     })
// })


// alert("Hi there");
// confirm("I am gonna do something, okay?");
// prompt("What should I do?");


const fonts = document.querySelectorAll('.fonts');

fonts.forEach(function(font){
font.addEventListener('click', function(e) {
    const faxItem = e.currentTarget.parentElement.parentElement;
    faxItem.classList.toggle("show-text");
})
})