function curriedAdd(total) {
    if (total === undefined) return 0;
    let count = 0;
    return function returnFunc(num) {
        count++;
        console.log(count)
        if (num === undefined) return total;
        total += num;
        return returnFunc;
    };
}

module.exports = { curriedAdd };
