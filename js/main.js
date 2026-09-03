document.addEventListener('DOMContentLoaded', () => {
    // Acordeão FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('span');
            
            // Fecha todos os outros
            document.querySelectorAll('.faq-answer').forEach(el => {
                if (el !== answer) {
                    el.style.maxHeight = null;
                }
            });
            document.querySelectorAll('.faq-question span').forEach(el => {
                if (el !== icon) {
                    el.textContent = '+';
                }
            });

            // Toggle atual
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = '−';
            }
        });
    });

    // Barra de Cookies (Simplificado)
    const cookieBar = document.getElementById('cookie-bar');
    if (cookieBar) {
        if (!localStorage.getItem('cookiesAccepted')) {
            cookieBar.style.display = 'block';
        }

        document.getElementById('accept-cookies')?.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBar.style.display = 'none';
        });
    }
});
