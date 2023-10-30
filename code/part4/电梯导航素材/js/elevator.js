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
//返回顶部

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
    //电梯模块高亮
    //根据内容的offsetTop的范围进行判断
     window.addEventListener('scroll',function () {
         const old = document.querySelector('.xtx-elevator-list .active');
         if (old) old.classList.remove('active')
         const news = document.querySelector('.xtx_goods_new');
         const popular = document.querySelector('.xtx_goods_popular');
         const brand = document.querySelector('.xtx_goods_brand');
         const topic = document.querySelector('.xtx_goods_topic');
         const top=document.documentElement.scrollTop
         if (top>=news.offsetTop&&top<=popular.offsetTop) document.querySelector('[data-name=new]').classList.add('active')
         else if (top<=brand.offsetTop) document.querySelector('[data-name=popular]').classList.add('active')
         else if (top<=topic.offsetTop) document.querySelector('[data-name=brand]').classList.add('active')
         else  document.querySelector('[data-name=topic]').classList.add('active')
         



     })
})()





