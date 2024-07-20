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
                "track": 17,
                "name": "MinnieRiperton-LovingYou",
                "length": "4:46",
                "file": "精选/MinnieRiperton-LovingYou.mp3"
				},
				{
                "track": 16,
                "name": "Luis Fonsi-Despacito",
                "length": "4:46",
                "file": "精选/Luis Fonsi-Despacito.mp3"
				},
				{
                "track": 15,
                "name": "LionelRichie-SayYouSayMe",
                "length": "4:46",
                "file": "精选/LionelRichie-SayYouSayMe.mp3"
				},
				{
                "track": 14,
                "name": "kiss-因为是女子",
                "length": "4:46",
                "file": "精选/kiss-因为是女子.mp3"
				},
				{
                "track": 13,
                "name": "JustinBieber-Baby",
                "length": "4:46",
                "file": "精选/JustinBieber-Baby.mp3"
				},
				{
                "track": 12,
                "name": "Justin Bieber、Luis Fonsi、Daddy Yankee-Despacito(Remix)",
                "length": "4:46",
                "file": "精选/Justin Bieber、Luis Fonsi、Daddy Yankee-Despacito(Remix).mp3"
				},
				{
                "track": 11,
                "name": "EdSheeran-ShapeOfYou",
                "length": "4:46",
                "file": "精选/EdSheeran-ShapeOfYou.mp3"
				},
				{
                "track": 10,
                "name": "DemiLovato-LetItGo",
                "length": "4:46",
                "file": "精选/DemiLovato-LetItGo.mp3"
				},
				{
                "track": 9,
                "name": "Beyond-真的爱你",
                "length": "4:46",
                "file": "精选/Beyond-真的爱你.mp3"
				},
				{
                "track": 8,
                "name": "Beyond-喜欢你",
                "length": "4:46",
                "file": "精选/Beyond-喜欢你.mp3"
				},
				{
                "track": 7,
                "name": "Beyond-海阔天空",
                "length": "4:46",
                "file": "精选/Beyond-海阔天空.mp3"
				},
				{
                "track": 6,
                "name": "Beyond-光辉岁月",
                "length": "4:46",
                "file": "精选/Beyond-光辉岁月.mp3"
				},
				{
                "track": 5,
                "name": "Beyond-不再犹豫",
                "length": "4:46",
                "file": "精选/Beyond-不再犹豫.mp3"
				},
				{
                "track": 4,
                "name": "BackstreetBoys-As_Long_As_You_Love_M",
                "length": "4:46",
                "file": "精选/BackstreetBoys-As_Long_As_You_Love_M.mp3"
				},
				{
                "track": 3,
                "name": "AvrilLavigne-IamWithYou",
                "length": "4:46",
                "file": "精选/AvrilLavigne-IamWithYou.mp3"
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