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
                "track": 932,
                "name": "周深、李维-请跟我来",
                "length": "4:46",
                "file": "精选/周深、李维-请跟我来.mp3"
				},
				{
                "track": 931,
                "name": "周深、李维-偶然",
                "length": "4:46",
                "file": "精选/周深、李维-偶然.mp3"
				},
				{
                "track": 930,
                "name": "周深、李琦-你要的爱(Live)",
                "length": "4:46",
                "file": "精选/周深、李琦-你要的爱(Live).mp3"
				},
				{
                "track": 929,
                "name": "周深、郎朗-幽灵公主(Live)",
                "length": "4:46",
                "file": "精选/周深、郎朗-幽灵公主(Live).mp3"
				},
				{
                "track": 928,
                "name": "周深、胡夏-天涯尽处",
                "length": "4:46",
                "file": "精选/周深、胡夏-天涯尽处.mp3"
				},
				{
                "track": 927,
                "name": "周杰伦-青花瓷",
                "length": "4:46",
                "file": "精选/周杰伦-青花瓷.mp3"
				},
				{
                "track": 926,
                "name": "周杰伦-七里香",
                "length": "4:46",
                "file": "精选/周杰伦-七里香.mp3"
				},
				{
                "track": 925,
                "name": "周杰伦-龙卷风",
                "length": "4:46",
                "file": "精选/周杰伦-龙卷风.mp3"
				},
				{
                "track": 924,
                "name": "周杰伦-菊花台",
                "length": "4:46",
                "file": "精选/周杰伦-菊花台.mp3"
				},
				{
                "track": 923,
                "name": "周杰伦-红尘客栈",
                "length": "4:46",
                "file": "精选/周杰伦-红尘客栈.mp3"
				},
				{
                "track": 922,
                "name": "周杰伦-告白气球",
                "length": "4:46",
                "file": "精选/周杰伦-告白气球.mp3"
				},
				{
                "track": 921,
                "name": "周杰伦-东风破",
                "length": "4:46",
                "file": "精选/周杰伦-东风破.mp3"
				},
				{
                "track": 920,
                "name": "周杰伦-稻香",
                "length": "4:46",
                "file": "精选/周杰伦-稻香.mp3"
				},
				{
                "track": 919,
                "name": "周杰伦、温岚-屋顶",
                "length": "4:46",
                "file": "精选/周杰伦、温岚-屋顶.mp3"
				},
				{
                "track": 918,
                "name": "周杰伦、费玉清-千里之外",
                "length": "4:46",
                "file": "精选/周杰伦、费玉清-千里之外.mp3"
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