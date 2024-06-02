function showDate() {
    let today = new Date();
    
    // Получение различных частей даты
    let year = today.getFullYear();
    let month = today.toLocaleString('ru-RU', { month: 'long' });
    let date = today.getDate();
    let day = today.toLocaleString('ru-RU', { weekday: 'long' });

    // Обновление содержимого элементов
    document.getElementById('current-year').innerHTML = "Текущий год: " + year;
    document.getElementById('current-month').innerHTML = "Текущий месяц: " + month;
    document.getElementById('current-date').innerHTML = "Текущая дата: " + date;
    document.getElementById('current-day').innerHTML = "День недели: " + day;
}

function showWeekday() {
    let day = document.getElementById('input-day').value;
    let month = document.getElementById('input-month').value - 1; // месяцы начинаются с 0
    let year = document.getElementById('input-year').value;
    
    let date = new Date(year, month, day);
    let weekday = date.toLocaleString('ru-RU', { weekday: 'long' });
    
    document.getElementById('weekday-result').innerHTML = "День недели: " + weekday;
}
