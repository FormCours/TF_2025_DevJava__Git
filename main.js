console.log('Ceci est un fichier JS !');

function filter(array, callback) {
    const result = [];
    for(const elem of array) {
        if(callback(elem)) {
            result.push(elem);
        }
    }
    return result;
}