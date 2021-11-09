class 환자 {
  constructor(증상말하기, 보호자이름, 이름) {
    this.증상 = 증상말하기
    this.보호자이름 = 보호자이름
    this.이름 = 이름
  }
  증상말하기() {
    console.log(this.증상)
  }
}
class 포유류 extends 환자 {
} 
class Dog extends 포유류 {
  age;
  constructor(나이, 증상말하기, 보호자이름, 이름) {
    super(증상말하기, 보호자이름, 이름)
    this.age = 나이
  }
  짖기() {
    console.log(age + ": 멍멍")
  }
}


class 동물병원 {
  doctorList = [{이름: "하헌우", 대기열: [],진료과: "포유류"}, {이름: "아이유",대기열: [], 진료과: "조류"}];
  대기열에추가() {
    const 환자 = new Dog("14", "배아팡", "유진엄마", "헌우") 
    환자.증상말하기()
  }
}
const 동물병원app = new 동물병원()
동물병원app.대기열에추가()

const a: 환자 = new Dog()
 a as Dog
const 환자리스트 = []

const num: number = "asdfsfda"


class storeApp {
  constructor(data) {
    this.data = data
  }
}