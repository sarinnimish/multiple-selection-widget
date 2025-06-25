{
    "name": "Multiple Selection Widget",
    "version": "18.0.0.1",
    "summary": "Many2many style Select2 Widget on Website",
    "description": """
        This module introduces a customizable many2many-style selection field for website forms using the Select2 jQuery plugin.
        It enhances the default HTML select input with search, clear, and multi-select capabilities.
    """,
    "category": "Website",
    "license": "LGPL-3",
    "depends": ["base","website"],
    "data": [

    ],
    "assets": {
        "web.assets_frontend": [
            "multiple_selection_widget/static/src/js/m2m_select2_widget.js",
            'web/static/lib/jquery/jquery.js', 

        ]
    },
    "installable": True,
    "application": True,
}