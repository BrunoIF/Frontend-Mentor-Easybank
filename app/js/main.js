var menuButton = document.getElementById('menu-icon')
var menuList = document.getElementById('menu-list')
var menuLines = document.querySelectorAll('#menu-icon .nav__icon-line')
var menuOverlay = document.getElementById('menu-overlay')
var isOpen = false


window.onload = () => console.log('ready')


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