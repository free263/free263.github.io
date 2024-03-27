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
                "track": 9,
                "name": "BoA、SEAMO-HeyBoy,HeyGirl",
                "length": "4:46",
                "file": "韩国音乐/BoA、SEAMO-HeyBoy,HeyGirl.mp3"
				},
				{
                "track": 8,
                "name": "BoA、Gaeko-WhoAreYou",
                "length": "4:46",
                "file": "韩国音乐/BoA、Gaeko-WhoAreYou.mp3"
				},
				{
                "track": 7,
                "name": "BoA、EddyKim-DoubleJack",
                "length": "4:46",
                "file": "韩国音乐/BoA、EddyKim-DoubleJack.mp3"
				},
				{
                "track": 6,
                "name": "BoA、DABO-WindingRoad",
                "length": "4:46",
                "file": "韩国音乐/BoA、DABO-WindingRoad.mp3"
				},
				{
                "track": 5,
                "name": "BoA、CrystalKay-Girlfriend",
                "length": "4:46",
                "file": "韩国音乐/BoA、CrystalKay-Girlfriend.mp3"
				},
				{
                "track": 4,
                "name": "BoA、Crush-StarryNight(Feat.Crush)",
                "length": "4:46",
                "file": "韩国音乐/BoA、Crush-StarryNight(Feat.Crush).mp3"
				},
				{
                "track": 3,
                "name": "BoA、Beenzino-NoMatterWhat",
                "length": "4:46",
                "file": "韩国音乐/BoA、Beenzino-NoMatterWhat.mp3"
				},
				{
                "track": 2,
                "name": "BoA、BeatBurger-MusicIsWonderful",
                "length": "4:46",
                "file": "韩国音乐/BoA、BeatBurger-MusicIsWonderful.mp3"
				},
				{
                "track": 1,
                "name": "BoA、Akon、KardinalOffishall-Beautiful",
                "length": "4:46",
                "file": "韩国音乐/BoA、Akon、KardinalOffishall-Beautiful.mp3"
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