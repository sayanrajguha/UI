$(document).ready(function() {


$("#upcAccordian").on('click', function() {
	$("#panel-element-58940").collapse('toggle');
});

$("#oodAccordian").on('click', function() {
	$("#panel-element-137647").collapse('toggle');
});
$('#btnSite').on('click',function(e) {
	$('#btnSite').toggleClass('active');
	$('#btnTool').toggleClass('active');
	e.stopPropagation();
});
$('#btnTool').on('click',function(e) {
	$('#btnSite').toggleClass('active');
	$('#btnTool').toggleClass('active');
	e.stopPropagation();
});
});
