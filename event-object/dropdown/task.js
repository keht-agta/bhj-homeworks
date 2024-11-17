const mainContainer = document.querySelector('.content')

mainContainer.addEventListener('click', function (e) {
  const targetElem = e.target // Элемент, на котором был выполнен клик
  const textElement = targetElem.textContent // текс элемента
  const containerElem = targetElem.closest('.dropdown') //родитель
  e.preventDefault();// не переходи по ссылке
  // Определяем был ли выполнен клик
  // на нужных нам элементах
  const elem1 = targetElem.closest('.dropdown__value') // кнопка
  const elem2 = targetElem.closest('.dropdown__item') // список

  // Если клик был выполнен вне наших элементов, то прекращаем
  if (elem1 === null && elem2 === null) {
    // Если клик выполнен не на кнопке, ничего не делаем
    console.log("STOP!!!")
    e.stopPropagation()
    return
  }

  if (elem2 === null) {
  containerElem.childNodes[3].classList.add('dropdown__list_active');
  //открываем лист
  }
  if (elem1 === null) {
  // сворачиваем список и меняем текст
  containerElem.childNodes[3].classList.remove('dropdown__list_active');
  containerElem.childNodes[1].textContent = textElement;
  }
})
