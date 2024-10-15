 function smoothScroll(targetId) {
     const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
}

 document.addEventListener('contextmenu', function(e) {
     e.preventDefault();
});
