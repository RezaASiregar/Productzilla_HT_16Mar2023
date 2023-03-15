class Person {
    name;
    age;
    gender;
    height;

    setName(name){
        this.name = name;
    }

    setAge(age){
        this.age = age;
    }

    setGender(gender){
        this.gender = gender;
    }

    setHeight(height){
        this.height = height;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getGender(){
        return this.gender;
    }

    getHeight(){
        return this.height;
    }
}

const person1 = new Person();
person1.setName('Reza Abdillah Siregar');
person1.setAge(22);
person1.setGender('Laki-Laki');
person1.setHeight('165 cm');
const person1name = person1.getName;
const person1age = person1.getAge;
const person1gender = person1.getGender;
const person1height = person1.getHeight;
console.log(person1);

class Student {
    nama;
    NIM;
    daftarNilai;
    constructor(daftarNilai){
        this.daftarNilai =  daftarNilai
    }

    setNama(nama){
        this.nama = nama
    }

    setNIM(NIM){
        this.NIM = NIM
    }

    getNama(){
        return this.nama;
    }

    getNIM(){
        return this.NIM;
    }

    getdaftarNilai(){
        return this.daftarNilai
    }

    pushNilai(tambah){
        this.daftarNilai.push(tambah)
        return this.daftarNilai
    }
    
    Average(){
        let rata = 0,
        ratarata
        for(let i=0;i<this.daftarNilai.length;i++){
            rata += this.daftarNilai[i]
        } ratarata = rata/this.daftarNilai.length 
        return ratarata
    }
    Predikat(ratarata){
        if (ratarata >= 91){
            console.log("A")
        }else if(ratarata  >= 85 ){
            console.log("B+")
        }else if(ratarata >= 81 ){
            console.log("B")
        }else if(ratarata >= 75){
            console.log("C+")
        }else if(ratarata >= 71){
            console.log("C")
        }else if(ratarata >= 65){
            console.log("D")
        }else{
            console.log("E")
        }
    }
}

const pel = new Student([80,80,90,90,100])
pel.setNama('Reza Abdillah Siregar');
pel.setNIM('123456789')

const pelNama = pel.getNama;
const pelNIM = pel.getNIM;
const pelPredikat = pel.Predikat;
const pelAverage = pel.Average;

console.log('Nama       : ', pel.getNama())
console.log('NIM        : ', pel.getNIM())
console.log('Nilai Awal : ', pel.getdaftarNilai())
console.log('Nilai Avg  : ', + pel.Average())
pel.Predikat(pel.Average())
console.log('==================================')
console.log('Nilai Tambahan : ', pel.pushNilai(100))
console.log('Nilai Avg  : ', + pel.Average())
pel.Predikat(pel.Average())






