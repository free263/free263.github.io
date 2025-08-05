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
                "track": 441,
                "name": "384.Fewmemory",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/384.Fewmemory.mp3"
				},
				{
                "track": 440,
                "name": "383.BacktoVictorian",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/383.BacktoVictorian.mp3"
				},
				{
                "track": 439,
                "name": "382.Labyrinth",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/382.Labyrinth.mp3"
				},
				{
                "track": 438,
                "name": "381.Abovethespark",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/381.Abovethespark.mp3"
				},
				{
                "track": 437,
                "name": "380.Allmadeofstars",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/380.Allmadeofstars.mp3"
				},
				{
                "track": 436,
                "name": "379.BoardwalkCarnival",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/379.BoardwalkCarnival.mp3"
				},
				{
                "track": 435,
                "name": "378.Thousandsoflove",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/378.Thousandsoflove.mp3"
				},
				{
                "track": 434,
                "name": "377.Foxglove",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/377.Foxglove.mp3"
				},
				{
                "track": 433,
                "name": "376.Keyforyou",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/376.Keyforyou.mp3"
				},
				{
                "track": 432,
                "name": "375.Shallowsleep",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/375.Shallowsleep.mp3"
				},
				{
                "track": 431,
                "name": "374.Translucent",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/374.Translucent.mp3"
				},
				{
                "track": 430,
                "name": "373.QuartzintheGold",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/373.QuartzintheGold.mp3"
				},
				{
                "track": 429,
                "name": "372.Thawing",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/372.Thawing.mp3"
				},
				{
                "track": 428,
                "name": "371.FieldofWildDaisies",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/371.FieldofWildDaisies.mp3"
				},
				{
                "track": 427,
                "name": "370.Windssong",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/370.Windssong.mp3"
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