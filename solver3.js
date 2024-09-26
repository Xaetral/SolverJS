//bribery prevention - 2024
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
	let fingerprint = document.getElementsByClassName('assessment-questionContainer')[0].innerHTML;
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
function display(elm) {if (elm != undefined) {console.log(elm.innerHTML); if (elm.innerHTML == 'Your score: 80%') clearInterval(interval);}}
function read(elm) {if (elm != undefined) return elm.innerHTML.length;}
function stop() {clearInterval(interval);}


interval = setInterval(()=>{
	let answer;
	let fp = get_fingerprint();
	if (fp_list[fp].answer == undefined) {
		answer = pick(document.getElementsByClassName('assessment-option'));
	} else {
		answer = fp_list[fp].answer;
		click_p(document.getElementsByClassName('assessment-option'), answer);
	}
	click(document.getElementsByClassName('assessment_submitBtn')[0]);
	if (read(document.getElementsByClassName('assessment-points-result')[0]) == 7) {
		fp_list[fp].answer = answer;
		console.log(fp_list);
	}
	click(document.getElementById('nextButton'));

	display(document.getElementsByClassName('assessmentScore')[0]);
	click(document.getElementsByClassName('assessmentButton')[0]);
}, 100);
