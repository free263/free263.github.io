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
                "track": 311,
                "name": "311.风云依旧，人已老 (钢琴曲) - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/311.风云依旧，人已老 (钢琴曲) - 唯美纯音乐.mp3"
				},
				{
                "track": 310,
                "name": "310.织女·心丝 (笛箫版) - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/310.织女·心丝 (笛箫版) - 唯美纯音乐.mp3"
				},
				{
                "track": 309,
                "name": "309.天籁排箫 最后的莫西干人",
                "length": "4:46",
                "file": "唯美纯音乐/309.天籁排箫 最后的莫西干人.mp3"
				},
				{
                "track": 308,
                "name": "308.墨兰香，韵悠扬-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/308.墨兰香，韵悠扬-唯美纯音乐.mp3"
				},
				{
                "track": 307,
                "name": "307.姻缘（古典）-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/307.姻缘（古典）-唯美纯音乐.mp3"
				},
				{
                "track": 306,
                "name": "306.花开不记年-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/306.花开不记年-唯美纯音乐.mp3"
				},
				{
                "track": 305,
                "name": "305.天籁之音,来自印第安 -唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/305.天籁之音,来自印第安 -唯美纯音乐.mp3"
				},
				{
                "track": 304,
                "name": "304.潮汐的旋律，心灵的慰藉 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/304.潮汐的旋律，心灵的慰藉 - 唯美纯音乐.mp3"
				},
				{
                "track": 303,
                "name": "303.碧玉的江孜（净化心灵的西藏乐曲）- 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/303.碧玉的江孜（净化心灵的西藏乐曲）- 纯音乐.mp3"
				},
				{
                "track": 302,
                "name": "302.睡莲（二胡）-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/302.睡莲（二胡）-唯美纯音乐.mp3"
				},
				{
                "track": 301,
                "name": "301.水-禅意名曲 (茶禅一味) - 唯美轻音乐",
                "length": "4:46",
                "file": "唯美纯音乐/301.水-禅意名曲 (茶禅一味) - 唯美轻音乐.mp3"
				},
				{
                "track": 300,
                "name": "300.女儿情 （古筝） - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/300.女儿情 （古筝） - 唯美纯音乐.mp3"
				},
				{
                "track": 299,
                "name": "299.水姻缘（古筝新韵）-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/299.水姻缘（古筝新韵）-唯美纯音乐.mp3"
				},
				{
                "track": 298,
                "name": "298.千年一叹，婉韵悠远（古筝） - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/298.千年一叹，婉韵悠远（古筝） - 唯美纯音乐.mp3"
				},
				{
                "track": 297,
                "name": "297.雨韵悠然，滋润心田- 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/297.雨韵悠然，滋润心田- 唯美纯音乐.mp3"
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