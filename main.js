// local storage >> veriler bi silinene kadar durur
// session storage >> veriler sekme kapatılınca silinir

// setItem(anahtar,değer)
//veri ekleyeceksem>>>istedğim veriyi saklayabiliyorum
localStorage.setItem("deneme", "denemelik veri");

//veri çekeceksem >>>> yalnızca anahtar>>>istediğim veriyi çekebiliyorum
const localVeri = localStorage.getItem("deneme");

console.log(localVeri);

//.removeItem() > veriyi siler
localStorage.removeItem("deneme");

// THIS >> Hem javascripte hem de java. frameworklarında çokça kullanılan bir tanım var.react,vue,anguler gibi fram.

//bir obje kendi içerisinde kendi değerlerine erişmek için kullanılır
const car = {
  marka: "BMW",
  model: "M5",
  year: 2016,
  start: function () {
    //return this.model + " " + this.marka + " çalıştı";
    //return ` ${this.marka} , ${this.model} çalıştı...`;
    //return this;
  },
};

//alert(car.model);
//alert(car.start());

//console.log(car.start());

//OOP > Objeleri didikleyeceğimiz inceleyeceğimiz classlar konusu.Bu classlar
//bir çok yazılım dilinde vardır ve bu classlar sayesinde bazı obje kalıpları
//oluşturup bu classlardan bir çok objeyi oluşturabiliyoruz.Ve bu classlar sadece
//javascrıptte değil C+ gibi Cshut java gibi bir çok yazılım dilinde kullanılan
//yapılardır classlar.

//---------OOP
//---Javascript objeye yönelik programlama dilidir.
//---Jv da gördüğümüz neredeyse herşey objelerden oluşur.
//---OOP DİR.JV objeye yönelik programlama dilidir.

//--objelerden oluşmayan bazı şeyler var
//--Pirimitive(ilkel) DEĞERLER: Number, string, boolean(True-false), undefined null
//ilkel obje olmayan verilerdir.bunlar dışında javascpritte olan herşey objelerden
// oluşur.
// diğer herşey object > Date Math Array Function

// Object Literal > Oluştur ve direkt değer ver.

let selin = {
  name: "selin",
  bDay: 2020,
  job: "yazilim",
};

let inci = {
  name: "inci",
  bDay: 2014,
  job: "öğrenci",
};

//bir tane fonksiyon yazmak ve bizim yerimize böyle oluşturmasını sağlamak

//obje oluşturmak için kullanılan fonksiyon

function Person(Dname, Dbirt, Djob) {
  this.name = Dname;
  this.bDay = Dbirt;
  this.job = Djob;
  //herbir objeyi ekrana basar
  console.log(this);
}

// person kalıbından çıkacak bir obje oluşturma
let selin1 = new Person("Deneme", 2014, "yazilim");
let inci1 = new Person("İnci", 1879, "öğrenci");

//console.log(selin1);
//console.log(inci1);

//prototype >bir objenin özelliklerinin ve davranışlarının yer aldığı bir yapıdırPrototype sayesinde objenin kendine ait olmayan özelliklerinin tanımlayabiliyoruz.

//Prototype > Bir objenin kendine ait olmayan ancak o objeye ait bir özellikmiş
//gibi gözükmesini istediğimiz eğerleri içerir.
//arabanın prototype.

Person.prototype.yasHesapla = function () {
  return 2023 - this.bDay;
};

let yasliAdam = new Person("mehmet", 1950, "deneme");

console.log(yasliAdam.yasHesapla());

const hesaplananYas = yasliAdam.yasHesapla();

yasliAdam.yas = hesaplananYas;

//--------CLASS(sınıf) > java.benzer özelliklere ve fonksiyonlara sahip objelerin bir şablonudur.
//daha demein gördüğümüz fonksiyonla aynı mantıkta çalışan ekstra özellikleri olan ve
// es6 ile geldiğini de bilmemiz yeterli.
//java sınıfları sayesinde bir nesne oluşturmadan önce özelliklerini ve fonsksiyonalrını nasıl olacağını tanımlayan bir tasarım diyebilirirz.daha sonrasında bu tasarımla oluşturulan objeleri proje içerisinde kullanabiliyoruz.Yine aynı mantıkta buna objelerin oluşturulacağı şablonda diyebiliriz.

//classların yazım şekli
class ClassAdi {
  //ilk harfi büyük olmalı
  //bizden method çağırmamızı istiyor.bunun içerisinde dışarıdan gelecek property ve diğer kodlara erişim sağlayabiliyorum
  constructor() {} //kurucu method : property ve diğer kodlar

  yasHesapla() {} // oluşturulan bütün nesneler tarafından erişilir

  static isimYaz() {} //sadece sınıf içerisinden erişilebilir
}

const instance = new ClassAdi(); //bir classtan instance(örnek oluşturma)

//------------------------teknoloji mağ ürünler için class oluşturalım

class Urunler {
  constructor(Dmarka, Dmodel, Dfiyat) {
    this.marka = Dmarka; // anahtar-değer
    this.model = Dmodel;
    this.fiyat = Dfiyat;
  }

  //2
  yeniModel(yeniIsim) {
    this.model = yeniIsim;
  }
  //3
  urunuOku() {
    return `marka:${this.marka} , model:${this.model}`;
  }
}

const iphone = new Urunler("apple", "iphone x", 200000);

console.log(iphone);

//yeni model tanımlandı
iphone.yeniModel("iphone 11");

console.log(iphone);

//oluşturulan obje içeriisnde ki methodu çağırma
console.log(iphone.urunuOku());

//obje içerisinde ki değere erişme
console.log(iphone.fiyat);

//fiyat-deneme.
//2.yöntem genelede özel karakter sorgulandığında
console.log(iphone["fiyat"]);

// sub class (alt sınıf) > extends (miras alma)

class GelismisUrun extends Urunler {
  constructor(Dgaranti, Dsahip, Dmarka, Dmodel, Dfiyat) {
    //özellikleri miras alma
    super(Dmarka, Dmodel, Dfiyat);
    //yeni özellikleri tanımlama
    this.garanti = Dgaranti;
    this.sahip = Dsahip;
  }

  urunuOku() {
    console.log("ürünün sahibi: " + this.sahip);
    //atadan gelen fonksşyonu miraas alam
    super.urunuOku();
  }
}

const YeniUrun = new GelismisUrun("4 yıl", "Mağazada", "Xiaomi", "Mi 11", 7000);

console.log(YeniUrun);

YeniUrun.urunuOku();
