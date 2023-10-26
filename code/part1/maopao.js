//从小到大排序
let num=[2,5,10,3,4,9]
for(let i=0;i<num.length-1;i++)
{
    for(let j=0;j<num.length-i-1;j++)
    {
        if (num[j]>num[j+1]) {
            let temp=num[j+1]
            num[j+1]=num[j]
            num[j]=temp
        }
    }
}
document.write(num)