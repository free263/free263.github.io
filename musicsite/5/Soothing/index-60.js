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
                "track": 171,
                "name": "114.Allthethingsinmyhands",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/114.Allthethingsinmyhands.mp3"
				},
				{
                "track": 170,
                "name": "113.Thesongsyouveheard",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/113.Thesongsyouveheard.mp3"
				},
				{
                "track": 169,
                "name": "112.Willyoubemyshoulder",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/112.Willyoubemyshoulder.mp3"
				},
				{
                "track": 168,
                "name": "111.Broken",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/111.Broken.mp3"
				},
				{
                "track": 167,
                "name": "110.WeweretogetherIforgottherest",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/110.WeweretogetherIforgottherest.mp3"
				},
				{
                "track": 166,
                "name": "109.Lureof",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/109.Lureof.mp3"
				},
				{
                "track": 165,
                "name": "108.AndStillIRise",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/108.AndStillIRise.mp3"
				},
				{
                "track": 164,
                "name": "107.Letitheal",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/107.Letitheal.mp3"
				},
				{
                "track": 163,
                "name": "106.30Days",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/106.30Days.mp3"
				},
				{
                "track": 162,
                "name": "1056.SoulVibration-RileyLee",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1056.SoulVibration-RileyLee.mp3"
				},
				{
                "track": 161,
                "name": "1055.BlossomsFallingLikeSnow-Gandalf",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1055.BlossomsFallingLikeSnow-Gandalf.mp3"
				},
				{
                "track": 160,
                "name": "1054.EarthAndSky",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1054.EarthAndSky.mp3"
				},
				{
                "track": 159,
                "name": "1053.映像",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1053.映像.mp3"
				},
				{
                "track": 158,
                "name": "1052.ambre-NilsFrahm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1052.ambre-NilsFrahm.mp3"
				},
				{
                "track": 157,
                "name": "1051.Nue-NilsFrahm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1051.Nue-NilsFrahm.mp3"
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