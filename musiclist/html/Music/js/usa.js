$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"AtlantaRhythmSection-DoItOrDie",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AtlantaRhythmSection-DoItOrDie.mp3",},
{title:"AvrilLavigne-17",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-17.mp3",},
{title:"AvrilLavigne-4Real",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-4Real.mp3",},
{title:"AvrilLavigne-Alice",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-Alice.mp3",},
{title:"AvrilLavigne-Complicated",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-Complicated.mp3",},
{title:"AvrilLavigne-EverybodyHurts",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-EverybodyHurts.mp3",},
{title:"AvrilLavigne-Fly",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-Fly.mp3",},
{title:"AvrilLavigne-GiveYouWhatYouLike",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-GiveYouWhatYouLike.mp3",},
{title:"AvrilLavigne-HeresToNeverGrowingUp(Explicit)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-HeresToNeverGrowingUp(Explicit).mp3",},
{title:"AvrilLavigne-HowYouRemindMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-HowYouRemindMe.mp3",},
{title:"AvrilLavigne-IamWithYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-IamWithYou.mp3",},
{title:"AvrilLavigne-Innocence",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-Innocence.mp3",},
{title:"AvrilLavigne-NobodysHome",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-NobodysHome.mp3",},
{title:"AvrilLavigne-RocknRoll",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-RocknRoll.mp3",},
{title:"AvrilLavigne-WishYouWereHere",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/AvrilLavigne-WishYouWereHere.mp3",},
{title:"BackstreetBoys-As_Long_As_You_Love_M",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/BackstreetBoys-As_Long_As_You_Love_M.mp3",},
{title:"bertiehiggins-casablancA",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/bertiehiggins-casablanca.mp3",},
{title:"BertieHiggins-KeyLargo",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/BertieHiggins-KeyLargo.mp3",},
{title:"BrunoMars-MarryYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/BrunoMars-MarryYou.mp3",},
{title:"ChrisMedina-WhatAreWords",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/ChrisMedina-WhatAreWords.mp3",},
{title:"DemiLovato-LetItGo",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/DemiLovato-LetItGo.mp3",},
{title:"EdSheeran-ShapeOfYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/EdSheeran-ShapeOfYou.mp3",},
{title:"emilia-big_big_world",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/emilia-big_big_world.mp3",},
{title:"Eminem、Rihanna-LoveTheWayYouLie",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Eminem、Rihanna-LoveTheWayYouLie.mp3",},
{title:"GrooveCoverage-farAwayFromHome ",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/GrooveCoverage-farAwayFromHome .mp3",},
{title:"GrooveCoverage-GodIsaGirl ",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/GrooveCoverage-GodIsaGirl .mp3",},
{title:"JustinBieber-Baby",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/JustinBieber-Baby.mp3",},
{title:"Klymaxx-IMissYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Klymaxx-IMissYou.mp3",},
{title:"Ladygaga-Poker Face",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Ladygaga-Poker Face.mp3",},
{title:"Lenka-TheShow",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Lenka-TheShow.mp3",},
{title:"Lenka-TroubleIsaFriend",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Lenka-TroubleIsaFriend.mp3",},
{title:"LeoSayer-MoreThanICanSay",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/LeoSayer-MoreThanICanSay.mp3",},
{title:"LionelRichie-SayYouSayMe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/LionelRichie-SayYouSayMe.mp3",},
{title:"MariaArredondo-Burning",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/MariaArredondo-Burning.mp3",},
{title:"MariahCarey-when you believe",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/MariahCarey-when you believe.mp3",},
{title:"MariahCarey-withoutyou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/MariahCarey-withoutyou.mp3",},
{title:"MinnieRiperton-loving you",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/MinnieRiperton-loving you.mp3",},
{title:"MinnieRiperton-LovingYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/MinnieRiperton-LovingYou.mp3",},
{title:"nana-lonely",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/nana-lonely.mp3",},
{title:"OnlyTime",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/OnlyTime.mp3",},
{title:"SarahConnor-EveryMomentOfMyLife",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahConnor-EveryMomentOfMyLife.mp3",},
{title:"SarahCoonor-Are You Ready To Ride",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahCoonor-Are You Ready To Ride.mp3",},
{title:"SarahCoonor-color",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahCoonor-color.mp3",},
{title:"SarahCoonor-From_Sarah_With_Love",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahCoonor-From_Sarah_With_Love.mp3",},
{title:"SarahCoonor-just one last dance",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahCoonor-just one last dance.mp3",},
{title:"SarahCoonor",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/SarahCoonor.mp3",},
{title:"ShakinStevens-BecauseILoveYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/ShakinStevens-BecauseILoveYou.mp3",},
{title:"Sting-ShapeOfMyHeart ",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/Sting-ShapeOfMyHeart .mp3",},
{title:"WhitneyHouston-CallYouTonight",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/WhitneyHouston-CallYouTonight.mp3",},
{title:"WhitneyHouston-IHaveNothing",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/WhitneyHouston-IHaveNothing.mp3",},
{title:"WhitneyHouston-IWillAlwaysLoveYou",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/WhitneyHouston-IWillAlwaysLoveYou.mp3",},
{title:"WizKhalifa-See You Again",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/WizKhalifa-See You Again.mp3",},
{title:"卡朋特-YesterdayOnceMore",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/卡朋特-YesterdayOnceMore.mp3",},
{title:"布兰妮-BABYONEMORETIME",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/布兰妮-BABYONEMORETIME.mp3",},
{title:"布兰妮-everytime",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/布兰妮-everytime.mp3",},
{title:"欧美群星-WeAreTheWorld",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/欧美群星-WeAreTheWorld.mp3",},
{title:"维塔斯-海豚音",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/维塔斯-海豚音.mp3",},
{title:"英文经典-我的名字叫伊莲",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/英文经典-我的名字叫伊莲.mp3",},
{title:"铁达尼号主题曲-MyHeartWillGoOn",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/铁达尼号主题曲-MyHeartWillGoOn.mp3",},
{title:"马克尔杰克逊-HealTheWorld",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://pan.11.wf/free163person/音乐视听/欧美音乐/马克尔杰克逊-HealTheWorld.mp3",}

];

	// Load playlist
	for (var i = 0; i < playlist.length; i++) {
		var item = playlist[i];
		$('#playlist').append('<li>' + item.artist + ' - ' + item.title + '</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		audio, timeout, isPlaying, playCounts;

	var play = function () {
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	};

	var pause = function () {
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	};

	// Update progress
	var setProgress = function (value) {
		var currentSec = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value / 60) + ':' + currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	};

	var updateProgress = function () {
		setProgress(audio.currentTime);
	};

	// Progress slider
	$('.progress .slider').slider({
		step: 0.1,
		slide: function (event, ui) {
			$(this).addClass('enable');
			setProgress(audio.duration * ui.value / 100);
			clearInterval(timeout);
		},
		stop: function (event, ui) {
			audio.currentTime = audio.duration * ui.value / 100;
			$(this).removeClass('enable');
			timeout = setInterval(updateProgress, 500);
		}
	});

	// Volume slider
	var setVolume = function (value) {
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	};

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({
		max: 1,
		min: 0,
		step: 0.01,
		value: volume,
		slide: function (event, ui) {
			setVolume(ui.value);
			$(this).addClass('enable');
			$('.mute').removeClass('enable');
		},
		stop: function () {
			$(this).removeClass('enable');
		}
	}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function () {
		if ($(this).hasClass('enable')) {
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function (i) {
		if (i < 0) {
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length) {
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	};

	// Shuffle
	var shufflePlay = function () {
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function () {
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1) {
			play();
		} else {
			if (shuffle === 'true') {
				shufflePlay();
			} else {
				if (repeat == 2) {
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function () {
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) + '%');
	}

	// Fire when track loaded completely
	var afterLoad = function () {
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function (i) {
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="' + item.mp3 + '"><source src="' + item.ogg + '">').appendTo('#player');

		$('.cover').html('<img src="' + item.cover + '" alt="' + item.album + '">');
		$('.tag').html('<strong>' + item.title + '</strong><span class="artist">' + item.artist + '</span><span class="album">' + item.album + '</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function () {
		if ($(this).hasClass('playing')) {
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function (i) {
		var _i = i;
		$(this).on('click', function () {
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1) {
		$('.repeat').addClass('once');
	} else if (repeat == 2) {
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function () {
		if ($(this).hasClass('once')) {
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')) {
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function () {
		if ($(this).hasClass('enable')) {
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
		$(".download img").hover(function(){
		$(this).attr({ "src" : "img/link2.png" });
	}, function(){
		$(this).attr({ "src" : "img/link1.png" });
	});
});