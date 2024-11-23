const mainContainer = document.querySelector('.book__controls')

mainContainer.addEventListener('click', function (e) {
  const targetElem = e.target // Элемент, на котором был выполнен клик
  const textElement = targetElem.textContent // текст элемента
  const containerElem = targetElem.closest('.book__controls') //родитель элемент
  const containerNode = targetElem.parentNode // родитель узел
  e.preventDefault();// не переходи по ссылке
  const childrenElem = e.children // дети
  const childrenNode = e.childNodes

// Определяем был ли выполнен клик на нужных нам элементах
  const elem1 = targetElem.closest('.book__control') // ссылка но не класс color_title
  //   Если клик был выполнен вне наших элементов, то прекращаем
  if (elem1 === null || targetElem.classList.contains("color__title")) {
    // Если клик выполнен не на ссылках, ничего не делаем
    console.log("STOP!!!")
    e.stopPropagation()
    return
  }

  const activeClass = Array.from(targetElem.classList).find(cls => cls.includes('active'));
   // Удаляем активный класс от всех элементов
 const nodeList3 = containerNode.querySelectorAll('a');
   let activeClassName = ""
   nodeList3.forEach(elem => { //удаляем все активные классы
        const activeClass = Array.from(elem.classList).find(cls => cls.includes('active'));        if (activeClass) {
        activeClassName = activeClass;
        }
        elem.classList.remove(activeClass);
   });
// активному элементу добавляем активный класс.
//Универсально для всех кнопок
   targetElem.classList.add(activeClassName)
// удаляем все класс связанные с текстом и заново добавляем нужный
    book.classList.remove('font-size_small', 'font-size_big');
    if (targetElem.dataset.size === 'small') {
            book.classList.add('font-size_small');
        } else if (targetElem.dataset.size === 'big') {
            book.classList.add('font-size_big');
    }

});










                    //Черновик
//const mainContainer = document.querySelector('.book__controls')
//
//mainContainer.addEventListener('click', function (e) {
//  const targetElem = e.target // Элемент, на котором был выполнен клик
//  const textElement = targetElem.textContent // текст элемента
//  const containerElem = targetElem.closest('.book__controls') //родитель элемент
//  const containerNode = targetElem.parentNode // родитель узел
//
//  e.preventDefault();// не переходи по ссылке
//  // Определяем был ли выполнен клик на нужных нам элементах
//
//  const childrenElem = e.children // дети
//  const childrenNode = e.childNodes
//
//  const elem1 = targetElem.closest('.book__control') // ссылка но не класс color_title
//  //   Если клик был выполнен вне наших элементов, то прекращаем
//  if (elem1 === null || targetElem.classList.contains("color__title")) {
//    // Если клик выполнен не на ссылках, ничего не делаем
//    console.log("STOP!!!")
//    e.stopPropagation()
//    return
//  }
//
////  console.log('targetElem',targetElem)
//  console.log('textElement',textElement)
//  console.log('containerNode', containerNode)
//  console.log('containerNodeChild', containerNode.childNodes)
//  console.log('containerElemchildNodes', containerElem.childNodes)
//  console.log('containerElem', containerElem)
//  console.log('containerElemChild', containerElem.childNodes)
//  console.log('childrenElem',childrenElem)
//  console.log('childrenNode',childrenNode)
//  console.log('classList',targetElem.classList)
//  const activeClass = Array.from(targetElem.classList).find(cls => cls.includes('active'));
////    console.log("активный класс есть",activeClass);
////    if (activeClass) {
////        console.log("активный класс есть",activeClass); // Выводит название класса в консоль
////
////    }
////  console.log('elem1.childNodes',elem1.childNodes)
//   // Удаляем активный класс от всех элементов
////   const nodeList1 = document.querySelectorAll('.font-size')
////   const nodeList2 = containerNode.querySelector('.book__control')
//   const nodeList3 = containerNode.querySelectorAll('a');
////   const nodeList = containerNode.childNodes
////   console.log('nodeList', nodeList)
////   console.log('nodeList1', nodeList1)
////   console.log('nodeList2', nodeList2)
////   console.log('nodeList3', nodeList3)
//   let activeClassName = ""
//
//   nodeList3.forEach(elem => { //удаляем все активные классы
//        const activeClass = Array.from(elem.classList).find(cls => cls.includes('active'));
//        //        console.log(activeClass)
//        if (activeClass) {
////            console.log("активный класс есть",activeClass);// Выводит название класса
//            activeClassName = activeClass;
////            console.log(activeClassName)
//        }
//        //        console.log("elem.classList",elem.classList);
//        elem.classList.remove(activeClass);
//        //        console.log(activeClassName)
//   });
////   console.log(activeClassName)
////   console.log(targetElem.classList)
//   targetElem.classList.add(activeClassName)
////   console.log(targetElem.classList)
//
////   console.log("sdfsd",targetElem.classList)
//
////   const book = document.getElementById('book')
////    console.log(containerElem.closest('.book').classList)
////    const test = containerElem.closest('.book')
////    test.classList.add('font-size_small')
////console.log(book.classList)
////    book.classList.add(targetElem.classList[1])
//    console.log(book.classList)
//    book.classList.remove('font-size_small', 'font-size_big');
//    if (targetElem.dataset.size === 'small') {
//            book.classList.add('font-size_small');
//        } else if (targetElem.dataset.size === 'big') {
//            book.classList.add('font-size_big');
//    }
//
//});
//
//
