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
            mediaPath = 'https://pan.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 981,
                "name": "924.97202",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/924.97202.mp3"
				},
				{
                "track": 980,
                "name": "923.Walking",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/923.Walking.mp3"
				},
				{
                "track": 979,
                "name": "922.EmilysSong",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/922.EmilysSong.mp3"
				},
				{
                "track": 978,
                "name": "921.Childrenbuildingthisrainmanoutofsnow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/921.Childrenbuildingthisrainmanoutofsnow.mp3"
				},
				{
                "track": 977,
                "name": "920.ASongforstayingin",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/920.ASongforstayingin.mp3"
				},
				{
                "track": 976,
                "name": "919.Agrowingrecognitionofthegeniusofbirds",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/919.Agrowingrecognitionofthegeniusofbirds.mp3"
				},
				{
                "track": 975,
                "name": "918.May",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/918.May.mp3"
				},
				{
                "track": 974,
                "name": "917.We’returningintoregularpeople",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/917.We’returningintoregularpeople.mp3"
				},
				{
                "track": 973,
                "name": "916.Doves",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/916.Doves.mp3"
				},
				{
                "track": 972,
                "name": "915.Thepeopleyouneverknowabout",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/915.Thepeopleyouneverknowabout.mp3"
				},
				{
                "track": 971,
                "name": "914.untitledforpianoandviolins",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/914.untitledforpianoandviolins.mp3"
				},
				{
                "track": 970,
                "name": "913.untitledforpiano",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/913.untitledforpiano.mp3"
				},
				{
                "track": 969,
                "name": "912.duringthesummer2nd",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/912.duringthesummer2nd.mp3"
				},
				{
                "track": 968,
                "name": "911.duringthesummer3rd",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/911.duringthesummer3rd.mp3"
				},
				{
                "track": 967,
                "name": "910.duringthesummer4th",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/910.duringthesummer4th.mp3"
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