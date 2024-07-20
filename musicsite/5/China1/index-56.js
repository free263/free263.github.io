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
                "track": 287,
                "name": "景岗山-我的眼里只有你",
                "length": "4:46",
                "file": "精选/景岗山-我的眼里只有你.mp3"
				},
				{
                "track": 286,
                "name": "金莎-星月神话",
                "length": "4:46",
                "file": "精选/金莎-星月神话.mp3"
				},
				{
                "track": 285,
                "name": "金莎-梦千年之恋",
                "length": "4:46",
                "file": "精选/金莎-梦千年之恋.mp3"
				},
				{
                "track": 284,
                "name": "金南玲-逆流成河",
                "length": "4:46",
                "file": "精选/金南玲-逆流成河.mp3"
				},
				{
                "track": 283,
                "name": "金海心-那么骄傲",
                "length": "4:46",
                "file": "精选/金海心-那么骄傲.mp3"
				},
				{
                "track": 282,
                "name": "金海心-悲伤的秋千",
                "length": "4:46",
                "file": "精选/金海心-悲伤的秋千.mp3"
				},
				{
                "track": 281,
                "name": "金海心-把耳朵叫醒",
                "length": "4:46",
                "file": "精选/金海心-把耳朵叫醒.mp3"
				},
				{
                "track": 280,
                "name": "金海心-爱似水仙",
                "length": "4:46",
                "file": "精选/金海心-爱似水仙.mp3"
				},
				{
                "track": 279,
                "name": "降央卓玛-西海情歌",
                "length": "4:46",
                "file": "精选/降央卓玛-西海情歌.mp3"
				},
				{
                "track": 278,
                "name": "蒋雪儿-谁在意我留下的泪",
                "length": "4:46",
                "file": "精选/蒋雪儿-谁在意我留下的泪.mp3"
				},
				{
                "track": 277,
                "name": "蒋雪儿-莫问归期",
                "length": "4:46",
                "file": "精选/蒋雪儿-莫问归期.mp3"
				},
				{
                "track": 276,
                "name": "蒋雪儿-梦的翅膀受了伤",
                "length": "4:46",
                "file": "精选/蒋雪儿-梦的翅膀受了伤.mp3"
				},
				{
                "track": 275,
                "name": "姜育恒-再回首",
                "length": "4:46",
                "file": "精选/姜育恒-再回首.mp3"
				},
				{
                "track": 274,
                "name": "姜育恒-驿动的心",
                "length": "4:46",
                "file": "精选/姜育恒-驿动的心.mp3"
				},
				{
                "track": 273,
                "name": "姜育恒-梅花三弄",
                "length": "4:46",
                "file": "精选/姜育恒-梅花三弄.mp3"
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