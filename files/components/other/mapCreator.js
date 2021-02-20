/* export const mapMirrorCreator = (str) => {
    let temp = str.split('')
    let arrMap = []
    for (let i = 0; i < temp.length; i++) {
        arrMap.push([])
    }
    for (let i = 0; i < temp.length; i++) {
        let k = i
        for (let j = 0; j <= i; j++, k--) {
            arrMap[k][j] = temp[i]
            arrMap[temp.length - 1 - k][temp.length - 1 - j] = temp[i]
        }
    }
    return arrMap
} */

export const mapCreator = (str) => {
    let strArr = str.split('')
    let l = strArr.length
    let arrMap = []
    for (let i = 0; i < l; i++) {
        let head = strArr.slice(i, l)
        let tail = strArr.slice(0, i)
        let sumArr = head.concat(tail)
        arrMap.push(sumArr)
    }
    return arrMap
}
