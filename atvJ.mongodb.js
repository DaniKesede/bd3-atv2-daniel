const database ='BD3-ATV2-DANIEL';
const collection ='bd3-atv2-produtos';
use(database);
db[collection].find({Categoria: { $nin: ['Acessórios'] }}) .sort({"Valor (R$)": -1});