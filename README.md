Note: Some scripts only work with the text in english and using chrome browser (or edge).  

Available scripts:
- whistleblowing
- gdpr - french
- bribery prevention - 2024
- modern slavery - french (old)
- information security
- failure to prevent fraud
- modern slavery

To skip the initial training:
```js
document.getElementById('nextButton').click();
```
or for (old) modern slavery:
```js
window.frames[0].document.getElementById('nextButton').click();
```
or for FTPF and modern slavery: (only after selecting scorm_frame)
```js
$0.contentWindow.frames[0].document.getElementById('nextButton').click();
```
To save the recorded answers:
```js
JSON.stringify(fp_list);
```
