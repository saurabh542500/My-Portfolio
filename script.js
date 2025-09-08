 const hamburger = document.querySelector('.hamburger');
    const navContent = document.querySelector('.nav-content');

    hamburger.addEventListener('click', () => {
      navContent.classList.toggle('show');
    });
