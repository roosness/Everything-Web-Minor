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
        }
    };

    var soundCloud = {
        init : function() {
            var trackList;
            microAjax("http://api.soundcloud.com/users/386419?client_id=8b70bc40bde9cefe74fd08bb12bac86c", function (data) {
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
                soundCloud.getTracks();
            });
        },

        getTracks : function() {
            SC.initialize({
                client_id: '8b70bc40bde9cefe74fd08bb12bac86c'
            });
            SC.get('/tracks', {
                genres: 'techno', bpm: {from: 120}
            }).then(function (tracks) {
                tracks.map(function(tracks) {
                    return { // return what new object will look like
                        title:  tracks.title,
                        comment_count: tracks.comment_count
                    };
                });
                Transparency.render(document.getElementById('technoMusic'), tracks);
                var commentFilterButton = document.getElementById('commentFilter');
                commentFilterButton.addEventListener('click', function (res) {
                    var result = _.filter(tracks, function(tracks) {
                        return tracks.comment_count > 1000;
                    });
                    Transparency.render(document.getElementById('technoMusic'), result);

                });
            })
        }
    };

    var sections = {
        toggle: function(route) {
            var sections = document.querySelectorAll('.section');
            [].forEach.call(sections, function(section) {
                section.classList.remove('active');
            });
            document.querySelector(route).classList.add('active');
        }
    };
    app.init();
})();