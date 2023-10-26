function getRandom(min,max){
    return Math.floor(Math.random()*(max-min))+min
}
//定义随机数生成的范围0~10
let num=getRandom(0,11)
while(true){
    let input=+prompt("请输入0~10之间的数字")
    if(input<num){
        alert('您猜小了')
    }else if(input===num){
        alert('恭喜猜对了')
        break
    }else{
        alert('您猜大了')
    }


}