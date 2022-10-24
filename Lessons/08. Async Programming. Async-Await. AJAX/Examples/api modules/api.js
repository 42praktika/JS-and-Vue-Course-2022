// Пример из реального проекта
import qs from 'qs';

const fetchWrapper = (url, data, config = {}) => {
    return fetch(url, config)                       // отправляем запрос
        .then((response) => response.json())        // ответ передаем в формате json
        .catch((error) => {
            console.error('Ошибка:', error);        // выводим в консоль ошибки
            throw error;                            // "выбрасываем" ошибку для дальнейшего его
                                                    // использования
        });
};

const api = {
    fetchReportData(data) {
        return fetchWrapper('<some url>', data, { method: 'POST' });
    },
    saveTemplates(data) {
        return fetchWrapper('<some url>', data, { method: 'POST' });
    },
    deleteTemplate(data) {
        return fetchWrapper('<some url>', data, { method: 'POST' });
    },
};

export default api;