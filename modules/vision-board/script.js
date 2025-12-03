document.querySelectorAll('.hover-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = this.dataset.story;
    document.body.appendChild(tooltip);

    const rect = this.getBoundingClientRect();
    tooltip.style.left = rect.left + window.scrollX + 'px';
    tooltip.style.top = rect.bottom + window.scrollY + 'px';

    this.addEventListener('mouseleave', () => {
      tooltip.remove();
    }, { once: true });
  });
});