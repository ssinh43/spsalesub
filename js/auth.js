// ===== AUTH MANAGEMENT =====

// Check if user is logged in
function isUserLoggedIn() {
  return localStorage.getItem('spsalesub_user') !== null;
}

// Set user logged in
function setUserLoggedIn(username) {
  localStorage.setItem('spsalesub_user', username);
  updateNavbar();
}

// Logout user
function logoutUser() {
  localStorage.removeItem('spsalesub_user');
  updateNavbar();
}

// Get logged in username
function getLoggedInUser() {
  return localStorage.getItem('spsalesub_user');
}

// Update navbar based on login status
function updateNavbar() {
  const isLoggedIn = isUserLoggedIn();
  const loginBtn = document.getElementById('navbar-login-btn');
  const signupBtn = document.getElementById('navbar-signup-btn');
  const orderBtn = document.getElementById('navbar-order-btn');
  const userMenuBtn = document.getElementById('navbar-user-menu');

  if (isLoggedIn) {
    // Ẩn nút đăng nhập và đăng ký
    if (loginBtn) loginBtn.style.display = 'none';
    if (signupBtn) signupBtn.style.display = 'none';
    // Hiện nút đặt hàng
    if (orderBtn) orderBtn.style.display = 'inline-block';
    if (userMenuBtn) userMenuBtn.style.display = 'inline-block';
  } else {
    // Hiện nút đăng nhập và đăng ký
    if (loginBtn) loginBtn.style.display = 'inline-block';
    if (signupBtn) signupBtn.style.display = 'inline-block';
    // Ẩn nút đặt hàng
    if (orderBtn) orderBtn.style.display = 'none';
    if (userMenuBtn) userMenuBtn.style.display = 'none';
  }
}

// Khi trang load xong, cập nhật navbar
document.addEventListener('DOMContentLoaded', function() {
  updateNavbar();
});

// Form submission handlers
function handleLoginSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('email') ? document.getElementById('email').value : '';
  const username = email.split('@')[0] || 'User';
  setUserLoggedIn(username);
  
  // Redirect to dashboard
  setTimeout(() => {
    window.location.href = 'dathang.html';
  }, 500);
}

function handleRegisterSubmit(event) {
  event.preventDefault();
  const username = document.getElementById('reg-username') ? document.getElementById('reg-username').value : '';
  setUserLoggedIn(username || 'NewUser');
  
  // Redirect to dashboard
  setTimeout(() => {
    window.location.href = 'dathang.html';
  }, 500);
}
