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
                "track": 846,
                "name": "789.ChopinsBerührung",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/789.ChopinsBerührung.mp3"
				},
				{
                "track": 845,
                "name": "788.ilétaitunefois",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/788.ilétaitunefois.mp3"
				},
				{
                "track": 844,
                "name": "787.quandjemesouviens",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/787.quandjemesouviens.mp3"
				},
				{
                "track": 843,
                "name": "786.rêvantdelamaison",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/786.rêvantdelamaison.mp3"
				},
				{
                "track": 842,
                "name": "785.katakanandasukasaya",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/785.katakanandasukasaya.mp3"
				},
				{
                "track": 841,
                "name": "784.tilfeldigm_te",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/784.tilfeldigm_te.mp3"
				},
				{
                "track": 840,
                "name": "783.concurrent",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/783.concurrent.mp3"
				},
				{
                "track": 839,
                "name": "782.Vousêteslesoleil",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/782.Vousêteslesoleil.mp3"
				},
				{
                "track": 838,
                "name": "781.NousEnglouti",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/781.NousEnglouti.mp3"
				},
				{
                "track": 837,
                "name": "780.SansfinI（与焦虑症同频率的减压曲）",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/780.SansfinI（与焦虑症同频率的减压曲）.mp3"
				},
				{
                "track": 836,
                "name": "779.Rapidly（与焦虑症同频率的减压曲）",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/779.Rapidly（与焦虑症同频率的减压曲）.mp3"
				},
				{
                "track": 835,
                "name": "778.Thedistantwind（舒缓放松悠扬）",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/778.Thedistantwind（舒缓放松悠扬）.mp3"
				},
				{
                "track": 834,
                "name": "777.FlowersbytheRoadside（安静的暖意）",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/777.FlowersbytheRoadside（安静的暖意）.mp3"
				},
				{
                "track": 833,
                "name": "776.OrientalCountry（钢琴的流动 尺八的悠扬）",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/776.OrientalCountry（钢琴的流动 尺八的悠扬）.mp3"
				},
				{
                "track": 832,
                "name": "775.Clouds",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/775.Clouds.mp3"
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