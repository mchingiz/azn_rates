var azn = require('./index.js');

azn().then(function(data){
    console.log("%s tarixi üçün manatın dollara qarşı məzənnəsi belədir: %s",
        data.date,data.foreignCurrencies.USD.value);
});