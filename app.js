const buttons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Aktiv düyməni yaşıl et
    buttons.forEach(btn => btn.classList.remove('active')); // Bütün düymələrdən 'active' sinifini silirik
    button.classList.add('active'); // Kliklənmiş düyməyə 'active' sinifi əlavə edirik

    const filter = button.textContent.toLowerCase();
    items.forEach(item => {
      const category = item.querySelector('.overlay span:nth-child(2)').textContent.toLowerCase();
      item.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
    });
  });
});
