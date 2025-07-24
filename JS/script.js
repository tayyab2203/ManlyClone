// Sidebar submenu toggle with animation
document.querySelectorAll('.sidebar-toggle').forEach(toggle => {
  toggle.addEventListener('click', function () {
    const targetId = this.getAttribute('data-target');
    const submenu = document.getElementById(targetId);
    const isOpen = this.classList.contains('active');

    // Close all submenus
    document.querySelectorAll('.submenu').forEach(sm => {
      sm.style.maxHeight = null;
    });

    document.querySelectorAll('.sidebar-toggle').forEach(btn => {
      btn.classList.remove('active');
      btn.querySelector('.toggle-icon').textContent = '+';
    });

    // Open selected one if it wasn't already open
    if (!isOpen) {
      this.classList.add('active');
      submenu.style.maxHeight = submenu.scrollHeight + "px";
      this.querySelector('.toggle-icon').textContent = '–';
    }
  });
});

// Sidebar open/close
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  sidebar.setAttribute("aria-hidden", "false");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  sidebar.setAttribute("aria-hidden", "true");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  sidebar.setAttribute("aria-hidden", "true");
});
