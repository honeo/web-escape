console.log('project-name: test');

const webEscape = require('../').default;

const caseArray = [];

// validation
caseArray.push( (arg)=>{
	try{
		webEscape(1234567);
	}catch(e){
		return true;
	}
});

// &
caseArray.push( (arg)=>{
	return webEscape('&')==='&amp;';
});

// "
caseArray.push( (arg)=>{
	return webEscape('"')==='&quot;';
});

// '
caseArray.push( (arg)=>{
	return webEscape(`'`)==='&#39;';
});

// >
caseArray.push( (arg)=>{
	return webEscape(`>`)==='&gt;';
});

// <
caseArray.push( (arg)=>{
	return webEscape(`<`)==='&lt;';
});

// multi
caseArray.push((arg)=>{
	return webEscape(`& " ' > <`)==='&amp; &quot; &#39; &gt; &lt;';
});

caseArray.forEach( (func, index, array)=>{
	if( func() ){
		console.log(`${index+1}/${array.length}: success`)
	}else{
		throw new Error(`${index}/${array.length}: failed`)
	}
});
