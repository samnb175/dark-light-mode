
const nav = document.getElementById('nav')
const toggler = document.querySelector('.theme-switch input')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textbox = document.getElementById('text-box')

//get light-dark mode from local storage and change theme
const storedTheme = localStorage.getItem('theme')
if (storedTheme) {
    themeMode(storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)
    storedTheme === "dark" ? toggler.checked = true : toggler.checked = false
}


//Light-Dark Mode function
function themeMode(mode) {
    nav.style.backgroundColor = mode === 'dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'
    textbox.style.backgroundColor = mode === 'dark' ? 'rgb(255 255 255 / 50%' : 'rgb(0 0 0 / 50%'
    toggleIcon.children[0].textContent = mode === 'dark' ? 'Dark Mode' : 'Light Mode'
    mode === 'dark' ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    image1.src = `img/undraw_proud_coder_${mode}.svg`
    image2.src = `img/undraw_feeling_proud_${mode}.svg`
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`
}

function switchTheme(el) {
    if (el.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        themeMode('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        themeMode('light')
        localStorage.setItem('theme', 'light')
    }  
}


