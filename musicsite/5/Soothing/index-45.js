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
                "track": 396,
                "name": "339.Mapofheart",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/339.Mapofheart.mp3"
				},
				{
                "track": 395,
                "name": "338.Inthevalley",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/338.Inthevalley.mp3"
				},
				{
                "track": 394,
                "name": "337.Cloudedover",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/337.Cloudedover.mp3"
				},
				{
                "track": 393,
                "name": "336.Pure",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/336.Pure.mp3"
				},
				{
                "track": 392,
                "name": "335.Danceunderthemind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/335.Danceunderthemind.mp3"
				},
				{
                "track": 391,
                "name": "334.Thesecondrainbow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/334.Thesecondrainbow.mp3"
				},
				{
                "track": 390,
                "name": "333.Travel",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/333.Travel.mp3"
				},
				{
                "track": 389,
                "name": "332.Connectwiththemorninglight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/332.Connectwiththemorninglight.mp3"
				},
				{
                "track": 388,
                "name": "331.Lifestation",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/331.Lifestation.mp3"
				},
				{
                "track": 387,
                "name": "330.Justsigh",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/330.Justsigh.mp3"
				},
				{
                "track": 386,
                "name": "329.Bluestars",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/329.Bluestars.mp3"
				},
				{
                "track": 385,
                "name": "328.",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/328..mp3"
				},
				{
                "track": 384,
                "name": "327.Justasitis",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/327.Justasitis.mp3"
				},
				{
                "track": 383,
                "name": "326.Guardian",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/326.Guardian.mp3"
				},
				{
                "track": 382,
                "name": "325.Afternoon",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/325.Afternoon.mp3"
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