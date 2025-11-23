// Firebase Form Submission Handler
// This script handles submitting the student intern application form to Firebase

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applicationForm');

    if (!form) {
        console.error('Application form not found');
        return;
    }

    const submitBtn = form.querySelector('.submit-btn');
    const modal = document.querySelector('.modal');
    const modalTitle = document.querySelector('#modal-title');
    const modalMessage = document.querySelector('#modal-message');
    const closeBtn = document.querySelector('.close-btn');

    // Combine country code with phone number
    const countryCodeSelect = document.getElementById('country_code');
    const phoneLocalInput = document.getElementById('phone');
    const phoneFullInput = document.getElementById('phone_full');

    function updateFullPhone() {
        if (countryCodeSelect && phoneLocalInput && phoneFullInput) {
            phoneFullInput.value = countryCodeSelect.value + phoneLocalInput.value;
        }
    }

    if (countryCodeSelect && phoneLocalInput) {
        countryCodeSelect.addEventListener('change', updateFullPhone);
        phoneLocalInput.addEventListener('input', updateFullPhone);
    }

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Check if Firebase is configured
        if (!window.firebaseDB) {
            modalTitle.textContent = 'Configuration Error';
            modalMessage.textContent = 'Firebase is not configured. Please contact the administrator.';
            modal.classList.add('show');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        // Update full phone number
        updateFullPhone();

        // Collect form data
        const formData = new FormData(form);
        const applicationData = {
            // Personal Information
            fullName: `${formData.get('first_name')} ${formData.get('last_name')}`,
            firstName: formData.get('first_name'),
            lastName: formData.get('last_name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            country: formData.get('country'),
            city: formData.get('city') || '',
            nationality: formData.get('nationality'),

            // Education
            university: formData.get('university') || '',
            degree: formData.get('degree') || '',
            major: formData.get('major') || '',
            year: formData.get('year') || '',
            program: formData.get('program') || '',
            languages: formData.get('languages') || '',

            // Areas of Interest
            interests: formData.getAll('interest[]'),

            // Qualifications
            skills: formData.get('skills') || '',
            motivation: formData.get('motivation') || '',
            projects: formData.get('projects') || '',
            comments: formData.get('comments') || '',

            // Metadata
            status: 'Pending',
            submittedAt: new Date().toISOString(),
            submittedDate: new Date().toLocaleDateString(),
            submittedTime: new Date().toLocaleTimeString(),
            consent: formData.get('consent') ? true : false
        };

        try {
            // Submit to Firebase Firestore
            const docRef = await window.firebaseDB.collection('applications').add(applicationData);

            console.log('Application submitted successfully:', docRef.id);

            modalTitle.textContent = 'Application Submitted!';
            modalMessage.textContent = 'Thank you for your application. We have received it and will review it carefully. You should receive a confirmation email soon.';
            modal.classList.add('show');
            form.reset();
        } catch (error) {
            console.error('Submission error:', error);
            modalTitle.textContent = 'Submission Error';
            modalMessage.textContent = 'An error occurred while submitting your application. Please try again or contact us at info@cowafrica.org';
            modal.classList.add('show');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Application';
        }
    });

    // Modal close handlers
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
});
