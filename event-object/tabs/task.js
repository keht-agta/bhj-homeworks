const tabContainer = document.getElementById('tabs1');
const tabs = tabContainer.querySelectorAll('.tab');
const contents = tabContainer.querySelectorAll('.tab__content');


//console.log("tabs=",tabs);
//console.log("contents=", contents);
//определяем id объекта по которому сделали клик
tabs.forEach((tab, index) => {
     tab.addEventListener('click', () => {
     showContent(index);// отправляем индекс в функцию показа
//     console.log(index);
     });
});

function showContent(index){
// удаляем все активные ссылки
    tabs.forEach((tab, i) => {
        tab.classList.remove('tab__active');
        contents[i].classList.remove('tab__content_active');
        });
        //добавляем тегу с ИД нужный атрибут активности
        tabs[index].classList.add('tab__active');
        contents[index].classList.add('tab__content_active');
    };