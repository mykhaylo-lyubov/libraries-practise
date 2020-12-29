import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basiclightbox.min.css';
import * as splide from './splide';
import * as siema from './siema';

// const modalTemplate = document.querySelector('#modal');
// const instance = basicLightbox.create(
//   `<div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
//         <input placeholder="Type something">
//         <button>Close</button>
//     </div>`,
//   {
//     onShow: instance => {
//       instance.element().querySelector('button').onclick = instance.close;
//     },
//   },
// );
// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', () => {
//   instance.show();
// });
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  },

  // Configuration options go here
  options: {},
});
