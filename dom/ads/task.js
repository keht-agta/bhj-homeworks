// ищем все '.rotator'
document.querySelectorAll('.rotator').forEach(rotator => {
    const rotatorCases = rotator.querySelectorAll('.rotator__case');
    let currentCase =0;
    //    console.log(rotatorCases);

    function changeRotatorCase () {
        //удаляем класс и берем следующий элемент и т.д. использую остаток от деления
        rotatorCases[currentCase].classList.remove('rotator__case_active')
        currentCase = (currentCase + 1) % rotatorCases.length;
        rotatorCases[currentCase].classList.add('rotator__case_active')
        //берем  цвет
        const color = rotatorCases[currentCase].getAttribute('data-color')
        rotatorCases[currentCase].style.color = color;
        //console.log(speed,color)
    }
    //получаем скорость и запускаем вункция с интервалом speed
    const speed = rotatorCases[currentCase].getAttribute('data-speed')
    setInterval(changeRotatorCase, speed);
});