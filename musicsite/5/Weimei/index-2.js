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
                "track": 341,
                "name": "341.不变的心，永恒的爱-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/341.不变的心，永恒的爱-唯美纯音乐.mp3"
				},
				{
                "track": 340,
                "name": "340.岁月华章，再现辉煌-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/340.岁月华章，再现辉煌-唯美纯音乐.mp3"
				},
				{
                "track": 339,
                "name": "339.恢弘史诗，大气磅礴-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/339.恢弘史诗，大气磅礴-唯美纯音乐.mp3"
				},
				{
                "track": 338,
                "name": "338.别样晚秋，是喜是忧-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/338.别样晚秋，是喜是忧-唯美纯音乐.mp3"
				},
				{
                "track": 337,
                "name": "337.流水潺潺，筝音婉转-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/337.流水潺潺，筝音婉转-唯美纯音乐.mp3"
				},
				{
                "track": 336,
                "name": "336.旭日清晨，唯美醉人 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/336.旭日清晨，唯美醉人 - 唯美纯音乐.mp3"
				},
				{
                "track": 335,
                "name": "335.湖光水面，宁静幽远 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/335.湖光水面，宁静幽远 - 唯美纯音乐.mp3"
				},
				{
                "track": 334,
                "name": "334.万水千山总是情 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/334.万水千山总是情 - 唯美纯音乐.mp3"
				},
				{
                "track": 333,
                "name": "333.生活安详，舟渔晚唱 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/333.生活安详，舟渔晚唱 - 唯美纯音乐.mp3"
				},
				{
                "track": 332,
                "name": "332.月下起舞（傣族民乐）-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/332.月下起舞（傣族民乐）-唯美纯音乐.mp3"
				},
				{
                "track": 331,
                "name": "331.佛号静心，涤荡红尘-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/331.佛号静心，涤荡红尘-唯美纯音乐.mp3"
				},
				{
                "track": 330,
                "name": "330.《静水禅音》静心极乐 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/330.《静水禅音》静心极乐 - 唯美纯音乐.mp3"
				},
				{
                "track": 329,
                "name": "329.尽余欢，今宵别梦寒-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/329.尽余欢，今宵别梦寒-唯美纯音乐.mp3"
				},
				{
                "track": 328,
                "name": "328.深山禅林，幽远意境 - 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/328.深山禅林，幽远意境 - 唯美纯音乐.mp3"
				},
				{
                "track": 327,
                "name": "327.放空自己，心灵之旅- 唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/327.放空自己，心灵之旅- 唯美纯音乐.mp3"
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