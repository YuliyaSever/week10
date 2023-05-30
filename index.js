// первое задание
function learningJs() {
    console.log ( "Я учу JavaScript!");
}
learningJs();




    // второе задание
    
    const gallery = document.getElementById('gallery');
    const images = gallery.getElementsByTagName('img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0; 

    // Показать текущее изображение
    function showImage(index) {
      for (let i = 0; i < images.length; i++) {
        if (i === index) {
          images[i].style.opacity = 1;
        } else {
          images[i].style.opacity = 0;
        }
      }
    }

    // Переключиться на предыдущее изображение
    function showPreviousImage() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }
      showImage(currentIndex);
    }

    // Переключиться на следующее изображение
    function showNextImage() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      showImage(currentIndex);
    }

    // Привязать переключения к кнопкам
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);

    // Показывать первое изображение при загрузке страницы
    showImage(currentIndex);
