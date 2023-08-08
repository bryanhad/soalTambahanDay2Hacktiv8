/*
  Buat kondisi untuk mengecek kemana kamu pergi berdasarakn kendaraan yang dipunya
  | Kendaraan | Destinasi |
  | Motor     | Taman     |
  | Mobil     | Puncak    |
  | Kereta    | Monas     |
  | Pesawat   | Bali      |
  Ketika kendaraan tidak termasuk diatas maka akan stay di rumah aja

  example:
  nama = Fudi
  kendaraan = Motor
  output: Fudi akan menggunakan Motor untuk pergi ke Taman

  nama = Gidi
  kendaraan = Kuda
  output: Gidi akan di rumah saja
*/
let nama2 = "Lobi"
let kendaraan = "Pesawat"
let destinasi

switch (kendaraan) {
    case 'Motor':
        destinasi = 'Taman'
        break
    case 'Mobil':
        destinasi = 'Puncak'
        break
    case 'Kereta':
        destinasi = 'Monas'
        break
    case 'Pesawat':
        destinasi = 'Bali'
        break
    default: 
        destinasi = null
        break
}

if (destinasi) {
    console.log(`${nama2} akan menggunakan ${kendaraan} untuk pergi ke ${destinasi}`)
} else {
    console.log(`${nama2} akan dirumah saja`)
}

/*
  Buat kondisi untuk mengecek inputan user
  validasi errornya adalah
  
apabila inputan kurang dari 5
apabila inputan termasuk falsy

  example:
  username = "Firefirefire"
  input = "a"
  output: Maaf Firefirefire minimum input adalah 5

  username = "projenletitgo"
  input = undefined
  output: Maaf projenletitgo input tidak jelas

  username = "Bolobolo"
  input = "abcdef"
  output: Silahkan masuk Bolobolo
*/
let username = "heisenberg"
let input = "?"

if (!input) {
    console.log(`Maaf ${username} input tidak jelas`)
} else if (input.length < 5) {
    console.log(`Maaf ${username} minimum input adalah 5`)
} else {
    console.log(`Silahkan masuk ${username}`)
}