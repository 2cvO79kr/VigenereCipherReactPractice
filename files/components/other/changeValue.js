export const changeValue = (inputStr, keyStr, mapArr) => {
    let keyArr = keyStr.split('')
    let inputArr = inputStr.split('')
    let resArr = []
    for (let i = 0; i < inputArr.length; i++) {
        let space = /\s/
        let other = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/
         if (space.test(inputArr[i]) || other.test(inputArr[i])) {
            resArr.push(inputArr[i])
        }
        else if (mapArr[0].includes(inputArr[i])) {
            let keyItem = keyArr[i - keyArr.length * Math.floor(i / keyArr.length)]
            let n = mapArr[0].indexOf(inputArr[i])
            let m = mapArr[0].indexOf(keyItem)
            resArr.push(mapArr[n][m])
        } else break
    }
    return resArr
}


/* export const changeValue = (inputStr, keyStr, mapArr) => {
    let keyArr = keyStr.split('')
    let inputArr = inputStr.split('')
    let resArr = []
    for (let i = 0; i < inputArr.length; i++) {
        let keyItem = keyArr[i - keyArr.length * Math.floor(i / keyArr.length)]
        let n = mapArr[0].indexOf(inputArr[i])
        let m = mapArr[0].indexOf(keyItem)
        console.log('keyItem', keyItem)
        console.log('n',n)
        console.log('m', m)
        resArr.push(mapArr[n][m])
    }
    return resArr
} */