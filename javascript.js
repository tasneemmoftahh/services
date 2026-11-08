document.addEventListener('DOMContentLoaded', () => {

    //  التحكم في قائمة الهاتف المحمول 
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // إغلاق القائمة عند الضغط على أي رابط داخلها
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    //  ميزة التصفية والبحث السريع 
    const searchInput = document.getElementById('searchInput');
    const systemCards = document.querySelectorAll('.system-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            systemCards.forEach(card => {
                const title = card.getAttribute('data-title').toLowerCase();
                const text = card.textContent.toLowerCase();

                if (title.includes(query) || text.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

});