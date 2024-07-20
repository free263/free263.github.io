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
                "track": 201,
                "name": "144.Onesjourney",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/144.Onesjourney.mp3"
				},
				{
                "track": 200,
                "name": "143.Metro",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/143.Metro.mp3"
				},
				{
                "track": 199,
                "name": "142.Reef",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/142.Reef.mp3"
				},
				{
                "track": 198,
                "name": "141.Bangkok",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/141.Bangkok.mp3"
				},
				{
                "track": 197,
                "name": "140.Bychance",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/140.Bychance.mp3"
				},
				{
                "track": 196,
                "name": "139.SewWhat",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/139.SewWhat.mp3"
				},
				{
                "track": 195,
                "name": "138.Wildworld",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/138.Wildworld.mp3"
				},
				{
                "track": 194,
                "name": "137.Letusgothen",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/137.Letusgothen.mp3"
				},
				{
                "track": 193,
                "name": "136.Halfborn",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/136.Halfborn.mp3"
				},
				{
                "track": 192,
                "name": "135.SeventeenSyllables",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/135.SeventeenSyllables.mp3"
				},
				{
                "track": 191,
                "name": "134.Ebbandflow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/134.Ebbandflow.mp3"
				},
				{
                "track": 190,
                "name": "133.ForLastingLove",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/133.ForLastingLove.mp3"
				},
				{
                "track": 189,
                "name": "132.Inasensepoetryzine",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/132.Inasensepoetryzine.mp3"
				},
				{
                "track": 188,
                "name": "131.Imnotachildimjustalive",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/131.Imnotachildimjustalive.mp3"
				},
				{
                "track": 187,
                "name": "130.Alwaysbebraveandkind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/130.Alwaysbebraveandkind.mp3"
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