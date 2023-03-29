//плавный скролл
const menu_links = document.querySelectorAll('.header__menu-link');
menu_links.forEach((link) => link.addEventListener('click', event => {
    event.preventDefault(); //отменяем поведение по умолчанию
    const section = document.querySelector(link.getAttribute('href')); //находим сексцию на которую ссылка должна идти
    section.scrollIntoView( {
        behavior: 'smooth'
    })
}))

// точки в hero 
const hero_dots = document.querySelectorAll('.hero__dot');
const hero_img = document.querySelector('.hero__image');
const hero_title = document.querySelector('.hero__title');
const hero_subbtitle = document.querySelector('.hero__subbtitle');
const titles = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
];
const subbtitle = [ 
    'Для вашего удобства мы разработали множество для вашего бизнеса и команды, которые доступны любое время суток',
    'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
    'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов'
]; 
hero_dots.forEach((dot, index) =>
    dot.addEventListener('click',() => {
        hero_dots.forEach(el => {
            el.classList.remove('active'); //убираем класс active
        })
        dot.classList.add('active'); //добавляется класс active, на которые нажимаем
        hero_img.src = `Img_${index + 1}.png`; //изменяем картинку
        hero_title.textContent = titles[index];
        hero_subbtitle.textContent = subbtitle[index];

    }))