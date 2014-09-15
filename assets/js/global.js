$(function() {
	
	
	/* Mobile detection */
	if (isMobile) $('body').addClass('mobile');
	var isResponsive;
	
	//Cookies
	jQuery.cookie=function(name,value,options){
		if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
		var expires='';
		if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString))
		{var date;
		if(typeof options.expires=='number'){
			date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}
			else{date=options.expires;}
			expires='; expires='+date.toUTCString();}

		var path=options.path?'; path='+(options.path):'';
		var domain=options.domain?'; domain='+(options.domain):'';
		var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}
		else{var cookieValue=null;
		if(document.cookie&&document.cookie!=''){
			var cookies=document.cookie.split(';');
		for(var i=0;i<cookies.length;i++){
			var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));
			break;}}}
		return cookieValue;}};


	
	$(document).ready(function () {
    var rwdcookie = $.cookie('rwdcookie');
    if (rwdcookie == 'rwdoff') {
        $('body').removeClass("responsive");
		document.getElementById('mobileToFull').innerHTML = 'View Mobile Site';
		isResponsive = false;

    }
	else{
		$('body').addClass("responsive");
		document.getElementById('mobileToFull').innerHTML = 'View Full Site';
		isResponsive = true;

	}
    $("#mobileToFull").click(function (e) {
        //e.preventDefault();
        $('body').toggleClass("responsive");
        if ($('body').is('.responsive')) {
            $.cookie('rwdcookie', 'rwdon');
			document.getElementById('mobileToFull').innerHTML = 'View Full Site';
			isResponsive = true;
			$('#mobile-calendar').css('display', 'block');

			
        } else {
            $.cookie('rwdcookie', 'rwdoff');
			document.getElementById('mobileToFull').innerHTML = 'View Mobile Site';
			isResponsive = false;
			$('#mobile-calendar').css('display', 'none');


        }
    });
});
	/*$('#mobileToFull').click(function() {
		//alert($(window).width());
		$("body").toggleClass("responsive"); 
	});*/
	
	
	// header nav
	$('.nav-area').find('li').mouseover(function() {
		$(this).find('a').not('#top-dropdown a').addClass('open');
		$(this).find('.dropdown').css('display', 'block');
	});
	
	$('.nav-area').find('li').mouseout(function() {
		$(this).find('a').not('#top-dropdown a').removeClass('open');
		$(this).find('.dropdown').css('display', 'none');
	});
	
	$('#mobile-dropdown-link').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings('ul').slideToggle('fast');
	});
	
	$('.language').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active')
		$(this).siblings('#language-dropdown').slideToggle();
	});
	
	// breadcrumb
	$('.breadcrumb-menu').find('a').not('.submenu a').click(function(e) {
		e.preventDefault();
		$(this).siblings('.submenu').slideToggle('fast');
		$(this).parent().toggleClass('open');
	});
	
	// product
	$('#product-accordion').find('a').click(function(e) {
		e.preventDefault();
		var isActive = $(this).hasClass('active'),
			isOpen = $('.product-accordion-dropdown').hasClass('open'),
			obj = $(this);
		if (!isActive) {
			$('#product-accordion').find('a').removeClass('active');
			if (isOpen) {
				$('.product-accordion-dropdown.open').removeClass('open').slideUp('fast', function() {
					$(obj).addClass('active');
					$(obj).siblings('.product-accordion-dropdown').addClass('open').slideDown('fast');
				});
			} else {
				$(obj).addClass('active');
				$(obj).siblings('.product-accordion-dropdown').addClass('open').slideDown('fast');
			}
		} else {
			$('#product-accordion').find('a').removeClass('active');
			$(obj).siblings('.product-accordion-dropdown.open').removeClass('open').slideUp('fast');
		}
	});
	
	var URL = window.location;

	$( '#science-video:not(.mobile #science-video)').find('a').click(function(e) {
			e.preventDefault();
			var _this = $( this ),
				random = Math.ceil( Math.random() * 10101 ),
				path = URL.pathname.replace( /\/[0-9a-zA-Z\.\-]*$/gi, '/' ),
				player = path + 'public/video/player.swf?k=' + random,
				video = path + _this.attr( 'href' );

			$.fancybox({
				'type': 'swf',
				'autoScale': false,
				'href': player + '&v=' + video,
				'width': 640,
				'height': 360
			});
		}
	);
	
	// compensation plan
	$('.dropdown-box-wrapper').find('a').click(function(e) {
		e.preventDefault();
		var isActive = $(this).hasClass('active'),
			isOpen = $('.dropdown-box').hasClass('open'),
			obj = $(this);
		
		if (!isActive) {
			$('.dropdown-box-wrapper').find('a').removeClass('active');
			if (isOpen) {
				$('.dropdown-box.open').removeClass('open').slideUp('fast', function() {
					$(obj).siblings('.dropdown-box').addClass('open').slideDown('fast');
				});
			} else {
				$(obj).siblings('.dropdown-box').addClass('open').slideDown('fast');
			}
			$(obj).addClass('active');
		} else {
			$('.dropdown-box-wrapper').find('a').removeClass('active');
			$(obj).siblings('.dropdown-box').removeClass('open').slideUp('fast');
		}
	});
	
	$('#description-dropdown-link').click(function(e) {
		e.preventDefault();
		$('#description-dropdown').slideToggle('fast', function() {
			if ($(window).width() > 767) {
				$('.scroll-pane:not(.mobile .scroll-pane)').jScrollPane({
					hideFocus: true,
					showArrows: true,
					verticalArrowPositions: 'after',
					verticalDragMinHeight: 135,
					verticalDragMaxHeight: 135
				});
			}
		});
	});
	
	$(window).resize(function() {
		if ($(window).width() < 767 && $('#compensation-plan').length > 0) {
			var element = $('.scroll-pane:not(.mobile .scroll-pane)').jScrollPane(); 
			var api = element.data('jsp');
			api.destroy();
		} else {
			$('.scroll-pane:not(.mobile .scroll-pane)').jScrollPane({
				hideFocus: true,
				showArrows: true,
				verticalArrowPositions: 'after',
				verticalDragMinHeight: 135,
				verticalDragMaxHeight: 135
			});
		}
		
		if ($('#description-dropdown').find('a').hasClass('active')) {
			$('#description-dropdown').find('a').removeClass('active');
			$('#description-dropdown').find('p').removeClass('open').css('display', 'none');
		}
	});
	
	$('#description-dropdown').find('a:not(.mobile #description-dropdown a)').click(function(e) {
		e.preventDefault();
		var descriptionContent = $(this).siblings('p').html(),
			descriptionTitle = $(this).html().replace(/^(.*):$/, '$1');
		if ($(window).width() > 767) {
			$('#description-dropdown-link').html(descriptionTitle + '<span/>');
			$('#description-dropdown-box').html(descriptionContent);
			$('#description-dropdown').slideUp('fast');
		}
		
	});
	
	$('#description-dropdown').find('a').click(function(e) {
		e.preventDefault();
		var isActive = $(this).hasClass('active'),
			isOpen = $('#description-dropdown').find('p').hasClass('open'),
			obj = $(this);
		if ($(window).width() < 767) {
			if (!isActive) {
				if (isOpen) {
					$('#description-dropdown').find('a').removeClass('active');
					$('#description-dropdown').find('p').filter('.open').removeClass('open').slideUp('fast', function() {
						$(obj).addClass('active');
						$(obj).siblings('p').addClass('open').slideDown('fast');
					});
				} else {
					$(obj).addClass('active');
					$(obj).siblings('p').addClass('open').slideDown('fast');
				}
			} else {
				$('#description-dropdown').find('a').removeClass('active');
				$(obj).siblings('p').removeClass('open').slideUp('fast');
			}
		}
	});
	
	$('#description-dropdown-wrapper').find('h2').click(function(e) {
		e.preventDefault();
		if ($(window).width() < 767) {
			$(this).toggleClass('active')
			$(this).siblings('#description-dropdown').slideToggle();
		}
	});
	
	// meetings and events
	var _calendar = $('#calendar');
	
	meetingsArray = [
		{
			title: 'Business Opportunity Meeting',
			start: '2012-09-06 7:30:00',
			end: '2012-09-06 8:30:00',
			host: 'Todd Telford',
			contact: 'Todd Telford',
			phone: '801-358-5517',
			speakers: 'Todd Telford',
			location: 'First Floor<br>574 South State<br>Orem, UT<br>United States of America',
			notes: ''
		},
		{
			title: 'Business Presentation Webinar',
			start: '2012-09-10 7:00:00',
			end: '2012-09-10 8:00:00',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'VirtualMeeting',
			notes: '1-646-583-7415 Pin Code 46003919# Go to www.fuzemeeting.com Click on "join meeting" Check Weekly email for Meeting #'
		},
		{
			title: 'Doctors Call',
			start: '2012-09-10 8:00:00',
			end: '2012-09-10 09:00:00',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Dr. Amy Heaton',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Business Opportunity Meeting LIVE',
			start: '2012-09-11 7:00:00',
			end: '2012-09-11 8:00:00',
			host: 'Limitles Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'Limitless Worldwide LLC <br>5742 w Harold Gatty Dr.<br>SLC, UT 84116 <br>United States of America',
			notes: ''
		},
		{
			title: 'Business Opportunity Meeting',
			start: '2012-09-13 7:00:00',
			end: '2012-09-13 08:00:00',
			host: 'Todd Telford',
			contact: 'Todd Telford',
			phone: '801-358-5517',
			speakers: 'Todd Telford',
			location: '284 s main<br>Springville , UT 84663 <br>United States of America',
			notes: ''
		},
		{
			title: 'Weekly Update Call - Saturday',
			start: '2012-09-15 09:00:00',
			end: '2012-09-15 10:00:00',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: '',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Business Presentation Webinar',
			start: '2012-09-17 07:00:00',
			end: '2012-09-17 08:00:00',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'VirtualMeeting',
			notes: '1-646-583-7415 Pin Code 46003919# Go to www.fuzemeeting.com Click on "join meeting" Check Weekly email for Meeting #'
		},
		{
			title: 'Doctors Call',
			start: '2012-09-17 08:00:00',
			end: '2012-09-17 09:00:00',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Dr. Amy Heaton',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Business Opportunity Meeting LIVE',
			start: '2012-09-18 07:00:00',
			end: '2012-09-18 08:00:00',
			host: 'Limitles Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'Limitless Worldwide LLC <br>5742 w Harold Gatty Dr.<br>SLC, UT 84116 <br>United States of America',
			notes: ''
		},
		{
			title: 'Weekly Update Call - Saturday',
			start: '2012-09-22 09:00:00',
			end: '2012-09-22 10:00:00',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: '',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Business Presentation Webinar',
			start: '2012-09-24 07:00:00',
			end: '2012-09-24 08:00:00',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'VirtualMeeting',
			notes: '1-646-583-7415 Pin Code 46003919# Go to www.fuzemeeting.com Click on "join meeting" Check Weekly email for Meeting #'
		},
		{
			title: 'Doctors Call',
			start: '2012-09-24 08:00:00',
			end: '2012-09-24 09:00:00',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Dr. Amy Heaton',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Business Opportunity Meeting LIVE',
			start: '2012-09-25 07:00:00',
			end: '2012-09-25 08:00:00',
			host: 'Limitles Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'Limitless Worldwide LLC <br>5742 w Harold Gatty Dr.<br>SLC, UT 84116 <br>United States of America',
			notes: ''
		},
		{
			title: 'Weekly Update Call - Saturday',
			start: '2012-09-29 09:00:00',
			end: '2012-09-29 10:00:00',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: '',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Easy As 123 - Back Office',
			start: '2012-10-11 7:00:00 PM',
			end: '2012-10-11 8:00:00 PM',
			host: 'Muirco International',
			contact: 'Roger Muir',
			phone: '801-706-8125',
			speakers: 'Roger Muir',
			location: 'Muir Residence<br>6008 Inheritance Court<br>Taylorsville, UT 84123 <br>United States of America',
			notes: 'Learn how to use the 3 most critical segments of your Back Office. This is NOT a business opportunity meeting. This is a very specific deep dive training for new distributors.'
		},
		{
			title: 'Opportunity Meeting',
			start: '2012-10-11 7:30:00 PM',
			end: '2012-10-11 8:30:00 PM',
			host: 'Jason Crowther',
			contact: 'Jason Crowther',
			phone: '801-706-8125',
			speakers: 'Todd Telford',
			location: 'Prudential Conference Room <br>574 S STATE ST.<br>OREM, UT <br>United States of America',
			notes: ''
		},
		{
			title: 'Monthly Corporate Fly In',
			start: '2012-10-12 02:00:00 PM',
			end: '2012-10-11 04:00:00 PM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Corporate Tours, Product and Leadership Training',
			location: 'Limitless Worldwide LLC Corporate Offices <br>5742 w Harold Gatty Dr.<br>SLC, UT 84116 <br>United States of America',
			notes: 'Friday 2:00 Corporate Tours 3:00 Product Presentation with Dr. Amy and Gina Saturday 10:00 - Noon Leadership Training'
		},
		{
			title: 'Weekly Update Call - Saturday',
			start: '2012-10-13 09:00:00 AM',
			end: '2012-10-13 10:00:00 AM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: '',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Monthly Corporate Fly In',
			start: '2012-10-13 02:00:00 PM',
			end: '2012-10-13 04:00:00 PM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Corporate Tours, Product and Leadership Training',
			location: 'Limitless Worldwide LLC Corporate Offices <br>5742 w Harold Gatty Dr.<br>SLC, UT 84116 <br>United States of America',
			notes: 'Friday 2:00 Corporate Tours 3:00 Product Presentation with Dr. Amy and Gina Saturday 10:00 - Noon Leadership Training'
		},
		{
			title: 'Business Presentation Webinar',
			start: '2012-10-15 7:00:00 PM',
			end: '2012-10-15 8:00:00 PM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'VirtualMeeting',
			notes: '1-646-583-7415 Pin Code 46003919# Go to www.fuzemeeting.com Click on "join meeting" Check Weekly email for Meeting #'
		},
		{
			title: 'Doctors Call',
			start: '2012-10-15 8:00:00 PM',
			end: '2012-10-15 09:00:00 PM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Dr. Amy Heaton',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Business Opportunity Meeting LIVE',
			start: '2012-10-16 7:00:00 PM',
			end: '2012-10-16 8:00:00 PM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'Limitless Worldwide LLC<br>5742 w Harold Gatty Dr.<br>SLC, UT 84116 <br>United States of America',
			notes: ''
		},
		{
			title: 'Limitless Business Opportunity Meeting',
			start: '2012-10-18 6:30:00 PM',
			end: '2012-10-18 7:30:00 PM',
			host: 'Pam Hanks, Annette Murphy, Kim Baker',
			contact: 'Pam Hanks',
			phone: '801-380-4784',
			speakers: 'Lizz Perkins, Pam Hanks, Annette Murphy, Kim Baker',
			location: 'Jaxies Eatery Jaxies Eatery <br>747 N Main St Spanish Fork, UT <br>Spanish Fork, UT 84660 <br>United States of America<br><br>Directions: Take Spanish Fork Main Street Exit, head South. 5 blocks south on the right. Jaxies is in a strip mall shopping complex with plenty of parking.',
			notes: 'Jaxies is letting us use their facility without a cost. They do have food and drink available and would appreciate any purchase possible to continue to let us access their building. You can make your purchase from the main Lobby. The meeting will be held upstairs. We will start promptly at 6:30 and need to exit the building no later than 8 PM. This meeting will be held every Thursday Evening. Hope to see you there.'
		},
		{
			title: 'Easy As 123 - Compensation',
			start: '2012-10-18 7:00:00 PM',
			end: '2012-10-18 8:00:00 PM',
			host: 'Muirco International',
			contact: 'Roger Muir',
			phone: '801-706-8125',
			speakers: 'Roger Muir',
			location: 'Muir Residence<br>6008 Inheritance Court<br>Taylorsville, UT 84123 <br>United States of America',
			notes: 'Learn the 3 most critical components about the Compensation Plan and how to earn money quickly. This is NOT a business opportunity meeting. This is very specific training designed to help new distributors.'
		},
		{
			title: 'Weekly Update Call - Saturday',
			start: '2012-10-20 09:00:00 AM',
			end: '2012-10-20 10:00:00 AM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: '',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Business Presentation Webinar',
			start: '2012-10-22 7:00:00 PM',
			end: '2012-10-22 8:00:00 PM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'VirtualMeeting',
			notes: '1-646-583-7415 Pin Code 46003919# Go to www.fuzemeeting.com Click on "join meeting" Check Weekly email for Meeting #'
		},
		{
			title: 'Doctors Call',
			start: '2012-10-22 8:00:00 PM',
			end: '2012-10-22 09:00:00 PM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Dr. Amy Heaton',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Business Opportunity Meeting LIVE',
			start: '2012-10-23 7:00:00 PM',
			end: '2012-10-23 8:00:00 PM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'Limitless Worldwide LLC<br>5742 w Harold Gatty Dr.<br>SLC, UT 84116 <br>United States of America',
			notes: ''
		},
		{
			title: 'Limitless Business Opportunity Meeting',
			start: '2012-10-25 6:30:00 PM',
			end: '2012-10-25 7:30:00 PM',
			host: 'Pam Hanks, Annette Murphy, Kim Baker',
			contact: 'Pam Hanks',
			phone: '801-380-4784',
			speakers: 'Lizz Perkins, Pam Hanks, Annette Murphy, Kim Baker',
			location: 'Jaxies Eatery Jaxies Eatery <br>747 N Main St Spanish Fork, UT <br>Spanish Fork, UT 84660 <br>United States of America<br><br>Directions: Take Spanish Fork Main Street Exit, head South. 5 blocks south on the right. Jaxies is in a strip mall shopping complex with plenty of parking.',
			notes: 'Jaxies is letting us use their facility without a cost. They do have food and drink available and would appreciate any purchase possible to continue to let us access their building. You can make your purchase from the main Lobby. The meeting will be held upstairs. We will start promptly at 6:30 and need to exit the building no later than 8 PM. This meeting will be held every Thursday Evening. Hope to see you there.'
		},
		{
			title: 'Easy As 123 - Product',
			start: '2012-10-25 7:00:00 PM',
			end: '2012-10-25 8:00:00 PM',
			host: 'Muirco International',
			contact: 'Roger Muir',
			phone: '801-706-8125',
			speakers: 'Roger Muir',
			location: 'Muir Residence<br>6008 Inheritance Court<br>Taylorsville, UT 84123 <br>United States of America',
			notes: 'Learn the 3 most critical components about Product line and how to introduce them to your customers. This is NOT a business opportunity meeting. This is very specific training designed to help new distributors.'
		},
		{
			title: 'Weekly Update Call - Saturday',
			start: '2012-10-27 09:00:00 AM',
			end: '2012-10-27 10:00:00 AM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: '',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Business Presentation Webinar',
			start: '2012-10-29 7:00:00 PM',
			end: '2012-10-29 8:00:00 PM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'VirtualMeeting',
			notes: '1-646-583-7415 Pin Code 46003919# Go to www.fuzemeeting.com Click on "join meeting" Check Weekly email for Meeting #'
		},
		{
			title: 'Doctors Call',
			start: '2012-10-29 8:00:00 PM',
			end: '2012-10-29 09:00:00 PM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Dr. Amy Heaton',
			location: 'VirtualMeeting',
			notes: '712-432-0900 - Pin Code 665827#'
		},
		{
			title: 'Business Opportunity Meeting LIVE',
			start: '2012-10-30 7:00:00 PM',
			end: '2012-10-30 8:00:00 PM',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: 'Steve and Melyn Campbell',
			location: 'Limitless Worldwide LLC<br>5742 w Harold Gatty Dr.<br>SLC, UT 84116 <br>United States of America',
			notes: ''
		},
	
		{
			title: '',
			start: '2012-07-10 9:00:00',
			end: '2012-07-10 10:00:00',
			host: '',
			contact: '',
			phone: '',
			speakers: '',
			location: '',
			notes: ''
		}
	];
	
	eventsArray = [
		{
			title: 'Soft Launch Event!',
			start: '2012-09-07 5:00:00',
			end: '2012-09-07 10:00:00',
			host: 'Limitless Worldwide',
			contact: '',
			phone: '',
			speakers: '',
			location: 'HILTON SALT LAKE CITY CENTER Topaz room <br>255 South West Temple<br>SLC, UT 84116 <br> United States of America',
			notes: ''
		},
		{
			title: '',
			start: '2012-07-10 9:00:00',
			end: '2012-07-10 10:00:00',
			host: '',
			contact: '',
			phone: '',
			speakers: '',
			location: '',
			notes: ''
		}
	];
	
	_calendar.fullCalendar({
		events: meetingsArray,
		height: 422,
		buttonText: {
			prev: '&nbsp;',
			next: '&nbsp;'
		},
		header: {
			left: 'prev, title, next',
			right: ''
		},
		eventClick: function(event) {
			var htmlTitle = '<h2>'+ event.title+'</h2>';
			
			var htmlContent = (event.host) ? '<h3>Hosted by</h3><p> '+ event.host+'</p>' : '';
			htmlContent += (event.location) ? '<h3>Location</h3><p> '+ event.location+'</p>' : '';
			htmlContent += (event.start) ? '<h3>Date/Time</h3><p>'+ event.start+'</p>' : '';
			htmlContent += (event.contact) ? '<p>Contact '+ event.contact+' for additional details: '+event.phone+'</p>' : '';
			htmlContent += (event.notes) ? '<h3>Additional Information</h3><p>'+ event.notes+'</p>' : '';
			htmlContent += (event.url) ? '<a href="'+ event.url+'">Register now<span></span></a>' : '';
			
			var htmlPresenters = '<h3>Presenters</h3>';
			htmlPresenters += (event.speakers) ? '<ul><li> '+ event.speakers+'</li><ul>' : '';
			
			
		
			
			document.getElementById("calendar-popup-header").innerHTML=htmlTitle;
			document.getElementById("calendar-popup-content").innerHTML=htmlContent;
			document.getElementById("calendar-popup-presenters").innerHTML=htmlPresenters;
			

			$.fancybox.open('#calendar-popup');
			
		}
	});
	
	var meetingHeight = $('#featured-meeting').height(),
		eventHeight = $('#featured-event').height(),
		mobileMeetingHeight = $('#mobile-meetings-content').height(),
		mobileEventHeight = $('#mobile-events-content').height();
		if ($(window).width() > 767) {
			$('#featured-event').css('display', 'none');
			$('#mobile-calendar').css('display', 'none');
		}
		
		if ($(window).width() < 767 && !isResponsive) {
			$('#mobile-calendar').css('display', 'block');
			$('#mobile-events-content').css('display', 'none');
		}
		
		
		$(window).resize(function() {
			if ($(window).width() > 767) {
				if ($('body').hasClass('small-width')) {
					$('body').removeClass('small-width');
					$('#calendar-btns').find('.events').removeClass('active');
					$('#calendar-btns').find('.meetings').addClass('active');
					$('#featured-event:not(.mobile #featured-event)').css('display', 'none');
					$('#mobile-calendar').css('display', 'none');
					$('#featured-wrapper').css('height', meetingHeight);
					_calendar.fullCalendar('removeEventSource', meetingsArray);
					_calendar.fullCalendar('addEventSource', meetingsArray);
					_calendar.fullCalendar('removeEventSource', eventsArray);
				}
			}
			if ($(window).width() < 767 && !$('body').hasClass('mobile') && isResponsive) {
				$('body').addClass('small-width');
				$('#featured-wrapper').css('height', 'auto');
				$('#featured-meeting:not(.mobile #featured-meeting)').css('display', 'block');
				$('#featured-event:not(.mobile #featured-event)').css('display', 'block');
				$('#mobile-calendar').css('display', 'block');
				$('#mobile-meetings-events-links').find('.mobile-events').removeClass('active');
				$('#mobile-meetings-events-links').find('.mobile-meetings').addClass('active');
				$('#mobile-events-content').css('display', 'none');
				$('#mobile-meetings-content').css('display', 'block');
				$('#mobile-meetings-events-content-wrapper').css('height', mobileMeetingHeight);
			}
		});
	$('#calendar-btns').find('a').click(function(e) {
		e.preventDefault();
		var isActive = $(this).hasClass('active');
		if (!isActive) {
			$('#calendar-btns').find('a').removeClass('active')
			$(this).addClass('active');
			if ($(this).hasClass('events')) {
				_calendar.fullCalendar('addEventSource', eventsArray);
				_calendar.fullCalendar('removeEventSource', meetingsArray);
				$('#featured-meeting').fadeOut('fast', function() {
					$('#featured-event').fadeIn('fast');
				});
				$('#featured-wrapper').animate({height: eventHeight}, 'fast');
			} else {
				_calendar.fullCalendar('addEventSource', meetingsArray);
				_calendar.fullCalendar('removeEventSource', eventsArray);
				$('#featured-event').fadeOut('fast', function() {
					$('#featured-meeting').fadeIn('fast');
				});
				$('#featured-wrapper').animate({height: meetingHeight}, 'fast');
			}
		}
	});
	
	$('#mobile-meetings-events-links').find('a').click(function(e) {
		e.preventDefault();
		$('#mobile-meetings-events-links').find('.active').removeClass('active');
		$(this).addClass('active');
		if ($(this).hasClass('mobile-events')) {
			$('#mobile-meetings-content').fadeOut('fast', function() {
				$('#mobile-events-content').fadeIn('fast');
			});
			$('#mobile-meetings-events-content-wrapper').animate({height: mobileEventHeight}, 'fast');
		} else {
			$('#mobile-events-content').fadeOut('fast', function() {
				$('#mobile-meetings-content').fadeIn('fast');
			});
			$('#mobile-meetings-events-content-wrapper').animate({height: mobileMeetingHeight}, 'fast');
		}
	});
	
	$('#mobile-filter-dropdown-wrapper').find('a').not('#mobile-filter-dropdown a').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings('#mobile-filter-dropdown').slideToggle();
	});
	
	if ( isMobile ) {
		var supportsOrientationChange = "onorientationchange" in window,
		    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

		window.addEventListener(orientationEvent, function() {
			$.fancybox.reposition()
		});
	};
	
	// Leaders
	$('.feature-leaders-box').click(function() {
		if ($(window).width() < 767) {
			var obj = $(this).find('h2'),
				isActive = $(this).find('h2').hasClass('active'),
				isOpen = $('.feature-leaders-box-content').hasClass('open');
			if (!isActive) {
				if (isOpen) {
					$('.feature-leaders-box').find('h2').removeClass('active');
					$('.feature-leaders-box-content.open').removeClass('open').slideUp('fast', function() {
						$(obj).addClass('active');
						$(obj).siblings('.feature-leaders-box-content').addClass('open').slideDown('fast');
					});
				} else {
					$(obj).addClass('active');
					$(obj).siblings('.feature-leaders-box-content').addClass('open').slideDown('fast');
				}

			} else {
				$('.feature-leaders-box').find('h2').removeClass('active');
				$(obj).siblings('.feature-leaders-box-content').removeClass('open').slideUp('fast');
			}
		}
	});
	
	$('#rank-advancement-rows').find('a').click(function(e) {
		e.preventDefault();
		var obj = $(this),
			isActive = $(this).hasClass('active'),
			isOpen = $('.rank-advancement-lists').hasClass('open');
		
		if (!isActive) {
			if (isOpen) {
				$('#rank-advancement-rows').find('a').removeClass('active');
				$('.rank-advancement-lists.open').removeClass('open').slideUp('fast', function() {
					$(obj).addClass('active');
					$(obj).siblings('.rank-advancement-lists').addClass('open').slideDown('fast');
				});
			} else {
				$(obj).addClass('active');
				$(obj).siblings('.rank-advancement-lists').addClass('open').slideDown('fast');
			}
			
		} else {
			$('#rank-advancement-rows').find('a').removeClass('active');
			$(obj).siblings('.rank-advancement-lists').removeClass('open').slideUp('fast');
		}
	});
	
	$(window).resize(function() {
		if ($(window).width() > 767) {
			$('.rank-advancement-lists').css('display', 'block');
			$('.feature-leaders-box-content').css('display', 'block');
		}
		if ($(window).width() < 767) {
			$('#rank-advancement-rows').find('.active').removeClass('active');
			$('.feature-leaders-box').find('.active').removeClass('active');
			$('.rank-advancement-lists').css('display', 'none');
			$('.feature-leaders-box-content').css('display', 'none');
		}
	});
	
	// Company
	if ($('#company').length > 0) {
		// Set up flash vars
		/*var flashvars = {
				//'v': '16498573.mp4',
				'playlistfile':   'public/video/playlist3.xml',
      'playlist.position':      'right',
      'playlist.size':  '80',
				'autoplay': 'false'
				//'p': 'public/images/company/video-image.jpg'
			},
			random = Math.random() * 1010101;

		// Set up flash params
		var params = {};
		params.wmode = "transparent";
		params.bgcolor = "#ffffff";
		params.allowfullscreen = "true";
		params.allowscriptaccess = "always";
		var attributes = {};
		// Fire swfobject
		swfobject.embedSWF("public/video/player.swf?cb=" + random, "company-video", "100%", "100%", "9.0.0", "", flashvars, params, attributes);
	*/
	}
	
	// input fields
	if( $('#contact-us-right').length > 0 || $('#virtual-office-content').length > 0 ) {
		$('#contact-us-right, #virtual-office-content').find('input, textarea').each(function() {
			if( $(this).data('default') ) {
				$(this).focusin(function() {
					if($(this).val() == $(this).data('default')) {
						$(this).val('');
					}
				});
				$(this).focusout(function() {
					if( $.trim($(this).val()) == "") {
						$(this).val($(this).data('default'));
					}
				});
			}
		});
	}
	
});