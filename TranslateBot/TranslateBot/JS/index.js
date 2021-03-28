//переход по ссылкам
function redirectTo(href){
    switch (href){
        case 'logo':
            window.location.href="#logo"
            break;
        case 'freeaccess':
            window.location.href="#freeaccess"
            break;
        case 'wanttouse':
            window.location.href="#wanttouse"
            break;
        case 'sendmessage':
            window.location.href="#sendmessage"
            break;
        case 'writetobot':
            window.location.href="#writetobot"
            break;



        case 'social':
            window.location.href="#telegram"
            break;
        case 'vk':
            window.location.href="#vk"
            break;
        case 'facebook':
            window.location.href="#facebook"
            break;
        case 'talkme':
            window.location.href="#talkme"
            break;
        case 'onlinechat':
            window.location.href="#onlinechat"
            break;
        case 'whatsapp':
            window.location.href="#whatsapp"
            break;
        case 'viber':
            window.location.href="#viber"
            break;
        case 'webim':
            window.location.href="#webim"
            break;
        case 'whatsappbusiness':
            window.location.href="#whatsappbusiness"
            break;
        case 'livetex':
            window.location.href="#livetex"
            break;
        case 'avito':
            window.location.href="#avito"
            break;
        case 'odnoclassniki':
            window.location.href="#odnoclassniki"
            break;
        case 'instagram':
            window.location.href="#instagram"
            break;
        case 'add':
            window.location.href="#add"
            break;

    }}

document.getElementById("trigger").onclick = function() {
    open()};

function open() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("trigger").classList.toggle("show");

}

//Тарифы
const services=["Online-chat","Бот для мессенджеров","Бот для Whatsapp","Сбор заявок","Графический редактор","Отправка медиафайлов","CRM","Перенос клиентской базы",
    "Инструменты оператора","Статистика","Рассылки","Bitrix, AmoCRM","Работа с API","Запись/бронирование",
    "Работа с Google таблицами","Программируемая логика","Высокая нагрузка","Оплаты в боте"]

const base="base",
    standart="standart",
    premium="premium";
const tarifs = new Map();
tarifs.set(base,10);
tarifs.set(standart,12);
tarifs.set(premium,18);

$(document).ready ( function(){

    FillServices();
    SetTarifs();
})
function FillServices(){
    var el=document.getElementById("services");
    services.forEach(v=>{
        var li = document.createElement('li');
        li.textContent=v;
        el.appendChild(li);
    }
)
}
function SetTarifs(){

    var elindex=0;
    for( var [key,value] of tarifs){

        var el=document.getElementById(key);
        services.forEach(v=>{
            var li = document.createElement('li');
            var div = document.createElement('div');
            var p=document.createElement('p');
            p.textContent=v;
            if(elindex<value){
                li.classList.toggle("have");
            }
            else{
                li.classList.toggle("donthave");
            }
            li.appendChild(p)
            li.appendChild(div)

            el.appendChild(li);
            elindex++;})
       elindex=0;
        }
    }


    //Анимация
var CharTimeout = 50; // скорость печатания
var StoryTimeout = 2000; // время ожидания перед переключением

var Summaries = new Array();
var SiteLinks = new Array();

Summaries[0] = 'на разных языках мира';
Summaries[1] = 'in different languages of the world';
Summaries[2] = '世界のさまざまな言語で';
Summaries[3] = 'dans différentes langues du monde';
Summaries[4] = '세계의 다른 언어로';

function startTicker(){
    massiveItemCount =  Number(Summaries.length); //количество элементов массива
    // Определяем значения запуска
    CurrentStory     = -1;
    CurrentLength    = 0;
    // Расположение объекта
    AnchorObject     = document.getElementById("text-typing");
    runTheTicker();
}
// Основной цикл тиккера
function runTheTicker(){
    var myTimeout;
    // Переход к следующему элементу
    if(CurrentLength == 0){
        CurrentStory++;
        CurrentStory      = CurrentStory % massiveItemCount;
        StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');
    }
    // Располагаем текущий текст в анкор с печатанием
    AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + znak();
    // Преобразуем длину для подстроки и определяем таймер
    if(CurrentLength != StorySummary.length){
        CurrentLength++;
        myTimeout = CharTimeout;
    } else {
        CurrentLength = 0;
        myTimeout = StoryTimeout;
    }
    // Повторяем цикл с учетом задержки
    setTimeout("runTheTicker()", myTimeout);
}
// Генератор подстановки знака
function znak(){
    if(CurrentLength == StorySummary.length) return "";
    else return "|";
}

startTicker();

//Каруселька

function getDevice (){
    $( window ).resize(function (){
    if($(window).width() <= 767)
    {  callOwlCarousel(); }})
    if($(window).width() <= 767)
    {  callOwlCarousel(); }
}
getDevice();

function callOwlCarousel(){
    var carousels=document.getElementsByClassName("owlcarousel");
    for(var carousel of carousels){
        carousel.classList.toggle("owl-carousel");
        carousel.classList.toggle("owl-theme");
        $('.owl-carousel').owlCarousel({
            touchDrag: true,
            dots: true,
            loop: true,
            items: 1,
        })
    }

}

//Чатик
document.getElementById("chattriger").onclick = function() {
    openChat()};

function openChat() {
    document.getElementById("chatcontainer").classList.toggle("show");
}

jQuery(function($){
    var convForm = $('#chat').convform();
    console.log(convForm);
});
