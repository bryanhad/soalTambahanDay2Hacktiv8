/*
  Buat kondisi untuk mengecek apakah kata merupakan string kosong atau bukan
  example:
  kata = kursi
  output: kata adalah kursi

  kata = ""
  output: tidak ada kata
*/
let kata = ""
if (kata) {
    console.log(`kata adalah ${kata}`)
} else {
    console.log('tidak ada kata')
}


/*
  Buat kondisi untuk mendapatkan output yang sesuai.
  Kondisi untuk jawabanSalah:
  |  0 - 10 = A |
  | 11 - 20 = B |
  | 21 - 30 = C |

  example:
  nama = Budi
  jawabanSalah = 6
  output: Nilai Budi adalah A

  nama = Cadi
  jawabanSalah = 25
  output: Nilai Cadi adalah C
*/
let jawabanSalah = 0
let nama = "Budi"
let nilai

if (jawabanSalah >= 0 && jawabanSalah <= 30) {
    if (jawabanSalah > 20) {
        nilai = "C"
    } else if (jawabanSalah > 10) {
        nilai = "B"
    } else {
        nilai = "A"
    }
    console.log(`Nilai ${nama} adalah ${nilai}`)
} else {
    console.log('jawaban yang salah hanya boleh dalam jangkauan 0 - 30!')
}