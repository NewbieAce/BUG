$.fn.popShow = function(title) {  
    var tag = this;  
    $('<div class=\"g-mask\"><iframe frameborder=\"0\" scrolling=\"no\"></iframe></div>').appendTo('body');  
    this.show().attr('par', this.parent().length ? true : false).appendTo('body').wrapAll('<table class=\"g-popup\"><tr><td></td></tr></table>');  
    this.wrapAll('<div class=\"g-popup-wrap\" style=\"width:' + this.outerWidth(true) + 'px\"></div>').before('<div class=\"g-popup-title g-line-dashed\">' + (title ? title : '') + '</div>').before($('<a class=\"g-popup-hide\" href=\"javascript:;\"></a>').click(function() {  
        tag.popHide()  
    }));  
    return this  
};  
$.fn.popHide = function() {  
    var tab = this.closest('table');  
    this.attr('par') == 'true' ? this.hide().appendTo('body') : this.remove();  
    tab.prev().remove();  
    tab.remove();  
    return this  
};  