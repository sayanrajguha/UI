$(document).ready(function() {


$('#btnShowPass').on('click',function() {
	$(this).toggleClass('pressedBtn');
	if($('#password').attr('type') === 'password') {
		$('#password').attr('type','text');
	} else {
		$('#password').attr('type','password');
	}
});


$("#upcAccordian").on('click', function() {
	$("#panel-element-58940").collapse('toggle');
});

$("#oodAccordian").on('click', function() {
	$("#panel-element-137647").collapse('toggle');
});
$("#dictionaryAccordian").on('click', function() {
	$("#panel-element-999").collapse('toggle');
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
	$('.crud').toggle();
	$('.detailsCell').toggle();
	$('.saveCancel').toggle();
});
$('.stackRemoveCancel').on('click', function() {
	$('.deleteColumn').toggle();
	$('.slNo').toggle();
	$('.crud').toggle();
	$('.detailsCell').toggle();
	$('.saveCancel').toggle();
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



// showing popovers
$('.dropdown-toggle').popover({
   'placement':'left',
   'content':'2'
}).popover('show');
});
