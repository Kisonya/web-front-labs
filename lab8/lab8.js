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
