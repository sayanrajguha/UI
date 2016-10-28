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
$('.stackFilter').on('click', function() {
   $('.filterRow').toggleClass('hidden');
   if($('.filterRow').hasClass('hidden')) {
   	$('.linkCrudFilter').css('color','orange');
   } else {
   	$('.linkCrudFilter').css('color','#e6e6e6');
   }
});
$('.stackRemove').on('click', function() {
	$('.deleteColumn').toggle();
	$('.slNo').toggle();
	if($('.deleteColumn').is(':visible')) {
   	$('.linkCrudRemove').css('color','#e6e6e6');
   } else {
   	$('.linkCrudRemove').css('color','red');
   }
});

var dictionaryData = [
      "Word 1",
      "Word 2",
      "Word 3",
      "Word 4",
      "Word 5"
    ];
$("#dictionarySearch").autocomplete({
      source: dictionaryData
});

$('.datepicker').datepicker({
	changeMonth: true,
   changeYear: true,
   dateFormat : 'dd-mm-yy'
});
});
