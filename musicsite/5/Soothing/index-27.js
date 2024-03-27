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
                "track": 666,
                "name": "609.Lumodepre_o",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/609.Lumodepre_o.mp3"
				},
				{
                "track": 665,
                "name": "608.Mendmyheart",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/608.Mendmyheart.mp3"
				},
				{
                "track": 664,
                "name": "607.Lightspot",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/607.Lightspot.mp3"
				},
				{
                "track": 663,
                "name": "606.Gurgles",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/606.Gurgles.mp3"
				},
				{
                "track": 662,
                "name": "605.Atthelastmoment",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/605.Atthelastmoment.mp3"
				},
				{
                "track": 661,
                "name": "604.Gentlekiss",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/604.Gentlekiss.mp3"
				},
				{
                "track": 660,
                "name": "603.Untilmeetyou",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/603.Untilmeetyou.mp3"
				},
				{
                "track": 659,
                "name": "602.Startagain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/602.Startagain.mp3"
				},
				{
                "track": 658,
                "name": "601.Dependency",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/601.Dependency.mp3"
				},
				{
                "track": 657,
                "name": "600.Sunflower",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/600.Sunflower.mp3"
				},
				{
                "track": 656,
                "name": "599.Passiveness",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/599.Passiveness.mp3"
				},
				{
                "track": 655,
                "name": "598.Malkuth",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/598.Malkuth.mp3"
				},
				{
                "track": 654,
                "name": "597.Prélude",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/597.Prélude.mp3"
				},
				{
                "track": 653,
                "name": "596.333",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/596.333.mp3"
				},
				{
                "track": 652,
                "name": "595.Beforethelovegotlost",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/595.Beforethelovegotlost.mp3"
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