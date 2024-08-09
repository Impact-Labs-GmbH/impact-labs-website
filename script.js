const downArrow = document.querySelector('.down-arrow');
  
downArrow.addEventListener('click', () => {
    const windowHeight = window.innerHeight;
    const scrollOffset = windowHeight * 0.97;
    
    window.scrollTo({
      top: scrollOffset,
      behavior: 'smooth'
    });
});