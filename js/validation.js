document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    // Targets links to handle closing the responsive menu drawer panel
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // FIXED: Combined into a single, clean loop that safely checks for the dropdown-toggle
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (!item.classList.contains('dropdown-toggle')) {
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                    hamburgerBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });

        const dropdownToggle = document.querySelector('.dropdown-toggle');
        if (dropdownToggle) {
            dropdownToggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault(); 
                    e.stopPropagation(); // FIXED: Prevents click from bubbling up and closing drawer
                    dropdownToggle.parentElement.classList.toggle('active');
                }
            });
        }
    }

    // --- Contact Form Validation Component ---
    const form = document.getElementById('contactForm');
    if (form) {
        const nameInput = document.getElementById('userName');
        const emailInput = document.getElementById('userEmail');
        const messageInput = document.getElementById('userMessage');
        const successAlert = document.getElementById('formSuccess');

        form.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();

            if (isNameValid && isEmailValid && isMessageValid) {
                successAlert.style.display = 'block';
                form.reset();
                
                document.querySelectorAll('.input-group').forEach(group => {
                    group.classList.remove('success-state');
                });
            } else {
                successAlert.style.display = 'none';
            }
        });

        function setError(inputElement) {
            const group = inputElement.parentElement;
            group.classList.add('error-state');
            group.classList.remove('success-state');
        }

        function setSuccess(inputElement) {
            const group = inputElement.parentElement;
            group.classList.add('success-state');
            group.classList.remove('error-state');
        }

        function validateName() {
            if (nameInput.value.trim().length >= 3) {
                setSuccess(nameInput);
                return true;
            } else {
                setError(nameInput);
                return false;
            }
        }

        function validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(emailInput.value.trim())) {
                setSuccess(emailInput);
                return true;
            } else {
                setError(emailInput);
                return false;
            }
        }

        function validateMessage() {
            if (inputHasValue(messageInput)) {
                setSuccess(messageInput);
                return true;
            } else {
                setError(messageInput);
                return false;
            }
        }

        function inputHasValue(element) {
            return element.value.trim() !== '';
        }

        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        messageInput.addEventListener('input', validateMessage);
    }
});