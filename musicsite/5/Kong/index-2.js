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
                "track": 157,
                "name": "神思者-海之女神",
                "length": "4:46",
                "file": "纯音乐/神思者-海之女神.mp3"
				},
				{
                "track": 156,
                "name": "神思者-故宫的记忆",
                "length": "4:46",
                "file": "纯音乐/神思者-故宫的记忆.mp3"
				},
				{
                "track": 155,
                "name": "神思者-悲情城市",
                "length": "4:46",
                "file": "纯音乐/神思者-悲情城市.mp3"
				},
				{
                "track": 154,
                "name": "神思者-Project",
                "length": "4:46",
                "file": "纯音乐/神思者-Project.mp3"
				},
				{
                "track": 153,
                "name": "神秘园之歌-月亮门",
                "length": "4:46",
                "file": "纯音乐/神秘园之歌-月亮门.mp3"
				},
				{
                "track": 152,
                "name": "神秘园-月亮门",
                "length": "4:46",
                "file": "纯音乐/神秘园-月亮门.mp3"
				},
				{
                "track": 151,
                "name": "神秘园-夜曲",
                "length": "4:46",
                "file": "纯音乐/神秘园-夜曲.mp3"
				},
				{
                "track": 150,
                "name": "神秘园-莲花",
                "length": "4:46",
                "file": "纯音乐/神秘园-莲花.mp3"
				},
				{
                "track": 149,
                "name": "犬夜叉-跨越时代的思念",
                "length": "4:46",
                "file": "纯音乐/犬夜叉-跨越时代的思念.mp3"
				},
				{
                "track": 148,
                "name": "犬夜叉-哀歌",
                "length": "4:46",
                "file": "纯音乐/犬夜叉-哀歌.mp3"
				},
				{
                "track": 147,
                "name": "齐普利安·波隆贝斯库-永恒的记忆",
                "length": "4:46",
                "file": "纯音乐/齐普利安·波隆贝斯库-永恒的记忆.mp3"
				},
				{
                "track": 146,
                "name": "莫扎特-幽默曲",
                "length": "4:46",
                "file": "纯音乐/莫扎特-幽默曲.mp3"
				},
				{
                "track": 145,
                "name": "莫扎特-摇篮曲",
                "length": "4:46",
                "file": "纯音乐/莫扎特-摇篮曲.mp3"
				},
				{
                "track": 144,
                "name": "莫扎特-小步舞曲",
                "length": "4:46",
                "file": "纯音乐/莫扎特-小步舞曲.mp3"
				},
				{
                "track": 143,
                "name": "莫扎特-土耳其进行曲",
                "length": "4:46",
                "file": "纯音乐/莫扎特-土耳其进行曲.mp3"
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