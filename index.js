/*
	引数の文字列をWeb用にエスケープして返す
	ユーザー入力から属性値やテキストノードを作る際に通す。
		< → &lt;
		& → &amp;
		" → &quot;
		' → &#39;
		> → &gt;
*/

const list = {
	'<': '&lt;',
	'>': '&gt;',
	'&': '&amp;',
	'"': '&quot;',
	"'": '&#39;',
}

function webEscape(str){
	return str.replace(/[<>&"']/g, (arg)=>{
		return list[arg];
	});
}

export default webEscape;
