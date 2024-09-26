//modern slavery - french
window.frames[0].getQuestionAnswerJSON(window.frames[0].question.id,window.frames[0].question).then((obj)=>{
	let answer = obj.correct;
	let cnt = 0;
	while (cnt < answer.length) {
		if (answer[cnt]) {
			window.frames[0].document.getElementById('scrq_option'+(cnt+1)).click();
		}
		cnt ++;
	}
	window.frames[0].document.getElementById('scrq_submit_button').click();
	nextPage();
});
