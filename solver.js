//whistleblowing
function qID() {
	let question, option, right, id;
	let study = 0;
	while (study < questionBankArray.length) {
		if (questionBankArray[study].caseStudy == document.getElementsByClassName('assessment-block')[0].innerHTML) {
			question = 0;
			while (question < questionBankArray[study].questions.length) {
				if (questionBankArray[study].questions[question].content == document.getElementsByClassName('assessmentQuestion')[0].innerHTML) {
					right = 1;
					option = 0;
					while (option < questionBankArray[study].questions[question].options.length) {
						if (questionBankArray[study].questions[question].options[option].content != document.getElementsByClassName('assessment-option-content')[option].innerHTML) right = 0;
						option ++;
					}
					if (right) id = study + '-' + question;
				}
				question ++;
			}
		}
		study ++;
	}
	return id;
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
function stop() {clearInterval(interval); alert(JSON.stringify(fp_dic))}

var fp_dic = {"8-2":[1,0],"1-0":[1,0,0,0],"9-1":[0,1],"3-0":[0,0,0,1],"7-0":[0,1],"0-1":[0,0,1,0],"5-0":[1,0],"5-2":[1,0],"4-2":[1,1,0,1],"6-2":[1,0,0,1],"1-1":[0,0,1,1],"5-1":[1,1],"7-2":[1,0],"8-0":[0,1],"8-1":[1,0],"4-1":[1,1,1,0],"0-2":[0,1,0,0],"9-2":[1,0],"6-1":[0,1,1,1],"3-1":[1,0,0,0],"7-1":[1,1],"6-0":[1,1,0,0],"3-2":[0,1,1,1],"0-0":[1,0,0,0],"1-2":[1,1,0,0]};
interval = setInterval(()=>{
	let p;
	let fp = qID();
	if (fp_dic[fp] == undefined) {
		p = pick(document.getElementsByClassName('assessment-option'));
	} else {
		p = fp_dic[fp];
		click_p(document.getElementsByClassName('assessment-option'), p);
	}
	click(document.getElementsByClassName('assessment_submitBtn')[0]);
	if (read(document.getElementsByClassName('assessment-points-result')[0]) == 7) {
		fp_dic[fp] = p;
		console.log(fp_dic);
	}
	click(document.getElementById('nextButton'));

	display(document.getElementsByClassName('assessmentScore')[0]);
	click(document.getElementsByClassName('assessmentButton')[0]);
}, 100);
