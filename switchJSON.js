
var fs=require('fs');
exports.get_note=function(){
	var content=fs.readFileSync('mock/My Clippings.txt','utf-8');
var strArr=content.trim().split('\r\n==========\r\n');
var result=[];
//test
// unit=strArr[0].split('\r\n');
// date=unit[1].slice(unit[1].indexOf('|')+1).trim();
 // console.log(strArr);
strArr.map(i=>{
	let unit=i.split('\r\n');
	if(unit==['']){return}
	let leftBracket=unit[0].lastIndexOf('(');
	let rightBracket=unit[0].length;
	// console.log(unit[1]);
	__title=unit[0].slice(0, leftBracket);
	__author=unit[0].slice(leftBracket + 1, rightBracket - 1);
	__date=unit[1].slice(unit[1].indexOf('|') + 1).trim();
	__note=unit[3];
	if(result.length==0 ||(result[result.length-1].title!=__title && result[result.length-1].author!=__author)) {
        result.push({
            title: __title,
            author: __author,
            date: [__date],
            note: [__note]
        });
    }else{
		result[result.length-1].date.push(__date);
		result[result.length-1].note.push(__note);
	}

});
 return result;
}


