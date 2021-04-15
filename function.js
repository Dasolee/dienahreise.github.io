/** code by webdevtrick ( https://webdevtrick.com ) **/
[...document.querySelectorAll('.single-column')].map(column => {
	column.style.setProperty('--animation', 'slide');
	column.style.setProperty('height', '150%');
	column.innerHTML = column.innerHTML + column.innerHTML;
});
