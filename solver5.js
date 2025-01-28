//Information Security
function gID(id) {
	return document.getElementById(id);
}

function gCN(name) {
	return document.getElementsByClassName(name);
}

function get_fingerprint_element() {
	let fingerprint_element = gCN('assessment-questionContainer')[0];
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

function get_retry_button_element() {
	let retry_button_element = gCN('assessmentButton')[0];
	if (retry_button_element == undefined) {
		//clearInterval(interval);
		console.log('error: retry button element not found');
		return;
	}
	return retry_button_element;
}

function is_answer_correct() {
	return read(document.getElementsByClassName('assessment-points-result')[0]) == 7;
}

let fp_list = [{fingerprint:undefined, answer:undefined}];
function lookfor(fingerprint) {
	let rtn = 0;
	let cnt = 0;
	while (cnt < fp_list.length) {
		if (fp_list[cnt].fingerprint === fingerprint) rtn = cnt;
		cnt ++;
	}
	return rtn;
}
function get_fingerprint() {
	let fingerprint = get_fingerprint_element();
	let found = lookfor(fingerprint);
	if (found) {
		return found;
	} else {
		fp_list.push({
			fingerprint: fingerprint
		});
		return fp_list.length - 1;
	}
}
function pick(arr) {
	let p = [];
	let cnt = 0;
	while (cnt < arr.length) {
		if (Math.random() < 0.5) {
			click(arr[cnt]);
			p.push(1);
		} else {
			p.push(0);
		}
		cnt ++;
	}
	return p;
}
function click_p(list, p) {let cnt = 0; while (cnt<list.length && cnt<p.length) {if (p[cnt]) list[cnt].click(); cnt ++;}}
function click(elm) {if (elm != undefined) elm.click();}
function read(elm) {if (elm != undefined) return elm.innerHTML.length;}
function stop() {clearInterval(interval);}


interval = setInterval(()=>{
	let answer;
	let fp = get_fingerprint();
	if (fp_list[fp].answer == undefined) {
		answer = pick(get_answer_elements());
	} else {
		answer = fp_list[fp].answer;
		click_p(get_answer_elements(), answer);
	}
	click(get_submit_button_element());
	if (is_answer_correct()) {
		fp_list[fp].answer = answer;
		console.log(fp_list);
	}
	click(get_next_button_element());
	click(get_retry_button_element());
}, 100);
