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
    event.preventDefault();

    let hasError = false;
    let firstErrorField = null;

  
    if (formMessage) {
      formMessage.textContent = '';
      formMessage.classList.remove('success');
    }

  
    const nameVal = nameInput ? nameInput.value.trim() : '';
    if (!nameVal) {
      setError(nameInput, nameError, 'Enter your name.');
      hasError = true;
      if (!firstErrorField) firstErrorField = nameInput;
    } else {
      clearError(nameInput, nameError);
    }
    const emailVal = emailInput ? emailInput.value.trim() : '';
    if (!emailVal) {
      setError(emailInput, emailError, 'Enter your email address.');
      hasError = true;
      if (!firstErrorField) firstErrorField = emailInput;
    } else if (!emailRegex.test(emailVal)) {
      setError(emailInput, emailError, 'Enter an email address like name@example.com.');
      hasError = true;
      if (!firstErrorField) firstErrorField = emailInput;
    } else {
      clearError(emailInput, emailError);
    }
    const freqVal = frequencySelect ? frequencySelect.value.trim() : '';
    if (!freqVal) {
      setError(frequencySelect, frequencyError, 'Choose how often we should email you.');
      hasError = true;
      if (!firstErrorField) firstErrorField = frequencySelect;
    } else {
      clearError(frequencySelect, frequencyError);
    }
    if (hasError) {
      if (firstErrorField) {
        firstErrorField.focus();
      }
    } else {
      if (formMessage) {
        formMessage.textContent = `Thank you, ${nameVal}! You're on the mailing list.`;
        formMessage.classList.add('success');
      }
      form.reset();
    }
  });

  function setError(field, errorElement, message) {
    if (field) field.setAttribute('aria-invalid', 'true');
    if (errorElement) errorElement.textContent = message;
  }

  function clearError(field, errorElement) {
    if (field) field.removeAttribute('aria-invalid');
    if (errorElement) errorElement.textContent = '';
  }
});