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
                "track": 797,
                "name": "张惠妹-一想到你呀",
                "length": "4:46",
                "file": "精选/张惠妹-一想到你呀.mp3"
				},
				{
                "track": 796,
                "name": "张惠妹-听海",
                "length": "4:46",
                "file": "精选/张惠妹-听海.mp3"
				},
				{
                "track": 795,
                "name": "张惠妹-哭不出来",
                "length": "4:46",
                "file": "精选/张惠妹-哭不出来.mp3"
				},
				{
                "track": 794,
                "name": "张惠妹-可以抱你吗",
                "length": "4:46",
                "file": "精选/张惠妹-可以抱你吗.mp3"
				},
				{
                "track": 793,
                "name": "张惠妹-姐妹",
                "length": "4:46",
                "file": "精选/张惠妹-姐妹.mp3"
				},
				{
                "track": 792,
                "name": "张惠妹-剪爱",
                "length": "4:46",
                "file": "精选/张惠妹-剪爱.mp3"
				},
				{
                "track": 791,
                "name": "张惠妹-BadBoy",
                "length": "4:46",
                "file": "精选/张惠妹-BadBoy.mp3"
				},
				{
                "track": 790,
                "name": "张行-站台",
                "length": "4:46",
                "file": "精选/张行-站台.mp3"
				},
				{
                "track": 789,
                "name": "张行-迟到",
                "length": "4:46",
                "file": "精选/张行-迟到.mp3"
				},
				{
                "track": 788,
                "name": "张含韵-一百万个可能",
                "length": "4:46",
                "file": "精选/张含韵-一百万个可能.mp3"
				},
				{
                "track": 787,
                "name": "张含韵-想唱就唱",
                "length": "4:46",
                "file": "精选/张含韵-想唱就唱.mp3"
				},
				{
                "track": 786,
                "name": "张含韵-酸酸甜甜就是我",
                "length": "4:46",
                "file": "精选/张含韵-酸酸甜甜就是我.mp3"
				},
				{
                "track": 785,
                "name": "张含韵-闪亮亮",
                "length": "4:46",
                "file": "精选/张含韵-闪亮亮.mp3"
				},
				{
                "track": 784,
                "name": "张国荣-倩女幽魂",
                "length": "4:46",
                "file": "精选/张国荣-倩女幽魂.mp3"
				},
				{
                "track": 783,
                "name": "张镐哲-好男人",
                "length": "4:46",
                "file": "精选/张镐哲-好男人.mp3"
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