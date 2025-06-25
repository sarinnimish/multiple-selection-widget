/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import { loadJS, loadCSS } from "@web/core/assets";

publicWidget.registry.ReusableSelect2 = publicWidget.Widget.extend({
    selector: 'select[widget="select2"]',
    start() {
        const superStart = this._super.bind(this); 

        const init = async () => {
            if (typeof $.fn.select2 !== "function") {
                await loadCSS("multiple_selection_widget/static/lib/select2/select2.css");
                await loadJS("multiple_selection_widget/static/lib/select2/select2.full.js");
            }

            $(this.el).select2({
                placeholder: $(this.el).data("placeholder") || "Select an option",
                allowClear: true,
                width: "100%",
            });

            $(this.el).on("change", (ev) => {
                console.log("Selected values:", $(ev.target).val());
            });

            return superStart();
        };

        return init();
    },
});
