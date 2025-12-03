document.querySelectorAll('.hover-item').forEach(item => {
  item.addEventListener('mouseover', () => {
    alert(item.dataset.story);
  });
});