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
                "track": 966,
                "name": "909.melodyi",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/909.melodyi.mp3"
				},
				{
                "track": 965,
                "name": "908.melodyii",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/908.melodyii.mp3"
				},
				{
                "track": 964,
                "name": "907.melodyiii",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/907.melodyiii.mp3"
				},
				{
                "track": 963,
                "name": "906._",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/906._.mp3"
				},
				{
                "track": 962,
                "name": "905.____",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/905.____.mp3"
				},
				{
                "track": 961,
                "name": "904.melodyiv",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/904.melodyiv.mp3"
				},
				{
                "track": 960,
                "name": "903.InTheRising",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/903.InTheRising.mp3"
				},
				{
                "track": 959,
                "name": "902.SaffronMorning",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/902.SaffronMorning.mp3"
				},
				{
                "track": 958,
                "name": "901.TheLotusBlooms",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/901.TheLotusBlooms.mp3"
				},
				{
                "track": 957,
                "name": "900.BeyondTheMountain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/900.BeyondTheMountain.mp3"
				},
				{
                "track": 956,
                "name": "899.TheRiverFlows",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/899.TheRiverFlows.mp3"
				},
				{
                "track": 955,
                "name": "898.SunriseSutras",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/898.SunriseSutras.mp3"
				},
				{
                "track": 954,
                "name": "897.Y...derepente...mecuraste-BosquesdemiMente",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/897.Y...derepente...mecuraste-BosquesdemiMente.mp3"
				},
				{
                "track": 953,
                "name": "896.Hermana-BosquesdemiMente",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/896.Hermana-BosquesdemiMente.mp3"
				},
				{
                "track": 952,
                "name": "895.Unatardedeoto_ovistadesdelaventana-BosquesdemiMente",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/895.Unatardedeoto_ovistadesdelaventana-BosquesdemiMente.mp3"
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