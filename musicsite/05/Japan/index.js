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
                "track": 29,
                "name": "宗次郎-故乡的原风景",
                "length": "4:46",
                "file": "日本音乐/宗次郎-故乡的原风景.mp3"
				},
				{
                "track": 28,
                "name": "中島みゆき-容易受伤的女人原曲",
                "length": "4:46",
                "file": "日本音乐/中島みゆき-容易受伤的女人原曲.mp3"
				},
				{
                "track": 27,
                "name": "中岛美嘉-雪華",
                "length": "4:46",
                "file": "日本音乐/中岛美嘉-雪華.mp3"
				},
				{
                "track": 26,
                "name": "宇多田光-First_Love",
                "length": "4:46",
                "file": "日本音乐/宇多田光-First_Love.mp3"
				},
				{
                "track": 25,
                "name": "少女时代-the boys",
                "length": "4:46",
                "file": "日本音乐/少女时代-the boys.mp3"
				},
				{
                "track": 24,
                "name": "少女时代-mr taxi",
                "length": "4:46",
                "file": "日本音乐/少女时代-mr taxi.mp3"
				},
				{
                "track": 23,
                "name": "日本歌曲-漠然の莹",
                "length": "4:46",
                "file": "日本音乐/日本歌曲-漠然の莹.mp3"
				},
				{
                "track": 22,
                "name": "日本歌曲 星の在り処",
                "length": "4:46",
                "file": "日本音乐/日本歌曲 星の在り処.mp3"
				},
				{
                "track": 21,
                "name": "谷村新司-星",
                "length": "4:46",
                "file": "日本音乐/谷村新司-星.mp3"
				},
				{
                "track": 20,
                "name": "谷村新司-忘れないで",
                "length": "4:46",
                "file": "日本音乐/谷村新司-忘れないで.mp3"
				},
				{
                "track": 19,
                "name": "谷村新司-睡莲",
                "length": "4:46",
                "file": "日本音乐/谷村新司-睡莲.mp3"
				},
				{
                "track": 18,
                "name": "谷村新司-君の歌",
                "length": "4:46",
                "file": "日本音乐/谷村新司-君の歌.mp3"
				},
				{
                "track": 17,
                "name": "谷村新司-风姿花传",
                "length": "4:46",
                "file": "日本音乐/谷村新司-风姿花传.mp3"
				},
				{
                "track": 16,
                "name": "谷村新司-昂一すばゐ",
                "length": "4:46",
                "file": "日本音乐/谷村新司-昂一すばゐ.mp3"
				},
				{
                "track": 15,
                "name": "谷村新司-カノン",
                "length": "4:46",
                "file": "日本音乐/谷村新司-カノン.mp3"
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