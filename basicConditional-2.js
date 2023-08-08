/* Buat kondisi untuk mengecek apakah "warna" adalah putih atau hitam */
let warna = "putih"
if (warna === 'putih') {
    console.log('warnanya putih!')
} else if (warna === 'hitam') {
    console.log('warnanya hitam!')
}


/* Buat kondisi untuk hewan selain berkaki empat */
let kakiHewan = 4
if (kakiHewan !== 4) {
    console.log('hewan ini tidak berkaki 4!')
}

/* Buat kondisi untuk umur lebih dari 40 */
let umur = 50
if (umur > 40) {
    console.log('umur lebih dari 40!')
}

/* Buat kondisi untuk nilai kurang dari 80 dan lebih dari 60 */
let nilai = 40
if (nilai < 80 && nilai > 60) {
    console.log('nilai kurang dari 80 dan lebih dari 60!')
}

/* Buat kondisi untuk role adalah student atau role instruktur */
let role = "instruktur"
if (role === 'student') {
    console.log(`kamu student!`)
} else if (role === 'instruktur') {
    console.log('kamu instruktur!')
}


/* Buat kondisi untuk mengecek apakahSudahMakan true atau false */
let apakahSudahMakan = false
if (apakahSudahMakan) {
    console.log('sudah makan!')
} else {
    console.log('belum makan!')
}


/* Buat kondisi untuk mengecek apakah apakahSebuahTruthy adalah sebuah truthy */
let apakahSebuahTruthy = ""
if (apakahSebuahTruthy) {
    console.log('truthy!')
}


/* Buat kondisi untuk mengecek apakah apakahSebuahFalsy adalah sebuah falsy */
let apakahSebuahFalsy = "adasdas"
if (!apakahSebuahFalsy) {
    console.log('falsy')
}


/* Buat kondisi untuk mengecek apakah tipe data angka adalah sebuah number atau bukan */
let angka = "1989"
if (typeof angka !== 'number') {
    console.log('bukan angka!')
} else {
    console.log('angka kok!')
}


/* Buat kondisi untuk mengecek apakah kalimat memiliki panjang kurang dari 5 */
let kalimat = "abcdef"
if (kalimat.length < 5) {
    console.log('panjang kalimat kurang dari 5 kok!')
}