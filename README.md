# AZN-in Məzənnəsi JSON formatında

> **Qeyd:** Modul data üçün [**cbar.az**](https://www.cbar.az/currencies/20.11.2017.xml)-ı istifadə edir.

### İstifadə qaydası

Modul promise qaytarır və istifadəsi aşağıdakı kimidir.

Heç bir parameter göndərilməsə həmin günün məzənnəsini qaytarır.

Keçmiş günlərin məzənnəsini almaq üçün həmin günü funksiyaya 'dd.mm.yyyy' formatında göndərin.

```javascript
const azn = require('azn_rates');

azn().then(function(data){
	console.log("%s tarixi üçün manatın dollara qarşı məzənnəsi belədir: %s",
    	data.date,data.foreignCurrencies.USD.value);
});

// 20.10.2017 tarixi üçün manatın dollara qarşı məzənnəsi belədir: 1.7001
```


```javascript
const azn = require('azn_rates');

azn("12.01.2015").then(function(data){
	console.log("%s tarixi üçün manatın dollara qarşı məzənnəsi belədir: %s",
    	data.date,data.foreignCurrencies.USD.value);
});

// 12.01.2015 tarixi üçün manatın dollara qarşı məzənnəsi belədir: 0.7844 :sob:
```
