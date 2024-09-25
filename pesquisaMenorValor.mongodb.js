const database ='BD3-ATV2-DANIEL';
const collection ='bd3-atv2-produtos';
use(database);
db[collection].find(
    {"Valor (R$)": {$lt:434}}
);