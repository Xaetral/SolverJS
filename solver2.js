//gdpr - french
getQuestionAnswerJSON(question.id,question).then((obj)=>{
	let answer = obj.correct;
	let cnt = 0;
	while (cnt < answer.length) {
		if (answer[cnt]) {
			document.getElementById('scrq_option'+(cnt+1)).click();
		}
		cnt ++;
	}
	document.getElementById('scrq_submit_button').click();
	nextPage();
});
