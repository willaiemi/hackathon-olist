export const options = {
  responsive: true,
  legend: { 
    display: false,
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
      },
    }],
    yAxes: [{
      gridLines: {
        display: false,
      },
      ticks: {
        display: false
      }
    }]
  },
};

export const datasetsColor = {
  lineTension: 0.5,
  backgroundColor: 'rgb(236,239,250)',
  borderColor: 'rgb(123,133,249)',
  pointBorderColor: 'rgb(123,133,249)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 2,
  pointHoverRadius: 8,
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(123,133,249)',
  pointHoverBorderWidth: 2,
  pointRadius: 2,
  pointHitRadius: 10,
}

export const labelType = {
  weekly: [''],
  month: [
    '1/abr', '2/abr', '3/abr', '4/abr', '5/abr',
    '6/abr', '7/abr', '8/abr', '9/abr', '10/abr',
    '11/abr', '12/abr', '13/abr', '14/abr', '15/abr',
    '16/abr', '17/abr', '18/abr', '19/abr', '20/abr',
    '21/abr', '22/abr', '23/abr', '24/abr', '25/abr',
    '26/abr', '27/abr', '28/abr', '29/abr', '30/abr',
  ],
}