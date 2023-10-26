let students = [
    { name: '陈佳宁', age: 12, address: '福建省' },
    { name: '李瑞', age: 20, address: '浙江省' },
    { name: '王顺五', age: 27, address: '广东省' }
]
document.write(`
<table>
<caption>学生信息表</caption>
`)
for(let i=0;i<students.length;i++){
    document.write(`
    <tr>
    <td>${students[i].name}</td>
    <td>${students[i].age}</td>
    <td>${students[i].address}</td>
</tr>
    `)
}



document.write(`</table>`)