$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"001.阵雨（雨声、电视卡顿、钢琴、马林巴、弦乐器、竖琴、钢片琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/001.阵雨（雨声、电视卡顿、钢琴、马林巴、弦乐器、竖琴、钢片琴）.m4A",},
{title:"002.下雨天（下雨、钢琴、钢片琴、长笛、单簧管）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/002.下雨天（下雨、钢琴、钢片琴、长笛、单簧管）.m4A",},
{title:"003.山里农家（风吹稻田、鸟鸣、马林巴、钢片琴、钢琴、弦乐器）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/003.山里农家（风吹稻田、鸟鸣、马林巴、钢片琴、钢琴、弦乐器）.m4A",},
{title:"004.心语（海浪、钢琴、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/004.心语（海浪、钢琴、大提琴）.m4A",},
{title:"005.梦见你（呼吸声、呼噜声、钢琴、弦乐器）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/005.梦见你（呼吸声、呼噜声、钢琴、弦乐器）.m4A",},
{title:"006.小晴（潮汐、鸟鸣、马林巴、钢琴、钢片琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/006.小晴（潮汐、鸟鸣、马林巴、钢琴、钢片琴）.m4A",},
{title:"007.下班（轨道的当啷声、脚步声、吉他、钟琴、贝斯、长笛、架子鼓、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/007.下班（轨道的当啷声、脚步声、吉他、钟琴、贝斯、长笛、架子鼓、钢琴）.m4A",},
{title:"008.雨季（雨声、马林巴、钢片琴、竖琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/008.雨季（雨声、马林巴、钢片琴、竖琴）.m4A",},
{title:"009.再遇（雨声、钢琴、马林巴、管风琴、竖琴、弦乐、小钹）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/009.再遇（雨声、钢琴、马林巴、管风琴、竖琴、弦乐、小钹）.m4A",},
{title:"010.渔歌（钓鱼、水流、竖琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/010.渔歌（钓鱼、水流、竖琴）.m4A",},
{title:"011.摇篮（潮汐、虫鸣、钢琴)",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/011.摇篮（潮汐、虫鸣、钢琴).m4A",},
{title:"012.轻轻的脚步声（鸟鸣、狗吠、脚步声、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/012.轻轻的脚步声（鸟鸣、狗吠、脚步声、钢琴）.m4A",},
{title:"013.等你（下雨、拨打电话、钢琴、马林巴、竖琴、钢片琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/013.等你（下雨、拨打电话、钢琴、马林巴、竖琴、钢片琴）.m4A",},
{title:"014.长路慢行（海浪、钢琴、长笛、弦乐器、钢片琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/014.长路慢行（海浪、钢琴、长笛、弦乐器、钢片琴）.m4A",},
{title:"015.凉风有信（淅淅沥沥的下雨、脚步声、钢琴、马林巴、钟琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/015.凉风有信（淅淅沥沥的下雨、脚步声、钢琴、马林巴、钟琴）.m4A",},
{title:"016.为你撑伞（雨水、吉他、竖琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/016.为你撑伞（雨水、吉他、竖琴）.m4A",},
{title:"017.房前清泉（泉水叮咚、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/017.房前清泉（泉水叮咚、钢琴）.m4A",},
{title:"018.浪漫篝火（篝火、钢琴、长笛、双簧管、贝斯）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/018.浪漫篝火（篝火、钢琴、长笛、双簧管、贝斯）.m4A",},
{title:"019.从前慢（虫鸣、钢琴、大提琴、钢片琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/019.从前慢（虫鸣、钢琴、大提琴、钢片琴）.m4A",},
{title:"020.我爱我家（猫咪、篝火、钢琴、钢片琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/020.我爱我家（猫咪、篝火、钢琴、钢片琴）.m4A",},
{title:"021.蒲公英的幻想（溪水、鸟鸣、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/021.蒲公英的幻想（溪水、鸟鸣、钢琴）.m4A",},
{title:"022.流水潺潺（溪水、竖琴、钢琴、钢片琴、钟琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/022.流水潺潺（溪水、竖琴、钢琴、钢片琴、钟琴）.m4A",},
{title:"023.在月亮下跳舞吧（清风、雨水、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/023.在月亮下跳舞吧（清风、雨水、钢琴）.m4A",},
{title:"024.像从前那样（虫鸣、鸟鸣、钢琴、和声）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/024.像从前那样（虫鸣、鸟鸣、钢琴、和声）.m4A",},
{title:"025.夏风之声（潮汐、蝉鸣、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/025.夏风之声（潮汐、蝉鸣、钢琴）.m4A",},
{title:"026.星星、月亮与满满（流水潺潺、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/026.星星、月亮与满满（流水潺潺、钢琴）.m4A",},
{title:"027.月光洒向海面（海水、浪花、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/027.月光洒向海面（海水、浪花、钢琴）.m4A",},
{title:"028.闲逛（鸟鸣、水滴、脚步声、钢琴、长笛）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/028.闲逛（鸟鸣、水滴、脚步声、钢琴、长笛）.m4A",},
{title:"029.踏上稻乡（鸟鸣、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/029.踏上稻乡（鸟鸣、钢琴）.m4A",},
{title:"030.我们的时光（时钟、钟琴、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/030.我们的时光（时钟、钟琴、钢琴）.m4A",},
{title:"031.仲夏夜的梦境（蟋蟀鸟鸣、钢琴、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/031.仲夏夜的梦境（蟋蟀鸟鸣、钢琴、大提琴）.m4A",},
{title:"032.湛蓝天空（流水声、鸟鸣、萨克斯、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/032.湛蓝天空（流水声、鸟鸣、萨克斯、钢琴）.m4A",},
{title:"033.乡间小路（林中清溪、竖笛、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/033.乡间小路（林中清溪、竖笛、大提琴）.m4A",},
{title:"034.澄澈心灵（夏夜蟋蟀蝉鸣、大提琴、钢琴、木吉他）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/034.澄澈心灵（夏夜蟋蟀蝉鸣、大提琴、钢琴、木吉他）.m4A",},
{title:"035.路在前方（鸟鸣、钢琴、木吉他、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/035.路在前方（鸟鸣、钢琴、木吉他、大提琴）.m4A",},
{title:"036.早安（鸟鸣、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/036.早安（鸟鸣、钢琴）.m4A",},
{title:"037.秘境岛屿（海浪、长笛、木吉他）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/037.秘境岛屿（海浪、长笛、木吉他）.m4A",},
{title:"038.老街（山涧鸟鸣、钢琴、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/038.老街（山涧鸟鸣、钢琴、大提琴）.m4A",},
{title:"039.悠闲假期（流水、鸟鸣、木吉他、钢琴、提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/039.悠闲假期（流水、鸟鸣、木吉他、钢琴、提琴）.m4A",},
{title:"040.宁静港湾（水边鸟鸣、木吉他、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/040.宁静港湾（水边鸟鸣、木吉他、钢琴）.m4A",},
{title:"041.在花园里劳作（浇水、狗吠、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/041.在花园里劳作（浇水、狗吠、钢琴）.m4A",},
{title:"042.放下烦忧（海浪、木吉他、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/042.放下烦忧（海浪、木吉他、大提琴）.m4A",},
{title:"043.时光的痕迹（沥沥小雨、纯钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/043.时光的痕迹（沥沥小雨、纯钢琴）.m4A",},
{title:"044.黎明（溪水潺潺、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/044.黎明（溪水潺潺、钢琴）.m4A",},
{title:"045.送别（风声、流水、钢琴、提琴、口琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/045.送别（风声、流水、钢琴、提琴、口琴）.m4A",},
{title:"046.小森林（鸟鸣、树叶、钢片琴、马林巴、长笛、竖琴、小提琴、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/046.小森林（鸟鸣、树叶、钢片琴、马林巴、长笛、竖琴、小提琴、大提琴）.m4A",},
{title:"047.心若无尘（水波、竖琴、短笛）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/047.心若无尘（水波、竖琴、短笛）.m4A",},
{title:"048.远走（鸟鸣、钢琴、提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/048.远走（鸟鸣、钢琴、提琴）.m4A",},
{title:"049.流星花园（鸟鸣、孩子笑声、钢琴、贝斯、钢片琴、大提琴、小提琴、中提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/049.流星花园（鸟鸣、孩子笑声、钢琴、贝斯、钢片琴、大提琴、小提琴、中提琴）.m4A",},
{title:"050.兜风（脚步声、汽车、风声、电子琴、马林巴、钢片琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/050.兜风（脚步声、汽车、风声、电子琴、马林巴、钢片琴）.m4A",},
{title:"051.小可爱（宝宝笑声、钢琴、钢片琴、长笛、黑管）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/051.小可爱（宝宝笑声、钢琴、钢片琴、长笛、黑管）.m4A",},
{title:"052.舞动的花朵（风、鸟鸣、钢琴、钟琴、马林巴、钢片琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/052.舞动的花朵（风、鸟鸣、钢琴、钟琴、马林巴、钢片琴）.m4A",},
{title:"053.明天之后（微风、长笛、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/053.明天之后（微风、长笛、钢琴）.m4A",},
{title:"054.家乡（脚步声、电车、钢琴、贝斯、钟琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/054.家乡（脚步声、电车、钢琴、贝斯、钟琴）.m4A",},
{title:"055.躲雨（雨声、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/055.躲雨（雨声、钢琴）.m4A",},
{title:"056.寻找自我之旅（鸟鸣、自行车、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/056.寻找自我之旅（鸟鸣、自行车、钢琴）.m4A",},
{title:"057.冬至（落叶、钢琴、长笛、单簧管）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/057.冬至（落叶、钢琴、长笛、单簧管）.m4A",},
{title:"058.暖暖的东风（鸟鸣、脚步声、钢琴、钟琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/058.暖暖的东风（鸟鸣、脚步声、钢琴、钟琴）.m4A",},
{title:"059.壁炉（火苗、小猫、钢琴、弦乐器）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/059.壁炉（火苗、小猫、钢琴、弦乐器）.m4A",},
{title:"060.梦游记（虫鸣、弦乐四重奏、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/060.梦游记（虫鸣、弦乐四重奏、钢琴）.m4A",},
{title:"061.我们一家人（鸟鸣、小狗、小猫、钢琴、贝斯）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/061.我们一家人（鸟鸣、小狗、小猫、钢琴、贝斯）.m4A",},
{title:"062.冬日清晨（流水、竖琴、长笛、钢片琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/062.冬日清晨（流水、竖琴、长笛、钢片琴）.m4A",},
{title:"063.蓝色海岸线（海浪、潮汐、钢琴、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/063.蓝色海岸线（海浪、潮汐、钢琴、大提琴）.m4A",},
{title:"064.从冬眠中醒来（流水、钢琴、钟琴、长笛）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/064.从冬眠中醒来（流水、钢琴、钟琴、长笛）.m4A",},
{title:"065.当春天来到（鸟鸣、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/065.当春天来到（鸟鸣、钢琴）.m4A",},
{title:"066.森林晨景（鸟鸣、宝宝学语声、木吉他、钢琴、长笛）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/066.森林晨景（鸟鸣、宝宝学语声、木吉他、钢琴、长笛）.m4A",},
{title:"067.向着光亮那方（流水、鸟鸣、钢琴、长笛）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/067.向着光亮那方（流水、鸟鸣、钢琴、长笛）.m4A",},
{title:"068.夜晚的星（蟋蟀、虫鸣、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/068.夜晚的星（蟋蟀、虫鸣、钢琴）.m4A",},
{title:"069.日不落（蛙鸣、木吉他、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/069.日不落（蛙鸣、木吉他、钢琴）.m4A",},
{title:"070.喜鹊成双（水波、深山鸟鸣、爵士钢琴、萨克斯）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/070.喜鹊成双（水波、深山鸟鸣、爵士钢琴、萨克斯）.m4A",},
{title:"071.夏日微风（习习凉风、宝宝笑声、纯钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/071.夏日微风（习习凉风、宝宝笑声、纯钢琴）.m4A",},
{title:"072.万事顺心（鸟鸣、风声、水声、钢琴、小提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/072.万事顺心（鸟鸣、风声、水声、钢琴、小提琴）.m4A",},
{title:"073.晨思前奏曲（篝火冉冉、纯钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/073.晨思前奏曲（篝火冉冉、纯钢琴）.m4A",},
{title:"074.从你的全世界路过（海鸟、潮汐、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/074.从你的全世界路过（海鸟、潮汐、钢琴）.m4A",},
{title:"075.世界尽头与冷酷仙境（海风、波涛、钢琴、提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/075.世界尽头与冷酷仙境（海风、波涛、钢琴、提琴）.m4A",},
{title:"076.想见你（缓缓流水、钢琴、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/076.想见你（缓缓流水、钢琴、大提琴）.m4A",},
{title:"077.牵牛花（啾啾鸟鸣、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/077.牵牛花（啾啾鸟鸣、钢琴）.m4A",},
{title:"078.雨后的天空（春雷、蛙鸣、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/078.雨后的天空（春雷、蛙鸣、钢琴）.m4A",},
{title:"079.日出（早晨山顶、钢琴、竖笛）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/079.日出（早晨山顶、钢琴、竖笛）.m4A",},
{title:"080.山顶日出（流水声、手风琴、短笛、提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/080.山顶日出（流水声、手风琴、短笛、提琴）.m4A",},
{title:"081.念念回首（涟漪、翠鸟声、纯钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/081.念念回首（涟漪、翠鸟声、纯钢琴）.m4A",},
{title:"082.江河共余生（鸟鸣、微风、钢琴、小提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/082.江河共余生（鸟鸣、微风、钢琴、小提琴）.m4A",},
{title:"083.待凛冬离去（春日鸟鸣、钢琴、小提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/083.待凛冬离去（春日鸟鸣、钢琴、小提琴）.m4A",},
{title:"084.候鸟的生活（森林鸟鸣、钢琴、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/084.候鸟的生活（森林鸟鸣、钢琴、大提琴）.m4A",},
{title:"085.星河长明（仲夏虫鸣、纯钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/085.星河长明（仲夏虫鸣、纯钢琴）.m4A",},
{title:"086.晚歌（虫鸣、纯钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/086.晚歌（虫鸣、纯钢琴）.m4A",},
{title:"087.萤火虫之歌（虫鸣、钢琴、竖琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/087.萤火虫之歌（虫鸣、钢琴、竖琴）.m4A",},
{title:"088.童年梦境（蟋蟀、虫鸣、纯钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/088.童年梦境（蟋蟀、虫鸣、纯钢琴）.m4A",},
{title:"089.童年梦境（蟋蟀、虫鸣、纯钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/089.童年梦境（蟋蟀、虫鸣、纯钢琴）.m4A",},
{title:"090.漂浮的云（鸟鸣、钢琴、八音盒、小提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/090.漂浮的云（鸟鸣、钢琴、八音盒、小提琴）.m4A",},
{title:"091.风平浪静（柔情海浪、大提琴、铁琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/091.风平浪静（柔情海浪、大提琴、铁琴）.m4A",},
{title:"092.一路向北（风浪、长笛、小提琴、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/092.一路向北（风浪、长笛、小提琴、钢琴）.m4A",},
{title:"093.飘雪（风浪、钢琴、木吉他、小提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/093.飘雪（风浪、钢琴、木吉他、小提琴）.m4A",},
{title:"094.风中的信（蟋蟀、晚风、钢琴、小提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/094.风中的信（蟋蟀、晚风、钢琴、小提琴）.m4A",},
{title:"095.日落的时候（山野虫鸣、木吉他、钢琴、小提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/095.日落的时候（山野虫鸣、木吉他、钢琴、小提琴）.m4A",},
{title:"096.心安（缓缓流水、微风、竖琴、长笛、钢琴、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/096.心安（缓缓流水、微风、竖琴、长笛、钢琴、大提琴）.m4A",},
{title:"097.爱你 是我做过最好的事（水波、鸟鸣、木吉他、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/097.爱你 是我做过最好的事（水波、鸟鸣、木吉他、钢琴）.m4A",},
{title:"098.看海（海浪、海鸟、木吉他、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/098.看海（海浪、海鸟、木吉他、钢琴）.m4A",},
{title:"099.我好想你（微风习习、钢琴、木吉他）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/099.我好想你（微风习习、钢琴、木吉他）.m4A",},
{title:"100.青青草原的傍晚（3D音效、虫鸣、短笛、竖琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/100.青青草原的傍晚（3D音效、虫鸣、短笛、竖琴）.m4A",},
{title:"101.湖畔夜色（3D湖水声、鸟鸣、萨克斯、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/101.湖畔夜色（3D湖水声、鸟鸣、萨克斯、钢琴）.m4A",},
{title:"102.潮起潮落（海风、海浪、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/102.潮起潮落（海风、海浪、钢琴）.m4A",},
{title:"103.夏天的故事（山林声音、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/103.夏天的故事（山林声音、钢琴）.m4A",},
{title:"104.春天森林（大自然声音、钢琴、木吉他、大提琴、小提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/104.春天森林（大自然声音、钢琴、木吉他、大提琴、小提琴）.m4A",},
{title:"105.月亮的梦（3D音效、雷雨、八音盒）戴耳机听更妙噢",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/105.月亮的梦（3D音效、雷雨、八音盒）戴耳机听更妙噢.m4A",},
{title:"106.风雨之后彩虹漫天（3D音效、雷雨、钢琴、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/106.风雨之后彩虹漫天（3D音效、雷雨、钢琴、大提琴）.m4A",},
{title:"107.山涧小溪缓缓流淌（3D纯大自然声音）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/107.山涧小溪缓缓流淌（3D纯大自然声音）.m4A",},
{title:"108.窗外大海（温柔海浪、3D脑波音乐）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/108.窗外大海（温柔海浪、3D脑波音乐）.m4A",},
{title:"109.静夜思（3D舒睡轻音乐）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/109.静夜思（3D舒睡轻音乐）.m4A",},
{title:"110.朝幸福奔去（3D舒睡轻音乐）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/110.朝幸福奔去（3D舒睡轻音乐）.m4A",},
{title:"111.人间最美是安静（3D纯音乐）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/111.人间最美是安静（3D纯音乐）.m4A",},
{title:"112.森林雨后（涓涓溪流、钢琴、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/112.森林雨后（涓涓溪流、钢琴、大提琴）.m4A",},
{title:"113.天冷了给你拥抱（3D风声、八音盒）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/113.天冷了给你拥抱（3D风声、八音盒）.m4A",},
{title:"114.愿你快乐无忧（海浪、八音盒、钢琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/114.愿你快乐无忧（海浪、八音盒、钢琴）.m4A",},
{title:"115.彼岸烟火（3D舒眠纯音乐）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/115.彼岸烟火（3D舒眠纯音乐）.m4A",},
{title:"116.回到过去（浪花、钢琴、竖笛、大提琴）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/116.回到过去（浪花、钢琴、竖笛、大提琴）.m4A",},
{title:"117.北极的风（3D纯大自然声音）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/117.北极的风（3D纯大自然声音）.m4A",},
{title:"118.心事如浮萍（3D安眠轻音乐）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/118.心事如浮萍（3D安眠轻音乐）.m4A",},
{title:"119.水滴声声（3D舒眠大自然轻音乐）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/119.水滴声声（3D舒眠大自然轻音乐）.m4A",},
{title:"120.牵着你的手到世界尽头（3D晚安轻音乐）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/120.牵着你的手到世界尽头（3D晚安轻音乐）.m4A",},
{title:"121.深海中的水流（3D纯大自然声音）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/121.深海中的水流（3D纯大自然声音）.m4A",},
{title:"122.窗外是雨天（3D纯音乐）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/122.窗外是雨天（3D纯音乐）.m4A",},
{title:"123.为你留了一盏灯（3D纯音乐）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/123.为你留了一盏灯（3D纯音乐）.m4A",},
{title:"124.星空下的篝火（3D大自然声音）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/124.星空下的篝火（3D大自然声音）.m4A",},
{title:"125.呼吸在海平面下10米（3D大自然声音）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/125.呼吸在海平面下10米（3D大自然声音）.m4A",},
{title:"126.水下气泡（3D大自然声音）",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/126.水下气泡（3D大自然声音）.m4A",},
{title:"127.海上栈桥",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/127.海上栈桥.m4A",},
{title:"128.回家的路",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/128.回家的路.m4A",},
{title:"129.夏夜",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/129.夏夜.m4A",},
{title:"130.夏日绿荫",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/130.夏日绿荫.m4A",},
{title:"131.海边微风起",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/131.海边微风起.m4A",},
{title:"132.海鸥岛",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/132.海鸥岛.m4A",},
{title:"133.大海",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/133.大海.m4A",},
{title:"134.山野",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/134.山野.m4A",},
{title:"135.泉眼无声惜细流",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/135.泉眼无声惜细流.m4A",},
{title:"136.风吹雨成夏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/136.风吹雨成夏.m4A",},
{title:"137.雷雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/137.雷雨.m4A",},
{title:"138.北极",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/138.北极.m4A",},
{title:"139.山涧",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/139.山涧.m4A",},
{title:"140.划船",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/140.划船.m4A",},
{title:"141.海底世界",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/141.海底世界.m4A",},
{title:"142.篝火",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/142.篝火.m4A",},
{title:"143.山顶日落",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/143.山顶日落.m4A",},
{title:"144.雪地",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/144.雪地.m4A",},
{title:"145.林中小溪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/145.林中小溪.m4A",},
{title:"146.走在沙滩上",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/146.走在沙滩上.m4A",},
{title:"147.小森林",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/147.小森林.m4A",},
{title:"148.小可爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/148.小可爱.m4A",},
{title:"149.舞动的花朵",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/149.舞动的花朵.m4A",},
{title:"150.回归校园",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/150.回归校园.m4A",},
{title:"151.从冬眠中醒来",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/151.从冬眠中醒来.m4A",},
{title:"152.当春天来到",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/152.当春天来到.m4A",},
{title:"153.家乡",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/153.家乡.m4A",},
{title:"154.早春",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/154.早春.m4A",},
{title:"155.冬日清晨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/155.冬日清晨.m4A",},
{title:"156.妈妈的厨房",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/156.妈妈的厨房.m4A",},
{title:"157.初夏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/157.初夏.m4A",},
{title:"158.破晓",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/158.破晓.m4A",},
{title:"159.我们一家人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/159.我们一家人.m4A",},
{title:"160.流星花园",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/160.流星花园.m4A",},
{title:"161.雪之华",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/161.雪之华.m4A",},
{title:"162.暖暖的东风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/162.暖暖的东风.m4A",},
{title:"163.平安夜",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/163.平安夜.m4A",},
{title:"164.星语心愿",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/164.星语心愿.m4A",},
{title:"165.雪落下的声音",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/165.雪落下的声音.m4A",},
{title:"166.初雪",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/166.初雪.m4A",},
{title:"167.梦见你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/167.梦见你.m4A",},
{title:"168.轻轻的脚步声",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/168.轻轻的脚步声.m4A",},
{title:"169.下班",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/169.下班.m4A",},
{title:"170.冬至",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/170.冬至.m4A",},
{title:"171.我爱我家",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/171.我爱我家.m4A",},
{title:"172.蓝色海岸线",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/172.蓝色海岸线.m4A",},
{title:"173.淋雨一直走",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/173.淋雨一直走.m4A",},
{title:"174.下个路口",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/174.下个路口.m4A",},
{title:"175.山里农家",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/175.山里农家.m4A",},
{title:"176.梦游记",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/176.梦游记.m4A",},
{title:"177.旅行的诗",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/177.旅行的诗.m4A",},
{title:"178.渔歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/178.渔歌.m4A",},
{title:"179.浪漫篝火",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/179.浪漫篝火.m4A",},
{title:"180.壁炉",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/180.壁炉.m4A",},
{title:"181.凉风有信",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/181.凉风有信.m4A",},
{title:"182.等你回来",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/182.等你回来.m4A",},
{title:"183.此刻的温柔",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/183.此刻的温柔.m4A",},
{title:"184.从前慢",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/184.从前慢.m4A",},
{title:"185.长路慢行",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/185.长路慢行.m4A",},
{title:"186.冬眠",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/186.冬眠.m4A",},
{title:"187.再遇",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/187.再遇.m4A",},
{title:"188.种星星的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/188.种星星的人.m4A",},
{title:"189.好想你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/189.好想你.m4A",},
{title:"190.流水潺潺",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/190.流水潺潺.m4A",},
{title:"191.心语",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/191.心语.m4A",},
{title:"192.海底总动员",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/192.海底总动员.m4A",},
{title:"193.寻找自我之旅",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/193.寻找自我之旅.m4A",},
{title:"194.老电影",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/194.老电影.m4A",},
{title:"195.雨城",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/195.雨城.m4A",},
{title:"196.在水一方",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/196.在水一方.m4A",},
{title:"197.仲夏夜之梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/197.仲夏夜之梦.m4A",},
{title:"198.直到春天过去",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/198.直到春天过去.m4A",},
{title:"199.等你",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/199.等你.m4A",},
{title:"200.阵雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/200.阵雨.m4A",},
{title:"201.闲逛",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/201.闲逛.m4A",},
{title:"202.小晴",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/202.小晴.m4A",},
{title:"203.躲雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/203.躲雨.m4A",},
{title:"204.兜风",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/204.兜风.m4A",},
{title:"205.雨季",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/205.雨季.m4A",},
{title:"206.下雨天",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/206.下雨天.m4A",},
{title:"207.为你撑伞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/207.为你撑伞.m4A",},
{title:"208.我们的时光",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/208.我们的时光.m4A",},
{title:"209.早安",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/209.早安.m4A",},
{title:"210.在花园里劳作",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/210.在花园里劳作.m4A",},
{title:"211.雨中蛙声 - 雨下大了蛙声也渐渐变小",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/211.雨中蛙声 - 雨下大了蛙声也渐渐变小.m4A",},
{title:"212.雨后-树下的雨滴稀稀疏疏",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/212.雨后-树下的雨滴稀稀疏疏.m4A",},
{title:"213.下雨天 - 车里无转向灯 带耳机效果超赞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/213.下雨天 - 车里无转向灯 带耳机效果超赞.m4A",},
{title:"214.下雨天 - 车里打着转向灯 带耳机效果超赞",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/214.下雨天 - 车里打着转向灯 带耳机效果超赞.m4A",},
{title:"215.棕叶下的雨 关注声谷 众公号了解自然录音",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/215.棕叶下的雨 关注声谷 众公号了解自然录音.m4A",},
{title:"216.深夜的雨声 大自然声音",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/216.深夜的雨声 大自然声音.m4A",},
{title:"217.深夜林中细雨 大自然的声音 纯音乐",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/217.深夜林中细雨 大自然的声音 纯音乐.m4A",},
{title:"218.雨声行人鸟儿飞机 舒适自然 大自然的声音 纯音乐",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/218.雨声行人鸟儿飞机 舒适自然 大自然的声音 纯音乐.m4A",},
{title:"219.亭子下的雨声 大自然的声音 纯音乐［声谷］",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/219.亭子下的雨声 大自然的声音 纯音乐［声谷］.m4A",},
{title:"220.台风来时 大自然的声音 纯音乐［声谷］",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/220.台风来时 大自然的声音 纯音乐［声谷］.m4A",},
{title:"221.云栖竹林听雨 午后禅定 大自然的声音 纯音乐 [声谷]",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/221.云栖竹林听雨 午后禅定 大自然的声音 纯音乐 [声谷].m4A",},
{title:"222.清晨的雨声 大自然的声音 纯音乐［声谷］",artist: "",album:" ",cover:"img/1.jpg",mp3:"https://cloud.hhhnn.com/d/189Family133/音乐视听/自然之声/222.清晨的雨声 大自然的声音 纯音乐［声谷］.m4A",}

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