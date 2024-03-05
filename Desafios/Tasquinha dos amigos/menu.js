
window.addEventListener("scroll", function(){
    let section = document.querySelector('#cabeçalho')
    section.classList.toggle('rolagem', window.scrollY > 0)
})