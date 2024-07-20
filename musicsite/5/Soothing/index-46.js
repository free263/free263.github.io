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
                "track": 381,
                "name": "324.Tealsky",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/324.Tealsky.mp3"
				},
				{
                "track": 380,
                "name": "323.Intheoceanofcrowd",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/323.Intheoceanofcrowd.mp3"
				},
				{
                "track": 379,
                "name": "322.SpringBells",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/322.SpringBells.mp3"
				},
				{
                "track": 378,
                "name": "321.Empty",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/321.Empty.mp3"
				},
				{
                "track": 377,
                "name": "320.Fadeaway",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/320.Fadeaway.mp3"
				},
				{
                "track": 376,
                "name": "319.Mint",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/319.Mint.mp3"
				},
				{
                "track": 375,
                "name": "318.Afewtimes",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/318.Afewtimes.mp3"
				},
				{
                "track": 374,
                "name": "317.Memoryfragments",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/317.Memoryfragments.mp3"
				},
				{
                "track": 373,
                "name": "316.Lostinthescene",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/316.Lostinthescene.mp3"
				},
				{
                "track": 372,
                "name": "315.Rusticroad",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/315.Rusticroad.mp3"
				},
				{
                "track": 371,
                "name": "314.WhiteQueen",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/314.WhiteQueen.mp3"
				},
				{
                "track": 370,
                "name": "313.Fourteen",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/313.Fourteen.mp3"
				},
				{
                "track": 369,
                "name": "312.Azure",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/312.Azure.mp3"
				},
				{
                "track": 368,
                "name": "311.Alternate",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/311.Alternate.mp3"
				},
				{
                "track": 367,
                "name": "310.Fiorinelvento",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/310.Fiorinelvento.mp3"
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