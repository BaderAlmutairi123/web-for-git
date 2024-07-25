document.addEventListener('scroll', function() {
    const codingExperience = document.getElementById('coding-experience');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 100) { // Adjust this value as needed
        codingExperience.classList.remove('hidden');
        codingExperience.classList.add('visible');
    } else {
        codingExperience.classList.remove('visible');
        codingExperience.classList.add('hidden');
    }
});