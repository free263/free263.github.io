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
                "track": 1026,
                "name": "969.Longing",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/969.Longing.mp3"
				},
				{
                "track": 1025,
                "name": "968.InfiniteBeauty",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/968.InfiniteBeauty.mp3"
				},
				{
                "track": 1024,
                "name": "967.Dreaming",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/967.Dreaming.mp3"
				},
				{
                "track": 1023,
                "name": "966.Tranquility",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/966.Tranquility.mp3"
				},
				{
                "track": 1022,
                "name": "965.BeyondInfinity",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/965.BeyondInfinity.mp3"
				},
				{
                "track": 1021,
                "name": "964.TouchingSoftness",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/964.TouchingSoftness.mp3"
				},
				{
                "track": 1020,
                "name": "963.Hemingbough....TheReturn",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/963.Hemingbough....TheReturn.mp3"
				},
				{
                "track": 1019,
                "name": "962.HeartsAwakening",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/962.HeartsAwakening.mp3"
				},
				{
                "track": 1018,
                "name": "961.HealingSenses",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/961.HealingSenses.mp3"
				},
				{
                "track": 1017,
                "name": "960.Forgiving",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/960.Forgiving.mp3"
				},
				{
                "track": 1016,
                "name": "959.HealingtheHeart",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/959.HealingtheHeart.mp3"
				},
				{
                "track": 1015,
                "name": "958.ReturntoYourBody",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/958.ReturntoYourBody.mp3"
				},
				{
                "track": 1014,
                "name": "957.TheUnwinding",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/957.TheUnwinding.mp3"
				},
				{
                "track": 1013,
                "name": "956.ReturntoYourself",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/956.ReturntoYourself.mp3"
				},
				{
                "track": 1012,
                "name": "955.GoddessEvocation",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/955.GoddessEvocation.mp3"
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