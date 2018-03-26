// Hover over errors, or click on variable names with errors, and a lightbulb
// will pop-up. Click on the light-bulb and you'll be presented with fix options.
// You can choose auto-fix all errors.

// Set the background to a random image from an array of images

const bgImg = [
  'http://res.cloudinary.com/t3unfxn28/image/upload/v1501523022/Momentum/aniket-deole-296462_nz7ypz.jpg',
  'http://res.cloudinary.com/t3unfxn28/image/upload/v1501523107/Momentum/cristina-gottardi-259243_uz0d12.jpg',
  'http://res.cloudinary.com/t3unfxn28/image/upload/v1501522998/Momentum/david-marcu-114194_d0fqbc.jpg',
  'http://res.cloudinary.com/t3unfxn28/image/upload/v1501523081/Momentum/filip-wessman-59999_frqxfr.jpg',
  'http://res.cloudinary.com/t3unfxn28/image/upload/v1502330990/james-donovan-180375_.5_huizoi.jpg',
];

const randomNumber = Math.floor(Math.random() * (bgImg.length));

document.body.style.backgroundImage = `url('${bgImg[randomNumber]}')`;

// Ignore expected rule violations
// I get an ESLint warning for using console.log.
// [eslint] Unexpected console statement. (no-console)
// To disable linting, add a comment before the line.
// Use the eslint-disable-next-line trigger + rule name (no-console)

// eslint-disable-next-line no-console
console.log('hi');
