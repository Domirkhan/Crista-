// Функция для смены основного изображения при клике на миниатюру
function changeImage(thumbnail) {
  const mainImage = document.getElementById("current-image");
  mainImage.src = thumbnail.src;

  
  document.querySelectorAll(".thumbnail").forEach(img => img.classList.remove("active"));
 
  thumbnail.classList.add("active");
}

// Фильтрация товаров
document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    // Активный фильтр
    document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Скрыть/показать карточки
    document.querySelectorAll('.product-card').forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

function openTab(event, tabId) {
  // Удаляем активный класс со всех кнопок и содержимого
  document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  // Добавляем активный класс к текущей кнопке и содержимому
  event.currentTarget.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.leave-review .star');
  let selectedRating = 0;

  stars.forEach((star, index) => {
      star.addEventListener('click', () => {
          selectedRating = index + 1;
          updateStarSelection();
      });
  });

  document.getElementById('submit-review').addEventListener('click', () => {
      const textarea = document.querySelector('.leave-review textarea');
      const reviewText = textarea.value.trim();

      if (selectedRating > 0 && reviewText) {
          alert(`Ваш отзыв отправлен: ${selectedRating} звезды, текст: "${reviewText}"`);
          textarea.value = '';
          updateStarSelection(true);
      } else {
          alert('Пожалуйста, заполните рейтинг и текст отзыва.');
      }
  });

  function updateStarSelection(reset = false) {
      stars.forEach((star, index) => {
          star.classList.toggle('selected', index < selectedRating && !reset);
      });

      if (reset) {
          selectedRating = 0;
      }
  }
});
