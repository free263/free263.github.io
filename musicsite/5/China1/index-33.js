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
                "track": 632,
                "name": "吴奇隆-烟火",
                "length": "4:46",
                "file": "精选/吴奇隆-烟火.mp3"
				},
				{
                "track": 631,
                "name": "吴克群-为你写诗",
                "length": "4:46",
                "file": "精选/吴克群-为你写诗.mp3"
				},
				{
                "track": 630,
                "name": "巫启贤-太傻",
                "length": "4:46",
                "file": "精选/巫启贤-太傻.mp3"
				},
				{
                "track": 629,
                "name": "巫启贤-红尘来去一场梦",
                "length": "4:46",
                "file": "精选/巫启贤-红尘来去一场梦.mp3"
				},
				{
                "track": 628,
                "name": "乌兰托娅-套马杆",
                "length": "4:46",
                "file": "精选/乌兰托娅-套马杆.mp3"
				},
				{
                "track": 627,
                "name": "乌兰托娅-火红的萨日朗",
                "length": "4:46",
                "file": "精选/乌兰托娅-火红的萨日朗.mp3"
				},
				{
                "track": 626,
                "name": "乌达木-梦中的额吉",
                "length": "4:46",
                "file": "精选/乌达木-梦中的额吉.mp3"
				},
				{
                "track": 625,
                "name": "闻人听書-虞兮叹",
                "length": "4:46",
                "file": "精选/闻人听書-虞兮叹.mp3"
				},
				{
                "track": 624,
                "name": "温奕心-一路生花",
                "length": "4:46",
                "file": "精选/温奕心-一路生花.mp3"
				},
				{
                "track": 623,
                "name": "魏新雨-余情未了",
                "length": "4:46",
                "file": "精选/魏新雨-余情未了.mp3"
				},
				{
                "track": 622,
                "name": "魏新雨-恋人心",
                "length": "4:46",
                "file": "精选/魏新雨-恋人心.mp3"
				},
				{
                "track": 621,
                "name": "旺仔小乔-年轮",
                "length": "4:46",
                "file": "精选/旺仔小乔-年轮.mp3"
				},
				{
                "track": 620,
                "name": "王铮亮-时间都去哪儿了",
                "length": "4:46",
                "file": "精选/王铮亮-时间都去哪儿了.mp3"
				},
				{
                "track": 619,
                "name": "王娅-爱情错觉",
                "length": "4:46",
                "file": "精选/王娅-爱情错觉.mp3"
				},
				{
                "track": 618,
                "name": "王馨平-别问我是谁",
                "length": "4:46",
                "file": "精选/王馨平-别问我是谁.mp3"
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