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
                "track": 18,
                "name": "AvrilLavigne-HowYouRemindMe",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-HowYouRemindMe.mp3"
				},
				{
                "track": 17,
                "name": "AvrilLavigne-HeresToNeverGrowingUp(Explicit)",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-HeresToNeverGrowingUp(Explicit).mp3"
				},
				{
                "track": 16,
                "name": "AvrilLavigne-GiveYouWhatYouLike",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-GiveYouWhatYouLike.mp3"
				},
				{
                "track": 15,
                "name": "AvrilLavigne-Fly",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-Fly.mp3"
				},
				{
                "track": 14,
                "name": "AvrilLavigne-EverybodyHurts",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-EverybodyHurts.mp3"
				},
				{
                "track": 13,
                "name": "AvrilLavigne-Complicated",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-Complicated.mp3"
				},
				{
                "track": 12,
                "name": "AvrilLavigne-Alice",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-Alice.mp3"
				},
				{
                "track": 11,
                "name": "AvrilLavigne-4Real",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-4Real.mp3"
				},
				{
                "track": 10,
                "name": "AvrilLavigne-17",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-17.mp3"
				},
				{
                "track": 9,
                "name": "Ava MaxSalt",
                "length": "4:46",
                "file": "欧美音乐/Ava MaxSalt.mp3"
				},
				{
                "track": 8,
                "name": "AtlantaRhythmSection-DoItOrDie",
                "length": "4:46",
                "file": "欧美音乐/AtlantaRhythmSection-DoItOrDie.mp3"
				},
				{
                "track": 7,
                "name": "AquaMy Oh My",
                "length": "4:46",
                "file": "欧美音乐/AquaMy Oh My.mp3"
				},
				{
                "track": 6,
                "name": "Ann WinsbornLa La Love On My Mind",
                "length": "4:46",
                "file": "欧美音乐/Ann WinsbornLa La Love On My Mind.mp3"
				},
				{
                "track": 5,
                "name": "AmyDiamond-Heartbeats",
                "length": "4:46",
                "file": "欧美音乐/AmyDiamond-Heartbeats.mp3"
				},
				{
                "track": 4,
                "name": "Alan WalkerFaded",
                "length": "4:46",
                "file": "欧美音乐/Alan WalkerFaded.mp3"
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