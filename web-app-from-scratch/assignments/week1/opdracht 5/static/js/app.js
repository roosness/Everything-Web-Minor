(function() {
    'use strict';

    var app = {
        init: function() {
            routes.init();
        }
    };

    var routes = {
        init: function() {
            window.addEventListener('hashchange', function(event) {
                var route = window.location.hash;
                sections.toggle(route);
            });
        }
    };

    var sections = {
        toggle: function(route) {
            var sections = document.querySelectorAll('.section');
            //[] = Array.prototype.
            [].forEach.call(sections, function(section) {
                section.classList.remove('active');
            });

            document.querySelector(route).classList.add('active');
        }
    }

    app.init();

})();