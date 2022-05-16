function speakLeet() {
	var leetCode = {
		A: "@",
		B: '8',
		C: '(',
		D: '|)',
		E: '3',
		F: 'ph',
		G: 'g',
		H: '#',
		I: 'l',
		J: '_|',
		K: '|<',
		L: '1', 
		M: '|\'|\'|',
		N: '/|/',
		O: '0', 
		P: '|D',
		Q: '(,)',
		R: '|2',
		S: '5',
		T: '7',
		U: '|_|',
		V: '|/',
		W: '|/|/',
		X: '><',
		Y: 'j',
		Z: '2'
	}
    let blog = document.getElementById("mainBlog");
	let blogText = blog.innerText;
	let translatedStr = "";

	for (i = 0; i < blogText.length; i++) {
        if (blogText.charAt(i).match(/[a-zA-Z]/)){
            translatedStr += leetCode[blogText.charAt(i).toUpperCase()];
        } else {
		    translatedStr += blogText.charAt(i);
        }
	}

	blog.innerText = translatedStr;
}
