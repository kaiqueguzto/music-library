const sidebarModal = document.querySelector('.sidebar-modal')


const modal = {
  open () {
    sidebarModal.style.display = 'flex';
  },

  close () {
    sidebarModal.style.animationName = "sidebarMobileOut";
    setTimeout(() => {
      sidebarModal.style.display = 'none';
      sidebarModal.style.animationName = "sidebarMobile";

    }, 300)
  }
}
