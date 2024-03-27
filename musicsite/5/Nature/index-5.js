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
                "track": 162,
                "name": "162.暖暖的东风",
                "length": "4:46",
                "file": "自然之声/162.暖暖的东风.mp3"
				},
				{
                "track": 161,
                "name": "161.雪之华",
                "length": "4:46",
                "file": "自然之声/161.雪之华.mp3"
				},
				{
                "track": 160,
                "name": "160.流星花园",
                "length": "4:46",
                "file": "自然之声/160.流星花园.mp3"
				},
				{
                "track": 159,
                "name": "159.我们一家人",
                "length": "4:46",
                "file": "自然之声/159.我们一家人.mp3"
				},
				{
                "track": 158,
                "name": "158.破晓",
                "length": "4:46",
                "file": "自然之声/158.破晓.mp3"
				},
				{
                "track": 157,
                "name": "157.初夏",
                "length": "4:46",
                "file": "自然之声/157.初夏.mp3"
				},
				{
                "track": 156,
                "name": "156.妈妈的厨房",
                "length": "4:46",
                "file": "自然之声/156.妈妈的厨房.mp3"
				},
				{
                "track": 155,
                "name": "155.冬日清晨",
                "length": "4:46",
                "file": "自然之声/155.冬日清晨.mp3"
				},
				{
                "track": 154,
                "name": "154.早春",
                "length": "4:46",
                "file": "自然之声/154.早春.mp3"
				},
				{
                "track": 153,
                "name": "153.家乡",
                "length": "4:46",
                "file": "自然之声/153.家乡.mp3"
				},
				{
                "track": 152,
                "name": "152.当春天来到",
                "length": "4:46",
                "file": "自然之声/152.当春天来到.mp3"
				},
				{
                "track": 151,
                "name": "151.从冬眠中醒来",
                "length": "4:46",
                "file": "自然之声/151.从冬眠中醒来.mp3"
				},
				{
                "track": 150,
                "name": "150.回归校园",
                "length": "4:46",
                "file": "自然之声/150.回归校园.mp3"
				},
				{
                "track": 149,
                "name": "149.舞动的花朵",
                "length": "4:46",
                "file": "自然之声/149.舞动的花朵.mp3"
				},
				{
                "track": 148,
                "name": "148.小可爱",
                "length": "4:46",
                "file": "自然之声/148.小可爱.mp3"
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