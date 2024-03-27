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
                "track": 617,
                "name": "王心凌-心心相印",
                "length": "4:46",
                "file": "精选/王心凌-心心相印.mp3"
				},
				{
                "track": 616,
                "name": "王心凌-不哭",
                "length": "4:46",
                "file": "精选/王心凌-不哭.mp3"
				},
				{
                "track": 615,
                "name": "王心凌-爱你",
                "length": "4:46",
                "file": "精选/王心凌-爱你.mp3"
				},
				{
                "track": 614,
                "name": "王心凌-honey",
                "length": "4:46",
                "file": "精选/王心凌-honey.mp3"
				},
				{
                "track": 613,
                "name": "王蓉-我不是黄蓉",
                "length": "4:46",
                "file": "精选/王蓉-我不是黄蓉.mp3"
				},
				{
                "track": 612,
                "name": "王蓉-爸爸妈妈",
                "length": "4:46",
                "file": "精选/王蓉-爸爸妈妈.mp3"
				},
				{
                "track": 611,
                "name": "王蓉-哎呀",
                "length": "4:46",
                "file": "精选/王蓉-哎呀.mp3"
				},
				{
                "track": 610,
                "name": "王强-你把爱情给了谁",
                "length": "4:46",
                "file": "精选/王强-你把爱情给了谁.mp3"
				},
				{
                "track": 609,
                "name": "王麟-伤不起",
                "length": "4:46",
                "file": "精选/王麟-伤不起.mp3"
				},
				{
                "track": 608,
                "name": "王麟-QQ爱",
                "length": "4:46",
                "file": "精选/王麟-QQ爱.mp3"
				},
				{
                "track": 607,
                "name": "王麟、完玛三智-唐古拉",
                "length": "4:46",
                "file": "精选/王麟、完玛三智-唐古拉.mp3"
				},
				{
                "track": 606,
                "name": "王力宏-唯一",
                "length": "4:46",
                "file": "精选/王力宏-唯一.mp3"
				},
				{
                "track": 605,
                "name": "王力宏-天地龙鳞",
                "length": "4:46",
                "file": "精选/王力宏-天地龙鳞.mp3"
				},
				{
                "track": 604,
                "name": "王力宏-爱的就是你",
                "length": "4:46",
                "file": "精选/王力宏-爱的就是你.mp3"
				},
				{
                "track": 603,
                "name": "王力宏 selina-你是我心内的一首歌",
                "length": "4:46",
                "file": "精选/王力宏 selina-你是我心内的一首歌.mp3"
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