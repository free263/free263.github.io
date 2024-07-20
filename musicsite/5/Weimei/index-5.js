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
                "track": 296,
                "name": "296.那个你熟悉且难忘的声音 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/296.那个你熟悉且难忘的声音 - 唯美纯音乐.mp3"
				},
				{
                "track": 295,
                "name": "295.那些关于你的爱恨情长",
                "length": "4:46",
                "file": "唯美纯音乐/295.那些关于你的爱恨情长.mp3"
				},
				{
                "track": 294,
                "name": "294.伴读静心唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/294.伴读静心唯美纯音乐.mp3"
				},
				{
                "track": 293,
                "name": "293.秋来风起，叶落禅意-唯美轻音乐",
                "length": "4:46",
                "file": "唯美纯音乐/293.秋来风起，叶落禅意-唯美轻音乐.mp3"
				},
				{
                "track": 292,
                "name": "292.繁华的寂静-钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/292.繁华的寂静-钢琴曲.mp3"
				},
				{
                "track": 291,
                "name": "291.三个人的时光",
                "length": "4:46",
                "file": "唯美纯音乐/291.三个人的时光.mp3"
				},
				{
                "track": 290,
                "name": "290.琵琶行-钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/290.琵琶行-钢琴曲.mp3"
				},
				{
                "track": 289,
                "name": "289.回想-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/289.回想-唯美纯音乐.mp3"
				},
				{
                "track": 288,
                "name": "288.苍竹滴翠，寂然如水-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/288.苍竹滴翠，寂然如水-唯美纯音乐.mp3"
				},
				{
                "track": 287,
                "name": "287.山野幽居，宁静幽谧-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/287.山野幽居，宁静幽谧-唯美纯音乐.mp3"
				},
				{
                "track": 286,
                "name": "286.云海间",
                "length": "4:46",
                "file": "唯美纯音乐/286.云海间.mp3"
				},
				{
                "track": 285,
                "name": "285.探清水河",
                "length": "4:46",
                "file": "唯美纯音乐/285.探清水河.mp3"
				},
				{
                "track": 284,
                "name": "284.临安初雨，春水凝碧-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/284.临安初雨，春水凝碧-唯美纯音乐.mp3"
				},
				{
                "track": 283,
                "name": "283.桃花渡",
                "length": "4:46",
                "file": "唯美纯音乐/283.桃花渡.mp3"
				},
				{
                "track": 282,
                "name": "282.好听的古典音乐",
                "length": "4:46",
                "file": "唯美纯音乐/282.好听的古典音乐.mp3"
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