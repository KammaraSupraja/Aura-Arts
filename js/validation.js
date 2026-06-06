document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

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
                    e.stopPropagation(); 
                    dropdownToggle.parentElement.classList.toggle('active');
                }
            });
        }
    }

    const form = document.getElementById('contactForm');
    if (form) {
        const nameInput = document.getElementById('userName');
        const emailInput = document.getElementById('userEmail');
        const messageInput = document.getElementById('userMessage');
        const successAlert = document.getElementById('formSuccess');

        loadInputDrafts();
        nameInput.addEventListener('input', () => {
            validateName();
            localStorage.setItem('draft_name', nameInput.value);
        });

        emailInput.addEventListener('input', () => {
            validateEmail();
            localStorage.setItem('draft_email', emailInput.value);
        });

        messageInput.addEventListener('input', () => {
            validateMessage();
            localStorage.setItem('draft_message', messageInput.value);
        });
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 

            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();

            if (isNameValid && isEmailValid && isMessageValid) {
                const newSubmission = {
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    message: messageInput.value.trim(),
                    timestamp: new Date().toLocaleString()
                };

                const existingSubmissions = JSON.parse(localStorage.getItem('userSubmissions')) || [];
                
                existingSubmissions.push(newSubmission);
                
                localStorage.setItem('userSubmissions', JSON.stringify(existingSubmissions));

                successAlert.style.display = 'block';
                form.reset();
                clearDrafts();
                
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
            if (messageInput.value.trim() !== '') {
                setSuccess(messageInput);
                return true;
            } else {
                setError(messageInput);
                return false;
            }
        }

        function loadInputDrafts() {
            if (localStorage.getItem('draft_name')) nameInput.value = localStorage.getItem('draft_name');
            if (localStorage.getItem('draft_email')) emailInput.value = localStorage.getItem('draft_email');
            if (localStorage.getItem('draft_message')) messageInput.value = localStorage.getItem('draft_message');
        }

        function clearDrafts() {
            localStorage.removeItem('draft_name');
            localStorage.removeItem('draft_email');
            localStorage.removeItem('draft_message');
        }
    }
    const submissionsContainer = document.getElementById('submissionsContainer');
    if (submissionsContainer) {
        const entries = JSON.parse(localStorage.getItem('userSubmissions')) || [];

        if (entries.length === 0) {
            submissionsContainer.innerHTML = `
                <div class="no-submissions">
                    <p>No messages received yet.</p>
                </div>`;
            return;
        }
        submissionsContainer.innerHTML = entries.map((entry, index) => `
            <div class="submission-card">
                <div class="card-header">
                    <h3>${escapeHTML(entry.name)}</h3>
                    <span class="timestamp">${entry.timestamp}</span>
                </div>
                <p class="email"><strong>Email:</strong> <a href="mailto:${escapeHTML(entry.email)}">${escapeHTML(entry.email)}</a></p>
                <p class="message"><strong>Message:</strong> "${escapeHTML(entry.message)}"</p>
            </div>
        `).join('');
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }
});