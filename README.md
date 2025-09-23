Note: Some scripts only work with the text in english and using chrome browser.  

Available scripts:
- whistleblowing
- gdpr - french
- bribery prevention - 2024
- modern slavery - french
- information security
- FTPF

To skip the initial training:
```js
document.getElementById('nextButton').click();
```
or for modern slavery:
```js
window.frames[0].document.getElementById('nextButton').click();
```
or for FTPF: (only after selecting scorm_frame)
```js
$0.contentWindow.frames[0].document.getElementById('nextButton').click();
```
To save the recorded answers:
```js
JSON.stringify(fp_list);
```
