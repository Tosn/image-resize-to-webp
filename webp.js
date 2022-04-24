const webp=require('webp-converter');
const glob = require("glob");

//pass input image(.jpeg,.pnp .....) path ,output image(give path where to save and image file name with .webp extension)
//pass option(read  documentation for options)

//cwebp(input,output,option)
const paths = glob.sync("./600/*");

// console.log(paths)
// const result = webp.cwebp("./images/62610b951f84a9aeabbe6ee8.jpg",  "./images/62610b951f84a9aeabbe6ee8.webp","-q 80",logging="-v");
// result.then((response) => {
//   console.log(response);
// });

paths.forEach(item => {
  webp.cwebp(item, item.replace(/(\.jpg|\.png|\.jpeg)$/gi, '.webp'), "-q 80",logging="-v")
})