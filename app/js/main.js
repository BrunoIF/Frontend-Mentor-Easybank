var menuButton = document.getElementById('menu-icon')
var menuList = document.getElementById('menu-list')
var menuLines = document.querySelectorAll('#menu-icon .nav__icon-line')
var menuOverlay = document.getElementById('menu-overlay')
var isOpen = false

var body = document.querySelector('body')


body.style.overflowY = "hidden"

window.onload = () => docReady()


menuButton.addEventListener('click', () => {
  if(!isOpen) {
    isOpen = true
    var tl = new TimelineMax()
    tl
      .to(menuList, .5, {autoAlpha: 1, y: '10%'}, 'a')
      .to(menuOverlay, .5, {autoAlpha: 1}, 'a')
      .to(menuLines[2], .3, {y: -5, ease: Power1.easeOut}, 'a')
      .to(menuLines[0], .3, {y: 5, ease: Power1.easeOut}, 'a')
      .set(menuLines[1], {autoAlpha: 0}, 'a')
      .to(menuLines[0], .5, {transformOrigin: 'center', rotation: 45, ease: Elastic.easeOut.config(1, 1)}, 'a+=.2')
      .to(menuLines[2], .5, {transformOrigin: 'center', rotation: -45, ease: Elastic.easeOut.config(1, 1)}, 'a+=.2')
  }
  else{
    closeMenu()
  }
})


menuOverlay.addEventListener('click', () => closeMenu())


const closeMenu = () => {
  isOpen = false
  var tl = new TimelineMax()
  tl
    .to(menuList, .5, {autoAlpha: 0, y: '-10%'}, 'a')
    .to(menuOverlay, .5, {autoAlpha: 0}, 'a')
    .to(menuLines[0], .5, {transformOrigin: 'center', rotation: 0, ease: Elastic.easeOut.config(1, 1)}, 'a')
    .to(menuLines[2], .5, {transformOrigin: 'center', rotation: 0, ease: Elastic.easeOut.config(1, 1)}, 'a')
    .to(menuLines[2], .3, {y: 0, ease: Power1.easeOut}, 'a+=.2')
    .to(menuLines[0], .3, {y: 0, ease: Power1.easeOut}, 'a+=.2')
    .set(menuLines[1], {autoAlpha: 1}, 'a')
}


const docReady = () => {
  
  var tl = new TimelineMax()

  .staggerFrom('#logo-stripe > path', .5, {autoAlpha: 0}, .3)
  .from('#logo-stripe', 1, {x: '70px', ease: Power1.easeOut}, 'a')
  .from('#logo', 1, {autoAlpha: 0, y: '3%'}, 'a+=.2')
  .to('.loading', .5, { autoAlpha: 0, delay: .7}, 'end')
  .set(body, {overflowY: 'auto'}, 'end+=.1')
}