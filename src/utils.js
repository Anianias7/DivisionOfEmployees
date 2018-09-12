const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const chunkArray = (myArray, chunk_size) => {
    let results = [];

    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size))
    }

    return results;
};

export default {
    capitalizeFirstLetter,
    chunkArray
}