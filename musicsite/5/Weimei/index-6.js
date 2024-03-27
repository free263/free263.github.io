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
                "track": 281,
                "name": "281.茶",
                "length": "4:46",
                "file": "唯美纯音乐/281.茶.mp3"
				},
				{
                "track": 280,
                "name": "280.雨碎江南，花影斑斓-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/280.雨碎江南，花影斑斓-唯美纯音乐.mp3"
				},
				{
                "track": 279,
                "name": "279.someone like you 原版伴奏",
                "length": "4:46",
                "file": "唯美纯音乐/279.someone like you 原版伴奏.mp3"
				},
				{
                "track": 278,
                "name": "278.痴情冢 【笛子版】",
                "length": "4:46",
                "file": "唯美纯音乐/278.痴情冢 【笛子版】.mp3"
				},
				{
                "track": 277,
                "name": "277.打雷下雨的声音真好听",
                "length": "4:46",
                "file": "唯美纯音乐/277.打雷下雨的声音真好听.mp3"
				},
				{
                "track": 276,
                "name": "276.心绪 Continuous Thought",
                "length": "4:46",
                "file": "唯美纯音乐/276.心绪 Continuous Thought.mp3"
				},
				{
                "track": 275,
                "name": "275.Heavenly (feat. Felicia Farerre)",
                "length": "4:46",
                "file": "唯美纯音乐/275.Heavenly (feat. Felicia Farerre).mp3"
				},
				{
                "track": 274,
                "name": "274.Einsamer Hirte 孤独的牧羊人 ( 口琴 )",
                "length": "4:46",
                "file": "唯美纯音乐/274.Einsamer Hirte 孤独的牧羊人 ( 口琴 ).mp3"
				},
				{
                "track": 273,
                "name": "273.岩山---昭乌达盟民歌",
                "length": "4:46",
                "file": "唯美纯音乐/273.岩山---昭乌达盟民歌.mp3"
				},
				{
                "track": 272,
                "name": "272.一人静",
                "length": "4:46",
                "file": "唯美纯音乐/272.一人静.mp3"
				},
				{
                "track": 271,
                "name": "271.夜、萤火虫和你",
                "length": "4:46",
                "file": "唯美纯音乐/271.夜、萤火虫和你.mp3"
				},
				{
                "track": 270,
                "name": "270.风平浪静",
                "length": "4:46",
                "file": "唯美纯音乐/270.风平浪静.mp3"
				},
				{
                "track": 269,
                "name": "269.幻昼",
                "length": "4:46",
                "file": "唯美纯音乐/269.幻昼.mp3"
				},
				{
                "track": 268,
                "name": "268.告白の夜",
                "length": "4:46",
                "file": "唯美纯音乐/268.告白の夜.mp3"
				},
				{
                "track": 267,
                "name": "267.空纳万境",
                "length": "4:46",
                "file": "唯美纯音乐/267.空纳万境.mp3"
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