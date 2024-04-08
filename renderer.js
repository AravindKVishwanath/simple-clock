function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0').split('');
    const minutes = String(now.getMinutes()).padStart(2, '0').split('');
    const seconds = String(now.getSeconds()).padStart(2, '0').split('');
  
    document.querySelector('.hours').textContent = hours[0];
    document.querySelector('.hours2').textContent = hours[1];
    document.querySelector('.minutes').textContent = minutes[0];
    document.querySelector('.minutes2').textContent = minutes[1];
    document.querySelector('.seconds').textContent = seconds[0];
    document.querySelector('.seconds2').textContent = seconds[1];
  }
  
  setInterval(updateClock, 1000);
  