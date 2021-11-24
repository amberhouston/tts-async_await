  
let getRandomNumber = function() {
  let promise = new Promise( (resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random()), 500)
      }, 500);
      
      
  })
  return promise
}

async function a() {
  getRandomNumber().then(result =>console.log(result))
}

a();


//
// async function getCity() {
//     let response = await fetch('https://geocode.xyz/seattle?json=1');
//      let data = await response.json()
//
// console.log('Latitude: ' + data.latt + '\nLongitude: ' + data.longt)
// }
