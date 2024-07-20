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
                "track": 276,
                "name": "219.Nevermind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/219.Nevermind.mp3"
				},
				{
                "track": 275,
                "name": "218.Flashofmemory",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/218.Flashofmemory.mp3"
				},
				{
                "track": 274,
                "name": "217.Seeyouagain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/217.Seeyouagain.mp3"
				},
				{
                "track": 273,
                "name": "216.Findtherightkey",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/216.Findtherightkey.mp3"
				},
				{
                "track": 272,
                "name": "215.Goodbyegiraffe",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/215.Goodbyegiraffe.mp3"
				},
				{
                "track": 271,
                "name": "214.Mazeofmoments",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/214.Mazeofmoments.mp3"
				},
				{
                "track": 270,
                "name": "213.Aboutsummer",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/213.Aboutsummer.mp3"
				},
				{
                "track": 269,
                "name": "212.Instead",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/212.Instead.mp3"
				},
				{
                "track": 268,
                "name": "211.Theyredancingtoo",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/211.Theyredancingtoo.mp3"
				},
				{
                "track": 267,
                "name": "210.Wonderland",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/210.Wonderland.mp3"
				},
				{
                "track": 266,
                "name": "209.Waittillyouseeher",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/209.Waittillyouseeher.mp3"
				},
				{
                "track": 265,
                "name": "208.Partir",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/208.Partir.mp3"
				},
				{
                "track": 264,
                "name": "207.Abyss",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/207.Abyss.mp3"
				},
				{
                "track": 263,
                "name": "206.Onenightbeforedeath",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/206.Onenightbeforedeath.mp3"
				},
				{
                "track": 262,
                "name": "205.AQuietStorm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/205.AQuietStorm.mp3"
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