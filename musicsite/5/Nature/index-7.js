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
                "track": 132,
                "name": "132.海鸥岛",
                "length": "4:46",
                "file": "自然之声/132.海鸥岛.mp3"
				},
				{
                "track": 131,
                "name": "131.海边微风起",
                "length": "4:46",
                "file": "自然之声/131.海边微风起.mp3"
				},
				{
                "track": 130,
                "name": "130.夏日绿荫",
                "length": "4:46",
                "file": "自然之声/130.夏日绿荫.mp3"
				},
				{
                "track": 129,
                "name": "129.夏夜",
                "length": "4:46",
                "file": "自然之声/129.夏夜.mp3"
				},
				{
                "track": 128,
                "name": "128.回家的路",
                "length": "4:46",
                "file": "自然之声/128.回家的路.mp3"
				},
				{
                "track": 127,
                "name": "127.海上栈桥",
                "length": "4:46",
                "file": "自然之声/127.海上栈桥.mp3"
				},
				{
                "track": 126,
                "name": "126.水下气泡（3D大自然声音）",
                "length": "4:46",
                "file": "自然之声/126.水下气泡（3D大自然声音）.mp3"
				},
				{
                "track": 125,
                "name": "125.呼吸在海平面下10米（3D大自然声音）",
                "length": "4:46",
                "file": "自然之声/125.呼吸在海平面下10米（3D大自然声音）.mp3"
				},
				{
                "track": 124,
                "name": "124.星空下的篝火（3D大自然声音）",
                "length": "4:46",
                "file": "自然之声/124.星空下的篝火（3D大自然声音）.mp3"
				},
				{
                "track": 123,
                "name": "123.为你留了一盏灯（3D纯音乐）",
                "length": "4:46",
                "file": "自然之声/123.为你留了一盏灯（3D纯音乐）.mp3"
				},
				{
                "track": 122,
                "name": "122.窗外是雨天（3D纯音乐）",
                "length": "4:46",
                "file": "自然之声/122.窗外是雨天（3D纯音乐）.mp3"
				},
				{
                "track": 121,
                "name": "121.深海中的水流（3D纯大自然声音）",
                "length": "4:46",
                "file": "自然之声/121.深海中的水流（3D纯大自然声音）.mp3"
				},
				{
                "track": 120,
                "name": "120.牵着你的手到世界尽头（3D晚安轻音乐）",
                "length": "4:46",
                "file": "自然之声/120.牵着你的手到世界尽头（3D晚安轻音乐）.mp3"
				},
				{
                "track": 119,
                "name": "119.水滴声声（3D舒眠大自然轻音乐）",
                "length": "4:46",
                "file": "自然之声/119.水滴声声（3D舒眠大自然轻音乐）.mp3"
				},
				{
                "track": 118,
                "name": "118.心事如浮萍（3D安眠轻音乐）",
                "length": "4:46",
                "file": "自然之声/118.心事如浮萍（3D安眠轻音乐）.mp3"
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