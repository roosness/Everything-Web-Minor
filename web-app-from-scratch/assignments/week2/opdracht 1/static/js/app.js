(function() {
    'use strict';

    var app = {
        init: function() {
            routie({
                'home': function() {
                    debugger;
                    sections.toggle(window.location.hash);
                },
                'soundcloudLikes': function() {
                    sections.toggle(window.location.hash);
                    soundCloud.init();
                }
            });
        },

    };

    var soundCloud = {
        init : function() {
            microAjax("http://api.soundcloud.com/users/386419?client_id=8b70bc40bde9cefe74fd08bb12bac86c", function (data) {
               //console.log(data.);
                data = JSON.parse(data);
                var templateData = {
                    name: data.username,
                    city: data.city,
                    country : data.country,
                    likes : data.public_favorites_count,
                    online : data.online,
                    avatar : data.avatar_url,
                    followers : data.followers_count,
                    following : data.followings_count,
                };
                var template = document.getElementById("soundcloudTemplate");
                Transparency.render(template, templateData);
            });
        }
    }


    var sections = {
        toggle: function(route) {
            var sections = document.querySelectorAll('.section');
            [].forEach.call(sections, function(section) {
                section.classList.remove('active');
            });

            document.querySelector(route).classList.add('active');
        }
    }


    app.init();

})();