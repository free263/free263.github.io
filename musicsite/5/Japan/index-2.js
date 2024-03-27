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
                "track": 14,
                "name": "谷村新司-いい日旅立ち",
                "length": "4:46",
                "file": "日本音乐/谷村新司-いい日旅立ち.mp3"
				},
				{
                "track": 13,
                "name": "大冢爱-桃ノ花ビラ",
                "length": "4:46",
                "file": "日本音乐/大冢爱-桃ノ花ビラ.mp3"
				},
				{
                "track": 12,
                "name": "大冢爱-プラネタリウム",
                "length": "4:46",
                "file": "日本音乐/大冢爱-プラネタリウム.mp3"
				},
				{
                "track": 11,
                "name": "川嶋あい-大丈夫だよ",
                "length": "4:46",
                "file": "日本音乐/川嶋あい-大丈夫だよ.mp3"
				},
				{
                "track": 10,
                "name": "初音未来-甩葱歌",
                "length": "4:46",
                "file": "日本音乐/初音未来-甩葱歌.mp3"
				},
				{
                "track": 9,
                "name": "滨崎步-To_Be",
                "length": "4:46",
                "file": "日本音乐/滨崎步-To_Be.mp3"
				},
				{
                "track": 8,
                "name": "滨崎步-M",
                "length": "4:46",
                "file": "日本音乐/滨崎步-M.mp3"
				},
				{
                "track": 7,
                "name": "滨崎步-fly_high",
                "length": "4:46",
                "file": "日本音乐/滨崎步-fly_high.mp3"
				},
				{
                "track": 6,
                "name": "滨崎步-depend_on_you",
                "length": "4:46",
                "file": "日本音乐/滨崎步-depend_on_you.mp3"
				},
				{
                "track": 5,
                "name": "滨崎步-Blue_Bird",
                "length": "4:46",
                "file": "日本音乐/滨崎步-Blue_Bird.mp3"
				},
				{
                "track": 4,
                "name": "滨崎步-A_Song_For_Xx",
                "length": "4:46",
                "file": "日本音乐/滨崎步-A_Song_For_Xx.mp3"
				},
				{
                "track": 3,
                "name": "rania-DrFeelGood",
                "length": "4:46",
                "file": "日本音乐/rania-DrFeelGood.mp3"
				},
				{
                "track": 2,
                "name": "juju-この夜を止めてよ",
                "length": "4:46",
                "file": "日本音乐/juju-この夜を止めてよ.mp3"
				},
				{
                "track": 1,
                "name": "azu-angel",
                "length": "4:46",
                "file": "日本音乐/azu-angel.mp3"
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