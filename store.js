const DataApp = require('./data.js')
const ALL_SNACK_DATA = DataApp.간식
const ALL_TOY_DATA = DataApp.장난감
// constructor(dataApp) {
//   this.dadta = dataApp.getDaatA()
// }
function findSnackBySnackName(snackName) {
  return ALL_SNACK_DATA.find((snack) => snack.이름 === snackName)
}

function findSnackDataBySnackName(snackName) {
  ALL_SNACK_DATA.find((snack) => snack.이름 === snackName)
}
// 과제: 리펙토링, 이름도 영어로, class로 바꿔오기, 강의보기 markdown은 대충보기
function findToyByToyName(toyName) {
  const toySubCategoryList = Object.keys(ALL_TOY_DATA)
  let foundToy = null 
  for (let i = 0; i < toySubCategoryList.length; i++) {
    const toySubCategory = toySubCategoryList[i]
    const toyListFromSubCategory = ALL_TOY_DATA[toySubCategory]
    foundToy = toyListFromSubCategory.find((toy) => toy.이름 === toyName)
    if(foundToy !== null) {
      return foundToy
    }
  }
  return foundToy
}

function findToyByToyNameWithSubCategory(toyName, subCategory) {
  return ALL_TOY_DATA[subCategory].find((toy) => toy.이름 === toyName)
}

//간식먹기
  function eatSnack(snackName, Quantity) {
    const foundSnack = findSnackBySnackName(snackName)
      if(foundSnack !== undefined) {
        foundSnack.수량 -= Quantity
      } else {
        console.log("없는거야 이년아")
      }
  }
    // console.log(DataApp)
    // eatSnack('장어', 1)

//간식추가
  function addSnack(snackName, shelfLife, Quantity, ingredient, SnackFactory) {
    const foundSnack = findSnackBySnackName(snackName)
      if(foundSnack !== undefined) {
        foundSnack.수량 += additionalQuantity
      } else {  
        ALL_SNACK_DATA.push({snackName, shelfLife, Quantity, ingredient, SnackFactory})
      }  
    }
    // console.log(DataApp)
    // addSnack('메기', 15, 12, '조류', '오뚜기')
   

// 모든간식출력
  function printAllSnack() {
    console.log(ALL_SNACK_DATA)
  }
    // printAllSnack()

// 모든장난감출력
  function printAllToy() {
    console.log(ALL_TOY_DATA)
  }
    // printAllToy()

// 특정서브카테고리의 장난감출력
  function 특정서브카테고리의장난감출력하기(장난감서브카테고리이름) {
    const subCategoryList = Object.keys(ALL_TOY_DATA)
    for (let i = 0; i < subCategoryList.length; i++) {
      const subCategory = subCategoryList[i]
      const subCategoryData = ALL_TOY_DATA[subCategory]
      if (subCategory === 장난감서브카테고리이름) {
        console.log(subCategoryData)
      }
    }
  }
   특정서브카테고리의장난감출력하기('터그')

// 1111장난감추가하기 
  function 장난감추가하기(이름, 수량, 가격, 소재, 판매처) {
    const subCategoryList = Object.keys(강아지용품데이터.장난감)
    for (let i = 0; i < subCategoryList.length; i++) {
      const subCategory = subCategoryList[i]
      const toyDataList = 강아지용품데이터.장난감[subCategory]
    for (let j = 0; j < toyDataList.length; j++) {
      const toyData = toyDataList[j]
      if(toyData.이름 === 이름) {
        return toyData.수량 = toyData.수량 + 수량
      } else {
        toyDataList = toyDataList.push({이름, 수량, 가격, 소재, 판매처})
      } 
    }
    }
  }

   // console.log(강아지용품데이터.장난감)
   // 장난감추가하기('고양이터그', 8, 10000, '실크', '고먐미나라')

  
// 2222장난감의 서브카테고리 추가하기
  function 장난감서브카테고리추가하기(추가카테고리, 이름, 수량, 가격) {
    강아지용품데이터.장난감[추가카테고리] = [{이름, 수량, 가격}] 
    
  }
   // console.log(강아지용품데이터.장난감)
   // 장난감서브카테고리추가하기('집게', '오리집게', 3, 1000)


// 장난감삭제하기
  function 장난감삭제하기(이름, 빼는수량) {
    const subCategoryList = Object.keys(강아지용품데이터.장난감)
    console.log(subCategoryList)
    for (let i = 0; i < subCategoryList.length; i++) {
      const subCategory = subCategoryList[i]
      const toyDataList = 강아지용품데이터.장난감[subCategory]
      console.log(subCategory)
    for (let j = 0; j < toyDataList.length; j++) {
    const toyData = toyDataList[j]
      if(toyData.이름 === 이름) {
      toyData.수량 = toyData.수량 - 빼는수량
      }
    }
    }
  }
   // console.log(강아지용품데이터.장난감)
   // 장난감삭제하기('악어터그', 3)

// 3333모든 간식의 이름과 수량 출력
  function 모든간식이름과수량출력하기() {
    const 모든간식데이터 = 강아지용품데이터.간식
    for (let i = 0; i < 모든간식데이터.length; i++) {
      const 각간식데이터 = 모든간식데이터[i]
      console.log('이름 :', 각간식데이터.이름, '/ 수량 :', 각간식데이터.수량)
    }
  }
   // 모든간식이름과수량출력하기()

// 4444모든 간식찾기
  function 모든간식찾기() {
    const 모든간식데이터 = 강아지용품데이터.간식
    for (let i = 0; i < 모든간식데이터.length; i++) {
      const 각간식데이터 = 모든간식데이터[i]
      console.log(각간식데이터.이름, 각간식데이터)
    }
  }
   // 모든간식찾기()

// 5555찾은 간식의 이름과 수량 출력
  function 찾은간식이름과수량출력하기(찾고싶은간식이름) {
    const 모든간식데이터 = 강아지용품데이터.간식
    for (let i = 0; i < 모든간식데이터.length; i++) {
      const 각간식데이터 = 모든간식데이터[i]
      if(각간식데이터.이름 === 찾고싶은간식이름) {
        console.log('이름 :', 각간식데이터.이름, '/ 수량 :', 각간식데이터.수량)
      }
    }
  }
   // 찾은간식이름과수량출력하기('연어')
 
  module.exports = {
    eatSnack: (이름, 빼는수량) => 간식먹기(이름, 빼는수량),
    addSnack: (이름, 유통기한, 추가수량, 추가재료, 제조사) => 간식추가(이름, 유통기한, 추가수량, 추가재료, 제조사),
    printAllSnack: () => 모든간식출력하기(),
    printAllToy: () => 모든장난감출력하기(),
    printToyDataBySubCategory: 장난감서브카테고리이름 => 특정서브카테고리의장난감출력하기(장난감서브카테고리이름),
    addToy: (이름, 수량, 가격, 소재, 판매처) => 장난감추가하기(이름, 수량, 가격, 소재, 판매처),
    addToySubCategory: (추가카테고리, 이름, 수량, 가격) => 장난감서브카테고리추가하기(추가카테고리, 이름, 수량, 가격),
    deleteToy: (이름, 빼는수량) => 장난감삭제하기(이름, 빼는수량),
    printAllSnackNameQuantity: () => 모든간식이름과수량출력하기(),
    printNameQuantityBySnackName: (찾고싶은간식이름) => 찾은간식이름과수량출력하기(찾고싶은간식이름),
    printMenu: () => printMenu()
  }