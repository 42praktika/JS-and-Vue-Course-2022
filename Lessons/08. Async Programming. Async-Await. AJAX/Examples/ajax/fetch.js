fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    body,
})
    .then((response) => response.json())    // обработка результата запрос
    .catch((error) => {                     // обработка ошибок
        console.error(error);
    });

// или

const response = await fetch(url);
const result = await response.json();


/*
При обработке ответа можно использовать несколько методов:

- response.text() – возвращает ответ в виде обычного текста,
- response.json() – декодирует ответ в формате JSON,
- response.formData() – возвращает ответ как объект FormData,
- response.blob() – возвращает объект как Blob (бинарные данные),
- response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных).


Также есть следующие параметры ответа:

- response.status – HTTP-код ответа,
- response.ok – true, если статус ответа в диапазоне 200-299.
- response.headers – похожий на Map объект с HTTP-заголовками.
 */





// Пример
fetch('some_url>')
    .then((response) => {
        if (!response) {

            // Выбрасываем "кастомную" ошибку
            throw new Error('Что-то сломалось!');
        }
        callback(response);
    })
    .catch((error) => {
        // Обрабатываем ошибку
        console.error(error);

        // Выбрасываем ошибку дальше (например, для пользователей Вашей библиотеки)
        throw error;
    })
    .finally(() => {

        // Выполняем код вне зависимости от успешности выполнения запроса
        alert('точно выполнится');
    });