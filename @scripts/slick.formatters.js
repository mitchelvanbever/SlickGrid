"use strict";
/***
 * Contains basic SlickGrid formatters.
 *
 * NOTE:  These are merely examples.  You will most likely need to implement something more
 *        robust/extensible/localizable/etc. for your use!
 *
 * @module Formatters
 * @namespace Slick
 */
(function ($) {
    function PercentCompleteFormatter(_row, _cell, value, _columnDef, _dataContext) {
        if (value == null || value === "") {
            return "-";
        }
        else if (value < 50) {
            return "<span style='color:red;font-weight:bold;'>" + value + "%</span>";
        }
        else {
            return "<span style='color:green'>" + value + "%</span>";
        }
    }
    function PercentCompleteBarFormatter(_row, _cell, value, _columnDef, _dataContext) {
        if (value == null || value === "") {
            return "";
        }
        var color;
        if (value < 30) {
            color = "red";
        }
        else if (value < 70) {
            color = "silver";
        }
        else {
            color = "green";
        }
        return ("<span class='percent-complete-bar' style='background:" +
            color +
            ";width:" +
            value +
            "%'></span>");
    }
    function YesNoFormatter(_row, _cell, value, _columnDef, _dataContext) {
        return value ? "Yes" : "No";
    }
    function CheckboxFormatter(_row, _cell, value, _columnDef, _dataContext) {
        return ('<img class="slick-edit-preclick" src="../images/' +
            (value ? "CheckboxY" : "CheckboxN") +
            '.png">');
    }
    function CheckmarkFormatter(_row, _cell, value, _columnDef, _dataContext) {
        return value ? "<img src='../images/tick.png'>" : "";
    }
    // exports
    $.extend(true, window, {
        Slick: {
            Formatters: {
                PercentComplete: PercentCompleteFormatter,
                PercentCompleteBar: PercentCompleteBarFormatter,
                YesNo: YesNoFormatter,
                Checkmark: CheckmarkFormatter,
                Checkbox: CheckboxFormatter,
            },
        },
    });
})(jQuery);
