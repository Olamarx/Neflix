// Using selector inside the element

const faqItems = document.querySelectorAll(".faq-item");
// console.log(faqItems)
faqItems.forEach(function(faq){
// console.log(faq);
const fonts = faq.querySelector(".fonts");
// console.log(fonts);
fonts.addEventListener('click', function(){

    faqItems.forEach(function(closeOthers){
        if(closeOthers !== faq){
            closeOthers.classList.remove("show-text");
        }
    })




faq.classList.toggle('show-text');
})
});





// Tranversing the dom way

// const fonts = document.querySelectorAll('.fonts');

// fonts.forEach(function(font){
// font.addEventListener('click', function(e) {
//     const faqItem = e.currentTarget.parentElement.parentElement;
//     faqItem.classList.toggle("show-text");
// })
// })