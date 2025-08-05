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
                "track": 516,
                "name": "459.WarmFilm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/459.WarmFilm.mp3"
				},
				{
                "track": 515,
                "name": "458.Driftawayfromtheworld",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/458.Driftawayfromtheworld.mp3"
				},
				{
                "track": 514,
                "name": "457.Whatever",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/457.Whatever.mp3"
				},
				{
                "track": 513,
                "name": "456.Lovelikeyouveneverbeenhurt",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/456.Lovelikeyouveneverbeenhurt.mp3"
				},
				{
                "track": 512,
                "name": "455.Whenyoulearntofly",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/455.Whenyoulearntofly.mp3"
				},
				{
                "track": 511,
                "name": "454.Dandelion",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/454.Dandelion.mp3"
				},
				{
                "track": 510,
                "name": "453.Wildwithjoy",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/453.Wildwithjoy.mp3"
				},
				{
                "track": 509,
                "name": "452.Buriedcitytoshutalllights",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/452.Buriedcitytoshutalllights.mp3"
				},
				{
                "track": 508,
                "name": "451.Oldsamesong",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/451.Oldsamesong.mp3"
				},
				{
                "track": 507,
                "name": "450.Downtothebone",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/450.Downtothebone.mp3"
				},
				{
                "track": 506,
                "name": "449.LoveBattery",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/449.LoveBattery.mp3"
				},
				{
                "track": 505,
                "name": "448.Waittobelonely",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/448.Waittobelonely.mp3"
				},
				{
                "track": 504,
                "name": "447.Fromurpast",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/447.Fromurpast.mp3"
				},
				{
                "track": 503,
                "name": "446.Likeaplay",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/446.Likeaplay.mp3"
				},
				{
                "track": 502,
                "name": "445.Givetimetime",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/445.Givetimetime.mp3"
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