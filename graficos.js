// Gráfico de Pizza
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza,{
    type:'pie',
    data:{
        labels: ['Ruim','Boa','Muito boa'],
        datasets:[{
            label:'Como você classifica a sua qualidade de sono?',
            data:[38,50,12],
            backgroundColor: [
                '#F05454','#30475E','#DDDDDD','#222831'
                
 ],
 borderColor: '#DDDDDD'
 borderWidth:1
        }]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{
                position: 'bottom',
            },
            title:{
                display:true,
                text:'Participação nas Redes Sociais'
            }
        }
    }
});

const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza,{
    type:'pie',
    data:{
        labels: ['Menos que 3 horas','Entre 3 e 5 horas','Mais que 5 horas'],
        datasets:[{
            label:'Em média, quantas horas de sono você tem por dia?',
            data:[0,31,69],
            backgroundColor: [
                '#F05454','#30475E','#DDDDDD','#222831'
                
 ],
 borderColor: '#DDDDDD'
 borderWidth:1
        }]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{
                position: 'bottom',
            },
            title:{
                display:true,
                text:'Participação nas Redes Sociais'
            }
        }
    }
});

const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza,{
    type:'pie',
    data:{
        labels: ['Menos de um mes','1 a 2meses','3 a 6meses','7 a 12 meses', '
        3 a 5 anos','6 a 10 anos','mais de 10 anos', 'nao tem nenhum problema'],
        datasets:[{
            label:'Há quanto tempo você acha que teve problemas com o seu sonho?',
            data:[0,31,69],
            backgroundColor: [
                '#F05454','#30475E','#DDDDDD','#222831'
                
 ],
 borderColor: '#DDDDDD'
 borderWidth:1
        }]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{
                position: 'bottom',
            },
            title:{
                display:true,
                text:'Participação nas Redes Sociais'
            }
        }
    }
});

const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza,{
    type:'pie',
    data:{
        labels: ['Sempre','Muitas vezes','As vezes','Raramente','Nunca'],
        datasets:[{
            label:'Com que frequência você toma remédio para dormir?',
            data:[38,50,12],
            backgroundColor: [
                '#F05454','#30475E','#DDDDDD','#222831'
                
 ],
 borderColor: '#DDDDDD'
 borderWidth:1
        }]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{
                position: 'bottom',
            },
            title:{
                display:true,
                text:'Participação nas Redes Sociais'
            }
        }
    }
});

const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza,{
    type:'pie',
    data:{
        labels: ['Menos de 3 horas',' 4 horas','5 horas',' 6 horas','7 horas','8 horas','9 horas','Mais de 9 horas'],
        datasets:[{
            label:'Quantas horas de sono você tem em 24 horas? (aproximadamente)',
            data:[38,50,12],
            backgroundColor: [
                '#F05454','#30475E','#DDDDDD','#222831'
                
 ],
 borderColor: '#DDDDDD'
 borderWidth:1
        }]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{
                position: 'bottom',
            },
            title:{
                display:true,
                text:'Participação nas Redes Sociais'
            }
        }
    }
});


//Gráfico de Barras
const ctxBarra = document.getElementById('graficoBarra').getContext('2d');
const graficoBarra = new Chart(ctxBarra,{
    type:'bar',
    data:{
        labels:[],
        datasets:[{
            label:''
            data:[],
            backgroundColor: #'F05454',
            borderColor:'#30475E'
            borderWidth:1
        }]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{
                position:'top'
            },
            title:{
                display:true,
                text:''
            }
        },
        scales:{
            y:{
                beginAtZero:true
            }
        }
    }
});