var contas = require('./contas.json');

contas.sort(function(a,b){
	return (Number(a['code']) > Number(b['code'])) ? 1 :
		   ((Number(a['code']) < Number(b['code'])) ? -1 : 0);
});

console.log(contas);