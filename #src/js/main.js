
const button = document.querySelector('.header__burger');
const menu =document.querySelector('.mobile-menu')
button.addEventListener('click', event => {
    menu.classList.toggle('active');
});
//tabs
const jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
jsTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        const id = this.getAttribute('data-tab'),
            content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
            activeTrigger = document.querySelector('.js-tab-trigger.active'),
            activeContent = document.querySelector('.js-tab-content.active');

        activeTrigger.classList.remove('active'); // 1
        trigger.classList.add('active'); // 2

        activeContent.classList.remove('active'); // 3
        content.classList.add('active'); // 4
    });
});