function showTime() {
    let today = new Date(); // Создаем новый объект Date для получения текущего времени
    let currentTime = today.toLocaleTimeString('ru-RU'); // Получаем текущее время в формате 'ru-RU'
    document.getElementById('time').innerHTML = currentTime; // Отображаем текущее время в правом верхнем углу

    // Отображаем текущее время над стрелкой по центру
    document.getElementById('clock-time-center').innerHTML = currentTime;

    let seconds = today.getSeconds(); // Получаем текущие секунды

    // Вычисляем угол поворота для стрелки секунд (6 градусов за каждую секунду)
    let secondsRotation = seconds * 6;

    // Применяем поворот к стрелке секунд в центре
    document.getElementById('second-hand-center').style.transform = `rotate(${secondsRotation}deg)`;

    // Применяем поворот к стрелке секунд в левом верхнем углу
    document.getElementById('second-hand-top-left').style.transform = `rotate(${secondsRotation}deg)`;
}

// Обновляем время каждую секунду
setInterval(showTime, 1000);
