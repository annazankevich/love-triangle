/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let link = 0;
    preferences.map((item, i) => {
        console.log(item, i);
        let firstlover = item - 1;
        let secondlover = preferences[firstlover] - 1;
        let thirdlover = preferences[secondlover] - 1;
        if (thirdlover === i) {
            link++;
        }
    });
    return Math.floor(link / 3);
};
