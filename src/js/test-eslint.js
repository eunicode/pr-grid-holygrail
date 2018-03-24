// Set the background to a random image from an array of images

var bgImg = [
    "http://res.cloudinary.com/t3unfxn28/image/upload/v1501523022/Momentum/aniket-deole-296462_nz7ypz.jpg", 
    "http://res.cloudinary.com/t3unfxn28/image/upload/v1501523107/Momentum/cristina-gottardi-259243_uz0d12.jpg", 
    "http://res.cloudinary.com/t3unfxn28/image/upload/v1501522998/Momentum/david-marcu-114194_d0fqbc.jpg", 
    "http://res.cloudinary.com/t3unfxn28/image/upload/v1501523081/Momentum/filip-wessman-59999_frqxfr.jpg", 
    "http://res.cloudinary.com/t3unfxn28/image/upload/v1502330990/james-donovan-180375_.5_huizoi.jpg",
];

var randomNumber = Math.floor(Math.random() * (bgImg.length));

document.body.style.backgroundImage = `url('${bgImg[randomNumber]}')`;