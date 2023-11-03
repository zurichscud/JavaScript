const middle = document.querySelector('.middle');
const large=document.querySelector('.large')
document.querySelector('.small').addEventListener('mouseover',function (e) {
    if (e.target.tagName==='IMG'){
        document.querySelector('.active').classList.remove('active')
        e.target.parentNode.classList.add('active')
        middle.querySelector('img').src=e.target.src
        large.style.backgroundImage=`url(${e.target.src})`
    }
})
const layer = document.querySelector('.layer');
middle.addEventListener('mouseenter',function (e) {
    layer.style.display='block'
    large.style.display='block'

})
middle.addEventListener('mouseleave',function () {
    layer.style.display='none'
    large.style.display='none'
})


middle.addEventListener('mousemove',function (e){
    //鼠标在middle中的相对坐标
    let x=e.pageX-middle.getBoundingClientRect().left
    let y=e.pageY-middle.getBoundingClientRect().top-document.documentElement.scrollTop
    if (x>=0&&x<=400&&y>=0&&y<=400){

        if (x<100) x=0
            else if (x<300) x=x-100
                else if (x>300) x=200
        if (y<100) y=0
        else if (y<300) y=y-100
        else if (y>300) y=200
        
        layer.style.left=x+'px'
        layer.style.top=y+'px'
    }
    large.style.backgroundPositionX=-2*x+'px'
    large.style.backgroundPositionY=-2*y+'px'


})