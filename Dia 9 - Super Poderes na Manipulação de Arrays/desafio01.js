// Reescreva as que as funções: indexOf, includes e o lastIndexOf no JavaScript.

const redesSociais = [
	'Instagram',
	'YouTube',
	'Facebook' ,
	'TikTok',
	'Twitter',
	'LinkedIn',
	'Pinterest',
];

// Funcao recriada para indexOf
function meuIndexOf(array, elemento) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i;
        }
    }
    return -1;
}
console.log(meuIndexOf(redesSociais, 'TikTok'));


// Funcao recriada para includes
function meuIncludes(array, elemento) {
    for(let item of array) {
        if (item === elemento) {
            return true;
        }
    }
    
    return false;
}
console.log(meuIncludes(redesSociais, 'TikTok'));


// Funcao recriada para lastIndexOf
function meuLastIndexOf(array, elemento) {
    for(let i = array.length - 1; i >= 0; i--) {
        if (array[i] === elemento) {
            return i;
        }
    }
    return -1;
}
console.log(meuLastIndexOf(redesSociais, 'TikTok'));
