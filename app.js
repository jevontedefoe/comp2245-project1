document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const frequencySelect = document.getElementById('frequency');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const frequencyError = document.getElementById('frequency-error');

  const formMessage = document.getElementById('form-message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (event) => {
    event.preventDefault();let hasError = false;
    let firstErrorField = null;

    // Reset success message state
    if (formMessage) {
      formMessage.textContent = '';
      formMessage.classList.remove('success');
    }