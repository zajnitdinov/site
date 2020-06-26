import './scss/index.scss';

const dropdownMenu = document.getElementsByClassName('dropdown__menu__tag')[0];
const searchInputTag = document.getElementsByClassName('search__input__tags__field')[0];

dropdownMenu.style.display = 'none';

searchInputTag.onclick = function () {
    dropdownMenu.style.display = 'inline-block'
    dropdownMenu.style.transition = '1000ms ease-in'
}