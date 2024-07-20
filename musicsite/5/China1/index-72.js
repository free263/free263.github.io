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
                "track": 47,
                "name": "阿桑-寂寞在唱歌",
                "length": "4:46",
                "file": "精选/阿桑-寂寞在唱歌.mp3"
				},
				{
                "track": 46,
                "name": "阿桑-疯了",
                "length": "4:46",
                "file": "精选/阿桑-疯了.mp3"
				},
				{
                "track": 45,
                "name": "阿悄-陪我去流浪",
                "length": "4:46",
                "file": "精选/阿悄-陪我去流浪.mp3"
				},
				{
                "track": 44,
                "name": "阿木-有一种爱叫做放手",
                "length": "4:46",
                "file": "精选/阿木-有一种爱叫做放手.mp3"
				},
				{
                "track": 43,
                "name": "阿梨粤-晚风心里吹",
                "length": "4:46",
                "file": "精选/阿梨粤-晚风心里吹.mp3"
				},
				{
                "track": 42,
                "name": "阿梨粤-秒针",
                "length": "4:46",
                "file": "精选/阿梨粤-秒针.mp3"
				},
				{
                "track": 41,
                "name": "阿杜-天黑",
                "length": "4:46",
                "file": "精选/阿杜-天黑.mp3"
				},
				{
                "track": 40,
                "name": "阿杜-他一定很爱你",
                "length": "4:46",
                "file": "精选/阿杜-他一定很爱你.mp3"
				},
				{
                "track": 39,
                "name": "阿杜-撕夜",
                "length": "4:46",
                "file": "精选/阿杜-撕夜.mp3"
				},
				{
                "track": 38,
                "name": "阿杜-离别",
                "length": "4:46",
                "file": "精选/阿杜-离别.mp3"
				},
				{
                "track": 37,
                "name": "阿杜-坚持到底",
                "length": "4:46",
                "file": "精选/阿杜-坚持到底.mp3"
				},
				{
                "track": 36,
                "name": "阿YueYue-云与海",
                "length": "4:46",
                "file": "精选/阿YueYue-云与海.mp3"
				},
				{
                "track": 35,
                "name": "WizKhalifa-See You Again",
                "length": "4:46",
                "file": "精选/WizKhalifa-See You Again.mp3"
				},
				{
                "track": 34,
                "name": "WhitneyHouston-IWillAlwaysLoveYou",
                "length": "4:46",
                "file": "精选/WhitneyHouston-IWillAlwaysLoveYou.mp3"
				},
				{
                "track": 33,
                "name": "WAX-余情",
                "length": "4:46",
                "file": "精选/WAX-余情.mp3"
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