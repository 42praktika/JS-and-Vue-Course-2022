### Задание

Реализуйте функцию `getDaysAmount`, определяющую, сколько дней было в конкретном месяце
конкретного года.

### Использование

```
getDaysAmount('May', 1918);         // 31

getDaysAmount('January', 2021);     // 31

getDaysAmount('February', 1564);    // 29
getDaysAmount('February', 1755);    // 28

getDaysAmount('September', 1984);   // 30

// Несуществующий месяц
getDaysAmount('Catober', 2021);     // 'error'
```

### Важно

**Ваша функция должна работать со всеми возможными месяцами**