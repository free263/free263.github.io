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
                "track": 831,
                "name": "774.BreezeFromTheSea（你还能够想起海风的气味么）",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/774.BreezeFromTheSea（你还能够想起海风的气味么）.mp3"
				},
				{
                "track": 830,
                "name": "773.Tranquillity",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/773.Tranquillity.mp3"
				},
				{
                "track": 829,
                "name": "772.InvisibleMountain-隐山__境",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/772.InvisibleMountain-隐山__境.mp3"
				},
				{
                "track": 828,
                "name": "771.StanduptoHomecoming-经不住似水流年",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/771.StanduptoHomecoming-经不住似水流年.mp3"
				},
				{
                "track": 827,
                "name": "770.ガスの術",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/770.ガスの術.mp3"
				},
				{
                "track": 826,
                "name": "769.LightSleep",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/769.LightSleep.mp3"
				},
				{
                "track": 825,
                "name": "768.DouceNuit",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/768.DouceNuit.mp3"
				},
				{
                "track": 824,
                "name": "767.lamémoiredumatin",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/767.lamémoiredumatin.mp3"
				},
				{
                "track": 823,
                "name": "766.MemoriesofChildhood",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/766.MemoriesofChildhood.mp3"
				},
				{
                "track": 822,
                "name": "765.TheFilm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/765.TheFilm.mp3"
				},
				{
                "track": 821,
                "name": "764.TheDisappearanceOfTheTime-时空消失或许就可以一直微笑下去了",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/764.TheDisappearanceOfTheTime-时空消失或许就可以一直微笑下去了.mp3"
				},
				{
                "track": 820,
                "name": "763.CrowdedIntersection-人来人往的十字路口你会选择哪个方向",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/763.CrowdedIntersection-人来人往的十字路口你会选择哪个方向.mp3"
				},
				{
                "track": 819,
                "name": "762.ThePathWindsAlongMountainRidges-峰回路转（如题感恩节快乐~））",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/762.ThePathWindsAlongMountainRidges-峰回路转（如题感恩节快乐~））.mp3"
				},
				{
                "track": 818,
                "name": "761.EndingistheBeginning-结束即是开始",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/761.EndingistheBeginning-结束即是开始.mp3"
				},
				{
                "track": 817,
                "name": "760.SaltSpray-盐雾弥散消失只剩下证明它曾经来过的味道",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/760.SaltSpray-盐雾弥散消失只剩下证明它曾经来过的味道.mp3"
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