(function() {
    'use strict';
    var app = {
        init: function() {
            routie({
                'home': function() {
                    sections.toggle(window.location.hash);
                },
                'soundcloudLikes': function() {
                    sections.toggle(window.location.hash);
                    soundCloud.init();
                },

                'soundcloudLikes/?:id': function(id) {
                    sections.toggleDetails(id)
                }
            });
        }
    };

    var soundCloud = {
        init : function() {
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
                tracks = tracks.map(function(tracks) {
                    return {
                        title:  tracks.title,
                        likes_count: tracks.likes_count,
                        id: tracks.id,
                        waveform : tracks.waveform_url
                    };
                });

                var  directives = {
                    link: {
                        href: function (params) {
                            return "#soundcloudLikes/" + this.id;
                        }
                    },

                    trackId : {
                        id: function (params) {
                            return this.id;
                        }
                    }
                }

                Transparency.render(document.getElementById('technoMusic'), tracks, directives);
                var commentFilterButton = document.getElementById('commentFilter');
                commentFilterButton.addEventListener('click', function (res) {
                    var result = _.filter(tracks, function(tracks) {
                        return tracks.likes_count > 20000;
                    });
                    Transparency.render(document.getElementById('technoMusic'), result, directives);
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
        },

        toggleDetails : function(id) {
            var e = document.getElementById(id);
            if (e.style.display=='none' || e.style.display=='') {
                e.style.display = 'block';
            }
            else {
                e.style.display = 'none';
            }
        }
    };
    app.init();
})();