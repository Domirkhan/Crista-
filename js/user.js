

// User management functions
function getSavedUser() {
  const saved = localStorage.getItem('user');
  return saved ? JSON.parse(saved) : null;
}

function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

function showUserProfile(user) {
  document.getElementById('profile-section').classList.remove('hidden');
  document.getElementById('login-button').classList.add('hidden');
  document.getElementById('profile-name').textContent = user.name;
  showDashboard(user);
}

function hideUserProfile() {
  document.getElementById('profile-section').classList.add('hidden');
  document.getElementById('login-button').classList.remove('hidden');
}

function handleLogout() {
  localStorage.removeItem('user');
  hideUserProfile();
  hideDashboard();
}

function handleLogin(event) {
  event.preventDefault();
  
  const name = document.getElementById('login-name').value;
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Mock login - in real app, this would be an API call
  const user = {
      name: name,
      email: email,
      orders: 3
  };

  saveUser(user);
  showUserProfile(user);
  document.getElementById('login-modal').classList.remove('show');
}

function showDashboard(user) {
  const dashboard = document.getElementById('dashboard');
  const userFullName = document.getElementById('user-full-name');
  const userEmail = document.getElementById('user-email');
  const userOrders = document.getElementById('user-orders');

  userFullName.textContent = user.name;
  userEmail.textContent = user.email;
  userOrders.textContent = user.orders;

  dashboard.classList.remove('hidden');
}

function hideDashboard() {
  const dashboard = document.getElementById('dashboard');
  dashboard.classList.add('hidden');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('login-button');
  const logoutButton = document.getElementById('logout-button');
  const loginModal = document.getElementById('login-modal');
  const loginForm = document.getElementById('login-form');
  const closeButton = document.querySelector('.close-button');
  const dashboardLink = document.getElementById('dashboard-link');

  // Check if user is already logged in
  const savedUser = getSavedUser();
  if (savedUser) {
      showUserProfile(savedUser);
  }

  // Event listeners
  loginButton.addEventListener('click', () => {
      loginModal.classList.add('show');
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
      if (e.target === loginModal) {
          loginModal.classList.remove('show');
      }
  });

  closeButton.addEventListener('click', () => {
      loginModal.classList.remove('show');
  });

  logoutButton.addEventListener('click', handleLogout);
  loginForm.addEventListener('submit', handleLogin);

  dashboardLink.addEventListener('click', (e) => {
      e.preventDefault();
      const user = getSavedUser();
      if (user) {
          showDashboard(user);
      }
  });
});

document.querySelector('.close-button1').addEventListener('click', function () {
  document.querySelector('.modal').style.display = 'none';
});