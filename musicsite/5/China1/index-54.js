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
                "track": 317,
                "name": "李玟-Baby对不起",
                "length": "4:46",
                "file": "精选/李玟-Baby对不起.mp3"
				},
				{
                "track": 316,
                "name": "李玟、周杰伦-刀马旦",
                "length": "4:46",
                "file": "精选/李玟、周杰伦-刀马旦.mp3"
				},
				{
                "track": 315,
                "name": "李丽芬-得意的笑",
                "length": "4:46",
                "file": "精选/李丽芬-得意的笑.mp3"
				},
				{
                "track": 314,
                "name": "李丽芬-爱江山更爱美人",
                "length": "4:46",
                "file": "精选/李丽芬-爱江山更爱美人.mp3"
				},
				{
                "track": 313,
                "name": "李克勤-月半小夜曲",
                "length": "4:46",
                "file": "精选/李克勤-月半小夜曲.mp3"
				},
				{
                "track": 312,
                "name": "李克勤-红日",
                "length": "4:46",
                "file": "精选/李克勤-红日.mp3"
				},
				{
                "track": 311,
                "name": "李健-风吹麦浪",
                "length": "4:46",
                "file": "精选/李健-风吹麦浪.mp3"
				},
				{
                "track": 310,
                "name": "李健-当你老了(Live)",
                "length": "4:46",
                "file": "精选/李健-当你老了(Live).mp3"
				},
				{
                "track": 309,
                "name": "李健-春风十里不如你",
                "length": "4:46",
                "file": "精选/李健-春风十里不如你.mp3"
				},
				{
                "track": 308,
                "name": "李健-贝加尔湖畔",
                "length": "4:46",
                "file": "精选/李健-贝加尔湖畔.mp3"
				},
				{
                "track": 307,
                "name": "李佳薇-煎熬",
                "length": "4:46",
                "file": "精选/李佳薇-煎熬.mp3"
				},
				{
                "track": 306,
                "name": "李佳璐-无法原谅",
                "length": "4:46",
                "file": "精选/李佳璐-无法原谅.mp3"
				},
				{
                "track": 305,
                "name": "李佳璐-如果下辈子还能遇见你",
                "length": "4:46",
                "file": "精选/李佳璐-如果下辈子还能遇见你.mp3"
				},
				{
                "track": 304,
                "name": "李慧珍-习惯",
                "length": "4:46",
                "file": "精选/李慧珍-习惯.mp3"
				},
				{
                "track": 303,
                "name": "李春波-小芳",
                "length": "4:46",
                "file": "精选/李春波-小芳.mp3"
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