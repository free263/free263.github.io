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
                "track": 176,
                "name": "176.秘密 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/176.秘密 - 班得瑞.mp3"
				},
				{
                "track": 175,
                "name": "175.迷雾水珠 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/175.迷雾水珠 - 班得瑞.mp3"
				},
				{
                "track": 174,
                "name": "174.满天星 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/174.满天星 - 班得瑞.mp3"
				},
				{
                "track": 173,
                "name": "173.精灵之吻 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/173.精灵之吻 - 班得瑞.mp3"
				},
				{
                "track": 172,
                "name": "172.秘密的庭院 (钢琴轻音乐) - 理查德",
                "length": "4:46",
                "file": "唯美纯音乐/172.秘密的庭院 (钢琴轻音乐) - 理查德.mp3"
				},
				{
                "track": 171,
                "name": "171.华丽的节奏钢琴 (Midnight Affair) - Tom Barabas",
                "length": "4:46",
                "file": "唯美纯音乐/171.华丽的节奏钢琴 (Midnight Affair) - Tom Barabas.mp3"
				},
				{
                "track": 170,
                "name": "170.春野 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/170.春野 - 班得瑞.mp3"
				},
				{
                "track": 169,
                "name": "169.雨空 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/169.雨空 - 纯音乐.mp3"
				},
				{
                "track": 168,
                "name": "168.风车 (Wind-mill) - Andemund Orchestra",
                "length": "4:46",
                "file": "唯美纯音乐/168.风车 (Wind-mill) - Andemund Orchestra.mp3"
				},
				{
                "track": 167,
                "name": "167.星际安魂曲 - 山下直人",
                "length": "4:46",
                "file": "唯美纯音乐/167.星际安魂曲 - 山下直人.mp3"
				},
				{
                "track": 166,
                "name": "166.变幻之风 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/166.变幻之风 - 班得瑞.mp3"
				},
				{
                "track": 165,
                "name": "165.奥里诺科之梦 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/165.奥里诺科之梦 - 班得瑞.mp3"
				},
				{
                "track": 164,
                "name": "164.约定 - 钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/164.约定 - 钢琴曲.mp3"
				},
				{
                "track": 163,
                "name": "163.流星雨 - 陈冠宇",
                "length": "4:46",
                "file": "唯美纯音乐/163.流星雨 - 陈冠宇.mp3"
				},
				{
                "track": 162,
                "name": "162.天际 (大自然音乐) - Mickey Lee",
                "length": "4:46",
                "file": "唯美纯音乐/162.天际 (大自然音乐) - Mickey Lee.mp3"
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