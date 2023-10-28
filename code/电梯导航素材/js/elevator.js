//V1版本
// const elevator = document.querySelector('.xtx-elevator')
// window.addEventListener('scroll', function () {
//     const top = this.document.documentElement.scrollTop
//     elevator.style.opacity = top > 300 ? 1 : 0
//
// })

;(function () {
    document.querySelector('#backTop').addEventListener('click', function () {
        document.documentElement.scrollTop = 0
        console.log('点击了')
    })
//V2版本，滚动至头图位置时出现电梯


    const elevator = document.querySelector('.xtx-elevator')
    window.addEventListener('scroll', function () {
        const top = this.document.documentElement.scrollTop
        elevator.style.opacity = top > document.querySelector('.xtx_entry').offsetTop ? 1 : 0

    })
})()



//跳转至指定块


;(function () {
    const list = document.querySelector('.xtx-elevator-list');
    list.addEventListener('click', function (e) {
        //剔除回到顶部
        if (e.target.tagName === 'A'&&e.target.dataset.name) {
            // const old = document.querySelector('.xtx-elevator-list .active');
            // if (old) old.classList.remove('active')
            // e.target.classList.add('active')
            //每次点击都需要获取scrollTop
            document.documentElement.scrollTop = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
        }

    })
})()
//返回顶部


//电梯模块高亮
