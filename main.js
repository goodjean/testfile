const storeApp = require('./store.js')

function printMenu() {
  console.log("1.모든간식출력하기")
  console.log("2.간식먹기")
  console.log("3.간식추가하기")
  console.log("4.찾은 간식의 이름과 수량 출력하기")
  console.log("5.모든장난감출력하기")
  console.log("6.서브카테고리로 특정 장난감정보 찾기")
  console.log("7.장난감추가하기")
  console.log("8.장난감삭제하기")
  console.log("9.장난감에 서브카테고리 추가하기")
  const input = prompt("원하는 메뉴를 선택하세요!!")
  switch (input) {
    case '1':
      storeApp.printAllSnack()
      break;
    case '2':
      const 이름 = prompt("먹을 간식의 이름을 적어주세요.")
      const 수량 = prompt("먹을 간식의 수량을 적어주세요.")
      storeApp.eatSnack(이름, 수량)
      break;
    case '3':
      const 추가할간식이름 = prompt("추가할 간식의 이름을 적어주세요")
      const 유통기한 = prompt("추가할 간식의 유통기한을 적어주세요")
      const 추가수량 = prompt("추가할 간식의 이름을 적어주세요")
      const 추가재료 = prompt("추가할 간식의 이름을 적어주세요")
      const 제조사 = prompt("추가할 간식의 이름을 적어주세요")
      storeApp.addSnack(추가할간식이름, 유통기한, 추가수량, 추가재료, 제조사)
      break;
    case '4':
      const 찾고싶은간식이름 = prompt("이름과 수량을 알고싶은 간식을 적어주세요")
      storeApp.printNameQuantityBySnackName(찾고싶은간식이름)
      break;
    case '5':
      storeApp.printAllToy()
      break;
    case '6':
      const 장난감서브카테고리이름 = prompt("찾고싶은 장난감 데이터의 서브카테고리를 적어주세요")
      storeApp.printToyDataBySubCategory(장난감서브카테고리이름)
      break;
    case '7':
      const 추가할장난감이름 = prompt("추가하고 싶은 장난감의 이름을 적어주세요")
      const 추가할장난감수량 = prompt("추가하고 싶은 장난감의 수량을 적어주세요")
      const 가격 = prompt("추가하고 싶은 장난감의 가격을 적어주세요")
      const 소재 = prompt("추가하고 싶은 장난감의 소재를 적어주세요")
      const 판매처 = prompt("추가하고 싶은 장난감의 판매처를 적어주세요")
      storeApp.addToy(추가할장난감이름, 추가할장난감수량, 가격, 소재, 판매처)
      break;
    case '8':
      const 삭제할장난감이름 = prompt("삭제하고 싶은 장난감의 이름을 적어주세요")
      const 빼는수량 = prompt("삭제하고 싶은 장난감의 수량을 적어주세요")
      storeApp.deleteToy(삭제할장난감이름, 빼는수량)
      break;
    case '9':
      const 추가할장난감카테고리 = prompt("추가하고 싶은 장난감의 카테고리를 적어주세요")
      const 추가카테고리장난감이름 = prompt("추가하고 싶은 새로운 장난감의 이름을 적어주세요")
      const 추가카테고리수량 = prompt("추가하고 싶은 새로운 장난감의 수량을 적어주세요")
      const 추가카테고리가격 = prompt("추가하고 싶은 새로운 장난감의 가격을 적어주세요")
      storeApp.addToySubCategory(추가할장난감카테고리, 추가카테고리장난감이름, 추가카테고리수량, 추가카테고리가격)
      break;
    case '0':
      console.log("메뉴판을 닫습니다.")
      return;
    default:
      console.log("없는 메뉴입니다.")
      break;
  }
}
printMenu()
      
      
      
      
      
      
      
      

data = require()
storeApp = require('./store.js')
const userData = new loginApp(name, pass).getData()
const storeApp = new storeApp(userData)
storeApp.printMenu()