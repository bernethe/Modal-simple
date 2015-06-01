(function(window, undefined) {
'use strict';
function allocInit(eAI) {
	document.getElementsByTagName('button')[0].addEventListener('click',preModal);
}
function preModal(ePM) {
	appendModal('<h3>Hello Word</h3><hr><p>This is just a test.</p>');
}
function appendModal(modalTxt) {
	var blk = document.createElement('div');
	var mdl = document.createElement('div');
	blk.id = 'modalDialog';
	mdl.innerHTML = modalTxt+'<a href="#" id="closeModal" tabindex="1">✖</a>';
	document.getElementsByTagName('body')[0].appendChild(blk);
	document.getElementById('modalDialog').appendChild(mdl);
	document.getElementById('closeModal').addEventListener('click',removeModal);
}
function removeModal(eRM) {
	if(eRM) {
		eRM.preventDefault();
	}
	document.getElementsByTagName('body')[0].removeChild(document.getElementById('modalDialog'));
}
if (document.readyState != 'loading'){
	allocInit();
} else {
	document.addEventListener('DOMContentLoaded', allocInit);
}
})(window);