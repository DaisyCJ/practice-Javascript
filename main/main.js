// Write your cade below:
function caclRemaindar(chu, beichu) {
    if(beichu===0){
        return 0;
    }
    return chu % beichu;
};

function caclSum(arr) {
    var sum = 0;
    for(var i of arr){
        sum = sum + i;
    }
    return sum;
};

function caclSumInConditon(arr,num) {
    var sum = 0;
    for(var i of arr){
        if(i < num){
            sum = sum + i;
        }
    }
    return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}