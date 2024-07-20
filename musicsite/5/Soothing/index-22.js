// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'https://vercel.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 741,
                "name": "684.Peaceofmind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/684.Peaceofmind.mp3"
				},
				{
                "track": 740,
                "name": "683.Thetide",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/683.Thetide.mp3"
				},
				{
                "track": 739,
                "name": "682.Dreamland",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/682.Dreamland.mp3"
				},
				{
                "track": 738,
                "name": "681.Theportrait",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/681.Theportrait.mp3"
				},
				{
                "track": 737,
                "name": "680.StarrySky",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/680.StarrySky.mp3"
				},
				{
                "track": 736,
                "name": "679.Thanksfor",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/679.Thanksfor.mp3"
				},
				{
                "track": 735,
                "name": "678.Storybook",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/678.Storybook.mp3"
				},
				{
                "track": 734,
                "name": "677.Orangeblues",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/677.Orangeblues.mp3"
				},
				{
                "track": 733,
                "name": "676.Driftbottle",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/676.Driftbottle.mp3"
				},
				{
                "track": 732,
                "name": "675.Springsnow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/675.Springsnow.mp3"
				},
				{
                "track": 731,
                "name": "674.Impress",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/674.Impress.mp3"
				},
				{
                "track": 730,
                "name": "673.Startingpoint",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/673.Startingpoint.mp3"
				},
				{
                "track": 729,
                "name": "672.Sunset",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/672.Sunset.mp3"
				},
				{
                "track": 728,
                "name": "671.Dancewith",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/671.Dancewith.mp3"
				},
				{
                "track": 727,
                "name": "670.Lavender",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/670.Lavender.mp3"
				},
			],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});

//initialize plyr
plyr.setup($('#audio1'), {});