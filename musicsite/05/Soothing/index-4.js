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
                "track": 1011,
                "name": "954.RelaxingontheMountain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/954.RelaxingontheMountain.mp3"
				},
				{
                "track": 1010,
                "name": "953.TheUnionofSunandMoon",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/953.TheUnionofSunandMoon.mp3"
				},
				{
                "track": 1009,
                "name": "952.ListeningtotheRiver",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/952.ListeningtotheRiver.mp3"
				},
				{
                "track": 1008,
                "name": "951.Krisna’sPeacocks",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/951.Krisna’sPeacocks.mp3"
				},
				{
                "track": 1007,
                "name": "950.TranquilSunset",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/950.TranquilSunset.mp3"
				},
				{
                "track": 1006,
                "name": "949.SunriseinDeerpark",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/949.SunriseinDeerpark.mp3"
				},
				{
                "track": 1005,
                "name": "948.MeetingofTwoOceans",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/948.MeetingofTwoOceans.mp3"
				},
				{
                "track": 1004,
                "name": "947.PurnimaNamashkar",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/947.PurnimaNamashkar.mp3"
				},
				{
                "track": 1003,
                "name": "946.OmPurnam",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/946.OmPurnam.mp3"
				},
				{
                "track": 1002,
                "name": "945.ComingHome",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/945.ComingHome.mp3"
				},
				{
                "track": 1001,
                "name": "944.TempleOfSilence",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/944.TempleOfSilence.mp3"
				},
				{
                "track": 1000,
                "name": "943.OnSacredGround",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/943.OnSacredGround.mp3"
				},
				{
                "track": 999,
                "name": "942.Sassi",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/942.Sassi.mp3"
				},
				{
                "track": 998,
                "name": "941.khajuraho",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/941.khajuraho.mp3"
				},
				{
                "track": 997,
                "name": "940.AMeetingPlaceForFriends",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/940.AMeetingPlaceForFriends.mp3"
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