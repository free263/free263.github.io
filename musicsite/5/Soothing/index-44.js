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
                "track": 411,
                "name": "354.Justbreath",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/354.Justbreath.mp3"
				},
				{
                "track": 410,
                "name": "353.Atiniyunderwaterworld",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/353.Atiniyunderwaterworld.mp3"
				},
				{
                "track": 409,
                "name": "352.Glowinthedark",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/352.Glowinthedark.mp3"
				},
				{
                "track": 408,
                "name": "351.Oneyear",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/351.Oneyear.mp3"
				},
				{
                "track": 407,
                "name": "350.Theseaofwind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/350.Theseaofwind.mp3"
				},
				{
                "track": 406,
                "name": "349.Ink",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/349.Ink.mp3"
				},
				{
                "track": 405,
                "name": "348.Simpleeternity",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/348.Simpleeternity.mp3"
				},
				{
                "track": 404,
                "name": "347.Minimalism",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/347.Minimalism.mp3"
				},
				{
                "track": 403,
                "name": "346.Theheartis",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/346.Theheartis.mp3"
				},
				{
                "track": 402,
                "name": "345.So",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/345.So.mp3"
				},
				{
                "track": 401,
                "name": "344.Hesaid",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/344.Hesaid.mp3"
				},
				{
                "track": 400,
                "name": "343.Thepointandplane",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/343.Thepointandplane.mp3"
				},
				{
                "track": 399,
                "name": "342.Skyline",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/342.Skyline.mp3"
				},
				{
                "track": 398,
                "name": "341.Ruinedcity",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/341.Ruinedcity.mp3"
				},
				{
                "track": 397,
                "name": "340.Asenseofritual",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/340.Asenseofritual.mp3"
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