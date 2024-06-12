document.querySelectorAll('.navbar-menu a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const targetId = item.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = document.querySelector('.navbar').offsetHeight + 40;
        
        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth' 
        });
    });
});