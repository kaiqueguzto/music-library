const sidebarModal = document.querySelector('.sidebar-modal')


const modal = {
  open () {
    sidebarModal.style.display = 'flex';
  },

  close () {
    sidebarModal.style.display = 'none';

  }
}
