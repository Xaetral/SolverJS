//modern slavery
//select scorm_frame
var scorm_frame = $0;

function gID(id) {
	return scorm_frame.contentWindow.frames[0].document.getElementById(id);
}
function gCN(name) {
	return scorm_frame.contentWindow.frames[0].document.getElementsByClassName(name);
}
function get_fingerprint_element() {
	let fingerprint_element = gCN('assessmentQuestion')[0];
	if (fingerprint_element == undefined) {
		clearInterval(interval);
		console.log('error: fingerprint element not found');
		return;
	}
	return fingerprint_element.innerHTML;
}
function get_answer_elements() {
	let answer_elements = gCN('assessment-option');
	if (answer_elements == undefined) {
		clearInterval(interval);
		console.log('error: answer elements not found');
		return;
	}
	return answer_elements;
}
function get_submit_button_element() {
	let get_submit_button_element = gCN('assessment_submitBtn')[0];
	if (get_submit_button_element == undefined) {
		clearInterval(interval);
		console.log('error: submit button element not found');
		return;
	}
	return get_submit_button_element;
}
function get_next_button_element() {
	let next_button_element = gID('nextButton');
	if (next_button_element == undefined) {
		clearInterval(interval);
		console.log('error: next button element not found');
		return;
	}
	return next_button_element;
}
function get_questions() {
	let bank = scorm_frame.contentWindow.frames[0].questionBankArray;
	let questions = [];
	let cnt = 0;
	while (cnt < bank.length) {
		questions.push(...bank[cnt].questions);
		cnt ++;
	}
	return questions;
}
function get_answer() {
	let questions = get_questions();
	let question = get_fingerprint_element();
	let answer = [];
	let cnt = 0;
	while (cnt < questions.length) {
		if (questions[cnt].content == question) {
			//console.log(questions[cnt].options);
			let ctr = 0;
			while (ctr < questions[cnt].options.length) {
				answer.push(+questions[cnt].options[ctr].c);
				ctr ++;
			}
			return answer;
		}
		cnt ++;
	}
}
function click_p(list, p) {let cnt = 0; while (cnt<list.length && cnt<p.length) {if (p[cnt]) list[cnt].click(); cnt ++;}}
function click(elm) {if (elm != undefined) elm.click();}
function stop() {clearInterval(interval);}

interval = setInterval(()=>{
	click_p(get_answer_elements(), get_answer());
	click(get_submit_button_element());
	click(get_next_button_element());
}, 100);
