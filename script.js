document.addEventListener('DOMContentLoaded', () => {
  const inputAge = document.getElementById('input-age');
  const ageDisplay = document.getElementById('age');

  function updateAge() {
    const birthdate = new Date(inputAge.value);
    const now = new Date();
    let ageInSeconds = Math.floor((now - birthdate) / 1000);
    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInMonth = 2592000; // Average month length
    const secondsInYear = 31536000;

    const years = Math.floor(ageInSeconds / secondsInYear);
    ageInSeconds %= secondsInYear;

    const months = Math.floor(ageInSeconds / secondsInMonth);
    ageInSeconds %= secondsInMonth;

    const days = Math.floor(ageInSeconds / secondsInDay);
    ageInSeconds %= secondsInDay;

    const hours = Math.floor(ageInSeconds / secondsInHour);
    ageInSeconds %= secondsInHour;

    const minutes = Math.floor(ageInSeconds / secondsInMinute);
    ageInSeconds %= secondsInMinute;

    const seconds = ageInSeconds;

    ageDisplay.textContent = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

  inputAge.addEventListener('input', updateAge);
  setInterval(updateAge, 1000);
});


const images = ['https://aicontentfy.com/hubfs/Blog/e2f82ed6-4180-4648-9560-949a48793661.jpg', 
  'https://c4.wallpaperflare.com/wallpaper/9/519/764/mountains-best-for-desktop-background-wallpaper-preview.jpg', 
  "https://t3.ftcdn.net/jpg/06/84/59/22/360_F_684592278_xAceXmIN3m7d3AKj52NDAOuXaeRvEJVC.jpg",
  'https://img.freepik.com/premium-photo/background-beautiful-wallpaper-hd-best-quality-hyper-realistic-colorful-image_1078161-2011217.jpg', 
  'https://www.lifewire.com/thmb/CLI14Ku63Uujk5VlROmhN67G-3I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wallhaven-5919d60a5f9b58f4c04e8b26.png',
  'https://t4.ftcdn.net/jpg/06/85/28/11/360_F_685281180_18UBRHmJJO7X6yDStWETCOBKAWVHFHQn.jpg',
  'https://img.freepik.com/premium-photo/best-wallpaper-hd-background-with-seven-color-cute-wallpaper_947865-3968.jpg',
  'https://gradient.page/_next/image?url=%2Fcdn%2Fdeep-dusk%2Fdeep-dusk-002.jpg&w=1920&q=75',
  'https://img.freepik.com/premium-photo/best-wallpaper-hd-background-with-seven-color-cute-wallpaper_947865-3889.jpg',
  'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg',
  'https://helios-i.mashable.com/imagery/articles/06v9GAiAwhXv4WMMaXNkd7U/hero-image.fill.size_1248x702.v1694021009.png',
  'https://www.shutterstock.com/image-photo/mesmerizing-3d-abstract-multicolor-visualization-600nw-2308145127.jpg',
  'https://wallpapercave.com/wp/wp2561332.jpg',
  'https://png.pngtree.com/thumb_back/fh260/background/20231007/pngtree-classic-las-vegas-style-design-3d-rendering-of-sao-paulo-s-image_13574137.png',
  'https://static.vecteezy.com/system/resources/thumbnails/033/650/873/small_2x/singapore-tourism-background-photo.jpg',
  'https://i0.wp.com/picjumbo.com/wp-content/uploads/colorful-los-angeles-painting-free-photo.jpg?w=2210&quality=70',
];

function changeBackgroundImage() {
  let currentIndex = localStorage.getItem('currentIndex') || 0;

  document.body.style.backgroundImage = `url(${images[currentIndex]})`;

  setInterval(() => {
    try {
      currentIndex = (currentIndex + 1) % images.length;
      localStorage.setItem('currentIndex', currentIndex);
      document.body.style.backgroundImage = `url(${images[currentIndex]})`;
    } catch (error) {
      console.error("Error changing background image:", error);
    }
  }, 30000); // 30 seconds
}

changeBackgroundImage();