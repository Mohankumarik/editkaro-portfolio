const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const videos = document.querySelectorAll('.portfolio-video');

// Filter by category
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    filterBtns.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');

    portfolioItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Play video on hover
videos.forEach(video => {
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => video.pause());
});
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCategories = document.querySelectorAll('.category');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Show all categories if 'all' is selected, otherwise filter
        portfolioCategories.forEach(categoryDiv => {
          if (category === 'all' || categoryDiv.classList.contains(category)) {
            categoryDiv.style.display = 'block';
          } else {
            categoryDiv.style.display = 'none';
          }
        });
      });
    });
  });
</script>



