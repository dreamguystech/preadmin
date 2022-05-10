/*
Author : Dreamguys
Template Name: Preschool  - Bootstrap Admin Template
Version : 1.0
*/

$(document).ready(function($) {
    "use strict";
    
    // Variables declarations
    var $wrapper = $('.main-wrapper');
    var $pageWrapper = $('.page-wrapper');
    var $slimScrolls = $('.slimscroll');
    var $sidebarOverlay = $('.sidebar-overlay');
    
    // Sidebar
    var Sidemenu = function() {
        this.$menuItem = $('#sidebar-menu a');
    };

    function init() {
        var $this = Sidemenu;
        $('#sidebar-menu a').on('click', function(e) {
            if($(this).parent().hasClass('submenu')) {
                e.preventDefault();
            }
            if(!$(this).hasClass('subdrop')) {
                $('ul', $(this).parents('ul:first')).slideUp(350);
                $('a', $(this).parents('ul:first')).removeClass('subdrop');
                $(this).next('ul').slideDown(350);
                $(this).addClass('subdrop');
            } else if($(this).hasClass('subdrop')) {
                $(this).removeClass('subdrop');
                $(this).next('ul').slideUp(350);
            }
        });
        $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
    }
    // Sidebar Initiate
    init();
    
    // Mobile menu sidebar overlay
    
    $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function() {
        $wrapper.toggleClass('slide-nav');
        $('.sidebar-overlay').toggleClass('opened');
        $('html').addClass('menu-opened');
        return false;
    });
    
    // Sidebar overlay
    
    $(".sidebar-overlay").on("click", function () {
        $wrapper.removeClass('slide-nav');
        $(".sidebar-overlay").removeClass("opened");
        $('html').removeClass('menu-opened');
    });
    
    // Floating Label

    if($('.floating').length > 0 ){
        $('.floating').on('focus blur', function (e) {
        $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
    }
    // Chat sidebar overlay
    $(document).on('click', '#task_chat', function() {
        var $target = $($(this).attr('href'));
        console.log($target);
        sidebar_overlay($target);
        return false;
    });
    
    // Sidebar overlay reset
    $sidebarOverlay.on('click', function() {
        var $target = $($(this).attr('data-reff'));
        if($target.length) {
            $target.removeClass('opened');
            $('html').removeClass('menu-opened');
            $(this).removeClass('opened');
            $wrapper.removeClass('slide-nav');
        }
        return false;
    });
    
    // Select 2
    if($('.select').length > 0) {
        $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
        });
    }
    
    // Floating Label
    if($('.floating').length > 0) {
        $('.floating').on('focus blur', function(e) {
            $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
    }
    
    // Right Sidebar Scroll
    if($('.msg-list-scroll').length > 0) {
        $('.msg-list-scroll').slimscroll({
            height: '100%',
            color: '#878787',
            disableFadeOut: true,
            borderRadius: 0,
            size: '4px',
            alwaysVisible: false,
            touchScrollStep: 100
        });
        var msgHeight = $(window).height() - 50;
        $('.msg-list-scroll').height(msgHeight);
        $('.msg-sidebar .slimScrollDiv').height(msgHeight);
        $(window).resize(function() {
            var msgrHeight = $(window).height() - 50;
            $('.msg-list-scroll').height(msgrHeight);
            $('.msg-sidebar .slimScrollDiv').height(msgrHeight);
        });
    }
    
    // Left Sidebar Scroll
    if($slimScrolls.length > 0) {
        $slimScrolls.slimScroll({
            height: 'auto',
            width: '100%',
            position: 'right',
            size: '7px',
            color: '#ccc',
            wheelStep: 10,
            touchScrollStep: 100
        });
        var wHeight = $(window).height() - 30;
        $slimScrolls.height(wHeight);
        $('.sidebar .slimScrollDiv').height(wHeight);
        $(window).resize(function() {
            var rHeight = $(window).height() - 30;
            $slimScrolls.height(rHeight);
            $('.sidebar .slimScrollDiv').height(rHeight);
        });
    }
    
    // Page wrapper height
    var pHeight = $(window).height();
    $pageWrapper.css('min-height', pHeight);
    $(window).resize(function() {
        var prHeight = $(window).height();
        $pageWrapper.css('min-height', prHeight);
    });
    
    //datetimepicker
    if($('#datetimepicker1').length > 0) {
        $(function () {
            $('#datetimepicker1').datetimepicker();
            $('#datetimepicker2').datetimepicker();
            $('#datetimepicker5').datetimepicker();
            $('#datetimepicker6').datetimepicker();
            $('#datetimepicker7').datetimepicker();
            $('#datetimepicker8').datetimepicker();
            $('#datetimepicker_1').datetimepicker({
            format: 'hh:mm a',
            icons: {
            up: "fas fa-chevron-up",
            down: "fas fa-chevron-down",
            next: 'fas fa-chevron-right',
            previous: 'fas fa-chevron-left'
            }
            })
        });
    }


    
    // Datatable
    if($('.datatable').length > 0) {
        $('.datatable').DataTable({
            "bFilter": false,
        });
    }
    
    // Bootstrap Tooltip
    if($('[data-toggle="tooltip"]').length > 0) {
        $('[data-toggle="tooltip"]').tooltip();
    }
    
    // Mobile Menu
    $(document).on('click', '#open_msg_box', function() {
        $wrapper.toggleClass('open-msg-box');
        return false;
    });
    
    // Lightgallery
    if($('#lightgallery').length > 0) {
        $('#lightgallery').lightGallery({
            thumbnail: true,
            selector: 'a'
        });
    }
    
    // Incoming call popup
    if($('#incoming_call').length > 0) {
        $('#incoming_call').modal('show');
    }
    
    // Summernote
    if($('.summernote').length > 0) {
        $('.summernote').summernote({
            height: 200,
            minHeight: null,
            maxHeight: null,
            focus: false
        });
    }
    
     // Check all email

    if ($('.checkbox-all').length > 0) {
        $('.checkbox-all').click(function() {
            $('.checkmail').click();
        });
    }
    if ($('.checkmail').length > 0) {
        $('.checkmail').each(function() {
            $(this).click(function() {
                if ($(this).closest('tr').hasClass("checked")) {
                    $(this).closest('tr').removeClass('checked');
                } else {
                    $(this).closest('tr').addClass('checked');
                }
            });
        });
    }
        
    // Mail important

    if ($('.mail-important').length > 0) {
        $(".mail-important").click(function() {
            $(this).find('i.fa').toggleClass("fa-star");
            $(this).find('i.fa').toggleClass("fa-star-o");
        });
    }

    if ($('.dropdown-toggle').length > 0) {
        $('.dropdown-toggle').click(function() {
            if ($('.main-wrapper').hasClass('open-msg-box')) {
                $('.main-wrapper').removeClass('open-msg-box');
            }
        });
    }
    
    // Dropfiles
    if($('#drop-zone').length > 0) {
        var dropZone = document.getElementById('drop-zone');
        var uploadForm = document.getElementById('js-upload-form');
        var startUpload = function(files) {
            console.log(files);
        };
        uploadForm.addEventListener('submit', function(e) {
            var uploadFiles = document.getElementById('js-upload-files').files;
            e.preventDefault();
            startUpload(uploadFiles);
        });
        dropZone.ondrop = function(e) {
            e.preventDefault();
            this.className = 'upload-drop-zone';
            startUpload(e.dataTransfer.files);
        };
        dropZone.ondragover = function() {
            this.className = 'upload-drop-zone drop';
            return false;
        };
        dropZone.ondragleave = function() {
            this.className = 'upload-drop-zone';
            return false;
        };
    }
    
    
});
// Small Sidebar

    $(document).on('click', '#toggle_btn', function() {
        if($('body').hasClass('mini-sidebar')) {
            $('body').removeClass('mini-sidebar');
            $('.subdrop + ul').slideDown();
        } else {
            $('body').addClass('mini-sidebar');
            $('.subdrop + ul').slideUp();
        }
        return false;
    });
    $(document).on('mouseover', function(e) {
        e.stopPropagation();
        if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
            var targ = $(e.target).closest('.sidebar').length;
            if(targ) {
                $('body').addClass('expand-menu');
                $('.subdrop + ul').slideDown();
            } else {
                $('body').removeClass('expand-menu');
                $('.subdrop + ul').slideUp();
            }
            return false;
        }
    });