function map(array, func) {
    let output = []
    for (const element of array) {
        output.push(func(element))
    }
    return output
}

function reduce(array, func, start) {
    let accumulator = start

    // This feels janky, pretty sure this is not the right way to do it.....
    let test = func(array[0], accumulator)
    if (isNaN(test)) {
        accumulator = 0
    } else if (test === undefined || !test) {
        accumulator = true
    }
    // end janky section

    for (const element of array) {
        accumulator = func(element, accumulator)
    }
    return accumulator
}