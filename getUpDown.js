/*
 * getUpDownプラグイン
 */
;(function($){
    'use strict';
    
    $.fn.getUpDown = function(callbacks, position) {
        if (typeof callbacks.up != 'function' || typeof callbacks.down != 'function') {
            console.log('callbacks.up & callbacks.down is required!');
            return this;
        }

        var display_point = typeof position === 'number' ? position : 500;
        var last_position = $(document).scrollTop();
        var $this = this;

        var init = function() {
            if ($(document).scrollTop() <= display_point) {
                callbacks.up();
            } else if ($(document).scrollTop() > display_point) {
                callbacks.down();
            }
            setup();
        };

        var setup = function() {
            if (last_position > display_point && $(document).scrollTop() <= display_point) {
                callbacks.up();
            } else if (last_position <= display_point && $(document).scrollTop() > display_point) {
                callbacks.down();
            }
            last_position = $(document).scrollTop();
        };

        $this.update = function() {
            setup();
        };

        init();

        return this;
    };
}(jQuery));