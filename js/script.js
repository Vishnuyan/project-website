/* ===== Smooth Scroll Navigation ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      updateActiveNav();
    }
  });
});

/* ===== Mobile Navigation Toggle ===== */
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      if (hamburger) hamburger.classList.remove('active');
      updateActiveNav();
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav-container')) {
      navMenu.classList.remove('active');
      if (hamburger) hamburger.classList.remove('active');
    }
  });

  // Update active navigation on page load
  updateActiveNav();
});

/* ===== Update Active Navigation Link ===== */
function updateActiveNav() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('section[id]');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
}

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);

/* ===== Dropdown Toggle ===== */
function toggleDropdown(element) {
  const header = element;
  const content = element.nextElementSibling;

  // Close other dropdowns
  const allDropdowns = document.querySelectorAll('.dropdown-content');
  allDropdowns.forEach(dropdown => {
    if (dropdown !== content) {
      dropdown.classList.remove('active');
      dropdown.previousElementSibling.classList.remove('active');
    }
  });

  // Toggle current dropdown
  header.classList.toggle('active');
  content.classList.toggle('active');
}

/* ===== Form Validation ===== */
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const message = form.querySelector('textarea[name="message"]');

  // Clear previous errors
  document.querySelectorAll('.error-message').forEach(el => el.remove());

  let isValid = true;

  // Validate name
  if (name && name.value.trim() === '') {
    showError(name, 'Name is required');
    isValid = false;
  }

  // Validate email
  if (email && email.value.trim() === '') {
    showError(email, 'Email is required');
    isValid = false;
  } else if (email && !isValidEmail(email.value)) {
    showError(email, 'Please enter a valid email address');
    isValid = false;
  }

  // Validate message
  if (message && message.value.trim() === '') {
    showError(message, 'Message is required');
    isValid = false;
  }

  if (isValid) {
    showSuccessMessage(form);
  }

  return isValid;
}

function showError(element, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.cssText = 'color: #FD79A8; font-size: 0.9rem; margin-top: 0.5rem; font-weight: 500;';
  errorDiv.textContent = message;
  element.parentNode.insertBefore(errorDiv, element.nextSibling);
  element.style.borderColor = '#FD79A8';
}

function showSuccessMessage(form) {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.style.cssText = `
    background: linear-gradient(135deg, #6C5CE7 0%, #00CEC9 100%);
    color: white;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    animation: slideInUp 0.5s ease-out;
    font-weight: 500;
    text-align: center;
  `;
  successDiv.textContent = '✓ Thank you! Your message has been sent successfully.';
  form.insertBefore(successDiv, form.firstChild);

  // Clear form
  form.reset();

  // Remove success message after 5 seconds
  setTimeout(() => {
    successDiv.style.animation = 'fadeOut 0.5s ease-out forwards';
    setTimeout(() => successDiv.remove(), 500);
  }, 5000);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* ===== Smooth Scroll to Section ===== */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    updateActiveNav();
  }
}

/* ===== Download File Handler ===== */
function downloadFile(fileName, fileType) {
  // Map file types to folders
  const folderMap = {
    'PowerPoint': 'slides/',
    'PDF': 'docs/',
    'Video': 'videos/',
    'Template': 'templates/',
    'Archive': 'assets/',
    'File': ''
  };

  // Get the folder based on file type
  const folder = folderMap[fileType] || '';
  const filePath = folder + fileName;

  // Create a link element and trigger download
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log(`Downloaded: ${filePath}`);
}

/* ===== Table Sorting ===== */
function sortTable(tableId, columnIndex) {
  const table = document.getElementById(tableId);
  if (!table) return;

  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  // Check if already sorted in ascending order
  const isAscending = !table.dataset.ascending || table.dataset.ascending === 'false';
  
  rows.sort((a, b) => {
    const aValue = a.children[columnIndex].textContent.trim();
    const bValue = b.children[columnIndex].textContent.trim();
    
    // Try to sort as numbers if both are numbers
    const aNum = parseFloat(aValue);
    const bNum = parseFloat(bValue);
    
    if (!isNaN(aNum) && !isNaN(bNum)) {
      return isAscending ? aNum - bNum : bNum - aNum;
    }
    
    // Sort as strings
    return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });
  
  rows.forEach(row => tbody.appendChild(row));
  table.dataset.ascending = !isAscending;
}

/* ===== Scroll Animation - Intersection Observer ===== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and elements on page load
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.card, .team-member');
  elements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    observer.observe(element);
  });
});

/* ===== Copy to Clipboard ===== */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showCopyNotification(text);
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showCopyNotification(text);
  });
}

function showCopyNotification(text) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, #6C5CE7 0%, #00CEC9 100%);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 8px 25px rgba(108, 92, 231, 0.3);
    z-index: 9999;
    animation: slideInDown 0.4s ease-out;
    font-weight: 500;
  `;
  notification.textContent = '✓ Copied to clipboard!';
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideInDown 0.4s ease-out reverse';
    setTimeout(() => notification.remove(), 400);
  }, 3000);
}
