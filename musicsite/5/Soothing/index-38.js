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
                "track": 501,
                "name": "444.Enjoyeverymoment",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/444.Enjoyeverymoment.mp3"
				},
				{
                "track": 500,
                "name": "443.Neverlosebyholdingback",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/443.Neverlosebyholdingback.mp3"
				},
				{
                "track": 499,
                "name": "442.Waitforapersonorastory",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/442.Waitforapersonorastory.mp3"
				},
				{
                "track": 498,
                "name": "441.Illstickaroundifyouwant",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/441.Illstickaroundifyouwant.mp3"
				},
				{
                "track": 497,
                "name": "440.Lostthingsinmemory",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/440.Lostthingsinmemory.mp3"
				},
				{
                "track": 496,
                "name": "439.Livebetter",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/439.Livebetter.mp3"
				},
				{
                "track": 495,
                "name": "438.Beingsingle",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/438.Beingsingle.mp3"
				},
				{
                "track": 494,
                "name": "437.Lakeofdreams",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/437.Lakeofdreams.mp3"
				},
				{
                "track": 493,
                "name": "436.WhenPeterCame",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/436.WhenPeterCame.mp3"
				},
				{
                "track": 492,
                "name": "435.MoonTear",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/435.MoonTear.mp3"
				},
				{
                "track": 491,
                "name": "434.Therosecross",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/434.Therosecross.mp3"
				},
				{
                "track": 490,
                "name": "433.Midnight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/433.Midnight.mp3"
				},
				{
                "track": 489,
                "name": "432.Blueandpink",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/432.Blueandpink.mp3"
				},
				{
                "track": 488,
                "name": "431.Lifeisshining",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/431.Lifeisshining.mp3"
				},
				{
                "track": 487,
                "name": "430.MountainsintheSea",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/430.MountainsintheSea.mp3"
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