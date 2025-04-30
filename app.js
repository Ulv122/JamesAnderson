const buttons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active')); 
    button.classList.add('active'); 

    const filter = button.textContent.toLowerCase();
    items.forEach(item => {
      const category = item.querySelector('.overlay span:nth-child(2)').textContent.toLowerCase();
      item.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
    });
  });
});
