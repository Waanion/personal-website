'use strict';

const switcher = document.querySelector('.mode') 
switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    console.log('current class name: ' + className);

});
