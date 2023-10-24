let sidebarBtn = document.querySelector('.sidebarBtn')
let sidebar = document.querySelector('.sidebar')
let crossBtn = document.querySelector('.crossBtn')
sidebarBtn.addEventListener( 'click', () => {
    sidebar.classList.add('active')
})
function closeSidebar (event) {
    if (
      event.target.classList.contains("sidebar") ||
      event.target.classList.contains("crossBtn")
    ) {sidebar.classList.remove("active");}
}
sidebarBtn.addEventListener("click", closeSidebar);
sidebar.addEventListener("click", closeSidebar);