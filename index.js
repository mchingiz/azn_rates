const dateformat = require('dateformat');
const request = require('request');
const xmlParser = require('xml2js').parseString;
const cheerio = require('cheerio');

var datePattern = new RegExp("(\\d{2})[.](\\d{2})[.](\\d{4})");

module.exports = function(date){
    return new Promise(function(resolve,reject){
        if(date == undefined){
            date = dateformat(new Date(),"dd.mm.yyyy");
        }

        if(matchesExpectedDateFormat(date,reject)){
            request.get("https://www.cbar.az/currencies/"+date+".xml",function(error,response,body){
                var $ = cheerio.load(body);

                if(error){
                    reject("Couldn't get data from cbar.az/currencies");
                }else if(response.statusCode != 200){
                    reject("Request to cbar.az was not successful. Status code: "+response.statusCode+" / Error: "+error);
                }else if($("strong").length != 0){
                    reject("cbar.az returned error: "+$("strong").text());
                }else{
                    xmlParser(body,function(error,obj){
                        var result = {
                            date: obj.ValCurs.$.Date,
                            preciousMetals: {},
                            foreignCurrencies: {}
                        };

                        // Populating precious metals
                        obj.ValCurs.ValType[0].Valute.forEach(function(preciousMetal){
                            var obj = {};

                            result.preciousMetals[preciousMetal.$.Code] = {
                                code: preciousMetal.$.Code,
                                nominal:preciousMetal.Nominal[0],
                                name:preciousMetal.Name[0],
                                value:preciousMetal.Value[0]
                            };
                        });

                        // Populating foreign currencies
                        obj.ValCurs.ValType[1].Valute.forEach(function(foreignCurrency){
                            var obj = {};

                            result.foreignCurrencies[foreignCurrency.$.Code] = {
                                code: foreignCurrency.$.Code,
                                nominal:foreignCurrency.Nominal[0],
                                name:foreignCurrency.Name[0],
                                value:foreignCurrency.Value[0]
                            };
                        });

                        resolve(result);
                    })
                }
            });
        }
    });
};

function matchesExpectedDateFormat(date,reject){
    if(typeof date !== "string"){
        reject("'date' parameter should be string");
        return false;
    }else if(!datePattern.test(date)){
        reject("'date' parameter should be string in 'dd.mm.yyyy' format");
        return false;
    }

    return true;
}