// Gráfico de Pizza
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza,{
    type:'pie',
    data:{
        labels: [''],
        datasets:[{
            label:'Participação nas Redes Sociais',
            data:[],
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
                position:'top',
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
