### Задание

Реализуйте классы `CarBrand`, `BugattiBrand` и `LadaBrand` работающие с марками
автомобилей.<br>
Классы `BugattiBrand` и `LadaBrand` должны расширять основной класс `CarBrand`<br>
Реализуйте две марки автомобилей:

- `LadaBrand` - в конструкторе получает на вход:
    * модель марки `Lada`
    * мощность
    * время разгона до 100 км/ч
    * расположение автомобиля
- `BugattiBrand` - в конструкторе получает на вход:
    * модель марки `Bugatti`
    * мощность
    * время разгона до 100 км/ч
    * стоимость (в миллионах долларов)

В классе `CarBrand` предусмотрите методы:

- `runDrag(time)` <br>
  Получает в качестве аргумента время проведения заезда.<br>
  Возвращает строку следующего типа: `Lada Vesta runs drag for 14.5 seconds`<br>
- `getWhoIsFaster(car)` <br>
  Получает в качестве аргумента другой автомобиль (экземпляр класса)<br>
  Возвращает строку следующего типа: `Bugatti Chiron is faster for 12.7 seconds`

В классе `BugattiBrand` предусмотрите метод:

- `getIsExpensive()` <br>
  Возвращает `true/false` в зависимости от того, дороже данный автомобиль одного миллиона
  долларов или нет

В классе `LadaBrand` предусмотрите метод:

- `getLocation()` <br>
  Возвращает строку следующего типа: `Lada Devyatka is located in Tolyatti`

### Примеры использования

```
const Veuron = new BugattiBrand('Veuron', 1001, 2.5, 3);
const Chiron = new BugattiBrand('Chiron', 1500, 2.3, 5);

const Vesta = new LadaBrand('Vesta', 75, 12.5, 'Kazan');
const Devyatka = new LadaBrand('Devyatka', 70, 15, 'Tolyatti');


const isVeuronExpensive = Veuron.getIsExpensive();          // true

const devyatkaLocation = Devyatka.getLocation();            // 'Lada Devyatka is located in Tolyatti'

const vestaIsRunningDrag = Vesta.runDrag(14.5);             // 'Lada Vesta runs drag for 14.5 seconds'

const chironIsRunningDrag = Chiron.runDrag(6.1);            // 'Bugatti Chiron runs drag for 6.1 seconds'

const chironVSDevyatka = Chiron.getWhoIsFaster(Devyatka);   // 'Bugatti Chiron is faster for 12.7 seconds'
```