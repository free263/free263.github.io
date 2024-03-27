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
                "track": 861,
                "name": "804.WindingRoad",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/804.WindingRoad.mp3"
				},
				{
                "track": 860,
                "name": "803.ThePeacefulLake",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/803.ThePeacefulLake.mp3"
				},
				{
                "track": 859,
                "name": "802.frayantlecheminduretour",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/802.frayantlecheminduretour.mp3"
				},
				{
                "track": 858,
                "name": "801.ApusdesoareRug_ciunea",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/801.ApusdesoareRug_ciunea.mp3"
				},
				{
                "track": 857,
                "name": "800.leveloursvert",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/800.leveloursvert.mp3"
				},
				{
                "track": 856,
                "name": "799.lesdonstoutaulongdelavie",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/799.lesdonstoutaulongdelavie.mp3"
				},
				{
                "track": 855,
                "name": "798.Seaofcloudsbehind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/798.Seaofcloudsbehind.mp3"
				},
				{
                "track": 854,
                "name": "797.neveroutofmymind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/797.neveroutofmymind.mp3"
				},
				{
                "track": 853,
                "name": "796.Inawink",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/796.Inawink.mp3"
				},
				{
                "track": 852,
                "name": "795.CrystalLake",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/795.CrystalLake.mp3"
				},
				{
                "track": 851,
                "name": "794.Avisiontosound",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/794.Avisiontosound.mp3"
				},
				{
                "track": 850,
                "name": "793.Aemotionaldramainautumafternoon",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/793.Aemotionaldramainautumafternoon.mp3"
				},
				{
                "track": 849,
                "name": "792.Hesaidwithasmile",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/792.Hesaidwithasmile.mp3"
				},
				{
                "track": 848,
                "name": "791.Lightoffate",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/791.Lightoffate.mp3"
				},
				{
                "track": 847,
                "name": "790.Unc_ursolitaire",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/790.Unc_ursolitaire.mp3"
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