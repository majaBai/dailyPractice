/*
考试题目和要点：

1,中文大写金额数字前应标明“人民币”字样。中文大写金额数字应用壹,贰,叁,肆,伍,陆,柒,捌,玖,拾,佰,仟,万,亿,元,角,分,零,整等字样填写。
2,中文大写金额数字到“元”为止的，在“元”之后，应写“整字，如532.00应写成“人民币伍佰叁拾贰元整”。在”角“和”分“后面不写”整字。

3,阿拉伯数字中间有“0”时，中文大写要写“零”字，阿拉伯数字中间连续有几个“0”时，中文大写金额中间只写一个“零”字，如6007.14，应写成“人民币陆仟零柒元壹角肆分“。
4,10应写作“拾”，100应写作“壹佰”。例如，1010.00应写作“人民币壹仟零拾元整”，110.00应写作“人民币壹佰拾元整”
5,十万以上的数字接千不用加“零”，例如，30105000.00应写作“人民币叁仟零拾万伍仟元整”

*/

function transRMB(nums){

    // 从小数点处切分为两部分
    nums = nums + ''
    let temp = nums.split('.')

    let chNumber = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖']
    let chUnit =   ['', '拾','佰','仟','万','拾','佰','仟','亿','拾','佰','仟','万']

    // 处理小数点之前
    let head = '人民币'
    if(temp[0] > 0){
        let str = temp[0]
        let n = str.length
        for(let i = 0; i<n; i++){
            head += (chNumber[parseInt(str[i])] + chUnit[n- 1- i])
        }
    } else {
        head += (chNumber[0] + '元')
    }

    head = head.replace(/零[拾佰仟]/g, "零")
               .replace(/壹拾/g, "拾")
               .replace(/零万/g, "万")
               .replace(/零零/g, "零")
    while(head.endsWith('零')){
        head = head.slice(0, head.length-1)
    }
    if(!head.endsWith('元')){
        head += '元'
    }

    head = head.replace(/零元/g, '')

   // 处理小数点之后
    let trail = ''
    if(temp[1] && temp[1] > 0){
        if(temp[1] > 0){
            trail = temp[1].charAt(0) > 0? chNumber[parseInt(temp[1].charAt(0))] + '角' : ''
            temp[1].charAt(1) > 0? trail += (chNumber[parseInt(temp[1].charAt(1))] + '分') : ''
        } 
    } else {
        trail += '整'
    }
    
    // 拼接
    let r = head + trail

    console.log(r)
}

// transRMB(30105000.00)

// transRMB(6007.14)
// transRMB(0.14)

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', data=>{
    transRMB(data)
})