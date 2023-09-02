//Menentukan 100 Nilai Random (1 - 50)
let angkaRandom = []

for(i = 0; i < 100; i++) {
    angkaRandom[i] = Math.floor(Math.random() *50) + 1;
    
};
console.log('Nilai 100 Array Random (1 - 50)');
console.log(angkaRandom);

//Menentukan Indeks Array Ganjil dan Genap
let ganjil = [];
let genap = [];

for (i = 0; i < angkaRandom.length; i++){
    if([i] % 2 == 0) {
        genap.push(angkaRandom[i]);
    } else {
        ganjil.push(angkaRandom[i]);
    }
}
console.log('Nilai Indeks Array Genap');
console.log(genap);
console.log('Nilai indeks Array Ganjil');
console.log(ganjil);

//Menentukan Nilai Max, Min, Total & Rata - Rata Indeks Genap
let genapMax = Math.max.apply(null, genap);
let genapMin = Math.min.apply(null, genap);
let genapSum = genap.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let genapRata2 = genap.reduce((accumulator, currentValue) => accumulator + currentValue) / genap.length;

console.log('Nilai Tertinggi (max) pada Array Genap ' + ': ' + genapMax);
console.log('Nilai Tertinggi (min) pada Array Genap ' + ': ' + genapMin);
console.log('Nilai Total pada Array Genap ' + ': ' + genapSum);
console.log('Nilai Rata - Rata pada Array Genap ' + ': ' + genapRata2);

console.log('')

//Menentukan Nilai Max, Min, Total, & Rata - Rata Indeks Ganjil
let ganjilMax = Math.max.apply(null, ganjil);
let ganjilMin = Math.min.apply(null, ganjil);
let ganjilSum = ganjil.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let ganjilRata2 = ganjil.reduce((accumulator, currentValue) => accumulator + currentValue) / ganjil.length;

console.log('Nilai Tertinggi (max) pada Array Ganjil ' + ': ' + ganjilMax);
console.log('Nilai Tertinggi (min) pada Array Ganjil ' + ': ' + ganjilMin);
console.log('Nilai Total pada Array Ganjil ' + ': ' + ganjilSum);
console.log('Nilai Rata - Rata pada Array Ganjil ' + ': ' + ganjilRata2);

console.log('')

//Menentukan Perbandingan Nilai Max, Min, Total, & Rata - Rata Pada Array Ganjil & Genap
console.log('Perbandingan Nilai Antara Array Ganjil dan Array Genap :')

function bandingMax(genapMax , ganjilMax){
    return  genapMax == ganjilMax ? 'Nilai (Max) : Sama Pada Array Genap dan Ganjil' :
            genapMax < ganjilMax ? 'Nilai (Max) : Array Genap Lebih Kecil dari Array Ganjil' :
            'Nilai (Max) : Array Genap Lebih Besar dari Array Ganjil'

}
console.log(bandingMax(genapMax , ganjilMax));

function bandingMin(genapMin , ganjilMin){
    return  genapMin == ganjilMin ? 'Nilai (Min) : Sama Pada Array Genap dan Ganjil' :
            genapMin < ganjilMin ? 'Nilai (Min) : Array Genap Lebih Kecil dari Array Ganjil' :
            'Nilai (Min) : Array Genap Lebih Besar dari Array Ganjil'

}
console.log(bandingMin(genapMin , ganjilMin));

function bandingSum(genapSum , ganjilSum){
    return  genapSum == ganjilSum ? 'Nilai (Total) : Sama Pada Array Genap dan Ganjil' :
            genapSum < ganjilSum ? 'Nilai (Total) : Array Genap Lebih Kecil dari Array Ganjil' :
            'Nilai (Total) : Array Genap Lebih Besar dari Array Ganjil'

}
console.log(bandingSum(genapSum , ganjilSum));

function bandingRata2(genapRata2 , ganjilRata2){
    return  genapRata2 == ganjilRata2 ? 'Nilai (Rata - Rata) : Sama Pada Array Genap dan Ganjil' :
            genapRata2 < ganjilRata2 ? 'Nilai (Rata - Rata) : Array Genap Lebih Kecil dari Array Ganjil' :
            'Nilai (Rata - Rata) : Array Genap Lebih Besar dari Array Ganjil'

}
console.log(bandingRata2(genapRata2 , ganjilRata2));