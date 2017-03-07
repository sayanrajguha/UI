$(document).ready(function() {


$('#btnShowPass').on('click',function() {
	$(this).toggleClass('pressedBtn');
	if($('#password').attr('type') === 'password') {
		$('#password').attr('type','text');
	} else {
		$('#password').attr('type','password');
	}
});


$("#upcAccordian").on('click', function(e) {
	if(e && e.target && e.target.className && (e.target.className.indexOf('panel-title')!=-1 
	|| e.target.className.indexOf('panel-heading')!=-1 || e.target.className.indexOf('badge')!=-1)) {
		$("#panel-element-58940").collapse('toggle');
	}
});

$("#oodAccordian").on('click', function(e) {
	if(e && e.target && e.target.className && (e.target.className.indexOf('panel-title')!=-1 
	|| e.target.className.indexOf('panel-heading')!=-1 || e.target.className.indexOf('badge')!=-1)) {
		$("#panel-element-137647").collapse('toggle');
	}
	
});

// Dictionary scripts
$("#dictionaryAccordian").on('click', function(e) {
	if(e && e.target && e.target.className && (e.target.className.indexOf('panel-title')!=-1 
	|| e.target.className.indexOf('panel-heading')!=-1 || e.target.className.indexOf('badge')!=-1)) {
		$("#panel-element-999").collapse('toggle');
	}
});

$('.word-edit').on('click',function(e) {
    var parent = $(this).parent().parent();
    parent.find('.word').toggle();
    parent.find('.word-input').toggle();
    parent.find('.word-mod').toggle();
    parent.find('.word-store').toggle();
});
$('.word-cancel').on('click',function(e) {
    var parent = $(this).parent().parent();
    parent.find('.word').toggle();
    parent.find('.word-input').toggle();
    parent.find('.word-mod').toggle();
    parent.find('.word-store').toggle();
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
if($(window).width() < 768) {
	$('.dropdown-toggle').popover({
   'placement':'right',
   'content':'2'
}).popover('show');	
} else {
	$('.dropdown-toggle').popover({
   'placement':'left',
   'content':'2'
}).popover('show');
}
$('#nav-drop-link').on('click', function(e) {
    $('.dropdown-toggle').popover('hide');
});






});
