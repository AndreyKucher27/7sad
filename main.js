$(document).ready(function(){ 
    $('.galery').slick({ //инициализируем слайдер
        slidesToShow: 3, //одновременно показываем 3 картинки
        slidesToScroll: 1, //скроллим на одну картинку
        dots: true, //точки
        infinite: true, //зацикленность карусели
        arrows: true, //jquery
        responsive: [ //адаптивность
            {
                breakpoint: 800, //если ширина экрана меньше 800
                settings: { //настройки
                    slidesToShow: 1, //показываем одну картинку
                }
            }
        ]
    })
});
//Код, включенный в $( document ).ready(), будет выполняться только тогда, когда объектная модель документа (DOM)
//страницы будет готова к выполнению кода JavaScript.
