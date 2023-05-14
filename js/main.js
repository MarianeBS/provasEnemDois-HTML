let myChart = document.getElementById('myChart').getContext('2d');
let chart = new Chart(myChart, {
    type: "line",

    data: {
        labels: ['Linguagens', 'Ciências da Natureza', 'Ciências Exatas', 'Matemática'],
        datasets: 
        [
            {
                label: "2021",
                data: [30, 19, 2, 19],
                borderWidth: 6,
                borderColor: 'rgba(77, 166, 253, 0.85)',
                backgroundColor: 'transparent',
            },
            {
                label: "2022",
                data: [23, 27, 6, 18],
                borderWidth: 6,
                borderColor: 'rgba(255, 0, 0, 0.85)',
                backgroundColor: 'transparent',
            }
        ]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Quantidade de Questões do ENEM Classificadas como A"
        }        
    },
    labels: {
        fontStyle: "bold"
    }
    
});

let myChartTwo = document.getElementById('myChartTwo').getContext('2d');
let chartTwo = new Chart(myChartTwo, {
    type: "line",

    data: {
        labels: ['Linguagens', 'Ciências da Natureza', 'Ciências Exatas', 'Matemática'],
        datasets: 
        [
            {
                label: "2021",
                data: [7, 14, 22, 10],
                borderWidth: 6,
                borderColor: 'rgba(255, 140, 0, 0.85)',
                backgroundColor: 'transparent',
            },
            {
                label: "2022",
                data: [12, 11, 19, 15],
                borderWidth: 6,
                borderColor: 'rgba(0, 0, 139, 0.85)',
                backgroundColor: 'transparent',
            }
        ]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Quantidade de Questões do ENEM Classificadas como B"
        }        
    },
    labels: {
        fontStyle: "bold"
    }
    
});

let myChartThree = document.getElementById('myChartThree').getContext('2d');
let chartThree = new Chart(myChartThree, {
    type: "line",

    data: {
        labels: ['Linguagens', 'Ciências da Natureza', 'Ciências Exatas', 'Matemática'],
        datasets: 
        [
            {
                label: "2021",
                data: [8, 12, 21, 16],
                borderWidth: 6,
                borderColor: 'rgba(255, 20, 147, 0.85)',
                backgroundColor: 'transparent',
            },
            {
                label: "2022",
                data: [10, 7, 20, 12],
                borderWidth: 6,
                borderColor: 'rgba(3, 187, 133, 0.85)',
                backgroundColor: 'transparent',
            }
        ]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Quantidade de Questões do ENEM Classificadas como C"
        }        
    },
    labels: {
        fontStyle: "bold"
    }
    
});

let myChartFour = document.getElementById('myChartFour').getContext('2d');
let chartFour = new Chart(myChartFour, {
    type: "bar",

    data: {
        labels: ['A', 'B', 'C'],
        datasets: 
        [
            {
                label: "2021",
                data: [70, 53, 57],
                borderWidth: 6,
                borderColor: '#000000',
                backgroundColor: '#000000',
            },
            {
                label: "2022",
                data: [74, 57, 49],
                borderWidth: 6,
                borderColor: '#FFAB01',
                backgroundColor: '#FFAB01',
            }
        ]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Quantidade de Questões do ENEM com cada Classificação"
        }        
    },
    labels: {
        fontStyle: "bold"
    }
    
});

let myChartFive = document.getElementById('myChartFive').getContext('2d');
let labels = ['A', 'B', 'C'];
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B'];
let chartFive = new Chart(myChartFive, {
    type: "pie",

    data: {
        datasets: 
        [
            {
                data: [70, 53, 57],
                backgroundColor: colorHex,
            }
        ],
        labels: labels
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Classificação das Questões do ENEM 2021"
        }
    }

});

let myChartSix = document.getElementById('myChartSix').getContext('2d');
let label = ['A', 'B', 'C'];
let colorHexa = ['#ED06F9', '#12F906', '#05FAEE'];
let chartSix = new Chart(myChartSix, {
    type: "pie",

    data: {
        datasets: 
        [
            {
                data: [74, 57, 49],
                backgroundColor: colorHexa,
            }
        ],
        labels: label
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Classificação das Questões do ENEM 2022"
        }
    }

});





