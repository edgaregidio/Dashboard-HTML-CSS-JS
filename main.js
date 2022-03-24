const chart = document.querySelector("#chart").getContext('2d');

new Chart(chart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets: [
      {
        label: 'BTC',
        data: [29987, 38498, 36951, 58798, 65132, 65465, 71945, 72654, 76578, 81265, 65645],
        borderColor: 'red',
        borderWidth: 2
      },
      {
        label: 'ETH',
        data: [39187, 49498, 26951, 28758, 45932, 51465, 35945, 39614, 61178, 49265, 31649],
        borderColor: 'blue',
        borderWidth: 2
      },

    ]
  },
  options: {
    resposive: true
  }
})

// show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
  sidebar.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
  sidebar.style.display = 'none'
})


// CHANGE THEME

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')

  themeBtn.querySelector('span:first-child').classList.toggle('active');
  themeBtn.querySelector('span:last-child').classList.toggle('active');
})