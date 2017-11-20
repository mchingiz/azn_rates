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

### Nümunə cavab

```javascript
{
    date: "20.11.2017",
    preciousMetals: {
        XPD: {
            code: "XPD",
            nominal: "1 t.u.",
            name: "Palladium",
            value: "1695.0994"
        },
        XPT: {
            code: "XPT",
            nominal: "1 t.u.",
            name: "Platin",
            value: "1593.0874"
        },
        XAG: {
            code: "XAG",
            nominal: "1 t.u.",
            name: "Gümüş",
            value: "29.2349"
        },
        XAU: {
            code: "XAU",
            nominal: "1 t.u.",
            name: "Qızıl",
            value: "2183.6519"
        }
    },
    foreignCurrencies: {
        CZK: {
            code: "CZK",
            nominal: "1",
            name: "Çexiya kronu",
            value: "0.0780"
        },
        IRR: {
            code: "IRR",
            nominal: "100",
            name: "İran rialı",
            value: "0.0043"
        },
        KRW: {
            code: "KRW",
            nominal: "100",
            name: "Cənubi Korea vonu",
            value: "0.1545"
        },
        TMT: {
            code: "TMT",
            nominal: "1",
            name: "Yeni türkmən manatı",
            value: "0.4858"
        },
        RUB: {
            code: "RUB",
            nominal: "1",
            name: "Rusiya rublu",
            value: "0.0287"
        },
        GEL: {
            code: "GEL",
            nominal: "1",
            name: "Gürcü larisi",
            value: "0.6280"
        },
        NZD: {
            code: "NZD",
            nominal: "1",
            name: "Yeni Zelandiya dolları",
            value: "1.1592"
        },
        KZT: {
            code: "KZT",
            nominal: "1",
            name: "Qazaxıstan tengəsi",
            value: "0.0051"
        },
        NOK: {
            code: "NOK",
            nominal: "1",
            name: "Norveç kronu",
            value: "0.2057"
        },
        GBP: {
            code: "GBP",
            nominal: "1",
            name: "İngilis funt sterlinqi",
            value: "2.2440"
        },
        BYN: {
            code: "BYN",
            nominal: "1",
            name: "Belarus rublu",
            value: "0.8496"
        },
        TRY: {
            code: "TRY",
            nominal: "1",
            name: "Türk lirəsi",
            value: "0.4395"
        },
        EGP: {
            code: "EGP",
            nominal: "1",
            name: "Misir funtu",
            value: "0.0963"
        },
        LBP: {
            code: "LBP",
            nominal: "100",
            name: "Livan funtu",
            value: "0.1127"
        },
        KWD: {
            code: "KWD",
            nominal: "1",
            name: "Küveyt dinarı",
            value: "5.6270"
        },
        UZS: {
            code: "UZS",
            nominal: "100",
            name: "Özbək somu",
            value: "0.0211"
        },
        SEK: {
            code: "SEK",
            nominal: "1",
            name: "İsveç kronu",
            value: "0.2015"
        },
        CNY: {
            code: "CNY",
            nominal: "1",
            name: "Çin yuanı",
            value: "0.2562"
        },
        TWD: {
            code: "TWD",
            nominal: "1",
            name: "Tayvan dolları",
            value: "0.0565"
        },
        CLP: {
            code: "CLP",
            nominal: "100",
            name: "Çili pesosu",
            value: "0.2713"
        },
        IDR: {
            code: "IDR",
            nominal: "100",
            name: "İndoneziya rupiası",
            value: "0.0126"
        },
        INR: {
            code: "INR",
            nominal: "1",
            name: "Hindistan rupisi",
            value: "0.0261"
        },
        KGS: {
            code: "KGS",
            nominal: "1",
            name: "Qırğız somu",
            value: "0.0244"
        },
        CAD: {
            code: "CAD",
            nominal: "1",
            name: "Kanada dolları",
            value: "1.3294"
        },
        MYR: {
            code: "MYR",
            nominal: "1",
            name: "Malayziya rinqqiti",
            value: "0.4090"
        },
        TJS: {
            code: "TJS",
            nominal: "1",
            name: "Tacik somonisi",
            value: "0.1927"
        },
        MDL: {
            code: "MDL",
            nominal: "1",
            name: "Moldova leyi",
            value: "0.0968"
        },
        ILS: {
            code: "ILS",
            nominal: "1",
            name: "İsrail şekeli",
            value: "0.4837"
        },
        SGD: {
            code: "SGD",
            nominal: "1",
            name: "Sinqapur dolları",
            value: "1.2527"
        },
        SDR: {
            code: "SDR",
            nominal: "1",
            name: "SDR (BVF-nun xüsusi borcalma hüquqları)",
            value: "2.3989"
        },
        JPY: {
            code: "JPY",
            nominal: "100",
            name: "Yapon yeni",
            value: "1.5176"
        },
        PLN: {
            code: "PLN",
            nominal: "1",
            name: "Polşa zlotası",
            value: "0.4713"
        },
        AUD: {
            code: "AUD",
            nominal: "1",
            name: "Avstraliya dolları",
            value: "1.2845"
        },
        SAR: {
            code: "SAR",
            nominal: "1",
            name: "Səudiyyə Ərəbistanı rialı",
            value: "0.4534"
        },
        BRL: {
            code: "BRL",
            nominal: "1",
            name: "Braziliya rialı",
            value: "0.5220"
        },
        ARS: {
            code: "ARS",
            nominal: "1",
            name: "Argentina pesosu",
            value: "0.0973"
        },
        UAH: {
            code: "UAH",
            nominal: "1",
            name: "Ukrayna qrivnası",
            value: "0.0642"
        },
        DKK: {
            code: "DKK",
            nominal: "1",
            name: "Danimarka kronu",
            value: "0.2680"
        },
        EUR: {
            code: "EUR",
            nominal: "1",
            name: "Avro",
            value: "1.9941"
        },
        MXN: {
            code: "MXN",
            nominal: "1",
            name: "Meksika pesosu",
            value: "0.0898"
        },
        ZAR: {
            code: "ZAR",
            nominal: "1",
            name: "Cənubi Afrika randı",
            value: "0.1211"
        },
        CHF: {
            code: "CHF",
            nominal: "1",
            name: "İsveçrə frankı",
            value: "1.7189"
        },
        HKD: {
            code: "HKD",
            nominal: "1",
            name: "Honq Konq dolları",
            value: "0.2176"
        },
        AED: {
            code: "AED",
            nominal: "1",
            name: "BƏƏ dirhəmi",
            value: "0.4629"
        },
        USD: {
            code: "USD",
            nominal: "1",
            name: "ABŞ dolları",
            value: "1.7002"
        }
    }
}
```
