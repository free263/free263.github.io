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
                "track": 86,
                "name": "086.你鼓舞了我 You Raise Me Up - 神秘园",
                "length": "4:46",
                "file": "唯美纯音乐/086.你鼓舞了我 You Raise Me Up - 神秘园.mp3"
				},
				{
                "track": 85,
                "name": "085.蝶舞娉婷 Papillon - 神秘园",
                "length": "4:46",
                "file": "唯美纯音乐/085.蝶舞娉婷 Papillon - 神秘园.mp3"
				},
				{
                "track": 84,
                "name": "084.风动草( 陶笛) - 伴奏版",
                "length": "4:46",
                "file": "唯美纯音乐/084.风动草( 陶笛) - 伴奏版.mp3"
				},
				{
                "track": 83,
                "name": "083.阿根廷别为我哭泣",
                "length": "4:46",
                "file": "唯美纯音乐/083.阿根廷别为我哭泣.mp3"
				},
				{
                "track": 82,
                "name": "082.天使情人 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/082.天使情人 - 纯音乐.mp3"
				},
				{
                "track": 81,
                "name": "081.海王星 (Neptune) - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/081.海王星 (Neptune) - 班得瑞.mp3"
				},
				{
                "track": 80,
                "name": "080.莎莉花园 (绿野仙踪) - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/080.莎莉花园 (绿野仙踪) - 班得瑞.mp3"
				},
				{
                "track": 79,
                "name": "079.枉凝眉箫曲 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/079.枉凝眉箫曲 - 纯音乐.mp3"
				},
				{
                "track": 78,
                "name": "078.梦于月光中 (Dreaming In The Moonlight) - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/078.梦于月光中 (Dreaming In The Moonlight) - 班得瑞.mp3"
				},
				{
                "track": 77,
                "name": "077.中国古典音乐 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/077.中国古典音乐 - 纯音乐.mp3"
				},
				{
                "track": 76,
                "name": "076.优美动听古典音乐 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/076.优美动听古典音乐 - 纯音乐.mp3"
				},
				{
                "track": 75,
                "name": "075.爱殇 - 钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/075.爱殇 - 钢琴曲.mp3"
				},
				{
                "track": 74,
                "name": "074.月光曲 - 贝多芬",
                "length": "4:46",
                "file": "唯美纯音乐/074.月光曲 - 贝多芬.mp3"
				},
				{
                "track": 73,
                "name": "073.出水莲 (古筝独奏) - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/073.出水莲 (古筝独奏) - 纯音乐.mp3"
				},
				{
                "track": 72,
                "name": "072.风舞者 Windancer - 神秘园",
                "length": "4:46",
                "file": "唯美纯音乐/072.风舞者 Windancer - 神秘园.mp3"
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