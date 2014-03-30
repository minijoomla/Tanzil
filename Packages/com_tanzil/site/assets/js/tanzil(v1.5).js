var Notice = 'Copyright (C) 2008-2011 Hamid Zarrabi-Zadeh, Source: tanzil.net';
var QuranData = {
	Sura: [
		[],
		[0, 7, 5, 1, 'الفاتحة', "Al-Fatiha", 'The Opening', 'Meccan'],
		[7, 286, 87, 40, 'البقرة', "Al-Baqara", 'The Heifer', 'Medinan'],
		[293, 200, 89, 20, 'آل عمران', "Al-i-Imran", 'The Family of Imran', 'Medinan'],
		[493, 176, 92, 24, 'النساء', "An-Nisa", 'The Women', 'Medinan'],
		[669, 120, 112, 16, 'المائدة', "Al-Ma'ida", 'The Table', 'Medinan'],
		[789, 165, 55, 20, 'الأنعام', "Al-An'am", 'The Cattle', 'Meccan'],
		[954, 206, 39, 24, 'الأعراف', "Al-A'raf", 'The Heights', 'Meccan'],
		[1160, 75, 88, 10, 'الأنفال', "Al-Anfal", 'The Spoils of War', 'Medinan'],
		[1235, 129, 113, 16, 'التوبة', "At-Tawba", 'The Repentance', 'Medinan'],
		[1364, 109, 51, 11, 'يونس', "Yunus", 'Jonah', 'Meccan'],
		[1473, 123, 52, 10, 'هود', "Hud", 'Hud', 'Meccan'],
		[1596, 111, 53, 12, 'يوسف', "Yusuf", 'Joseph', 'Meccan'],
		[1707, 43, 96, 6, 'الرعد', "Ar-Ra'd", 'The Thunder', 'Medinan'],
		[1750, 52, 72, 7, 'ابراهيم', "Ibrahim", 'Abraham', 'Meccan'],
		[1802, 99, 54, 6, 'الحجر', "Al-Hijr", 'The Stoneland', 'Meccan'],
		[1901, 128, 70, 16, 'النحل', "An-Nahl", 'The Honey Bees', 'Meccan'],
		[2029, 111, 50, 12, 'الإسراء', "Al-Isra", 'The Night Journey', 'Meccan'],
		[2140, 110, 69, 12, 'الكهف', "Al-Kahf", 'The Cave', 'Meccan'],
		[2250, 98, 44, 6, 'مريم', "Maryam", 'Mary', 'Meccan'],
		[2348, 135, 45, 8, 'طه', "Ta-Ha", 'Ta-Ha', 'Meccan'],
		[2483, 112, 73, 7, 'الأنبياء', "Al-Anbiya", 'The Prophets', 'Meccan'],
		[2595, 78, 103, 10, 'الحج', "Al-Hajj", 'The Pilgrimage', 'Medinan'],
		[2673, 118, 74, 6, 'المؤمنون', "Al-Mu'minun", 'The Believers', 'Meccan'],
		[2791, 64, 102, 9, 'النور', "An-Nur", 'The Light', 'Medinan'],
		[2855, 77, 42, 6, 'الفرقان', "Al-Furqan", 'The Criterion', 'Meccan'],
		[2932, 227, 47, 11, 'الشعراء', "Ash-Shu'ara", 'The Poets', 'Meccan'],
		[3159, 93, 48, 7, 'النمل', "An-Naml", 'The Ant', 'Meccan'],
		[3252, 88, 49, 9, 'القصص', "Al-Qasas", 'The Stories', 'Meccan'],
		[3340, 69, 85, 7, 'العنكبوت', "Al-Ankabut", 'The Spider', 'Meccan'],
		[3409, 60, 84, 6, 'الروم', "Ar-Rum", 'The Romans', 'Meccan'],
		[3469, 34, 57, 4, 'لقمان', "Luqman", 'Luqman', 'Meccan'],
		[3503, 30, 75, 3, 'السجدة', "As-Sajda", 'The Prostration', 'Meccan'],
		[3533, 73, 90, 9, 'الأحزاب', "Al-Ahzab", 'The Clans', 'Medinan'],
		[3606, 54, 58, 6, 'سبإ', "Saba", 'Sheba', 'Meccan'],
		[3660, 45, 43, 5, 'فاطر', "Fatir", 'The Originator', 'Meccan'],
		[3705, 83, 41, 5, 'يس', "Ya-Sin", 'Yaseen', 'Meccan'],
		[3788, 182, 56, 5, 'الصافات', "As-Saffat", 'Drawn up in Ranks', 'Meccan'],
		[3970, 88, 38, 5, 'ص', "Sad", 'The Letter Sad', 'Meccan'],
		[4058, 75, 59, 8, 'الزمر', "Az-Zumar", 'The Troops', 'Meccan'],
		[4133, 85, 60, 9, 'غافر', "Ghafir", 'The Forgiver', 'Meccan'],
		[4218, 54, 61, 6, 'فصلت', "Fussilat", 'Explained in Detail', 'Meccan'],
		[4272, 53, 62, 5, 'الشورى', "Ash-Shura", 'The Consultation', 'Meccan'],
		[4325, 89, 63, 7, 'الزخرف', "Az-Zukhruf", 'The Ornaments of Gold', 'Meccan'],
		[4414, 59, 64, 3, 'الدخان', "Ad-Dukhan", 'The Smoke', 'Meccan'],
		[4473, 37, 65, 4, 'الجاثية', "Al-Jathiya", 'Crouching', 'Meccan'],
		[4510, 35, 66, 4, 'الأحقاف', "Al-Ahqaf", 'The Dunes', 'Meccan'],
		[4545, 38, 95, 4, 'محمد', "Muhammad", 'Muhammad', 'Medinan'],
		[4583, 29, 111, 4, 'الفتح', "Al-Fath", 'The Victory', 'Medinan'],
		[4612, 18, 106, 2, 'الحجرات', "Al-Hujurat", 'The Inner Apartments', 'Medinan'],
		[4630, 45, 34, 3, 'ق', "Qaf", 'The Letter Qaf', 'Meccan'],
		[4675, 60, 67, 3, 'الذاريات', "Adh-Dhariyat", 'The Winnowing Winds', 'Meccan'],
		[4735, 49, 76, 2, 'الطور', "At-Tur", 'The Mount', 'Meccan'],
		[4784, 62, 23, 3, 'النجم', "An-Najm", 'The Star', 'Meccan'],
		[4846, 55, 37, 3, 'القمر', "Al-Qamar", 'The Moon', 'Meccan'],
		[4901, 78, 97, 3, 'الرحمن', "Ar-Rahman", 'The Beneficent', 'Medinan'],
		[4979, 96, 46, 3, 'الواقعة', "Al-Waqi'a", 'The Inevitable', 'Meccan'],
		[5075, 29, 94, 4, 'الحديد', "Al-Hadid", 'The Iron', 'Medinan'],
		[5104, 22, 105, 3, 'المجادلة', "Al-Mujadila", 'The Pleading', 'Medinan'],
		[5126, 24, 101, 3, 'الحشر', "Al-Hashr", 'The Exile', 'Medinan'],
		[5150, 13, 91, 2, 'الممتحنة', "Al-Mumtahina", 'Examining Her', 'Medinan'],
		[5163, 14, 109, 2, 'الصف', "As-Saff", 'The Ranks', 'Medinan'],
		[5177, 11, 110, 2, 'الجمعة', "Al-Jumu'a", 'Friday', 'Medinan'],
		[5188, 11, 104, 2, 'المنافقون', "Al-Munafiqun", 'The Hypocrites', 'Medinan'],
		[5199, 18, 108, 2, 'التغابن', "At-Taghabun", 'Mutual Disillusion', 'Medinan'],
		[5217, 12, 99, 2, 'الطلاق', "At-Talaq", 'Divorce', 'Medinan'],
		[5229, 12, 107, 2, 'التحريم', "At-Tahrim", 'The Prohibition', 'Medinan'],
		[5241, 30, 77, 2, 'الملك', "Al-Mulk", 'The Sovereignty', 'Meccan'],
		[5271, 52, 2, 2, 'القلم', "Al-Qalam", 'The Pen', 'Meccan'],
		[5323, 52, 78, 2, 'الحاقة', "Al-Haqqa", 'The Reality', 'Meccan'],
		[5375, 44, 79, 2, 'المعارج', "Al-Ma'arij", 'The Ascending Stairways', 'Meccan'],
		[5419, 28, 71, 2, 'نوح', "Nuh", 'Noah', 'Meccan'],
		[5447, 28, 40, 2, 'الجن', "Al-Jinn", 'The Jinn', 'Meccan'],
		[5475, 20, 3, 2, 'المزمل', "Al-Muzzammil", 'The Enshrouded One', 'Meccan'],
		[5495, 56, 4, 2, 'المدثر', "Al-Muddathir", 'The Cloaked One', 'Meccan'],
		[5551, 40, 31, 2, 'القيامة', "Al-Qiyama", 'The Resurrection', 'Meccan'],
		[5591, 31, 98, 2, 'الانسان', "Al-Insan", 'Human', 'Medinan'],
		[5622, 50, 33, 2, 'المرسلات', "Al-Mursalat", 'The Emissaries', 'Meccan'],
		[5672, 40, 80, 2, 'النبإ', "An-Naba'", 'The Announcement', 'Meccan'],
		[5712, 46, 81, 2, 'النازعات', "An-Nazi'at", 'Those Who Drag Forth', 'Meccan'],
		[5758, 42, 24, 1, 'عبس', "Abasa", 'He Frowned', 'Meccan'],
		[5800, 29, 7, 1, 'التكوير', "At-Takwir", 'The Folding Up', 'Meccan'],
		[5829, 19, 82, 1, 'الإنفطار', "Al-Infitar", 'The Cleaving', 'Meccan'],
		[5848, 36, 86, 1, 'المطففين', "Al-Mutaffifin", 'Defrauding', 'Meccan'],
		[5884, 25, 83, 1, 'الإنشقاق', "Al-Inshiqaq", 'The Splitting Open', 'Meccan'],
		[5909, 22, 27, 1, 'البروج', "Al-Buruj", 'The Constellations', 'Meccan'],
		[5931, 17, 36, 1, 'الطارق', "At-Tariq", 'The Morning Star', 'Meccan'],
		[5948, 19, 8, 1, 'الأعلى', "Al-A'la", 'The Most High', 'Meccan'],
		[5967, 26, 68, 1, 'الغاشية', "Al-Ghashiya", 'The Overwhelming', 'Meccan'],
		[5993, 30, 10, 1, 'الفجر', "Al-Fajr", 'The Dawn', 'Meccan'],
		[6023, 20, 35, 1, 'البلد', "Al-Balad", 'The City', 'Meccan'],
		[6043, 15, 26, 1, 'الشمس', "Ash-Shams", 'The Sun', 'Meccan'],
		[6058, 21, 9, 1, 'الليل', "Al-Lail", 'The Night', 'Meccan'],
		[6079, 11, 11, 1, 'الضحى', "Ad-Dhuha", 'The Morning Hours', 'Meccan'],
		[6090, 8, 12, 1, 'الشرح', "Ash-Sharh", 'The Consolation', 'Meccan'],
		[6098, 8, 28, 1, 'التين', "At-Tin", 'The Fig', 'Meccan'],
		[6106, 19, 1, 1, 'العلق', "Al-Alaq", 'The Clot', 'Meccan'],
		[6125, 5, 25, 1, 'القدر', "Al-Qadr", 'The Power, Fate', 'Meccan'],
		[6130, 8, 100, 1, 'البينة', "Al-Bayyina", 'The Evidence', 'Medinan'],
		[6138, 8, 93, 1, 'الزلزلة', "Az-Zalzala", 'The Earthquake', 'Medinan'],
		[6146, 11, 14, 1, 'العاديات', "Al-Adiyat", 'The Chargers', 'Meccan'],
		[6157, 11, 30, 1, 'القارعة', "Al-Qari'a", 'The Calamity', 'Meccan'],
		[6168, 8, 16, 1, 'التكاثر', "At-Takathur", 'Competition', 'Meccan'],
		[6176, 3, 13, 1, 'العصر', "Al-Asr", 'The Time', 'Meccan'],
		[6179, 9, 32, 1, 'الهمزة', "Al-Humaza", 'The Traducer', 'Meccan'],
		[6188, 5, 19, 1, 'الفيل', "Al-Fil", 'The Elephant', 'Meccan'],
		[6193, 4, 29, 1, 'قريش', "Quraysh", 'Quraysh', 'Meccan'],
		[6197, 7, 17, 1, 'الماعون', "Al-Ma'un", 'Almsgiving', 'Meccan'],
		[6204, 3, 15, 1, 'الكوثر', "Al-Kawthar", 'Abundance', 'Meccan'],
		[6207, 6, 18, 1, 'الكافرون', "Al-Kafirun", 'The Disbelievers', 'Meccan'],
		[6213, 3, 114, 1, 'النصر', "An-Nasr", 'Divine Support', 'Medinan'],
		[6216, 5, 6, 1, 'المسد', "Al-Masad", 'The Palm Fibre', 'Meccan'],
		[6221, 4, 22, 1, 'الإخلاص', "Al-Ikhlas", 'Purity of Faith', 'Meccan'],
		[6225, 5, 20, 1, 'الفلق', "Al-Falaq", 'The Dawn', 'Meccan'],
		[6230, 6, 21, 1, 'الناس', "An-Nas", 'Mankind', 'Meccan'],
		[6236, 1]
	],
	Juz: [
		[],
		[1, 1],
		[2, 142],
		[2, 253],
		[3, 93],
		[4, 24],
		[4, 148],
		[5, 82],
		[6, 111],
		[7, 88],
		[8, 41],
		[9, 93],
		[11, 6],
		[12, 53],
		[15, 1],
		[17, 1],
		[18, 75],
		[21, 1],
		[23, 1],
		[25, 21],
		[27, 56],
		[29, 46],
		[33, 31],
		[36, 28],
		[39, 32],
		[41, 47],
		[46, 1],
		[51, 31],
		[58, 1],
		[67, 1],
		[78, 1],
		[115, 1]
	],
	Page: [
		[],
		[1, 1],
		[2, 1],
		[2, 6],
		[2, 17],
		[2, 25],
		[2, 30],
		[2, 38],
		[2, 49],
		[2, 58],
		[2, 62],
		[2, 70],
		[2, 77],
		[2, 84],
		[2, 89],
		[2, 94],
		[2, 102],
		[2, 106],
		[2, 113],
		[2, 120],
		[2, 127],
		[2, 135],
		[2, 142],
		[2, 146],
		[2, 154],
		[2, 164],
		[2, 170],
		[2, 177],
		[2, 182],
		[2, 187],
		[2, 191],
		[2, 197],
		[2, 203],
		[2, 211],
		[2, 216],
		[2, 220],
		[2, 225],
		[2, 231],
		[2, 234],
		[2, 238],
		[2, 246],
		[2, 249],
		[2, 253],
		[2, 257],
		[2, 260],
		[2, 265],
		[2, 270],
		[2, 275],
		[2, 282],
		[2, 283],
		[3, 1],
		[3, 10],
		[3, 16],
		[3, 23],
		[3, 30],
		[3, 38],
		[3, 46],
		[3, 53],
		[3, 62],
		[3, 71],
		[3, 78],
		[3, 84],
		[3, 92],
		[3, 101],
		[3, 109],
		[3, 116],
		[3, 122],
		[3, 133],
		[3, 141],
		[3, 149],
		[3, 154],
		[3, 158],
		[3, 166],
		[3, 174],
		[3, 181],
		[3, 187],
		[3, 195],
		[4, 1],
		[4, 7],
		[4, 12],
		[4, 15],
		[4, 20],
		[4, 24],
		[4, 27],
		[4, 34],
		[4, 38],
		[4, 45],
		[4, 52],
		[4, 60],
		[4, 66],
		[4, 75],
		[4, 80],
		[4, 87],
		[4, 92],
		[4, 95],
		[4, 102],
		[4, 106],
		[4, 114],
		[4, 122],
		[4, 128],
		[4, 135],
		[4, 141],
		[4, 148],
		[4, 155],
		[4, 163],
		[4, 171],
		[4, 176],
		[5, 3],
		[5, 6],
		[5, 10],
		[5, 14],
		[5, 18],
		[5, 24],
		[5, 32],
		[5, 37],
		[5, 42],
		[5, 46],
		[5, 51],
		[5, 58],
		[5, 65],
		[5, 71],
		[5, 77],
		[5, 83],
		[5, 90],
		[5, 96],
		[5, 104],
		[5, 109],
		[5, 114],
		[6, 1],
		[6, 9],
		[6, 19],
		[6, 28],
		[6, 36],
		[6, 45],
		[6, 53],
		[6, 60],
		[6, 69],
		[6, 74],
		[6, 82],
		[6, 91],
		[6, 95],
		[6, 102],
		[6, 111],
		[6, 119],
		[6, 125],
		[6, 132],
		[6, 138],
		[6, 143],
		[6, 147],
		[6, 152],
		[6, 158],
		[7, 1],
		[7, 12],
		[7, 23],
		[7, 31],
		[7, 38],
		[7, 44],
		[7, 52],
		[7, 58],
		[7, 68],
		[7, 74],
		[7, 82],
		[7, 88],
		[7, 96],
		[7, 105],
		[7, 121],
		[7, 131],
		[7, 138],
		[7, 144],
		[7, 150],
		[7, 156],
		[7, 160],
		[7, 164],
		[7, 171],
		[7, 179],
		[7, 188],
		[7, 196],
		[8, 1],
		[8, 9],
		[8, 17],
		[8, 26],
		[8, 34],
		[8, 41],
		[8, 46],
		[8, 53],
		[8, 62],
		[8, 70],
		[9, 1],
		[9, 7],
		[9, 14],
		[9, 21],
		[9, 27],
		[9, 32],
		[9, 37],
		[9, 41],
		[9, 48],
		[9, 55],
		[9, 62],
		[9, 69],
		[9, 73],
		[9, 80],
		[9, 87],
		[9, 94],
		[9, 100],
		[9, 107],
		[9, 112],
		[9, 118],
		[9, 123],
		[10, 1],
		[10, 7],
		[10, 15],
		[10, 21],
		[10, 26],
		[10, 34],
		[10, 43],
		[10, 54],
		[10, 62],
		[10, 71],
		[10, 79],
		[10, 89],
		[10, 98],
		[10, 107],
		[11, 6],
		[11, 13],
		[11, 20],
		[11, 29],
		[11, 38],
		[11, 46],
		[11, 54],
		[11, 63],
		[11, 72],
		[11, 82],
		[11, 89],
		[11, 98],
		[11, 109],
		[11, 118],
		[12, 5],
		[12, 15],
		[12, 23],
		[12, 31],
		[12, 38],
		[12, 44],
		[12, 53],
		[12, 64],
		[12, 70],
		[12, 79],
		[12, 87],
		[12, 96],
		[12, 104],
		[13, 1],
		[13, 6],
		[13, 14],
		[13, 19],
		[13, 29],
		[13, 35],
		[13, 43],
		[14, 6],
		[14, 11],
		[14, 19],
		[14, 25],
		[14, 34],
		[14, 43],
		[15, 1],
		[15, 16],
		[15, 32],
		[15, 52],
		[15, 71],
		[15, 91],
		[16, 7],
		[16, 15],
		[16, 27],
		[16, 35],
		[16, 43],
		[16, 55],
		[16, 65],
		[16, 73],
		[16, 80],
		[16, 88],
		[16, 94],
		[16, 103],
		[16, 111],
		[16, 119],
		[17, 1],
		[17, 8],
		[17, 18],
		[17, 28],
		[17, 39],
		[17, 50],
		[17, 59],
		[17, 67],
		[17, 76],
		[17, 87],
		[17, 97],
		[17, 105],
		[18, 5],
		[18, 16],
		[18, 21],
		[18, 28],
		[18, 35],
		[18, 46],
		[18, 54],
		[18, 62],
		[18, 75],
		[18, 84],
		[18, 98],
		[19, 1],
		[19, 12],
		[19, 26],
		[19, 39],
		[19, 52],
		[19, 65],
		[19, 77],
		[19, 96],
		[20, 13],
		[20, 38],
		[20, 52],
		[20, 65],
		[20, 77],
		[20, 88],
		[20, 99],
		[20, 114],
		[20, 126],
		[21, 1],
		[21, 11],
		[21, 25],
		[21, 36],
		[21, 45],
		[21, 58],
		[21, 73],
		[21, 82],
		[21, 91],
		[21, 102],
		[22, 1],
		[22, 6],
		[22, 16],
		[22, 24],
		[22, 31],
		[22, 39],
		[22, 47],
		[22, 56],
		[22, 65],
		[22, 73],
		[23, 1],
		[23, 18],
		[23, 28],
		[23, 43],
		[23, 60],
		[23, 75],
		[23, 90],
		[23, 105],
		[24, 1],
		[24, 11],
		[24, 21],
		[24, 28],
		[24, 32],
		[24, 37],
		[24, 44],
		[24, 54],
		[24, 59],
		[24, 62],
		[25, 3],
		[25, 12],
		[25, 21],
		[25, 33],
		[25, 44],
		[25, 56],
		[25, 68],
		[26, 1],
		[26, 20],
		[26, 40],
		[26, 61],
		[26, 84],
		[26, 112],
		[26, 137],
		[26, 160],
		[26, 184],
		[26, 207],
		[27, 1],
		[27, 14],
		[27, 23],
		[27, 36],
		[27, 45],
		[27, 56],
		[27, 64],
		[27, 77],
		[27, 89],
		[28, 6],
		[28, 14],
		[28, 22],
		[28, 29],
		[28, 36],
		[28, 44],
		[28, 51],
		[28, 60],
		[28, 71],
		[28, 78],
		[28, 85],
		[29, 7],
		[29, 15],
		[29, 24],
		[29, 31],
		[29, 39],
		[29, 46],
		[29, 53],
		[29, 64],
		[30, 6],
		[30, 16],
		[30, 25],
		[30, 33],
		[30, 42],
		[30, 51],
		[31, 1],
		[31, 12],
		[31, 20],
		[31, 29],
		[32, 1],
		[32, 12],
		[32, 21],
		[33, 1],
		[33, 7],
		[33, 16],
		[33, 23],
		[33, 31],
		[33, 36],
		[33, 44],
		[33, 51],
		[33, 55],
		[33, 63],
		[34, 1],
		[34, 8],
		[34, 15],
		[34, 23],
		[34, 32],
		[34, 40],
		[34, 49],
		[35, 4],
		[35, 12],
		[35, 19],
		[35, 31],
		[35, 39],
		[35, 45],
		[36, 13],
		[36, 28],
		[36, 41],
		[36, 55],
		[36, 71],
		[37, 1],
		[37, 25],
		[37, 52],
		[37, 77],
		[37, 103],
		[37, 127],
		[37, 154],
		[38, 1],
		[38, 17],
		[38, 27],
		[38, 43],
		[38, 62],
		[38, 84],
		[39, 6],
		[39, 11],
		[39, 22],
		[39, 32],
		[39, 41],
		[39, 48],
		[39, 57],
		[39, 68],
		[39, 75],
		[40, 8],
		[40, 17],
		[40, 26],
		[40, 34],
		[40, 41],
		[40, 50],
		[40, 59],
		[40, 67],
		[40, 78],
		[41, 1],
		[41, 12],
		[41, 21],
		[41, 30],
		[41, 39],
		[41, 47],
		[42, 1],
		[42, 11],
		[42, 16],
		[42, 23],
		[42, 32],
		[42, 45],
		[42, 52],
		[43, 11],
		[43, 23],
		[43, 34],
		[43, 48],
		[43, 61],
		[43, 74],
		[44, 1],
		[44, 19],
		[44, 40],
		[45, 1],
		[45, 14],
		[45, 23],
		[45, 33],
		[46, 6],
		[46, 15],
		[46, 21],
		[46, 29],
		[47, 1],
		[47, 12],
		[47, 20],
		[47, 30],
		[48, 1],
		[48, 10],
		[48, 16],
		[48, 24],
		[48, 29],
		[49, 5],
		[49, 12],
		[50, 1],
		[50, 16],
		[50, 36],
		[51, 7],
		[51, 31],
		[51, 52],
		[52, 15],
		[52, 32],
		[53, 1],
		[53, 27],
		[53, 45],
		[54, 7],
		[54, 28],
		[54, 50],
		[55, 17],
		[55, 41],
		[55, 68],
		[56, 17],
		[56, 51],
		[56, 77],
		[57, 4],
		[57, 12],
		[57, 19],
		[57, 25],
		[58, 1],
		[58, 7],
		[58, 12],
		[58, 22],
		[59, 4],
		[59, 10],
		[59, 17],
		[60, 1],
		[60, 6],
		[60, 12],
		[61, 6],
		[62, 1],
		[62, 9],
		[63, 5],
		[64, 1],
		[64, 10],
		[65, 1],
		[65, 6],
		[66, 1],
		[66, 8],
		[67, 1],
		[67, 13],
		[67, 27],
		[68, 16],
		[68, 43],
		[69, 9],
		[69, 35],
		[70, 11],
		[70, 40],
		[71, 11],
		[72, 1],
		[72, 14],
		[73, 1],
		[73, 20],
		[74, 18],
		[74, 48],
		[75, 20],
		[76, 6],
		[76, 26],
		[77, 20],
		[78, 1],
		[78, 31],
		[79, 16],
		[80, 1],
		[81, 1],
		[82, 1],
		[83, 7],
		[83, 35],
		[85, 1],
		[86, 1],
		[87, 16],
		[89, 1],
		[89, 24],
		[91, 1],
		[92, 15],
		[95, 1],
		[97, 1],
		[98, 8],
		[100, 10],
		[103, 1],
		[106, 1],
		[109, 1],
		[112, 1],
		[115, 1]
	]
}
var RootList = 'آدم آزر ا أبابيل ابب ابد ابراهيم ابريق ابق ابل إبليس ابو ابى اتى اثث اثر اثل اثم اجج اجر اجل احد احزاب احقاف احمد اخذ اخر اخو ادد ادريس ادى اذ اذا اذن اذى ارب ارث ارض ارك ارم ازر ازز ازف اسباط استبرق اسحاق اسر اسرائيل اسس اسف اسلام اسماعيل اسن اسو اسى اشر اصر اصل أعراف افف افق افك افل اقصو اكل الا التى الذان الذى الذين الف الك اللاتى اللائى الل الله الم اله الو الى الياس ال‌ياسين اليسع ام اما أما امت امد امر امس امل امم امن امو ان انا انت انتم انتما انث انجيل انس انف انم انن اننى انى اهل او اوب اود اولاء اول اولى اون اوه اوى اى اياك اياكم ايان ايانا اياه اياهم اياى ايد ايكه ايم اين ايوب ائى ايى ب بابل بتر بتك بتل بثث بجس بحث بحر بخس بخع بخل بدء بدر بدع بدل بدن بدو بذر برء برج برح برد برر برز برزخ برص برق برك برم بره برهن بزغ بسر بسس بسط بسق بسل بسم بشر بصر بصل بضع بطء بطر بطش بطل بطن بعث بعثر بعد بعر بعض بعل بغت بغض بغل بغى بقر بقع بقل بقى بكر بكم بكة بكى بل بلد بلس بلع بلغ بلو بلى بنن بنو بنى بهت بهج بهل بهم بوء بوب بور بول بيت بيد بئر بئس بيض بيع بين ت تابوت تبب تبت تبر تبع تجر تحت ترب ترف ترق ترقوه ترك تسع تعس تفث تقن تلك تلكم تلكما تلل تلو تمم تنور توب تور توراة تين تيه ثبت ثبر ثبط ثبى ثجج ثخن ثرب ثرى ثعب ثقب ثقف ثقل ثلث ثلل ثم ثمر ثمم ثمن ثمود ثنى ثوب ثور ثوى ثيب جالوت جبب جبت جبر جبريل جبل جبن جبه جبى جثث جثم جثو جحد جحم جدث جدد جدر جدل جذذ جذع جذو جرح جرد جرر جرز جرع جرف جرم جرى جزء جزع جزى جسد جسس جسم جعل جفء جفن جفو جلب جلد جلس جلل جلو جمح جمد جمع جمعة جمل جمم جناح جنب جنح جند جنف جنن جنى جهد جهر جهز جهل جهنم جوب جود جودى جور جوز جوس جوع جوف جوو جىء جيب جيد جئر ح حبب حبر حبس حبط حبك حبل حتم حتى حثث حجب حجج حجر حجز حدب حدث حدد حدق حذر حرب حرث حرج حرد حرر حرس حرص حرض حرف حرق حرك حرم حرى حرير حزب حزن حسب حسد حسر حسس حسم حسن حشر حصب حصحص حصد حصر حصل حصن حصى حضر حضض حطب حطط حطم حظر حظظ حفد حفر حفظ حفف حفو حقب حقق حكم حلف حلق حلقم حلل حلم حلى حمء حمد حمر حمل حمم حمى حنث حنجر حنذ حنف حنك حنن حنين حواريون حوب حوت حوج حوذ حور حوش حوط حول حوى حيث حيد حير حيز حيص حيض حيف حيق حين حيى خبء خبت خبث خبر خبز خبط خبل خبو ختر ختم خدد خدع خدن خذل خرب خرج خردل خرر خرص خرطم خرق خزن خزى خسء خسر خسف خشب خشع خشى خصص خصف خصم خضد خضر خضع خطء خطب خطط خطف خطو خفت خفض خفف خفى خلد خلص خلط خلع خلف خلق خلل خلو خمد خمر خمس خمص خمط خنزر خنس خنق خور خوض خوف خول خون خوى خيب خير خيط خيل خيم داود دبب دبر دثر دحر دحض دحو دحى دخر دخل دخن درء درج درر درس درك درهم درى دسر دسس دسو دعع دعو دفء دفع دفق دكك دلك دلل دلو دمدم دمر دمع دمغ دمم دمو دمى دنر دنو دهر دهق دهم دهن دهى دور دول دوم دون دئب دين ذا ذات ذانك ذبب ذبح ذبذب ذخر ذرء ذرر ذرع ذرو ذعن ذقن ذكر ذكو ذلك ذلكم ذلكما ذلكن ذلل ذمم ذنب ذهب ذهل ذو ذوا ذود ذوق ذوى ذى ذئب ذيع ذئم ر رب ربب ربح ربص ربط ربع ربو رتع رتق رتل رجج رجز رجس رجع رجف رجل رجم رجو رحب رحق رحل رحم رحمان رخو ردء ردد ردف ردم ردى رذل رزق رس رسخ رسل رسو رشد رصد رصص رضع رضو رطب رعب رعد رعى رغب رغد رغم رفت رفث رفد رفرف رفع رفق رقب رقد رقق رقم رقى ركب ركد ركز ركس ركض ركع ركم ركن رمح رمد رمز رمضان رمم رمن رمى رهب رهط رهق رهن رهو روح رود روض روع روغ روم رويد ريب رئس ريش ريع رئف رين رئى زبد زبر زبن زبور زجج زجر زجو زحزح زحف زخرف زربيه زرع زرق زرى زعم زفر زفف زقم زكريا زكو زلزل زلف زلق زلل زلم زمر زمل زمهر زنجبيل زنم زنى زهد زهر زهق زوج زود زور زول زيت زيتون زيد زيغ زيل زين س سال سامرى سبإ سبب سبت سبح سبط سبع سبغ سبق سبل ستت ستر سجد سجر سجل سجن سجو سجيل سحب سحت سحر سحق سحل سخر سخط سدد سدر سدس سدى سراب سرادق سرب سربال سرج سرح سرد سرر سرع سرف سرق سرمد سرى سطح سطر سطو سعد سعر سعى سغب سفح سفر سفع سفك سفل سفن سفه سقر سقط سقف سقم سقى سكب سكت سكر سكن سلب سلح سلخ سلسبيل سلسل سلط سلف سلق سلك سلل سلم سلو سليمان سمد سمر سمع سمك سمم سمن سمو سنبل سند سندس سنم سنن سنه سنو سهر سهل سهم سهو سواع سوء سوح سود سور سوط سوع سوغ سوف سوق سوم سوى سيب سيح سير سئل سيل سئم سيناء سينين شبه شتت شتو شجر شحح شحم شحن شخص شدد شرب شرح شرد شرذم شرر شرط شرع شرق شرك شرى شطء شطر شطط شطن شعب شعر شعرى شعل شعيب شغف شغل شفع شفق شفه شفو شفى شقق شقو شقى شكر شكس شكك شكل شكو شمت شمخ شمس شمل شمئز شنء شهب شهد شهر شهق شهو شوب شور شوظ شوك شوى شىء شيب شيخ شيد شيع شئم شئن ص صابئون صالح صبب صبح صبر صبع صبغ صبو صحب صحف صخخ صخر صدد صدر صدع صدف صدق صدى صرح صرخ صرر صرصر صرط صرع صرف صرم صعد صعر صعق صغر صغو صفا صفح صفد صفر صفصف صفف صفن صفو صكك صلب صلح صلد صلصل صلو صلى صمت صمد صمع صمم صنع صنم صنو صهر صوب صوت صور صوع صوف صوم صيح صيد صير صيص صيف ضبح ضجع ضحك ضحو ضحى ضدد ضرب ضرر ضرع ضعف ضغث ضغن ضفدع ضلل ضمر ضمم ضنك ضنن ضهء ضوء ضير ضيز ضيع ضيف ضيق ضئن ط طاغوت طالوت طبع طبق طحو طحى طرح طرد طرف طرق طرو طعم طعن طغو طغى طفء طفف طفق طفل طلب طلح طلع طلق طلل طمث طمس طمع طمم طمن طمئن طهر طود طور طوع طوف طوفان طوق طول طوى طيب طير طين ظعن ظفر ظلل ظلم ظما ظمء ظنن ظهر ع عاد عبء عبث عبد عبر عبس عبقر عتب عتد عتق عتل عتو عثر عثو عجب عجز عجف عجل عجم عدد عدس عدل عدن عدو عذب عذر عرب عرج عرجن عرجون عرر عرش عرض عرف عرفات عرم عرو عرى عزب عزر عزز عزل عزم عزو عزى عزير عسر عسعس عسل عسى عشر عشو عصب عصر عصف عصم عصو عصى عضد عضض عضل عضو عطف عطل عطو عظم عفر عفف عفو عقب عقد عقر عقل عقم عكف علق علم علن علو على عمد عمر عمران عمق عمل عمم عمه عمى عن عنب عنت عند عنق عنكب عنكبوت عنو عنى عهد عهن عوج عود عوذ عور عوق عول عوم عون عيب عير عيسى عيش عيل عين عيى غبر غبن غثو غدر غدق غدو غرب غرر غرف غرق غرم غرو غزل غزو غسق غسل غشو غشى غصب غصص غضب غضض غطش غطو غفر غفل غلب غلظ غلف غلق غلل غلم غلو غلى غمر غمز غمض غمم غنم غنى غوث غور غوص غوط غول غوى غيب غيث غير غيض غيظ ف فتء فتح فتر فتق فتل فتن فتو فتى فجج فجر فجو فحش فخر فدى فرت فرث فرج فرح فرد فردوس فرر فرش فرض فرط فرع فرعون فرغ فرق فره فرى فزز فزع فسح فسد فسر فسق فشل فصح فصل فصم فضح فضض فضل فضو فطر فظظ فعل فقد فقر فقع فقه فكر فكك فكه فلح فلق فلك فلن فند فنن فنى فهم فوت فوج فور فوز فوض فوق فوم فوه فى فىء فئد فيض فيل فئى ق قارون قبح قبر قبس قبض قبل قتر قتل قثء قحم قد قدح قدد قدر قدس قدم قدو قذف قرآن قرء قرب قرح قرد قرر قرض قرطس قرع قرف قرن قرنين قرى قريش قسر قسط قسطس قسم قسو قسور قسيسين قشعر قصد قصر قصص قصف قصم قصو قضب قضض قضى قطر قطط قطع قطف قطمر قعد قعر قفل قفو قلب قلد قلع قلل قلم قلى قمح قمر قمص قمطر قمع قمل قنت قنط قنطر قنع قنو قنى قهر قوب قوت قوس قوع قول قوم قوى قيض قيل ك كافور كان كاين كبب كبت كبد كبر كبكب كتب كتم كثب كثر كدح كدر كدى كذب كرب كرر كرس كرم كره كسب كسد كسف كسل كسو كشط كشف كظم كعب كعبة كفت كفر كفف كفل كفو كفى كلا كلء كلب كلتا كلح كلف كلل كلم كلو كم كما كمل كمم كمه كن كند كنز كنس كنن كهف كهل كهن كوب كود كور كوكب كون كوى كى كيد كئس كيف كيل كين لا لات ل لبب لبث لبد لبس لبن لجء لجج لحد لحف لحق لحم لحن لحى لدد لدن لدى لذذ لزب لزم لسن لطف لظى لعب لعل لعن لغب لغو لفت لفح لفظ لفف لفو لقب لقح لقط لقف لقم لقمان لقى لكن لم لما لمح لمز لمس لمم لن لهب لهث لهم لهو لو لوت لوح لوذ لوط لولا لولو لوم لون لوى ليت ليس لئك ليل لين م ما ماجوج ماروت مالك متع متن متى مثل مجد مجوس محص محق محل محمد محن محو مخر مخض مدد مدن مدين مدينه مرء مرج مرح مرد مرر مرض مروه مرى مريم مزج مزق مزن مسح مسخ مسد مسس مسك مسو مسيح مشج مشعر مشى مصر مضغ مضى مطر مطو مع معز معن معى مقت مكث مكر مكن مكة مكو ملء ملح ملق ملك ملل ملو من مناة منع منن منى مهد مهل مهما مهن موت مؤتفكة موج مور موسى مول موه ميد مير ميز ميكال ميل مئى ن نا نبء نبت نبذ نبز نبط نبع نبو نتق نثر نجد نجس نجم نجو نحب نحت نحر نحس نحل نحن نخر نخل ندد ندم ندو ندى نذر نزع نزغ نزف نزل نسء نسب نسخ نسر نسف نسك نسل نسو نسى نشء نشر نشز نشط نصارى نصب نصت نصح نصر نصرانى نصف نصو نصى نضج نضخ نضد نضر نطح نطف نطق نظر نعج نعس نعق نعل نعم نغض نفث نفح نفخ نفد نفذ نفر نفس نفش نفع نفق نفل نفى نقب نقذ نقر نقص نقض نقع نقم نكب نكث نكح نكد نكر نكس نكص نكف نكل نمرق نمل نمم نن نهج نهر نهى نوء نوب نوح نور نوش نوص نوق نوم نون نوى نيل نئى ه ها هاء هات هاتوا هاتين هاروت هارون هامان هاؤم هبط هبو هتى هجد هجر هجع هدد هدم هدهد هدى هذا هذان هذه هرب هرع هزء هزز هزل هزم هشش هشم هضم هطع هكذا هل هلع هلك هلل هلم هم هما همد همر همز همس همم همن هن هنا هنالك هنء هو هود هور هؤلاء هون هوى هى هىء هيت هيج هيل هيم هيهات و وبر وبق وبل وتد وتر وتن وثق وثن وجب وجد وجس وجف وجل وجه وحد وحش وحى ودد ودع ودق ودى وذر ورث ورد ورق ورى وزر وزع وزن وسط وسع وسق وسل وسم وسن وسوس وشى وصب وصد وصف وصل وصى وضع وضن وطء وطر وطن وعد وعظ وعلن وعى وفد وفر وفض وفق وفى وقب وقت وقد وقذ وقر وقع وقف وقى وكء وكد وكز وكل ولج ولد وله ولى ونى وهب وهج وهن وهى وى وئد وئل ويل ى يا ياجوج ياقوت يبس يتم يثرب يحيى يدى يسر يعقوب يعوق يغوث يقطن يقطين يقظ يقن يمم يمن ينع يهود يوسف يوم يونس يى يئس ';
var UChars = {
	HAMZA: '\u0621',
	ALEF_WITH_MADDA_ABOVE: '\u0622',
	ALEF_WITH_HAMZA_ABOVE: '\u0623',
	WAW_WITH_HAMZA_ABOVE: '\u0624',
	ALEF_WITH_HAMZA_BELOW: '\u0625',
	YEH_WITH_HAMZA: '\u0626',
	ALEF: '\u0627',
	BEH: '\u0628',
	MARBUTA: '\u0629',
	TEH: '\u062A',
	THEH: '\u062B',
	JEMM: '\u062C',
	HAH: '\u062D',
	KHAH: '\u062E',
	DAL: '\u062F',
	THAL: '\u0630',
	REH: '\u0631',
	ZAIN: '\u0632',
	SEEN: '\u0633',
	SHEEN: '\u0634',
	SAD: '\u0635',
	DAD: '\u0636',
	TAH: '\u0637',
	ZAH: '\u0638',
	AIN: '\u0639',
	GHAIN: '\u063A',
	TATWEEL: '\u0640',
	FEH: '\u0641',
	QAF: '\u0642',
	KAF: '\u0643',
	LAM: '\u0644',
	MEEM: '\u0645',
	NOON: '\u0646',
	HEH: '\u0647',
	WAW: '\u0648',
	ALEF_MAKSURA: '\u0649',
	YEH: '\u064A',
	FATHATAN: '\u064B',
	DAMMATAN: '\u064C',
	KASRATAN: '\u064D',
	FATHA: '\u064E',
	DAMMA: '\u064F',
	KASRA: '\u0650',
	SHADDA: '\u0651',
	SUKUN: '\u0652',
	MADDA: '\u0653',
	HAMZA_ABOVE: '\u0654',
	HAMZA_BELOW: '\u0655',
	SMALL_ALEF: '\u065F',
	SUPERSCRIPT_ALEF: '\u0670',
	ALEF_WASLA: '\u0671',
	HIGH_SALA: '\u06D6',
	HIGH_GHALA: '\u06D7',
	HIGH_MEEM_INITIAL_FORM: '\u06D8',
	HIGH_LA: '\u06D9',
	HIGH_JEMM: '\u06DA',
	HIGH_THREE_DOT: '\u06DB',
	HIGH_SEEN: '\u06DC',
	RUB_EL_HIZB: '\u06DE',
	HIGH_ROUNDED_ZERO: '\u06DF',
	HIGH_UPRIGHT_ZERO: '\u06E0',
	HIGH_DOTLESS_KHAH: '\u06E1',
	HIGH_MEEM: '\u06E2',
	LOW_SEEN: '\u06E3',
	SMALL_WAW: '\u06E5',
	SMALL_YEH: '\u06E6',
	HIGH_YEH: '\u06E7',
	HIGH_NOON: '\u06E8',
	SAJDAH: '\u06E9',
	LOW_STOP: '\u06EA',
	HIGH_STOP: '\u06EB',
	HIGH_STOP_FILLED: '\u06EC',
	LOW_MEEM: '\u06ED',
	HAMZA_ABOVE_ALEF: '\u0675',
	DOTLESS_BEH: '\u066E',
	ZWNJ: '\u200C',
	NBSP: '\u00A0',
	NNBSP: '\u202F',
	FARSI_YEH: '\u06CC',
	FARSI_KEHEH: '\u06A9',
	HEH_DOACHASHMEE: '\u06BE',
	SWASH_KAF: '\u06AA',
	YEH_BARREE: '\u06D2'
}
var UGroups = {
	LETTER: "[$HAMZA-$YEH]",
	HARAKA: "[$FATHATAN-$MADDA$SUPERSCRIPT_ALEF]",
	HARAKAT: "[$FATHATAN-$MADDA$SUPERSCRIPT_ALEF$TATWEEL]",
	SPACE: "[\\s$HIGH_SALA-$LOW_MEEM]*\\s",
	HAMZA_SHAPE: "[$HAMZA_ABOVE$HAMZA$ALEF_WITH_HAMZA_ABOVE-$YEH_WITH_HAMZA]",
	LETTER_HARAKA: "[$HAMZA-$ALEF_WASLA]"
}
var Quran = {
	numAyas: 6236,
	numSuras: 114,
	numPages: 604,
	numJuzs: 30,
	suraStarts: [],
	pageStarts: [],
	juzStarts: [],
	init: function () {
		for (var i = 1; i < QuranData.Sura.length; i++)
			this.suraStarts[i] = this.getSuraStart(i);
		for (var i = 1; i < QuranData.Page.length; i++)
			this.pageStarts[i] = this.getPageStart(i);
		for (var i = 1; i < QuranData.Juz.length; i++)
			this.juzStarts[i] = this.getJuzStart(i);
	},
	getIndex: function (ayaCoord) {
		var addr = ayaCoord;
		if (Object.prototype.toString.call(addr) === '[object Array]')
			addr = {
				sura: addr[0],
				aya: addr[1]
			};
		if (typeof addr == 'object')
			addr = this.getAyaStart(addr.sura, addr.aya);
		return this.fixLineNum(addr);
	},
	getAya: function (line) {
		var sura = this.binarySearch(this.suraStarts, line);
		var aya = line - this.suraProps(sura).start + 1;
		return {
			sura: sura,
			aya: aya
		};
	},
	getAyaStart: function (sura, aya) {
		aya = aya || 1;
		return this.suraProps(sura).start + (aya - 1);
	},
	getSuraStart: function (sura) {
		return this.getAyaStart(sura);
	},
	getPageStart: function (page) {
		return this.getAyaStart(this.pageProps(page).sura, this.pageProps(page).aya);
	},
	getJuzStart: function (juz) {
		return this.getAyaStart(this.juzProps(juz).sura, this.juzProps(juz).aya);
	},
	suraProps: function (sura) {
		var s = QuranData.Sura[sura] || [0, 7];
		var data = {};
		var items = ['start', 'ayas', 'order', 'rukus', 'name', 'tname', 'ename', 'type'];
		for (var i = 0; i < items.length; i++)
			data[items[i]] = s[i];
		return data;
	},
	pageProps: function (page) {
		var page = QuranData.Page[page] || [1, 1];
		return {
			sura: page[0],
			aya: page[1]
		};
	},
	juzProps: function (juz) {
		var juz = QuranData.Juz[juz] || [1, 1];
		return {
			sura: juz[0],
			aya: juz[1]
		};
	},
	getPrevAya: function (sura, aya) {
		if (--aya == 0)
			aya = this.suraProps(--sura).ayas;
		return {
			sura: sura,
			aya: aya
		};
	},
	getNextAya: function (sura, aya) {
		if (++aya > this.suraProps(sura).ayas) {
			aya = 1;
			sura++;
		}
		return {
			sura: sura,
			aya: aya
		};
	},
	addOffset: function (sura, aya, offset, cyclic) {
		var line = this.getAyaStart(sura, aya) + offset;
		line = this.fixLineNum(line, cyclic);
		return this.getAya(line);
	},
	isOutOfRange: function (sura, aya) {
		var line = this.getAyaStart(sura, aya);
		return line < 0 || line >= this.numAyas;
	},
	fixLineNum: function (line, cyclic) {
		if (cyclic && line >= this.numAyas)
			return 0;
		return Math.min(Math.max(line, 0), this.numAyas - 1);
	},
	fixAyaNum: function (sura, aya) {
		return Math.min(Math.max(aya, 1), this.suraProps(sura).ayas);
	},
	fixSuraNum: function (sura) {
		return Math.min(Math.max(sura, 1), this.numSuras);
	},
	fixPageNum: function (page) {
		return Math.min(Math.max(page, 1), this.numPages);
	},
	fixJuzNum: function (juz) {
		return Math.min(Math.max(juz, 1), this.numJuzs);
	},
	getSuraName: function (sura, nameType) {
		nameType = nameType || 'name'
		return this.suraProps(sura)[nameType];
	},
	getSuraNum: function (suraName, nameType) {
		nameType = nameType || 'name'
		for (i = 1; i <= this.numSuras; i++)
			if (this.suraProps(i)[nameType] == suraName)
				return i;
		return 0;
	},
	getPage: function (sura, aya) {
		return this.binarySearch(this.pageStarts, this.getAyaStart(sura, aya));
	},
	getJuz: function (sura, aya) {
		return this.binarySearch(this.juzStarts, this.getAyaStart(sura, aya));
	},
	binarySearch: function (theArray, item) {
		var down = 0,
			mid;
		var up = theArray.length;
		while (up - down > 1) {
			mid = (down + up) >> 1;
			if (theArray[mid] < item) down = mid;
			else up = mid;
		}
		if (theArray[up] != item)
			return up - 1;
		return up;
	},
	getPageItems: function (page) {
		var pageArray = [];
		var from = this.pageProps(page);
		var to = this.pageProps(page + 1);
		to = this.getPrevAya(to.sura, to.aya);
		if (from.sura == to.sura)
			pageArray = pageArray.concat(this.getAyaRange(from.sura, from.aya, to.aya));
		else {
			pageArray = pageArray.concat(this.getAyaRange(from.sura, from.aya, this.suraProps(from.sura).ayas));
			for (var i = from.sura + 1; i < to.sura; i++)
				pageArray = pageArray.concat(this.getAyaRange(i, 1, this.suraProps(i).ayas));
			pageArray = pageArray.concat(this.getAyaRange(to.sura, 1, to.aya));
		}
		return pageArray;
	},
	getAyaRange: function (sura, fromAya, toAya) {
		var outArray = [];
		for (i = fromAya; i <= toAya; i++)
			outArray.push({
				sura: sura,
				aya: i
			});
		return outArray;
	}
}
Quran.init();
if (!this.JSON) {
	this.JSON = {};
}
(function () {
	function f(n) {
		return n < 10 ? '0' + n : n;
	}
	if (typeof Date.prototype.toJSON !== 'function') {
		Date.prototype.toJSON = function (key) {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null;
		};
		String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
			return this.valueOf();
		};
	}
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		gap, indent, meta = {
			'\b': '\\b',
			'\t': '\\t',
			'\n': '\\n',
			'\f': '\\f',
			'\r': '\\r',
			'"': '\\"',
			'\\': '\\\\'
		}, rep;

	function quote(string) {
		escapable.lastIndex = 0;
		return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
			var c = meta[a];
			return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		}) + '"' : '"' + string + '"';
	}

	function str(key, holder) {
		var i, k, v, length, mind = gap,
			partial, value = holder[key];
		if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}
		if (typeof rep === 'function') {
			value = rep.call(holder, key, value);
		}
		switch (typeof value) {
		case 'string':
			return quote(value);
		case 'number':
			return isFinite(value) ? String(value) : 'null';
		case 'boolean':
		case 'null':
			return String(value);
		case 'object':
			if (!value) {
				return 'null';
			}
			gap += indent;
			partial = [];
			if (Object.prototype.toString.apply(value) === '[object Array]') {
				length = value.length;
				for (i = 0; i < length; i += 1) {
					partial[i] = str(i, value) || 'null';
				}
				v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
				gap = mind;
				return v;
			}
			if (rep && typeof rep === 'object') {
				length = rep.length;
				for (i = 0; i < length; i += 1) {
					k = rep[i];
					if (typeof k === 'string') {
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			} else {
				for (k in value) {
					if (Object.hasOwnProperty.call(value, k)) {
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			}
			v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
			gap = mind;
			return v;
		}
	}
	if (typeof JSON.stringify !== 'function') {
		JSON.stringify = function (value, replacer, space) {
			var i;
			gap = '';
			indent = '';
			if (typeof space === 'number') {
				for (i = 0; i < space; i += 1) {
					indent += ' ';
				}
			} else if (typeof space === 'string') {
				indent = space;
			}
			rep = replacer;
			if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
				throw new Error('JSON.stringify');
			}
			return str('', {
				'': value
			});
		};
	}
	if (typeof JSON.parse !== 'function') {
		JSON.parse = function (text, reviver) {
			var j;

			function walk(holder, key) {
				var k, v, value = holder[key];
				if (value && typeof value === 'object') {
					for (k in value) {
						if (Object.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v;
							} else {
								delete value[k];
							}
						}
					}
				}
				return reviver.call(holder, key, value);
			}
			text = String(text);
			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx, function (a) {
					return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
				});
			}
			if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
				.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
				.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
				j = eval('(' + text + ')');
				return typeof reviver === 'function' ? walk({
					'': j
				}, '') : j;
			}
			throw new SyntaxError('JSON.parse');
		};
	}
}());
jQuery.cookie = function (key, value, options) {
	if (arguments.length > 1 && (value === null || typeof value !== "object")) {
		options = jQuery.extend({}, options);
		if (value === null) {
			options.expires = -1;
		}
		if (typeof options.expires === 'number') {
			var days = options.expires,
				t = options.expires = new Date();
			t.setDate(t.getDate() + days);
		}
		return (document.cookie = [encodeURIComponent(key), '=', options.raw ? String(value) : encodeURIComponent(String(value)), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
	}
	options = value || {};
	var result, decode = options.raw ? function (s) {
			return s;
		} : decodeURIComponent;
	return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
(function ($) {
	var locationWrapper = {
		put: function (hash, win) {
			(win || window).location.hash = this.encoder(hash);
		},
		get: function (win) {
			var hash = ((win || window).location.hash).replace(/^#/, '');
			try {
				return $.browser.mozilla ? hash : decodeURIComponent(hash);
			} catch (error) {
				return hash;
			}
		},
		encoder: encodeURIComponent
	};
	var iframeWrapper = {
		id: "__jQuery_history",
		init: function () {
			var html = '<iframe id="' + this.id + '" style="display:none" src="javascript:false;" />';
			$("body").prepend(html);
			return this;
		},
		_document: function () {
			return $("#" + this.id)[0].contentWindow.document;
		},
		put: function (hash) {
			var doc = this._document();
			doc.open();
			doc.close();
			locationWrapper.put(hash, doc);
		},
		get: function () {
			return locationWrapper.get(this._document());
		}
	};

	function initObjects(options) {
		options = $.extend({
			unescape: false
		}, options || {});
		locationWrapper.encoder = encoder(options.unescape);

		function encoder(unescape_) {
			if (unescape_ === true) {
				return function (hash) {
					return hash;
				};
			}
			if (typeof unescape_ == "string" && (unescape_ = partialDecoder(unescape_.split(""))) || typeof unescape_ == "function") {
				return function (hash) {
					return unescape_(encodeURIComponent(hash));
				};
			}
			return encodeURIComponent;
		}

		function partialDecoder(chars) {
			var re = new RegExp($.map(chars, encodeURIComponent).join("|"), "ig");
			return function (enc) {
				return enc.replace(re, decodeURIComponent);
			};
		}
	}
	var implementations = {};
	implementations.base = {
		callback: undefined,
		type: undefined,
		check: function () {},
		load: function (hash) {},
		init: function (callback, options) {
			initObjects(options);
			self.callback = callback;
			self._options = options;
			self._init();
		},
		_init: function () {},
		_options: {}
	};
	implementations.timer = {
		_appState: undefined,
		_init: function () {
			var current_hash = locationWrapper.get();
			self._appState = current_hash;
			self.callback(current_hash);
			setInterval(self.check, 100);
		},
		check: function () {
			var current_hash = locationWrapper.get();
			if (current_hash != self._appState) {
				self._appState = current_hash;
				self.callback(current_hash);
			}
		},
		load: function (hash) {
			if (hash != self._appState) {
				locationWrapper.put(hash);
				self._appState = hash;
				self.callback(hash);
			}
		}
	};
	implementations.iframeTimer = {
		_appState: undefined,
		_init: function () {
			var current_hash = locationWrapper.get();
			self._appState = current_hash;
			iframeWrapper.init().put(current_hash);
			self.callback(current_hash);
			setInterval(self.check, 100);
		},
		check: function () {
			var iframe_hash = iframeWrapper.get(),
				location_hash = locationWrapper.get();
			if (location_hash != iframe_hash) {
				if (location_hash == self._appState) {
					self._appState = iframe_hash;
					locationWrapper.put(iframe_hash);
					self.callback(iframe_hash);
				} else {
					self._appState = location_hash;
					iframeWrapper.put(location_hash);
					self.callback(location_hash);
				}
			}
		},
		load: function (hash) {
			if (hash != self._appState) {
				locationWrapper.put(hash);
				iframeWrapper.put(hash);
				self._appState = hash;
				self.callback(hash);
			}
		}
	};
	implementations.hashchangeEvent = {
		_init: function () {
			self.callback(locationWrapper.get());
			$(window).bind('hashchange', self.check);
		},
		check: function () {
			self.callback(locationWrapper.get());
		},
		load: function (hash) {
			locationWrapper.put(hash);
		}
	};
	var self = $.extend({}, implementations.base);
	if ($.browser.msie && ($.browser.version < 8 || document.documentMode < 8)) {
		self.type = 'iframeTimer';
	} else if ("onhashchange" in window) {
		self.type = 'hashchangeEvent';
	} else {
		self.type = 'timer';
	}
	$.extend(self, implementations[self.type]);
	$.history = self;
})(jQuery);
(function (jQuery) {
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function (i, attr) {
		jQuery.fx.step[attr] = function (fx) {
			if (!fx.colorInit) {
				fx.start = getColor(fx.elem, attr);
				fx.end = getRGB(fx.end);
				fx.colorInit = true;
			}
			fx.elem.style[attr] = "rgb(" + [Math.max(Math.min(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0), Math.max(Math.min(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0), Math.max(Math.min(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)].join(",") + ")";
		}
	});

	function getRGB(color) {
		var result;
		if (color && color.constructor == Array && color.length == 3)
			return color;
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1]) * 2.55, parseFloat(result[2]) * 2.55, parseFloat(result[3]) * 2.55];
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1] + result[1], 16), parseInt(result[2] + result[2], 16), parseInt(result[3] + result[3], 16)];
		if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
			return colors['transparent'];
		return colors[jQuery.trim(color).toLowerCase()];
	}

	function getColor(elem, attr) {
		var color;
		do {
			color = jQuery.css(elem, attr);
			if (color != '' && color != 'transparent' || jQuery.nodeName(elem, "body"))
				break;
			attr = "backgroundColor";
		} while (elem = elem.parentNode);
		return getRGB(color);
	};
	var colors = {
		aqua: [0, 255, 255],
		azure: [240, 255, 255],
		beige: [245, 245, 220],
		black: [0, 0, 0],
		blue: [0, 0, 255],
		brown: [165, 42, 42],
		cyan: [0, 255, 255],
		darkblue: [0, 0, 139],
		darkcyan: [0, 139, 139],
		darkgrey: [169, 169, 169],
		darkgreen: [0, 100, 0],
		darkkhaki: [189, 183, 107],
		darkmagenta: [139, 0, 139],
		darkolivegreen: [85, 107, 47],
		darkorange: [255, 140, 0],
		darkorchid: [153, 50, 204],
		darkred: [139, 0, 0],
		darksalmon: [233, 150, 122],
		darkviolet: [148, 0, 211],
		fuchsia: [255, 0, 255],
		gold: [255, 215, 0],
		green: [0, 128, 0],
		indigo: [75, 0, 130],
		khaki: [240, 230, 140],
		lightblue: [173, 216, 230],
		lightcyan: [224, 255, 255],
		lightgreen: [144, 238, 144],
		lightgrey: [211, 211, 211],
		lightpink: [255, 182, 193],
		lightyellow: [255, 255, 224],
		lime: [0, 255, 0],
		magenta: [255, 0, 255],
		maroon: [128, 0, 0],
		navy: [0, 0, 128],
		olive: [128, 128, 0],
		orange: [255, 165, 0],
		pink: [255, 192, 203],
		purple: [128, 0, 128],
		violet: [128, 0, 128],
		red: [255, 0, 0],
		silver: [192, 192, 192],
		white: [255, 255, 255],
		yellow: [255, 255, 0],
		transparent: [255, 255, 255]
	};
})(jQuery);
(function (jQuery) {
	jQuery.hotkeys = {
		version: "0.8",
		specialKeys: {
			8: "backspace",
			9: "tab",
			13: "return",
			16: "shift",
			17: "ctrl",
			18: "alt",
			19: "pause",
			20: "capslock",
			27: "esc",
			32: "space",
			33: "pageup",
			34: "pagedown",
			35: "end",
			36: "home",
			37: "left",
			38: "up",
			39: "right",
			40: "down",
			45: "insert",
			46: "del",
			96: "0",
			97: "1",
			98: "2",
			99: "3",
			100: "4",
			101: "5",
			102: "6",
			103: "7",
			104: "8",
			105: "9",
			106: "*",
			107: "+",
			109: "-",
			110: ".",
			111: "/",
			112: "f1",
			113: "f2",
			114: "f3",
			115: "f4",
			116: "f5",
			117: "f6",
			118: "f7",
			119: "f8",
			120: "f9",
			121: "f10",
			122: "f11",
			123: "f12",
			144: "numlock",
			145: "scroll",
			191: "/",
			224: "meta"
		},
		shiftNums: {
			"`": "~",
			"1": "!",
			"2": "@",
			"3": "#",
			"4": "$",
			"5": "%",
			"6": "^",
			"7": "&",
			"8": "*",
			"9": "(",
			"0": ")",
			"-": "_",
			"=": "+",
			";": ": ",
			"'": "\"",
			",": "<",
			".": ">",
			"/": "?",
			"\\": "|"
		}
	};

	function keyHandler(handleObj) {
		if (typeof handleObj.data !== "string") {
			return;
		}
		var origHandler = handleObj.handler,
			keys = handleObj.data.toLowerCase().split(" ");
		handleObj.handler = function (event) {
			if (this !== event.target && (/textarea|select/i.test(event.target.nodeName) || event.target.type === "text")) {
				return;
			}
			var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which],
				character = String.fromCharCode(event.which).toLowerCase(),
				key, modif = "",
				possible = {};
			if (event.altKey && special !== "alt") {
				modif += "alt+";
			}
			if (event.ctrlKey && special !== "ctrl") {
				modif += "ctrl+";
			}
			if (event.metaKey && !event.ctrlKey && special !== "meta") {
				modif += "meta+";
			}
			if (event.shiftKey && special !== "shift") {
				modif += "shift+";
			}
			if (special) {
				possible[modif + special] = true;
			} else {
				possible[modif + character] = true;
				possible[modif + jQuery.hotkeys.shiftNums[character]] = true;
				if (modif === "shift+") {
					possible[jQuery.hotkeys.shiftNums[character]] = true;
				}
			}
			for (var i = 0, l = keys.length; i < l; i++) {
				if (possible[keys[i]]) {
					return origHandler.apply(this, arguments);
				}
			}
		};
	}
	jQuery.each(["keydown", "keyup", "keypress"], function () {
		jQuery.event.special[this] = {
			add: keyHandler
		};
	});
})(jQuery);
(function ($) {
	function fixTitle($ele) {
		if ($ele.attr('title') || typeof ($ele.attr('original-title')) != 'string') {
			$ele.attr('original-title', $ele.attr('title') || '').removeAttr('title');
		}
	}

	function Tipsy(element, options) {
		this.$element = $(element);
		this.options = options;
		this.enabled = true;
		fixTitle(this.$element);
	}
	Tipsy.prototype = {
		show: function () {
			var title = this.getTitle();
			if (title && this.enabled) {
				var $tip = this.tip();
				$tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
				$('.tipsy').remove();
				$tip[0].className = 'tipsy';
				$tip.addClass(this.options.cls).css(this.options.css);
				$tip.remove().css({
					top: 0,
					left: 0,
					visibility: 'hidden',
					display: 'block'
				}).appendTo(document.body);
				var pos = $.extend({}, this.$element.offset(), {
					width: this.$element[0].offsetWidth,
					height: this.$element[0].offsetHeight
				});
				var actualWidth = $tip[0].offsetWidth,
					actualHeight = $tip[0].offsetHeight;
				var gravity = (typeof this.options.gravity == 'function') ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
				var tp;
				switch (gravity.charAt(0)) {
				case 'n':
					tp = {
						top: pos.top + pos.height + this.options.offset,
						left: pos.left + pos.width / 2 - actualWidth / 2
					};
					break;
				case 's':
					tp = {
						top: pos.top - actualHeight - this.options.offset,
						left: pos.left + pos.width / 2 - actualWidth / 2
					};
					break;
				case 'e':
					tp = {
						top: pos.top + pos.height / 2 - actualHeight / 2,
						left: pos.left - actualWidth - this.options.offset
					};
					break;
				case 'w':
					tp = {
						top: pos.top + pos.height / 2 - actualHeight / 2,
						left: pos.left + pos.width + this.options.offset
					};
					break;
				}
				if (gravity.length == 2) {
					if (gravity.charAt(1) == 'w') {
						tp.left = pos.left + pos.width / 2 - 15;
					} else if (gravity.charAt(1) == 'q') {
						tp.left = pos.left - 10;
					} else {
						tp.left = pos.left + pos.width / 2 - actualWidth + 15;
					}
				}
				$tip.css(tp).addClass('tipsy-' + gravity);
				if (this.options.fade) {
					$tip.stop().css({
						opacity: 0,
						display: 'block',
						visibility: 'visible'
					}).animate({
						opacity: this.options.opacity
					});
				} else {
					$tip.css({
						visibility: 'visible',
						opacity: this.options.opacity
					});
				}
			}
		},
		hide: function () {
			if (this.options.fade) {
				this.tip().stop().fadeOut(function () {
					$(this).remove();
				});
			} else {
				this.tip().remove();
			}
		},
		getTitle: function () {
			var title, $e = this.$element,
				o = this.options;
			fixTitle($e);
			var title, o = this.options;
			if (typeof o.title == 'string') {
				title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
			} else if (typeof o.title == 'function') {
				title = o.title.call($e[0]);
			}
			title = ('' + title).replace(/(^\s*|\s*$)/, "");
			return title || o.fallback;
		},
		tip: function () {
			if (!this.$tip) {
				this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
			}
			return this.$tip;
		},
		validate: function () {
			if (!this.$element[0].parentNode) {
				this.hide();
				this.$element = null;
				this.options = null;
			}
		},
		enable: function () {
			this.enabled = true;
		},
		disable: function () {
			this.enabled = false;
		},
		toggleEnabled: function () {
			this.enabled = !this.enabled;
		}
	};
	$.fn.tipsy = function (options) {
		if (options === true) {
			return this.data('tipsy');
		} else if (typeof options == 'string') {
			var tipsy = this.data('tipsy');
			if (tipsy) tipsy[options]();
			return this;
		}
		options = $.extend({}, $.fn.tipsy.defaults, options);

		function get(ele) {
			var tipsy = $.data(ele, 'tipsy');
			if (!tipsy) {
				tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
				$.data(ele, 'tipsy', tipsy);
			}
			return tipsy;
		}

		function enter() {
			var tipsy = get(this);
			tipsy.hoverState = 'in';
			if (options.delayIn == 0) {
				tipsy.show();
			} else {
				setTimeout(function () {
					if (tipsy.hoverState == 'in') tipsy.show();
				}, options.delayIn);
			}
		};

		function leave() {
			var tipsy = get(this);
			tipsy.hoverState = 'out';
			if (options.delayOut == 0) {
				tipsy.hide();
			} else {
				setTimeout(function () {
					if (tipsy.hoverState == 'out') tipsy.hide();
				}, options.delayOut);
			}
		};
		if (!options.live) this.each(function () {
			get(this);
		});
		if (options.trigger != 'manual') {
			var binder = options.live ? 'live' : 'bind',
				eventIn = options.trigger == 'hover' ? 'mouseenter' : 'focus',
				eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
			this[binder](eventIn, enter)[binder](eventOut, leave);
		}
		return this;
	};
	$.fn.tipsy.defaults = {
		delayIn: 0,
		delayOut: 0,
		fade: false,
		fallback: '',
		gravity: 'n',
		html: false,
		live: false,
		offset: 0,
		opacity: 1,
		title: 'title',
		cls: '',
		css: {},
		trigger: 'hover'
	};
	$.fn.tipsy.elementOptions = function (ele, options) {
		return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
	};
	$.fn.tipsy.autoNS = function () {
		return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
	};
	$.fn.tipsy.autoWE = function () {
		return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
	};
})(jQuery);
(function (c, h) {
	c.fn.jPlayer = function (a) {
		var b = typeof a === "string",
			d = Array.prototype.slice.call(arguments, 1),
			f = this;
		a = !b && d.length ? c.extend.apply(null, [true, a].concat(d)) : a;
		if (b && a.charAt(0) === "_") return f;
		b ? this.each(function () {
			var e = c.data(this, "jPlayer"),
				g = e && c.isFunction(e[a]) ? e[a].apply(e, d) : e;
			if (g !== e && g !== h) {
				f = g;
				return false
			}
		}) : this.each(function () {
			var e = c.data(this, "jPlayer");
			if (e) {
				e.option(a || {})._init();
				e.option(a || {})
			} else c.data(this, "jPlayer", new c.jPlayer(a, this))
		});
		return f
	};
	c.jPlayer = function (a, b) {
		if (arguments.length) {
			this.element = c(b);
			this.options = c.extend(true, {}, this.options, a);
			var d = this;
			this.element.bind("remove.jPlayer", function () {
				d.destroy()
			});
			this._init()
		}
	};
	c.jPlayer.event = {
		ready: "jPlayer_ready",
		resize: "jPlayer_resize",
		error: "jPlayer_error",
		warning: "jPlayer_warning",
		loadstart: "jPlayer_loadstart",
		progress: "jPlayer_progress",
		suspend: "jPlayer_suspend",
		abort: "jPlayer_abort",
		emptied: "jPlayer_emptied",
		stalled: "jPlayer_stalled",
		play: "jPlayer_play",
		pause: "jPlayer_pause",
		loadedmetadata: "jPlayer_loadedmetadata",
		loadeddata: "jPlayer_loadeddata",
		waiting: "jPlayer_waiting",
		playing: "jPlayer_playing",
		canplay: "jPlayer_canplay",
		canplaythrough: "jPlayer_canplaythrough",
		seeking: "jPlayer_seeking",
		seeked: "jPlayer_seeked",
		timeupdate: "jPlayer_timeupdate",
		ended: "jPlayer_ended",
		ratechange: "jPlayer_ratechange",
		durationchange: "jPlayer_durationchange",
		volumechange: "jPlayer_volumechange"
	};
	c.jPlayer.htmlEvent = ["loadstart", "abort", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplaythrough", "ratechange"];
	c.jPlayer.pause = function () {
		c.each(c.jPlayer.prototype.instances, function (a, b) {
			b.data("jPlayer").status.srcSet && b.jPlayer("pause")
		})
	};
	c.jPlayer.timeFormat = {
		showHour: false,
		showMin: true,
		showSec: true,
		padHour: false,
		padMin: true,
		padSec: true,
		sepHour: ":",
		sepMin: ":",
		sepSec: ""
	};
	c.jPlayer.convertTime = function (a) {
		a = new Date(a * 1E3);
		var b = a.getUTCHours(),
			d = a.getUTCMinutes();
		a = a.getUTCSeconds();
		b = c.jPlayer.timeFormat.padHour && b < 10 ? "0" + b : b;
		d = c.jPlayer.timeFormat.padMin && d < 10 ? "0" + d : d;
		a = c.jPlayer.timeFormat.padSec && a < 10 ? "0" + a : a;
		return (c.jPlayer.timeFormat.showHour ? b + c.jPlayer.timeFormat.sepHour : "") + (c.jPlayer.timeFormat.showMin ? d + c.jPlayer.timeFormat.sepMin : "") + (c.jPlayer.timeFormat.showSec ? a + c.jPlayer.timeFormat.sepSec : "")
	};
	c.jPlayer.uaMatch = function (a) {
		a = a.toLowerCase();
		var b = /(opera)(?:.*version)?[ \/]([\w.]+)/,
			d = /(msie) ([\w.]+)/,
			f = /(mozilla)(?:.*? rv:([\w.]+))?/;
		a = /(webkit)[ \/]([\w.]+)/.exec(a) || b.exec(a) || d.exec(a) || a.indexOf("compatible") < 0 && f.exec(a) || [];
		return {
			browser: a[1] || "",
			version: a[2] || "0"
		}
	};
	c.jPlayer.browser = {};
	var m = c.jPlayer.uaMatch(navigator.userAgent);
	if (m.browser) {
		c.jPlayer.browser[m.browser] = true;
		c.jPlayer.browser.version = m.version
	}
	c.jPlayer.prototype = {
		count: 0,
		version: {
			script: "2.0.0",
			needFlash: "2.0.0",
			flash: "unknown"
		},
		options: {
			swfPath: "js",
			solution: "html, flash",
			supplied: "mp3",
			preload: "metadata",
			volume: 0.8,
			muted: false,
			backgroundColor: "#000000",
			cssSelectorAncestor: "#jp_interface_1",
			cssSelector: {
				videoPlay: ".jp-video-play",
				play: ".jp-play",
				pause: ".jp-pause",
				stop: ".jp-stop",
				seekBar: ".jp-seek-bar",
				playBar: ".jp-play-bar",
				mute: ".jp-mute",
				unmute: ".jp-unmute",
				volumeBar: ".jp-volume-bar",
				volumeBarValue: ".jp-volume-bar-value",
				currentTime: ".jp-current-time",
				duration: ".jp-duration"
			},
			idPrefix: "jp",
			errorAlerts: false,
			warningAlerts: false
		},
		instances: {},
		status: {
			src: "",
			media: {},
			paused: true,
			format: {},
			formatType: "",
			waitForPlay: true,
			waitForLoad: true,
			srcSet: false,
			video: false,
			seekPercent: 0,
			currentPercentRelative: 0,
			currentPercentAbsolute: 0,
			currentTime: 0,
			duration: 0
		},
		_status: {
			volume: h,
			muted: false,
			width: 0,
			height: 0
		},
		internal: {
			ready: false,
			instance: h,
			htmlDlyCmdId: h
		},
		solution: {
			html: true,
			flash: true
		},
		format: {
			mp3: {
				codec: 'audio/mpeg; codecs="mp3"',
				flashCanPlay: true,
				media: "audio"
			},
			m4a: {
				codec: 'audio/mp4; codecs="mp4a.40.2"',
				flashCanPlay: true,
				media: "audio"
			},
			oga: {
				codec: 'audio/ogg; codecs="vorbis"',
				flashCanPlay: false,
				media: "audio"
			},
			wav: {
				codec: 'audio/wav; codecs="1"',
				flashCanPlay: false,
				media: "audio"
			},
			webma: {
				codec: 'audio/webm; codecs="vorbis"',
				flashCanPlay: false,
				media: "audio"
			},
			m4v: {
				codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
				flashCanPlay: true,
				media: "video"
			},
			ogv: {
				codec: 'video/ogg; codecs="theora, vorbis"',
				flashCanPlay: false,
				media: "video"
			},
			webmv: {
				codec: 'video/webm; codecs="vorbis, vp8"',
				flashCanPlay: false,
				media: "video"
			}
		},
		_init: function () {
			var a = this;
			this.element.empty();
			this.status = c.extend({}, this.status, this._status);
			this.internal = c.extend({}, this.internal);
			this.formats = [];
			this.solutions = [];
			this.require = {};
			this.htmlElement = {};
			this.html = {};
			this.html.audio = {};
			this.html.video = {};
			this.flash = {};
			this.css = {};
			this.css.cs = {};
			this.css.jq = {};
			this.status.volume = this._limitValue(this.options.volume, 0, 1);
			this.status.muted = this.options.muted;
			this.status.width = this.element.css("width");
			this.status.height = this.element.css("height");
			this.element.css({
				"background-color": this.options.backgroundColor
			});
			c.each(this.options.supplied.toLowerCase().split(","), function (e, g) {
				var i = g.replace(/^\s+|\s+$/g, "");
				if (a.format[i]) {
					var j = false;
					c.each(a.formats, function (n, k) {
						if (i === k) {
							j = true;
							return false
						}
					});
					j || a.formats.push(i)
				}
			});
			c.each(this.options.solution.toLowerCase().split(","), function (e, g) {
				var i = g.replace(/^\s+|\s+$/g, "");
				if (a.solution[i]) {
					var j = false;
					c.each(a.solutions, function (n, k) {
						if (i === k) {
							j = true;
							return false
						}
					});
					j || a.solutions.push(i)
				}
			});
			this.internal.instance = "jp_" + this.count;
			this.instances[this.internal.instance] = this.element;
			this.element.attr("id") === "" && this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count);
			this.internal.self = c.extend({}, {
				id: this.element.attr("id"),
				jq: this.element
			});
			this.internal.audio = c.extend({}, {
				id: this.options.idPrefix + "_audio_" + this.count,
				jq: h
			});
			this.internal.video = c.extend({}, {
				id: this.options.idPrefix + "_video_" + this.count,
				jq: h
			});
			this.internal.flash = c.extend({}, {
				id: this.options.idPrefix + "_flash_" + this.count,
				jq: h,
				swf: this.options.swfPath + (this.options.swfPath !== "" && this.options.swfPath.slice(-1) !== "/" ? "/" : "") + "Jplayer.swf"
			});
			this.internal.poster = c.extend({}, {
				id: this.options.idPrefix + "_poster_" + this.count,
				jq: h
			});
			c.each(c.jPlayer.event, function (e, g) {
				if (a.options[e] !== h) {
					a.element.bind(g + ".jPlayer", a.options[e]);
					a.options[e] = h
				}
			});
			this.htmlElement.poster = document.createElement("img");
			this.htmlElement.poster.id = this.internal.poster.id;
			this.htmlElement.poster.onload = function () {
				if (!a.status.video || a.status.waitForPlay) a.internal.poster.jq.show()
			};
			this.element.append(this.htmlElement.poster);
			this.internal.poster.jq = c("#" + this.internal.poster.id);
			this.internal.poster.jq.css({
				width: this.status.width,
				height: this.status.height
			});
			this.internal.poster.jq.hide();
			this.require.audio = false;
			this.require.video = false;
			c.each(this.formats, function (e, g) {
				a.require[a.format[g].media] = true
			});
			this.html.audio.available = false;
			if (this.require.audio) {
				this.htmlElement.audio = document.createElement("audio");
				this.htmlElement.audio.id = this.internal.audio.id;
				this.html.audio.available = !! this.htmlElement.audio.canPlayType
			}
			this.html.video.available = false;
			if (this.require.video) {
				this.htmlElement.video = document.createElement("video");
				this.htmlElement.video.id = this.internal.video.id;
				this.html.video.available = !! this.htmlElement.video.canPlayType
			}
			this.flash.available = this._checkForFlash(10);
			this.html.canPlay = {};
			this.flash.canPlay = {};
			c.each(this.formats, function (e, g) {
				a.html.canPlay[g] = a.html[a.format[g].media].available && "" !== a.htmlElement[a.format[g].media].canPlayType(a.format[g].codec);
				a.flash.canPlay[g] = a.format[g].flashCanPlay && a.flash.available
			});
			this.html.desired = false;
			this.flash.desired = false;
			c.each(this.solutions, function (e, g) {
				if (e === 0) a[g].desired = true;
				else {
					var i = false,
						j = false;
					c.each(a.formats, function (n, k) {
						if (a[a.solutions[0]].canPlay[k])
							if (a.format[k].media === "video") j = true;
							else i = true
					});
					a[g].desired = a.require.audio && !i || a.require.video && !j
				}
			});
			this.html.support = {};
			this.flash.support = {};
			c.each(this.formats, function (e, g) {
				a.html.support[g] = a.html.canPlay[g] && a.html.desired;
				a.flash.support[g] = a.flash.canPlay[g] && a.flash.desired
			});
			this.html.used = false;
			this.flash.used = false;
			c.each(this.solutions, function (e, g) {
				c.each(a.formats, function (i, j) {
					if (a[g].support[j]) {
						a[g].used = true;
						return false
					}
				})
			});
			this.html.used || this.flash.used || this._error({
				type: c.jPlayer.error.NO_SOLUTION,
				context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
				message: c.jPlayer.errorMsg.NO_SOLUTION,
				hint: c.jPlayer.errorHint.NO_SOLUTION
			});
			this.html.active = false;
			this.html.audio.gate = false;
			this.html.video.gate = false;
			this.flash.active = false;
			this.flash.gate = false;
			if (this.flash.used) {
				var b = "id=" + escape(this.internal.self.id) + "&vol=" + this.status.volume + "&muted=" + this.status.muted;
				if (c.browser.msie && Number(c.browser.version) <= 8) {
					var d = '<object id="' + this.internal.flash.id + '"';
					d += ' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"';
					d += ' codebase="' + document.URL.substring(0, document.URL.indexOf(":")) + '://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"';
					d += ' type="application/x-shockwave-flash"';
					d += ' width="0" height="0">';
					d += "</object>";
					var f = [];
					f[0] = '<param name="movie" value="' + this.internal.flash.swf + '" />';
					f[1] = '<param name="quality" value="high" />';
					f[2] = '<param name="FlashVars" value="' + b + '" />';
					f[3] = '<param name="allowScriptAccess" value="always" />';
					f[4] = '<param name="bgcolor" value="' + this.options.backgroundColor + '" />';
					b = document.createElement(d);
					for (d = 0; d < f.length; d++) b.appendChild(document.createElement(f[d]));
					this.element.append(b)
				} else {
					f = '<embed name="' + this.internal.flash.id + '" id="' + this.internal.flash.id + '" src="' + this.internal.flash.swf + '"';
					f += ' width="0" height="0" bgcolor="' + this.options.backgroundColor + '"';
					f += ' quality="high" FlashVars="' + b + '"';
					f += ' allowScriptAccess="always"';
					f += ' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
					this.element.append(f)
				}
				this.internal.flash.jq = c("#" + this.internal.flash.id);
				this.internal.flash.jq.css({
					width: "0px",
					height: "0px"
				})
			}
			if (this.html.used) {
				if (this.html.audio.available) {
					this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio);
					this.element.append(this.htmlElement.audio);
					this.internal.audio.jq = c("#" + this.internal.audio.id)
				}
				if (this.html.video.available) {
					this._addHtmlEventListeners(this.htmlElement.video, this.html.video);
					this.element.append(this.htmlElement.video);
					this.internal.video.jq = c("#" + this.internal.video.id);
					this.internal.video.jq.css({
						width: "0px",
						height: "0px"
					})
				}
			}
			this.html.used && !this.flash.used && window.setTimeout(function () {
				a.internal.ready = true;
				a.version.flash = "n/a";
				a._trigger(c.jPlayer.event.ready)
			}, 100);
			c.each(this.options.cssSelector, function (e, g) {
				a._cssSelector(e, g)
			});
			this._updateInterface();
			this._updateButtons(false);
			this._updateVolume(this.status.volume);
			this._updateMute(this.status.muted);
			this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
			c.jPlayer.prototype.count++
		},
		destroy: function () {
			this._resetStatus();
			this._updateInterface();
			this._seeked();
			this.css.jq.currentTime.length && this.css.jq.currentTime.text("");
			this.css.jq.duration.length && this.css.jq.duration.text("");
			this.status.srcSet && this.pause();
			c.each(this.css.jq, function (a, b) {
				b.unbind(".jPlayer")
			});
			this.element.removeData("jPlayer");
			this.element.unbind(".jPlayer");
			this.element.empty();
			this.instances[this.internal.instance] = h
		},
		enable: function () {},
		disable: function () {},
		_addHtmlEventListeners: function (a, b) {
			var d = this;
			a.preload = this.options.preload;
			a.muted = this.options.muted;
			a.addEventListener("progress", function () {
				if (b.gate && !d.status.waitForLoad) {
					d._getHtmlStatus(a);
					d._updateInterface();
					d._trigger(c.jPlayer.event.progress)
				}
			}, false);
			a.addEventListener("timeupdate", function () {
				if (b.gate && !d.status.waitForLoad) {
					d._getHtmlStatus(a);
					d._updateInterface();
					d._trigger(c.jPlayer.event.timeupdate)
				}
			}, false);
			a.addEventListener("durationchange", function () {
				if (b.gate && !d.status.waitForLoad) {
					d.status.duration = this.duration;
					d._getHtmlStatus(a);
					d._updateInterface();
					d._trigger(c.jPlayer.event.durationchange)
				}
			}, false);
			a.addEventListener("play", function () {
				if (b.gate && !d.status.waitForLoad) {
					d._updateButtons(true);
					d._trigger(c.jPlayer.event.play)
				}
			}, false);
			a.addEventListener("playing", function () {
				if (b.gate && !d.status.waitForLoad) {
					d._updateButtons(true);
					d._seeked();
					d._trigger(c.jPlayer.event.playing)
				}
			}, false);
			a.addEventListener("pause", function () {
				if (b.gate && !d.status.waitForLoad) {
					d._updateButtons(false);
					d._trigger(c.jPlayer.event.pause)
				}
			}, false);
			a.addEventListener("waiting", function () {
				if (b.gate && !d.status.waitForLoad) {
					d._seeking();
					d._trigger(c.jPlayer.event.waiting)
				}
			}, false);
			a.addEventListener("canplay", function () {
				if (b.gate && !d.status.waitForLoad) {
					a.volume = d._volumeFix(d.status.volume);
					d._trigger(c.jPlayer.event.canplay)
				}
			}, false);
			a.addEventListener("seeking", function () {
				if (b.gate && !d.status.waitForLoad) {
					d._seeking();
					d._trigger(c.jPlayer.event.seeking)
				}
			}, false);
			a.addEventListener("seeked", function () {
				if (b.gate && !d.status.waitForLoad) {
					d._seeked();
					d._trigger(c.jPlayer.event.seeked)
				}
			}, false);
			a.addEventListener("suspend", function () {
				if (b.gate && !d.status.waitForLoad) {
					d._seeked();
					d._trigger(c.jPlayer.event.suspend)
				}
			}, false);
			a.addEventListener("ended", function () {
				if (b.gate && !d.status.waitForLoad) {
					if (!c.jPlayer.browser.webkit) d.htmlElement.media.currentTime = 0;
					d.htmlElement.media.pause();
					d._updateButtons(false);
					d._getHtmlStatus(a, true);
					d._updateInterface();
					d._trigger(c.jPlayer.event.ended)
				}
			}, false);
			a.addEventListener("error", function () {
				if (b.gate && !d.status.waitForLoad) {
					d._updateButtons(false);
					d._seeked();
					if (d.status.srcSet) {
						d.status.waitForLoad = true;
						d.status.waitForPlay = true;
						d.status.video && d.internal.video.jq.css({
							width: "0px",
							height: "0px"
						});
						d._validString(d.status.media.poster) && d.internal.poster.jq.show();
						d.css.jq.videoPlay.length && d.css.jq.videoPlay.show();
						d._error({
							type: c.jPlayer.error.URL,
							context: d.status.src,
							message: c.jPlayer.errorMsg.URL,
							hint: c.jPlayer.errorHint.URL
						})
					}
				}
			}, false);
			c.each(c.jPlayer.htmlEvent, function (f, e) {
				a.addEventListener(this, function () {
					b.gate && !d.status.waitForLoad && d._trigger(c.jPlayer.event[e])
				}, false)
			})
		},
		_getHtmlStatus: function (a, b) {
			var d = 0,
				f = 0,
				e = 0,
				g = 0;
			d = a.currentTime;
			f = this.status.duration > 0 ? 100 * d / this.status.duration : 0;
			if (typeof a.seekable === "object" && a.seekable.length > 0) {
				e = this.status.duration > 0 ? 100 * a.seekable.end(a.seekable.length - 1) / this.status.duration : 100;
				g = 100 * a.currentTime / a.seekable.end(a.seekable.length - 1)
			} else {
				e = 100;
				g = f
			} if (b) f = g = d = 0;
			this.status.seekPercent = e;
			this.status.currentPercentRelative = g;
			this.status.currentPercentAbsolute = f;
			this.status.currentTime = d
		},
		_resetStatus: function () {
			this.status = c.extend({}, this.status, c.jPlayer.prototype.status)
		},
		_trigger: function (a, b, d) {
			a = c.Event(a);
			a.jPlayer = {};
			a.jPlayer.version = c.extend({}, this.version);
			a.jPlayer.status = c.extend(true, {}, this.status);
			a.jPlayer.html = c.extend(true, {}, this.html);
			a.jPlayer.flash = c.extend(true, {}, this.flash);
			if (b) a.jPlayer.error = c.extend({}, b);
			if (d) a.jPlayer.warning = c.extend({}, d);
			this.element.trigger(a)
		},
		jPlayerFlashEvent: function (a, b) {
			if (a === c.jPlayer.event.ready && !this.internal.ready) {
				this.internal.ready = true;
				this.version.flash = b.version;
				this.version.needFlash !== this.version.flash && this._error({
					type: c.jPlayer.error.VERSION,
					context: this.version.flash,
					message: c.jPlayer.errorMsg.VERSION + this.version.flash,
					hint: c.jPlayer.errorHint.VERSION
				});
				this._trigger(a)
			}
			if (this.flash.gate) switch (a) {
			case c.jPlayer.event.progress:
				this._getFlashStatus(b);
				this._updateInterface();
				this._trigger(a);
				break;
			case c.jPlayer.event.timeupdate:
				this._getFlashStatus(b);
				this._updateInterface();
				this._trigger(a);
				break;
			case c.jPlayer.event.play:
				this._seeked();
				this._updateButtons(true);
				this._trigger(a);
				break;
			case c.jPlayer.event.pause:
				this._updateButtons(false);
				this._trigger(a);
				break;
			case c.jPlayer.event.ended:
				this._updateButtons(false);
				this._trigger(a);
				break;
			case c.jPlayer.event.error:
				this.status.waitForLoad = true;
				this.status.waitForPlay = true;
				this.status.video && this.internal.flash.jq.css({
					width: "0px",
					height: "0px"
				});
				this._validString(this.status.media.poster) && this.internal.poster.jq.show();
				this.css.jq.videoPlay.length && this.css.jq.videoPlay.show();
				this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media);
				this._error({
					type: c.jPlayer.error.URL,
					context: b.src,
					message: c.jPlayer.errorMsg.URL,
					hint: c.jPlayer.errorHint.URL
				});
				break;
			case c.jPlayer.event.seeking:
				this._seeking();
				this._trigger(a);
				break;
			case c.jPlayer.event.seeked:
				this._seeked();
				this._trigger(a);
				break;
			default:
				this._trigger(a)
			}
			return false
		},
		_getFlashStatus: function (a) {
			this.status.seekPercent = a.seekPercent;
			this.status.currentPercentRelative = a.currentPercentRelative;
			this.status.currentPercentAbsolute = a.currentPercentAbsolute;
			this.status.currentTime = a.currentTime;
			this.status.duration = a.duration
		},
		_updateButtons: function (a) {
			this.status.paused = !a;
			if (this.css.jq.play.length && this.css.jq.pause.length)
				if (a) {
					this.css.jq.play.hide();
					this.css.jq.pause.show()
				} else {
					this.css.jq.play.show();
					this.css.jq.pause.hide()
				}
		},
		_updateInterface: function () {
			this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%");
			this.css.jq.playBar.length && this.css.jq.playBar.width(this.status.currentPercentRelative + "%");
			this.css.jq.currentTime.length && this.css.jq.currentTime.text(c.jPlayer.convertTime(this.status.currentTime));
			this.css.jq.duration.length && this.css.jq.duration.text(c.jPlayer.convertTime(this.status.duration))
		},
		_seeking: function () {
			this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
		},
		_seeked: function () {
			this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
		},
		setMedia: function (a) {
			var b = this;
			this._seeked();
			clearTimeout(this.internal.htmlDlyCmdId);
			var d = this.html.audio.gate,
				f = this.html.video.gate,
				e = false;
			c.each(this.formats, function (g, i) {
				var j = b.format[i].media === "video";
				c.each(b.solutions, function (n, k) {
					if (b[k].support[i] && b._validString(a[i])) {
						var l = k === "html";
						if (j)
							if (l) {
								b.html.audio.gate = false;
								b.html.video.gate = true;
								b.flash.gate = false
							} else {
								b.html.audio.gate = false;
								b.html.video.gate = false;
								b.flash.gate = true
							} else if (l) {
							b.html.audio.gate = true;
							b.html.video.gate = false;
							b.flash.gate = false
						} else {
							b.html.audio.gate = false;
							b.html.video.gate = false;
							b.flash.gate = true
						} if (b.flash.active || b.html.active && b.flash.gate || d === b.html.audio.gate && f === b.html.video.gate) b.clearMedia();
						else if (d !== b.html.audio.gate && f !== b.html.video.gate) {
							b._html_pause();
							b.status.video && b.internal.video.jq.css({
								width: "0px",
								height: "0px"
							});
							b._resetStatus()
						}
						if (j) {
							if (l) {
								b._html_setVideo(a);
								b.html.active = true;
								b.flash.active = false
							} else {
								b._flash_setVideo(a);
								b.html.active = false;
								b.flash.active = true
							}
							b.css.jq.videoPlay.length && b.css.jq.videoPlay.show();
							b.status.video = true
						} else {
							if (l) {
								b._html_setAudio(a);
								b.html.active = true;
								b.flash.active = false
							} else {
								b._flash_setAudio(a);
								b.html.active = false;
								b.flash.active = true
							}
							b.css.jq.videoPlay.length && b.css.jq.videoPlay.hide();
							b.status.video = false
						}
						e = true;
						return false
					}
				});
				if (e) return false
			});
			if (e) {
				if (this._validString(a.poster))
					if (this.htmlElement.poster.src !== a.poster) this.htmlElement.poster.src = a.poster;
					else this.internal.poster.jq.show();
					else this.internal.poster.jq.hide();
				this.status.srcSet = true;
				this.status.media = c.extend({}, a);
				this._updateButtons(false);
				this._updateInterface()
			} else {
				this.status.srcSet && !this.status.waitForPlay && this.pause();
				this.html.audio.gate = false;
				this.html.video.gate = false;
				this.flash.gate = false;
				this.html.active = false;
				this.flash.active = false;
				this._resetStatus();
				this._updateInterface();
				this._updateButtons(false);
				this.internal.poster.jq.hide();
				this.html.used && this.require.video && this.internal.video.jq.css({
					width: "0px",
					height: "0px"
				});
				this.flash.used && this.internal.flash.jq.css({
					width: "0px",
					height: "0px"
				});
				this._error({
					type: c.jPlayer.error.NO_SUPPORT,
					context: "{supplied:'" + this.options.supplied + "'}",
					message: c.jPlayer.errorMsg.NO_SUPPORT,
					hint: c.jPlayer.errorHint.NO_SUPPORT
				})
			}
		},
		clearMedia: function () {
			this._resetStatus();
			this._updateButtons(false);
			this.internal.poster.jq.hide();
			clearTimeout(this.internal.htmlDlyCmdId);
			if (this.html.active) this._html_clearMedia();
			else this.flash.active && this._flash_clearMedia()
		},
		load: function () {
			if (this.status.srcSet)
				if (this.html.active) this._html_load();
				else this.flash.active && this._flash_load();
				else this._urlNotSetError("load")
		},
		play: function (a) {
			a = typeof a === "number" ? a : NaN;
			if (this.status.srcSet)
				if (this.html.active) this._html_play(a);
				else this.flash.active && this._flash_play(a);
				else this._urlNotSetError("play")
		},
		videoPlay: function () {
			this.play()
		},
		pause: function (a) {
			a = typeof a === "number" ? a : NaN;
			if (this.status.srcSet)
				if (this.html.active) this._html_pause(a);
				else this.flash.active && this._flash_pause(a);
				else this._urlNotSetError("pause")
		},
		pauseOthers: function () {
			var a = this;
			c.each(this.instances, function (b, d) {
				a.element !== d && d.data("jPlayer").status.srcSet && d.jPlayer("pause")
			})
		},
		stop: function () {
			if (this.status.srcSet)
				if (this.html.active) this._html_pause(0);
				else this.flash.active && this._flash_pause(0);
				else this._urlNotSetError("stop")
		},
		playHead: function (a) {
			a = this._limitValue(a, 0, 100);
			if (this.status.srcSet)
				if (this.html.active) this._html_playHead(a);
				else this.flash.active && this._flash_playHead(a);
				else this._urlNotSetError("playHead")
		},
		mute: function () {
			this.status.muted = true;
			this.html.used && this._html_mute(true);
			this.flash.used && this._flash_mute(true);
			this._updateMute(true);
			this._updateVolume(0);
			this._trigger(c.jPlayer.event.volumechange)
		},
		unmute: function () {
			this.status.muted = false;
			this.html.used && this._html_mute(false);
			this.flash.used && this._flash_mute(false);
			this._updateMute(false);
			this._updateVolume(this.status.volume);
			this._trigger(c.jPlayer.event.volumechange)
		},
		_updateMute: function (a) {
			if (this.css.jq.mute.length && this.css.jq.unmute.length)
				if (a) {
					this.css.jq.mute.hide();
					this.css.jq.unmute.show()
				} else {
					this.css.jq.mute.show();
					this.css.jq.unmute.hide()
				}
		},
		volume: function (a) {
			a = this._limitValue(a, 0, 1);
			this.status.volume = a;
			this.html.used && this._html_volume(a);
			this.flash.used && this._flash_volume(a);
			this.status.muted || this._updateVolume(a);
			this._trigger(c.jPlayer.event.volumechange)
		},
		volumeBar: function (a) {
			if (!this.status.muted && this.css.jq.volumeBar) {
				var b = this.css.jq.volumeBar.offset();
				a = a.pageX - b.left;
				b = this.css.jq.volumeBar.width();
				this.volume(a / b)
			}
		},
		volumeBarValue: function (a) {
			this.volumeBar(a)
		},
		_updateVolume: function (a) {
			this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.width(a * 100 + "%")
		},
		_volumeFix: function (a) {
			var b = 0.0010 * Math.random();
			return a + (a < 0.5 ? b : -b)
		},
		_cssSelectorAncestor: function (a, b) {
			this.options.cssSelectorAncestor = a;
			b && c.each(this.options.cssSelector, function (d, f) {
				self._cssSelector(d, f)
			})
		},
		_cssSelector: function (a, b) {
			var d = this;
			if (typeof b === "string")
				if (c.jPlayer.prototype.options.cssSelector[a]) {
					this.css.jq[a] && this.css.jq[a].length && this.css.jq[a].unbind(".jPlayer");
					this.options.cssSelector[a] = b;
					this.css.cs[a] = this.options.cssSelectorAncestor + " " + b;
					this.css.jq[a] = b ? c(this.css.cs[a]) : [];
					this.css.jq[a].length && this.css.jq[a].bind("click.jPlayer", function (f) {
						d[a](f);
						c(this).blur();
						return false
					});
					b && this.css.jq[a].length !== 1 && this._warning({
						type: c.jPlayer.warning.CSS_SELECTOR_COUNT,
						context: this.css.cs[a],
						message: c.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[a].length + " found for " + a + " method.",
						hint: c.jPlayer.warningHint.CSS_SELECTOR_COUNT
					})
				} else this._warning({
					type: c.jPlayer.warning.CSS_SELECTOR_METHOD,
					context: a,
					message: c.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
					hint: c.jPlayer.warningHint.CSS_SELECTOR_METHOD
				});
				else this._warning({
					type: c.jPlayer.warning.CSS_SELECTOR_STRING,
					context: b,
					message: c.jPlayer.warningMsg.CSS_SELECTOR_STRING,
					hint: c.jPlayer.warningHint.CSS_SELECTOR_STRING
				})
		},
		seekBar: function (a) {
			if (this.css.jq.seekBar) {
				var b = this.css.jq.seekBar.offset();
				a = a.pageX - b.left;
				b = this.css.jq.seekBar.width();
				this.playHead(100 * a / b)
			}
		},
		playBar: function (a) {
			this.seekBar(a)
		},
		currentTime: function () {},
		duration: function () {},
		option: function (a, b) {
			var d = a;
			if (arguments.length === 0) return c.extend(true, {}, this.options);
			if (typeof a === "string") {
				var f = a.split(".");
				if (b === h) {
					for (var e = c.extend(true, {}, this.options), g = 0; g < f.length; g++)
						if (e[f[g]] !== h) e = e[f[g]];
						else {
							this._warning({
								type: c.jPlayer.warning.OPTION_KEY,
								context: a,
								message: c.jPlayer.warningMsg.OPTION_KEY,
								hint: c.jPlayer.warningHint.OPTION_KEY
							});
							return h
						}
					return e
				}
				e = d = {};
				for (g = 0; g < f.length; g++)
					if (g < f.length - 1) {
						e[f[g]] = {};
						e = e[f[g]]
					} else e[f[g]] = b
			}
			this._setOptions(d);
			return this
		},
		_setOptions: function (a) {
			var b = this;
			c.each(a, function (d, f) {
				b._setOption(d, f)
			});
			return this
		},
		_setOption: function (a, b) {
			var d = this;
			switch (a) {
			case "cssSelectorAncestor":
				this.options[a] = b;
				c.each(d.options.cssSelector, function (f, e) {
					d._cssSelector(f, e)
				});
				break;
			case "cssSelector":
				c.each(b, function (f, e) {
					d._cssSelector(f, e)
				})
			}
			return this
		},
		resize: function (a) {
			this.html.active && this._resizeHtml(a);
			this.flash.active && this._resizeFlash(a);
			this._trigger(c.jPlayer.event.resize)
		},
		_resizePoster: function () {},
		_resizeHtml: function () {},
		_resizeFlash: function (a) {
			this.internal.flash.jq.css({
				width: a.width,
				height: a.height
			})
		},
		_html_initMedia: function () {
			this.status.srcSet && !this.status.waitForPlay && this.htmlElement.media.pause();
			this.options.preload !== "none" && this._html_load();
			this._trigger(c.jPlayer.event.timeupdate)
		},
		_html_setAudio: function (a) {
			var b = this;
			c.each(this.formats, function (d, f) {
				if (b.html.support[f] && a[f]) {
					b.status.src = a[f];
					b.status.format[f] = true;
					b.status.formatType = f;
					return false
				}
			});
			this.htmlElement.media = this.htmlElement.audio;
			this._html_initMedia()
		},
		_html_setVideo: function (a) {
			var b = this;
			c.each(this.formats, function (d, f) {
				if (b.html.support[f] && a[f]) {
					b.status.src = a[f];
					b.status.format[f] = true;
					b.status.formatType = f;
					return false
				}
			});
			this.htmlElement.media = this.htmlElement.video;
			this._html_initMedia()
		},
		_html_clearMedia: function () {
			if (this.htmlElement.media) {
				this.htmlElement.media.id === this.internal.video.id && this.internal.video.jq.css({
					width: "0px",
					height: "0px"
				});
				this.htmlElement.media.pause();
				this.htmlElement.media.src = "";
				c.browser.msie && Number(c.browser.version) >= 9 || this.htmlElement.media.load()
			}
		},
		_html_load: function () {
			if (this.status.waitForLoad) {
				this.status.waitForLoad = false;
				this.htmlElement.media.src = this.status.src;
				try {
					this.htmlElement.media.load()
				} catch (a) {}
			}
			clearTimeout(this.internal.htmlDlyCmdId)
		},
		_html_play: function (a) {
			var b = this;
			this._html_load();
			this.htmlElement.media.play();
			if (!isNaN(a)) try {
				this.htmlElement.media.currentTime = a
			} catch (d) {
				this.internal.htmlDlyCmdId = setTimeout(function () {
					b.play(a)
				}, 100);
				return
			}
			this._html_checkWaitForPlay()
		},
		_html_pause: function (a) {
			var b = this;
			a > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId);
			this.htmlElement.media.pause();
			if (!isNaN(a)) try {
				this.htmlElement.media.currentTime = a
			} catch (d) {
				this.internal.htmlDlyCmdId = setTimeout(function () {
					b.pause(a)
				}, 100);
				return
			}
			a > 0 && this._html_checkWaitForPlay()
		},
		_html_playHead: function (a) {
			var b = this;
			this._html_load();
			try {
				if (typeof this.htmlElement.media.seekable === "object" && this.htmlElement.media.seekable.length > 0) this.htmlElement.media.currentTime = a * this.htmlElement.media.seekable.end(this.htmlElement.media.seekable.length - 1) / 100;
				else if (this.htmlElement.media.duration > 0 && !isNaN(this.htmlElement.media.duration)) this.htmlElement.media.currentTime = a * this.htmlElement.media.duration / 100;
				else throw "e";
			} catch (d) {
				this.internal.htmlDlyCmdId = setTimeout(function () {
					b.playHead(a)
				}, 100);
				return
			}
			this.status.waitForLoad || this._html_checkWaitForPlay()
		},
		_html_checkWaitForPlay: function () {
			if (this.status.waitForPlay) {
				this.status.waitForPlay = false;
				this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
				if (this.status.video) {
					this.internal.poster.jq.hide();
					this.internal.video.jq.css({
						width: this.status.width,
						height: this.status.height
					})
				}
			}
		},
		_html_volume: function (a) {
			if (this.html.audio.available) this.htmlElement.audio.volume = a;
			if (this.html.video.available) this.htmlElement.video.volume = a
		},
		_html_mute: function (a) {
			if (this.html.audio.available) this.htmlElement.audio.muted = a;
			if (this.html.video.available) this.htmlElement.video.muted = a
		},
		_flash_setAudio: function (a) {
			var b = this;
			try {
				c.each(this.formats, function (f, e) {
					if (b.flash.support[e] && a[e]) {
						switch (e) {
						case "m4a":
							b._getMovie().fl_setAudio_m4a(a[e]);
							break;
						case "mp3":
							b._getMovie().fl_setAudio_mp3(a[e])
						}
						b.status.src = a[e];
						b.status.format[e] = true;
						b.status.formatType = e;
						return false
					}
				});
				if (this.options.preload === "auto") {
					this._flash_load();
					this.status.waitForLoad = false
				}
			} catch (d) {
				this._flashError(d)
			}
		},
		_flash_setVideo: function (a) {
			var b = this;
			try {
				c.each(this.formats, function (f, e) {
					if (b.flash.support[e] && a[e]) {
						switch (e) {
						case "m4v":
							b._getMovie().fl_setVideo_m4v(a[e])
						}
						b.status.src = a[e];
						b.status.format[e] = true;
						b.status.formatType = e;
						return false
					}
				});
				if (this.options.preload === "auto") {
					this._flash_load();
					this.status.waitForLoad = false
				}
			} catch (d) {
				this._flashError(d)
			}
		},
		_flash_clearMedia: function () {
			this.internal.flash.jq.css({
				width: "0px",
				height: "0px"
			});
			try {
				this._getMovie().fl_clearMedia()
			} catch (a) {
				this._flashError(a)
			}
		},
		_flash_load: function () {
			try {
				this._getMovie().fl_load()
			} catch (a) {
				this._flashError(a)
			}
			this.status.waitForLoad = false
		},
		_flash_play: function (a) {
			try {
				this._getMovie().fl_play(a)
			} catch (b) {
				this._flashError(b)
			}
			this.status.waitForLoad = false;
			this._flash_checkWaitForPlay()
		},
		_flash_pause: function (a) {
			try {
				this._getMovie().fl_pause(a)
			} catch (b) {
				this._flashError(b)
			}
			if (a > 0) {
				this.status.waitForLoad = false;
				this._flash_checkWaitForPlay()
			}
		},
		_flash_playHead: function (a) {
			try {
				this._getMovie().fl_play_head(a)
			} catch (b) {
				this._flashError(b)
			}
			this.status.waitForLoad || this._flash_checkWaitForPlay()
		},
		_flash_checkWaitForPlay: function () {
			if (this.status.waitForPlay) {
				this.status.waitForPlay = false;
				this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide();
				if (this.status.video) {
					this.internal.poster.jq.hide();
					this.internal.flash.jq.css({
						width: this.status.width,
						height: this.status.height
					})
				}
			}
		},
		_flash_volume: function (a) {
			try {
				this._getMovie().fl_volume(a)
			} catch (b) {
				this._flashError(b)
			}
		},
		_flash_mute: function (a) {
			try {
				this._getMovie().fl_mute(a)
			} catch (b) {
				this._flashError(b)
			}
		},
		_getMovie: function () {
			return document[this.internal.flash.id]
		},
		_checkForFlash: function (a) {
			var b = false,
				d;
			if (window.ActiveXObject) try {
				new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + a);
				b = true
			} catch (f) {} else if (navigator.plugins && navigator.mimeTypes.length > 0)
				if (d = navigator.plugins["Shockwave Flash"])
					if (navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1") >= a) b = true;
			return c.browser.msie && Number(c.browser.version) >= 9 ? false : b
		},
		_validString: function (a) {
			return a && typeof a === "string"
		},
		_limitValue: function (a, b, d) {
			return a < b ? b : a > d ? d : a
		},
		_urlNotSetError: function (a) {
			this._error({
				type: c.jPlayer.error.URL_NOT_SET,
				context: a,
				message: c.jPlayer.errorMsg.URL_NOT_SET,
				hint: c.jPlayer.errorHint.URL_NOT_SET
			})
		},
		_flashError: function (a) {
			this._error({
				type: c.jPlayer.error.FLASH,
				context: this.internal.flash.swf,
				message: c.jPlayer.errorMsg.FLASH + a.message,
				hint: c.jPlayer.errorHint.FLASH
			})
		},
		_error: function (a) {
			this._trigger(c.jPlayer.event.error, a);
			if (this.options.errorAlerts) this._alert("Error!" + (a.message ? "\n\n" + a.message : "") + (a.hint ? "\n\n" + a.hint : "") + "\n\nContext: " + a.context)
		},
		_warning: function (a) {
			this._trigger(c.jPlayer.event.warning, h, a);
			if (this.options.errorAlerts) this._alert("Warning!" + (a.message ? "\n\n" + a.message : "") + (a.hint ? "\n\n" + a.hint : "") + "\n\nContext: " + a.context)
		},
		_alert: function (a) {
			alert("jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + a)
		}
	};
	c.jPlayer.error = {
		FLASH: "e_flash",
		NO_SOLUTION: "e_no_solution",
		NO_SUPPORT: "e_no_support",
		URL: "e_url",
		URL_NOT_SET: "e_url_not_set",
		VERSION: "e_version"
	};
	c.jPlayer.errorMsg = {
		FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
		NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
		NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
		URL: "Media URL could not be loaded.",
		URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
		VERSION: "jPlayer " + c.jPlayer.prototype.version.script + " needs Jplayer.swf version " + c.jPlayer.prototype.version.needFlash + " but found "
	};
	c.jPlayer.errorHint = {
		FLASH: "Check your swfPath option and that Jplayer.swf is there.",
		NO_SOLUTION: "Review the jPlayer options: support and supplied.",
		NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
		URL: "Check media URL is valid.",
		URL_NOT_SET: "Use setMedia() to set the media URL.",
		VERSION: "Update jPlayer files."
	};
	c.jPlayer.warning = {
		CSS_SELECTOR_COUNT: "e_css_selector_count",
		CSS_SELECTOR_METHOD: "e_css_selector_method",
		CSS_SELECTOR_STRING: "e_css_selector_string",
		OPTION_KEY: "e_option_key"
	};
	c.jPlayer.warningMsg = {
		CSS_SELECTOR_COUNT: "The number of methodCssSelectors found did not equal one: ",
		CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
		CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
		OPTION_KEY: "The option requested in jPlayer('option') is undefined."
	};
	c.jPlayer.warningHint = {
		CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
		CSS_SELECTOR_METHOD: "Check your method name.",
		CSS_SELECTOR_STRING: "Check your css selector is a string.",
		OPTION_KEY: "Check your option name."
	}
})(jQuery);
var QuranText = {
	text: {},
	init: function () {
		for (var i in quranTypes)
			this.text[i] = [];
	},
	get: function (ayaCoord, textType) {
		textType = textType || curr.quran;
		var index = Quran.getIndex(ayaCoord);
		return this.text[textType][index];
	},
	set: function (ayaCoord, value, textType) {
		textType = textType || curr.quran;
		var index = Quran.getIndex(ayaCoord);
		this.text[textType][index] = value;
	},
	end: 0
};
var TransText = {
	text: {},
	init: function () {
		for (var i in transList)
			this.text[i] = [];
	},
	get: function (ayaCoord, textType) {
		textType = textType || curr.trans;
		var index = Quran.getIndex(ayaCoord);
		var text = this.text[curr.trans][index];
		return text;
	},
	set: function (ayaCoord, value, textType) {
		textType = textType || curr.trans;
		var index = Quran.getIndex(ayaCoord);
		this.text[textType][index] = value;
	},
	fetch: function (ayaCoord, textType) {
		textType = textType || curr.trans;
		var s = Quran.getIndex(ayaCoord);
		var t = s;
		while ($.trim(this.text[textType][s--]) == '=');
		while ($.trim(this.text[textType][++t]) == '=');
		s++;
		t--;
		var coord = Quran.getAya(s);
		return {
			text: this.text[textType][s] || '',
			sura: coord.sura,
			aya: coord.aya,
			ayaTo: coord.aya + t - s
		};
	},
	end: 0
};
var isIE = jQuery.browser.msie
var isIE6 = isIE && parseFloat(jQuery.browser.version) < 7;
var isIE7 = isIE && parseFloat(jQuery.browser.version) < 8;
var isIE9 = isIE && parseFloat(jQuery.browser.version) >= 9;
var isOpera = jQuery.browser.opera;
var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
var isFF4 = isFirefox && parseFloat(jQuery.browser.version) >= 2;
var isOldFirefox = isFirefox && !document.getElementsByClassName;
var isChrome = /chrome/.test(navigator.userAgent.toLowerCase());
var isMac = /mac/i.test(navigator.platform);
var isSafari = /Safari/i.test(navigator.userAgent);
var isMSafari = /webkit.*mobile/i.test(navigator.userAgent);
var isiPad = /iPad/i.test(navigator.userAgent);
var localhost = location.href.indexOf("localhost") != -1;
var domain = document.location.href.split('#')[0];
var server = domain.split('/')[2];
var isTest = localhost;
(function ($) {
	$.fn.isChecked = function () {
		return $(this).is(':checked');
	};
	$.fn.toggleCheck = function (swtch) {
		return $(this).attr('checked', swtch ? 'checked' : '');
	};
	$.isInArray = function (aValue, anArray) {
		return $.inArray(aValue, anArray) >= 0;
	};
	$.pad = function (number, length) {
		var str = '' + number;
		while (str.length < length)
			str = '0' + str;
		return str;
	};
	$.clone = function (object) {
		return $.extend(true, {}, object);
	};
	$.Radio = {
		val: function (name, val) {
			if (isSet(val))
				return $('input[name=' + name + '][value=' + val + ']').attr('checked', 'checked');
			else
				return $('input[name=' + name + ']:checked').val();
		}
	};
	var imagesCache = [];
	$.preloadImages = function () {
		for (var i = arguments.length; i--;) {
			var cacheImage = document.createElement('img');
			cacheImage.src = arguments[i];
			imagesCache.push(cacheImage);
		}
	};
	$.extend($.fn.disableTextSelect = function () {
		return this.each(function () {
			if ($.browser.mozilla) {
				$(this).css('MozUserSelect', 'none');
			} else if ($.browser.msie) {
				$(this).bind('selectstart', function () {
					return false;
				});
			} else {
				$(this).mousedown(function () {
					return false;
				});
			}
		});
	});
})(jQuery);
if (isMSafari) {
	(function ($) {
		$.fn.offsetOld = $.fn.offset;
		$.fn.offset = function () {
			var result = this.offsetOld();
			result.top -= window.scrollY;
			result.left -= window.scrollX;
			return result;
		};
	})(jQuery);
}

function unselect() {
	if (document.selection) {
		try {
			document.selection.empty();
		} catch (e) {}
	} else
		window.getSelection().removeAllRanges();
}

function _(str) {
	return Consts[str] ? Consts[str] : str;
}

function _num(num, lang, digitsOnly) {
	lang = lang || language;
	var base = {
		'def': 0x0030,
		'fa': 0x06F0,
		'ar': 0x0660
	};
	var regexp = new RegExp(digitsOnly ? '([0-9])' : '(.)', 'g')
	var digBase = base[lang] || base['def'];
	var res = String(num).replace(regexp, function (s, n, ofs, all) {
		return String.fromCharCode(digBase + (n.charCodeAt(0) & 0x0F));
	});
	return res;
}

function _enum(num, lang) {
	lang = lang || language;
	return _num(num, lang, true);
}
String.prototype.format = function () {
	var formatted = this;
	for (var i = 0; i < arguments.length; i++)
		formatted = formatted.replace("{" + i + "}", arguments[i]);
	return formatted;
}

function val(num) {
	return 1 * _num(num, 'en');
}

function arabicNumberName(num) {
	var unary = Array('الاول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر');
	var decimal = Array('عشر', 'العشرون', 'الثلاثون');
	if (num < 1 || num >= 40) return '';
	if (num <= 10) return unary[num - 1];
	var digit = num % 10;
	var dec = parseInt(num / 10);
	unary[0] = 'الحادي';
	var res = (digit > 0 ? unary[digit - 1] + (dec > 1 ? ' و' : ' ') : '') + decimal[dec - 1];
	return res;
}

function getCurrDir(tab) {
	tab = tab || currTab;
	return {
		quran: 'rtl',
		search: (isRTL ? 'rtl' : 'ltr')
	}[tab] || getTransDir();
}

function getCurrTextDir() {
	var tab = (currTab == 'search') ? 'quran' : currTab;
	return {
		quran: 'rtl',
		search: 'ltr'
	}[tab] || getTransDir();
}

function getTransDir() {
	var lang = getTransLang();
	return $.isInArray(lang, rtlLangs) ? 'rtl' : 'ltr';
}

function getTransLang(trans) {
	trans = trans || curr.trans;
	return trans.split('.')[0];
}

function isUthmani(type) {
	type = type || curr.quran;
	return /uthmani/.test(type);
}

function initMenuCollapse() {
	$('.sub-menu').each(function () {
		if (!$(this).hasClass('collapsed'))
			toggleCollapse(this, true);
	});
	$('.menu-top').click(function () {
		toggleCollapse($(this).parent());
	}).each(function () {
		$(this).html('<span class="icon"></span>' + $.trim($(this).html()));
	});
}

function toggleCollapse(obj, show) {
	var vis = (typeof show != 'undefined') ? show : $(obj).hasClass('collapsed');
	$(obj).toggleClass('collapsed', !vis);
	var target = $(obj).find('.menu-content, .menu-body');
	if (isIE)
		target.toggle(vis);
	else
		target[vis ? 'slideDown' : 'slideUp'](300);
}

function isSet(x) {
	return (typeof x != 'undefined')
}

function hideLoadingImage() {
	$("#loadingImage").hide();
}

function showError() {}

function loadGoogleAnalytics() {
	var url = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
	url += 'google-analytics.com/ga.js';
	$.getScript(url, function () {
		var pageTracker = _gat._getTracker("UA-9204679-1");
		pageTracker._trackPageview();
	});
}

function log() {
	if (!isTest)
		return;
	if (typeof (console) != 'undefined')
		console.log(arguments);
	else
		Console.log(arguments);
}
var Console = {
	pad: null,
	init: function () {
		this.pad = jQuery('<div/>').addClass('console').css({
			opacity: .8
		}).appendTo(document.body).hide();
	},
	log: function (args) {
		var str = '';
		$.each(args, function () {
			str += ' : ' + this;
		});
		this.pad.append($('<div/>').text(str)).show();
	},
	end: 0
};
var Scroller = {
	duration: 600,
	marginTop: 1 / 8,
	marginBottom: 1 / 20,
	scrollTo: function (obj) {
		var margin = $(window).height() * this.marginTop;
		margin = Math.min(Math.round(margin), 125);
		var target = obj.offset().top - margin;
		var scrollElement = isOpera ? $('html') : $('html, body');
		scrollElement.stop().animate({
			scrollTop: target
		}, this.duration, 'swing');
	},
	scrollToAya: function () {
		var obj = $('#' + curr.sura + '-' + curr.aya);
		if (currTab == 'trans')
			obj = $('#t-' + curr.sura + '-' + curr.aya);
		if (obj.length == 0)
			return;
		if (curr.aya == 1)
			obj = obj.prevUntil('span').last();
		var top = obj.offset().top;
		var bottom = top + obj.height();
		if (currTab == 'quran' && opt.showTrans == 'fixed')
			bottom = Math.max(bottom, $('.tbox').offset().top + $('.tbox').height());
		var wintop = $(document).scrollTop();
		var winh = $(window).height();
		if (top - wintop < winh * this.marginTop || bottom > wintop + winh * (1 - this.marginBottom))
			this[isMSafari ? 'goTo' : 'scrollTo'](obj);
	},
	method: 'quadratic',
	startTime: 0,
	target: 0,
	initGap: 0,
	task: null,
	goTo: function (obj) {
		clearInterval(this.task);
		var margin = $(window).height() * this.marginTop;
		margin = Math.min(Math.round(margin), 125);
		this.target = obj.offset().top - margin;
		this.initGap = this.target - $(document).scrollTop();
		this.startTime = (new Date()).getTime();
		setTimeout('Scroller.scrollWindow()', 10);
	},
	scrollWindow: function () {
		var currPos = {
			X: $(document).scrollLeft(),
			Y: $(document).scrollTop()
		};
		var now = (new Date()).getTime();
		if (now - this.startTime < this.duration) {
			var newY = this.target - this.newGap(now);
			window.scrollTo(currPos.X, newY);
			if (newY == currPos.Y || currPos.Y != $(document).scrollTop()) {
				clearInterval(this.task);
				this.task = setTimeout('Scroller.scrollWindow()', 10);
			}
		} else
			window.scroll(currPos.X, this.target);
	},
	newGap: function (now) {
		var portion = 0;
		var deltaTime = (now - this.startTime) / this.duration;
		if (this.method == 'quadratic')
			portion = 1 - Math.pow(1 - deltaTime, 2);
		else
			portion = deltaTime;
		return parseInt(this.initGap * (1 - portion));
	}
};

function bindHotKeys() {
	bindKey('left', function (e) {
		changePage('left');
	});
	bindKey('right', function (e) {
		changePage('right');
	});
	if (!isOpera) {
		bindKey('up', function (e) {
			changeAya(-1);
		});
		bindKey('down', function (e) {
			changeAya(+1);
		});
		bindKey('ctrl+left', function (e) {
			changeSura('left');
		});
		bindKey('ctrl+right', function (e) {
			changeSura('right');
		});
		bindKey('space', function (e) {
			Player.togglePlay();
		});
	}
}

function bindKey(key, fn) {
	jQuery(document).bind('keydown', key, function (e) {
		if (currTab != 'search') {
			fn.apply(this, arguments);
			return false;
		}
	});
}

function addBookmark(title, url) {
	if (window.sidebar)
		window.sidebar.addPanel(title, url, '');
	else if (isIE && window.external)
		window.external.AddFavorite(url, title);
	else {
		document.title = title;
		alert('Your browser doesn\'t support automatic bookmarking. Please bookmark the page manually.');
	}
	return false;
}
var History = {
	callState: 'new',
	init: function () {
		jQuery.history.init(History.show, {
			unescape: true
		});
	},
	load: function (args) {
		var hash = this.getHash(args);
		jQuery.history.load(hash);
	},
	getHash: function (args) {
		var def = {
			sura: curr.sura,
			aya: curr.aya,
			tab: currTab,
			id: curr.trans,
			type: Search.type,
			query: Search.query,
			page: Search.page
		};
		args = jQuery.extend(def, args);
		var hash = '';
		if (args.tab == 'trans')
			hash = 'trans/' + (args.id) + '/';
		if (args.tab == 'search')
			hash = 'search/' + args.type + '/' + args.query + (args.page == 1 ? '' : '/p' + args.page);
		else
			hash += args.sura + ':' + args.aya;
		return hash;
	},
	show: function (hash) {
		var self = History;
		if (hash == '') {
			if (self.callState == 'new')
				self.load();
			else
				window.history.back(1);
			self.callState = 'old';
		} else {
			try {
				var args = hash.split('/');
				var searchArgs = {};
				var type = args[0];
				if (type != 'trans' && type != 'search')
					type = 'quran';
				currTab = type;
				if (type == 'search') {
					searchArgs = {
						type: args[1],
						query: args[2],
						page: Math.max((args[3] || 'p1').replace(/p-?/, '') * 1, 1)
					};
					Search.display(searchArgs);
					currPage = '';
				} else {
					var transID = args[1];
					if (transID && transList[transID] && curr.trans != transID) {
						$('#transMenu').val(transID);
						updateTrans();
					}
					var addr = (args.length <= 1) ? args[0] : args[2];
					var coords = self.locate(addr);
					display(coords.sura, coords.aya);
				}
				self.setTitle({
					tab: type,
					search: searchArgs
				});
			} catch (e) {
				log(e);
				self.load({
					tab: 'quran'
				});
			}
		}
	},
	locate: function (addr) {
		var res = {};
		var p = addr.split('-');
		if (p[0] == 'page' || p[0] == 'juz')
			res = Quran[p[0] + 'Props'](1 * p[1]);
		else {
			var q = addr.split(':');
			res = {
				sura: 1 * q[0] || curr.sura,
				aya: 1 * q[1] || 1
			};
		}
		return res;
	},
	setTitle: function (args) {
		var title = '';
		var name = Quran.getSuraName(curr.sura, 'tname');
		var addr = name + ' [' + curr.sura + ':' + curr.aya + ']';
		switch (args.tab) {
		case 'quran':
			title = addr + '';
			break;
		case 'trans':
			title = addr + ' - ' + transList[curr.trans];
			break;
		case 'search':
			title = args.search.query + ' - ';
			title += (args.search.type == 'root') ? 'Root Search' : 'Quran Search';
			break;
		}
		document.title = title + ' - Tanzil Quran Navigator';
	},
	end: 0
};﻿
var useLocalStorage = true;
var resultsPerPage = 20;
var searchTextType = defQuranType;
var highlightAya = false;
var transFont, transFontSize;
var popDelay = 0;
var defJustify = !isOpera && !isOldFirefox;
var currTab = 'quran';
var currPage = '';
var winDim = {};
var lastXPos = 0;
var fontList = {
	def: {
		name: _('Default')
	},
	me_quran: {
		name: 'Me-Quran',
		family: 'me_quran',
		embed: 'meQuran',
		file: 'me_quran',
		scale: 0.85
	},
	scheherazade: {
		name: 'Scheherazade',
		family: 'Scheherazade',
		embed: 'Scheheraza',
		file: 'Scheherazade',
		scale: 1.22
	},
	saleem: {
		name: 'PDMS Saleem',
		family: '_PDMS_Saleem_QuranFont',
		embed: 'PDMS_Saleem',
		file: 'PDMS_Saleem',
		scale: 1.2
	},
	naskh: {
		name: 'KFGQPC Naskh',
		family: 'KFGQPC Uthman Taha Naskh',
		embed: 'KFGQPC_Naskh',
		file: 'KFC_naskh',
		scale: 1
	},
	trad: {
		name: 'Traditional Arabic',
		family: 'Traditional Arabic',
		scale: 1.22
	},
	arabtype: {
		name: 'Arabic Typesetting',
		family: 'Arabic Typesetting',
		scale: 1.33
	},
	majalla: {
		name: 'Sakkal Majalla',
		family: 'Sakkal Majalla',
		scale: 1.1
	},
	uighur: {
		name: 'MS Uighur',
		family: 'Microsoft Uighur',
		scale: 1.27
	},
	arial: {
		name: 'Arial',
		family: 'Arial',
		scale: 0.95
	},
	custom: {
		name: _('Custom')
	}
};
var fontPrefs = {
	simple: ['naskh', 'scheherazade', 'trad', 'arabtype', 'majalla', 'uighur'],
	uthmani: ['me_quran', 'scheherazade', 'majalla', 'arabtype', 'arial'],
	simpleSmall: ['trad', 'scheherazade', 'naskh', 'majalla', 'arabtype', 'uighur'],
	uthmaniSmall: ['majalla', 'scheherazade', 'arabtype', 'arial']
};
var currFontID = '';
var baseFont = 'Times New Roman';
var embeddedFonts = [fontAdded ? 'naskh' : 'nothing'];
var tryFontCounter = 0;
var fixedTransEnabled = false;

function initPage(start) {
	checkBrowser();
	Console.init();
	adjustDefaults(start)
	Storage.init();
	adjustVariables();
	QuranText.init();
	TransText.init();
	TextTools.init();
	initMenus();
	History.init();
	checkInstalledFonts();
	fontExists(fontFace(getFontID()));
	initFontMenu();
	bindHotKeys();
	initUI();
	setTransFontDefs();
	updateFontSettings();
	applyFont(getPrefInstalledFont());
	updateFont();
	selectTab('search-quran');
	$('#quran-selector a').focus().blur();
	Player.init();
	if (!localhost)
		setTimeout('loadGoogleAnalytics()', 2000);
	setTimeout('initAd()', 4000);
	if (!isChrome)
		setTimeout('refresh()', 1000);
	$(window).unload(unload);
}

function initUI() {
	initTabs();
	Dialog.init();
	Modal.init();
	TransBox.init();
	initMenuCollapse();
	initTextInputs();
	$('#searchText').val(opt.searchText);
	$('#gotoText').val(_num(curr.sura) + ':' + _num(curr.aya));
	$('#customFont').val(opt.customFont);
	$('#fontSize').val(_num(opt.fontSize));
	$('#textJustify').toggleCheck(opt.textJustify);
	$('#showSigns').toggleCheck(opt.showSigns);
	$('#showSmallAlef').toggleCheck(opt.showSmallAlef);
	$.Radio.val('showTrans', opt.showTrans);
	initAudioUI();
	setAudioTrans();
	initTooltips();
	$('.noSelect, label, .button, .ui-tab, .top-menu, .menu-top').disableTextSelect();
	if (isMSafari) {
		$('#searchFrame').css({
			maxHeight: 'none'
		});
		$('.menu-body select').css({
			borderColor: '#555'
		});
	}
}

function initTextInputs() {
	$('input:text').keypress(function (e) {
		if (e.which == 13) {
			$(this).closest('form').submit();
			e.preventDefault();
		}
	})
		.focus(function () {
			this.select();
		})
		.blur(function () {
			unselect();
		});
}

function initAd() {}

function checkBrowser() {
	if (isRTL && isIE7) {
		location.href = 'http://tanzil.net/';
	}
}

function unload() {
	Storage.save();
	QuranText.text = TransText.text = null;
}

function update(name, val) {
	var p = name.split('.');
	window[p[0]][p[1]] = val;
	Storage.save(p[0]);
}

function adjustDefaults(start) {
	if (start.defTrans)
		Storage.data.curr.trans = start.defTrans;
	if (isMSafari)
		Storage.data.opt.showTrans = 'none';
}

function adjustVariables() {
	opt.fontSize = opt.fontSize || 16;
	opt.fontID = fontList[opt.fontID] ? opt.fontID : 'def';
	curr.quran = quranTypes[curr.quran] ? curr.quran : defQuranType;
	curr.trans = transList[curr.trans] ? curr.trans : defTrans;
	try {
		reciteList[opt.reciters[0].id].name
	} catch (e) {
		opt.reciters = Storage.data.opt.reciters;
	}
}

function initMenus() {
	initJuzMenu();
	initTransMenu();
	initQuranTypesMenu();
	initRootList();
	initRootMenu();
	updateMenus(curr.sura, curr.aya);
}

function updateMenus(sura, aya) {
	var page = Quran.getPage(sura, aya);
	var juz = Quran.getJuz(sura, aya);
	jQuery('#juzMenu').val(juz);
	jQuery('#pageNum').val(_num(page));
	initSuraMenu(sura);
	initAyaMenu(sura, aya);
}

function initSuraMenu(sura) {
	var nameType = (getCurrTextDir() == 'ltr') ? 'tname' : 'name';
	if (jQuery('#suraMenu').data('nameType') == nameType) {
		jQuery('#suraMenu').val(sura);
		return;
	}
	var items = [];
	for (var i = 1; i <= Quran.numSuras; i++)
		items.push({
			text: _num(i) + '. ' + Quran.getSuraName(i, nameType),
			value: i
		});
	initMenu('suraMenu', items, sura);
	jQuery('#suraMenu').data('nameType', nameType);
}

function initAyaMenu(sura, aya) {
	var numAyas = Quran.suraProps(sura).ayas;
	if (jQuery('#ayaMenu option').length == numAyas) {
		jQuery('#ayaMenu').val(aya);
		return;
	}
	var items = [];
	for (var i = 1; i <= numAyas; i++)
		items.push({
			text: _num(i),
			value: i
		});
	initMenu('ayaMenu', items, aya);
}

function initJuzMenu() {
	var items = [];
	for (var i = 1; i <= Quran.numJuzs; i++)
		items.push({
			text: _('Juz') + ' ' + _num(i),
			value: i
		});
	initMenu('juzMenu', items);
}

function initTransMenu() {
	var items = [];
	for (var i in transList) {
		var langID = i.split('.')[0];
		var lang = langList[langID];
		var audioTag = '';
		items.push({
			text: lang + ':  ' + transList[i] + audioTag,
			value: i
		});
	}
	items.sort(sortItems);
	initMenu('transMenu', items, curr.trans);
}

function initFontMenu() {
	var items = [];
	for (var i in fontList) {
		font = fontList[i];
		if (font.embed || font.installed || !font.family)
			items.push({
				text: font.name,
				value: i
			});
	}
	initMenu('fontMenu', items, opt.fontID);
}

function initQuranTypesMenu() {
	initMenuFromHash('typeMenu', quranTypes, curr.quran);
}

function sortItems(a, b) {
	return a.text.localeCompare(b.text);
}

function getItems(theArray, textLabel, valueLabel) {
	var items = [];
	for (var i = 0; i < theArray.length; i++)
		items[i] = {
			text: theArray[i][textLabel],
			value: theArray[i][valueLabel] || i
		};
	return items;
}

function initMenu(menu, items, defVal) {
	if (typeof menu == 'string')
		menu = jQuery('#' + menu);
	var html = '';
	for (var i = 0; i < items.length; i++) {
		var opt = '';
		if (items[i].title)
			opt = ' title="{0}"'.format(items[i].title);
		if (/^sep-/.test(items[i].value))
			opt += ' disabled="disabled"';
		html += '<option value="' + items[i].value + '"' + opt + '>' + items[i].text + '</option>';
	}
	menu.html(html).val(defVal);
}

function initMenuFromHash(menuID, items, defVal) {
	var html = '';
	for (var i in items)
		html += '<option value="' + i + '">' + items[i] + '</option>';
	jQuery('#' + menuID).html(html).val(defVal);
}

function selectTab(tab) {
	getTab(tab).trigger('tabSelect');
}

function showTab(tab) {
	var selector = getTabSelector(tab);
	jQuery(selector).tab('show');
	getTab(tab).show().trigger('tabShow');
}

function getTabID(tab) {
	if (typeof tab == 'string')
		return tab
	return jQuery(tab).attr('id').replace('-selector', '').replace('-tab', '');
}

function getTab(tab) {
	return jQuery('#' + getTabID(tab) + '-tab');
}

function getTabSelector(tab) {
	return jQuery('#tanzil-tabs a[href="#' + getTabID(tab) + '-tab"]');
}

function initTabs() {
	jQuery('li').each(function () {
		var id = jQuery(this).attr('id');
		if (/-selector/.test(id)) {
			jQuery(this).click(function (e) {
				e.preventDefault();
				selectTab($(this));
				return false;
			});
		}
	});
	jQuery('.main-tab').bind('tabSelect', function () {
		selectMainTab(getTabID(this));
	});
	jQuery('.main-tab').bind('tabShow', function () {
		showMainTab();
	});
	jQuery('.search-tab').bind('tabSelect', function () {
		showTab(this);
	});
}

function showMainTab() {
	jQuery('#quran-tab').toggle(currTab == 'quran');
	jQuery('#trans-tab').toggle(currTab == 'trans');
	jQuery('#search-tab').toggle(currTab == 'search');
	jQuery('.tbox').toggle(currTab == 'quran' && opt.showTrans == 'fixed' && !isPageEmbedded);
	jQuery('.tip').hide();
}

function selectMainTab(tabID) {
	currTab = tabID;
	History.load();
}

function showAya(sura, aya) {
	sura = sura || jQuery('#suraMenu').val() * 1;
	aya = aya || jQuery('#ayaMenu').val() * 1;
	sura = Quran.fixSuraNum(sura);
	aya = Quran.fixAyaNum(sura, aya);
	displayAya(sura, aya);
}

function showSura(sura) {
	sura = sura || jQuery('#suraMenu').val() * 1;
	sura = Quran.fixSuraNum(sura);
	displayAya(sura, 1);
}

function showPage(page) {
	page = page || val(jQuery('#pageNum').val());
	page = Quran.fixPageNum(page);
	displayAya(Quran.pageProps(page));
}

function showJuz(juz) {
	juz = juz || jQuery('#juzMenu').val() * 1;
	juz = Quran.fixJuzNum(juz);
	displayAya(Quran.juzProps(juz));
}

function changeAya(offset, cyclic) {
	var next = Quran.addOffset(curr.sura, curr.aya, offset, cyclic);
	displayAya(next);
}

function changeSura(offset) {
	offset = getArrowOffset(offset) || offset;
	if (offset < 0 && curr.aya > 1)
		offset = 0;
	showSura(curr.sura + offset);
}

function changePage(offset) {
	offset = getArrowOffset(offset) || offset;
	var page = val(jQuery('#pageNum').val()) + offset;
	showPage(page);
}

function refresh() {
	currPage = '';
	if (currTab == 'search')
		Search.display();
	else
		display();
}

function displayAya(sura, aya) {
	if (typeof sura == 'object') {
		aya = sura.aya;
		sura = sura.sura;
	}
	var tab = (currTab == 'search') ? 'quran' : currTab;
	History.load({
		sura: sura,
		aya: aya,
		tab: tab
	});
}

function display(sura, aya) {
	sura = sura || curr.sura;
	aya = aya || curr.aya || 1;
	updateMenus(sura, aya);
	curr.sura = 1 * sura;
	curr.aya = 1 * aya;
	var page = val(jQuery('#pageNum').val());
	if (page + ':' + curr.quran + ':' + curr.trans + ':' + currTab == currPage)
		updatePage(page);
	else
		retrievePage(page);
	Player.loadAya();
}

function updatePage(page) {
	var id = (currTab == 'trans' ? 't-' : '') + (curr.sura + '-' + curr.aya);
	$('.aya').removeClass('selected');
	$('#' + id).addClass('selected');
	if (currTab == 'quran')
		TransBox.update();
	Scroller.scrollToAya();
}

function retrievePage(page) {
	var startAya = Quran.getPageStart(page);
	var endAya = Quran.getPageStart(page + 1);
	if (!pageInCache(startAya, endAya) || !transInCache(startAya, endAya)) {
		var args = {
			type: curr.quran,
			transType: curr.trans,
			pageNum: page,
			startAya: startAya,
			endAya: endAya,
			version: version
		};
		jQuery.ajax({
			type: 'GET',
			url: root + '/index.php?option=com_tanzil&task=getaya',
			data: args,
			dataType: 'json',
			success: procPageResp,
			error: showError
		});
		jQuery("#loadingImage").show();
	} else
		showPageText(page);
}

function procPageResp(res) {
	hideLoadingImage();
	for (var i in res.quran)
		QuranText.set(i, res.quran[i], res.quranType);
	for (var i in res.trans)
		TransText.set(i, res.trans[i], res.transType);
	showPageText(res.pageNum * 1);
}

function showPageText(page) {
	var suraNames = [];
	var prevSura = 0;
	var list = Quran.getPageItems(page);
	var text = '';
	var lang = getTransLang(curr.trans);
	for (i = 0; i < list.length; i++) {
		var sura = list[i].sura;
		var aya = list[i].aya;
		if (sura != prevSura && aya > 0) {
			suraNames.push(Quran.getSuraName(sura));
			prevSura = sura;
		}
		var index = Quran.getAyaStart(sura, aya);
		var ayaText = QuranText.get(index);
		var className = 'aya';
		var args = {
			showSigns: opt.showSigns,
			showSmallAlef: opt.showSmallAlef,
			font: currFontID,
			type: curr.quran
		};
		if (aya == 1) {
			text += '<div class="suraHeaderFrame"><div class="suraHeaderText">' + ((getCurrDir() == 'rtl') ? 'سورة ' + Quran.getSuraName(sura) : Quran.getSuraName(sura, 'tname')) + '</div></div>';
			if (sura != 1 && sura != 9) {
				ayaText = ayaText.replace(/^(([^ ]+ ){4})/, '$1|').split('|');
				text += '<div class="ayaText besm">' + (currTab == 'trans' ? 'بسم الله الرحمن الرحيم' : TextTools.fixText(ayaText[0], args)) + '</div>\n';
				ayaText = ayaText[1];
			}
		}
		if (curr.sura == sura && curr.aya == aya) {
			if (highlightAya)
				ayaText = TextTools.highlight(highlightPattern, ayaText);
			className += highlightAya ? ' highlight' : ' selected';
		}
		ayaText = TextTools.fixText(ayaText, args);
		var trans = TransText.fetch(index);
		if (currTab == 'trans') {
			if (curr.sura == trans.sura && curr.aya >= trans.aya && curr.aya <= trans.ayaTo) {
				className = 'aya selected';
				aya = curr.aya;
			}
			var addr = trans.aya + (trans.aya != trans.ayaTo ? '–' + trans.ayaTo : '');
			var thisAya = '<span class="ayaText">' + TextTools.fixTransText(trans.text) + '</span> ';
			thisAya += '<span class="ayaNumber">(<a href="{0}">{1}</a>)</span>'
				.format(domain + '#' + History.getHash({
					sura: sura,
					aya: aya
				}), _enum(addr, getTransLang()));
			var style = '';
			text += '<span id="t-' + sura + '-' + aya + '" class="' + className + '"' + style + '><span class="aya-wrapper">' + thisAya + '</span></span> \n';
			i += (trans.ayaTo - trans.aya);
		} else {
			var thisAya = '<span class="ayaText">' + ayaText + '</span> ';
			thisAya += '<span class="ayaNumber">﴿<a href="{0}">{1}</a>﴾</span>'
				.format(domain + '#' + History.getHash({
					sura: sura,
					aya: aya
				}), _num(aya, 'ar'));
			text += '<span id="' + sura + '-' + aya + '" class="' + className + '"><span class="aya-wrapper">' + thisAya + '</span></span> \n';
		}
	}
	if (currTab == 'trans') {
		$('#transText').html(text).css({
			'direction': getTransDir(),
			'font-family': transFont,
			'font-size': Math.round(transFontSize * 1.8) + 'px',
			'font-align': $.isInArray(lang, noJustifyLangs) ? 'center' : 'justify'
		});
	} else {
		$('#quranText').html(text);
		setQuranFont();
	}
	var currJuz = Quran.getJuz(curr.sura, curr.aya);
	$('.suraName').html((getCurrDir() == 'rtl') ? 'سورة ' + Quran.getSuraName(curr.sura) : Quran.getSuraName(curr.sura, 'tname'));
	$('.juzName').html((getCurrDir() == 'rtl') ? 'الجزء ' + arabicNumberName(currJuz) : 'Juz ' + currJuz);
	$('.pageNumber').html((getCurrDir() == 'rtl') ? _num(page, 'ar') : _num(page, 'ar')); //mhehm : page => : _num(page, 'ar')
	showTab(currTab);
	setTimeout('initPageActions()', popDelay);
	popDelay = 0;
	currPage = page + ':' + curr.quran + ':' + curr.trans + ':' + currTab;
	updatePage(page);
}

function setQuranFont() {
	var font = fontList[currFontID];
	$('#quranText').css({
		'font-family': fontFace(currFontID),
		'font-size': (font.scale * 1.15) + 'em',
		'font-weight': font.bold ? 'bold' : 'normal'
	});
	$('#quranText .ayaNumber, .sign').css({
		'font-size': (0.92 / font.scale) + 'em'
	});
}

function updateQuranSettings() {
	update('curr.quran', $('#typeMenu').val());
	update('opt.showSigns', $('#showSigns').isChecked());
	update('opt.showSmallAlef', $('#showSmallAlef').isChecked());
	updateFont();
	refresh();
}

function updateTransSettings() {
	update('opt.showTrans', $.Radio.val('showTrans'));
	TransBox.toggle(opt.showTrans == 'fixed');
	refresh();
}

function setTrans() {
	if (currTab == 'trans')
		History.load({
			tab: 'trans',
			id: $('#transMenu').val()
		});
	else
		updateTrans();
}

function updateTrans() {
	update('curr.trans', $('#transMenu').val());
	Search.dirty();
	setTransFontDefs();
	refresh();
}

function setAudioTrans() {
	var hasAudio = $.isInArray(curr.trans, audioTransList);
	var active = false;
	for (var i in opt.reciters)
		if (reciteList[opt.reciters[i].id].trans == curr.trans)
			active = true;
	$('.trans-row .icon').toggleClass('active', active);
}

function updateAudioTransSettings() {
	var active = $('.trans-row .icon').hasClass('active');
	if (active) {
		for (var i in opt.reciters)
			if (reciteList[opt.reciters[i].id].trans == curr.trans)
				removeReciter(i);
	} else {
		for (var i in reciteList)
			if (reciteList[i].trans == curr.trans)
				addReciter(i);
	}
	setAudioTrans();
}

function setTransFontDefs() {
	var lang = getTransLang(curr.trans);
	var data = langData[lang] || langData['def'];
	var sample = data.sample || 'In the name of Allah, بسم الله الرحمن الرحيم';
	transFont = data.font;
	transFontSize = fontWidth(baseFont, sample) / fontWidth(transFont, sample) * 10;
}

function pageInCache(startAya, endAya) {
	for (var i = startAya; i < endAya; i++)
		if (QuranText.get(i) == null)
			return false;
	return true;
}

function transInCache(startAya, endAya) {
	for (var i = startAya; i < endAya; i++)
		if (TransText.get(i) == null)
			return false;
	return true;
}
var Search = {
	query: '',
	type: '',
	page: 1,
	pattern: '',
	highlight: '',
	current: '',
	go: function () {
		var query = $('#searchText').val();
		if ($.trim(query) == '') {
			alert(_('Search string is empty.'));
			return;
		}
		update('opt.searchText', query);
		History.load({
			tab: 'search',
			type: 'quran',
			query: query,
			page: 1
		});
	},
	goRoot: function () {
		var root = $('#rootMenu').val();
		History.load({
			tab: 'search',
			type: 'root',
			query: root,
			page: 1
		});
	},
	goTo: function () {
		var addr = $('#gotoText').val();
		addr = addr.split(':');
		displayAya(val(addr[0]), val(addr[1]) || 1);
	},
	showPage: function (offset) {
		var page = val($('#pageOffset').val()) + offset;
		page = Math.max(page, 1);
		page = Math.min(page, val($('#totalPages').text()));
		$('#pageOffset').val(_num(page));
		this.page = page;
		History.load({
			tab: 'search',
			type: this.type,
			query: this.query,
			page: page
		});
	},
	display: function (args) {
		args = args || {
			type: this.type,
			query: this.query,
			page: this.page
		};
		if (this.current != JSON.stringify(args)) {
			this.update(args);
			this.retrieve(args);
		} else {
			currTab = 'search';
			showTab('search');
		}
	},
	dirty: function () {
		this.current = '';
	},
	update: function (args) {
		$.extend(this, args);
		this.pattern = TextTools.enrichPattern(this.query);
		this.highlight = this.pattern.replace(/[+!:]/g, '|').replace(/^[|]+/g, '');
		this.highlight = (args.type == 'root') ? 'ROOT' : this.highlight;
		if (!TextTools.isValidReg(this.highlight));
	},
	retrieve: function (args) {
		this.current = JSON.stringify(args);
		var pattern = (args.type == 'root') ? 'Root ' + this.query : this.pattern;
		var args = {
			type: searchTextType,
			searchText: encodeURIComponent(this.query),
			pattern: encodeURIComponent(pattern),
			transType: curr.trans,
			pageOffset: this.page,
			resultsPerPage: resultsPerPage
		};
		$.ajax({
			type: 'GET',
			url: root + '/index.php?option=com_tanzil&task=search',
			data: args,
			dataType: 'text',
			success: function (response) {
				Search.procQuery(response);
			},
			error: showError
		});
		$("#loadingImage").show();
	},
	procQuery: function (response) {
		hideLoadingImage();
		var result = response.split('|');
		var count = result[0].split(':');
		var numAyaMatch = count[0];
		var totalMatch = count[1];
		var resutls = result[1].split('#');
		var res = [];
		for (var i = 0; i < resutls.length - 1; i++) {
			var item = resutls[i];
			item = item.split(':');
			var trans = item[2].replace(/↕/g, ':');
			TransText.set(item[0], trans);
			res.push({
				index: item[0],
				text: item[1],
				trans: trans
			});
		}
		this.draw(res, numAyaMatch, totalMatch);
	},
	draw: function (results, numAyaMatch, totalMatch) {
		if (results.length == 0)
			this.page = 0;
		$('#pageOffset').val(_num(this.page));
		$('#searchPattern').text(this.query);
		var div = this.compose(results, this.page);
		$('#searchResults').empty().append(div);
		$('#searchFrame').scrollTop(0);
		this.initPageActions();
		$('#totalPages').text(_num(Math.ceil(numAyaMatch / resultsPerPage)));
		$('#searchStat').text(_('{0} results in {1} ayas').format(_num(totalMatch), _num(numAyaMatch)));
		this.setResultsFont();
		$('#search-selector').show();
		currTab = 'search';
		showTab('search');
	},
	compose: function (results, pageOffset) {
		var mainDiv = $('<div />');
		var args = {
			showSigns: false,
			showSmallAlef: opt.showSmallAlef,
			ignoreInternalSigns: true,
			font: 'default',
			type: searchTextType
		};
		for (var i = 0; i < results.length; i++) {
			var line = ' ' + results[i].text + ' ';
			line = TextTools.highlight(this.highlight, line);
			line = TextTools.fixText(line, args);
			var item = Quran.getAya(results[i].index);
			var spec = Quran.getSuraName(item.sura) + ': ' + _num(item.aya, 'ar');
			var rowClass = 'row-' + i % 2;
			var id = 's-' + item.sura + '-' + item.aya;
			var div = $('<div />').attr('id', id).addClass('result').html($('<div />').addClass(rowClass).html('<span class="number">' + _num((pageOffset - 1) * resultsPerPage + i + 1) + '. </span>' + line + ' <span class="spec">﴿' + spec + '﴾</span>'));
			mainDiv.append(div);
		}
		return mainDiv;
	},
	setResultsFont: function () {
		var scale = 1.1;
		var textType = isUthmani(searchTextType) ? 'uthmaniSmall' : 'simpleSmall';
		var font = fontList[getPrefInstalledFont(textType)];
		$('#searchResults').css({
			'font-family': font.family,
			'font-size': (font.scale * scale) + 'em'
		});
	},
	initPageActions: function () {
		$('.result').click(function () {
			var id = $(this).attr('id').replace('s-', '').split('-');
			popDelay = 200;
			displayAya(id[0], id[1]);
		});
		initTransTip($('.result'));
	},
	end: 0
};

function initRootList() {
	Roots = [];
	var root = RootList.split(' ');
	for (var i = 0; i < root.length; i++)
		Roots.push(root[i]);
}

function initCharList(chr) {
	var chars = 'آ ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي';
	chars = chars.split(' ');
	var str = '';
	for (var i = 0; i < chars.length; i++) {
		var clas = (chars[i] == chr) ? 'current-char' : '';
		str += '<a class="' + clas + '" href="javascript:initRootMenu(\'' + chars[i] + '\')">' + chars[i] + '</a> ';
	}
	jQuery('#charList').html(str);
}

function initRootMenu(chr) {
	chr = chr || 'ش';
	initCharList(chr);
	var items = [];
	if (chr == 'ا') chr = '[اإأ]';
	if (chr == 'ك') chr = '[كک]';
	reg = new RegExp('^' + chr, '');
	for (var i = 0; i < Roots.length; i++)
		if (reg.test(Roots[i]))
			items.push({
				value: Roots[i],
				text: Roots[i]
			});
	initMenu('rootMenu', items);
}

function adjustPageHeight() {
	winDim = {
		x: $(window).width(),
		y: $(window).height()
	};
	var leftPane = $('#side-content').position();
	var footerHeight = $('#footer-content').height();
	var height = winDim.y - leftPane.top - footerHeight - $('#top-menu').height() - 1;
	$('#side-content').css({
		'min-height': height + 'px'
	});
	var w = winDim.x;
	var pageWidth = $('.container').width();
	var x = parseInt((w - pageWidth) / 2);
	x = Math.max(x, 0);
	if (Math.abs(x - lastXPos) >= 10) {
		lastXPos = x;
		$('#container').css({
			'margin-left': x
		});
		$('body').css({
			'background-position': (x - 16) + 'px 0'
		});
	}
	TransBox.update();
}

function initPageActions() {
	$('.aya').click(function () {
		if (!$(this).hasClass('selected')) {
			var id = $(this).attr('id').replace('t-', '').split('-');
			displayAya(id[0], id[1]);
		}
	});
	var inherit = 'transparent';
	var orgColor = '#F7FCE3';
	var hoverColor = '#E4EEDC';
	$('.aya-wrapper').css({
		backgroundColor: inherit
	});
	$('.aya').hover(function () {
		if (!$(this).hasClass('selected')) {
			var busy = $(this).children().first().css('backgroundColor') != inherit;
			$(this).children().stop().css(busy ? {} : {
				backgroundColor: orgColor
			})
				.animate({
					backgroundColor: hoverColor
				}, 300, 'swing', function () {
					$(this).css({
						backgroundColor: inherit
					}).parent().addClass('hover');
				});
		}
	}, function () {
		if (!$(this).hasClass('selected')) {
			var busy = $(this).children().first().css('backgroundColor') != inherit;
			if (!busy && !$(this).hasClass('hover'))
				return;
			$(this).children().stop().css(busy ? {} : {
				backgroundColor: hoverColor
			})
				.animate({
					backgroundColor: orgColor
				}, 500, 'swing', function () {
					$(this).css({
						backgroundColor: inherit
					}).parent().removeClass('hover');
				});
		} else
			$(this).removeClass('hover');
	});
	if (currTab == 'quran' && opt.showTrans == 'hover')
		initTransTip($('.aya'));
}

function getObjTrans(obj) {
	var id = $(obj).attr('id').replace(/[st]-/, '').split('-');
	var trans = TransText.fetch([id[0], id[1]]);
	trans.text = TextTools.fixTransText(trans.text);
	return trans;
}

function initTransTip(obj) {
	$(obj).each(function () {
		var trans = getObjTrans(this);
		var addr = (trans.sura + ':' + trans.aya) + (trans.aya != trans.ayaTo ? '–' + trans.ayaTo : '');
		$(this).tip({
			text: trans.text,
			title: '[' + addr + '] <span>' + transList[curr.trans] + '</span>',
			cls: 'transTip',
			delayIn: 800,
			delayOut: 50,
			fadeIn: 60,
			fadeOut: 90,
			offsetX: -10,
			offsetY: 16,
			shadow: 3,
			width: 270,
			above: true,
			align: isRTL ? 'center' : 'left',
			track: true,
			textStyle: {
				direction: getTransDir(),
				fontFamily: transFont,
				fontSize: Math.round(transFontSize * 1.5) + 'px'
			},
			sticky: isMSafari
		});
	});
}

function initTooltips() {
	if (isMSafari)
		return;
	$.extend($.fn.tipsy.defaults, {
		opacity: 0.9,
		delayIn: 400
	});
	$('.arrow-link').each(function () {
		var self = $(this);
		self.tipsy({
			fallback: function () {
				return arrowTitle(self);
			},
			gravity: $(this).hasClass('arrow-left') ? 'se' : 'sw'
		});
	});
	$('.tipsyd').tipsy({
		gravity: 'sw'
	});
}

function arrowTitle(obj) {
	var dir = $(obj).hasClass('arrow-left') ? 'left' : 'right';
	var num = getArrowOffset(dir);
	return (num == 1) ? _('Next Page') : _('Previous Page');
}

function getArrowOffset(arrow) {
	return {
		rtl: {
			left: +1,
			right: -1
		},
		ltr: {
			left: -1,
			right: +1
		}
	}[getCurrDir()][arrow];
}

function initAudioUI() {
	var firstRow = $('.reciter').first();
	initReciteMenu(firstRow, opt.reciters[0]);
	initRepeatMenu();
	initDelayMenu();
	for (var i in opt.reciters) {
		var reciter = opt.reciters[i];
		if (i == 0)
			initReciteRow(firstRow, reciter);
		else
			createReciterRow(reciter).appendTo('#reciters');
	}
	$('#playScope').val(opt.playScope);
	$('#soundOptions').click(function () {
		$('.sound-options')[isIE7 ? 'toggle' : 'slideToggle'](200);
	});
}

function createReciterRow(reciter) {
	var row = $('<div/>').addClass('menu-row reciter').append($('<select/>').addClass('reciteMenu')).append($('<label/>').addClass('icon icon-close').attr('title', _('Remove')));
	row.find('.icon-close').click(function () {
		removeReciter($(this).parent().index());
	})
	initReciteMenu(row, reciter);
	return row;
}

function initRepeatMenu() {
	var items = [];
	for (var i = 1; i <= 9; i++)
		items.push({
			text: 'x' + i,
			value: i
		});
	items.push({
		text: '∞',
		value: 100
	});
	initMenu($('.repeatMenu'), items);
}

function initDelayMenu() {
	var items = [];
	for (var i = 0; i <= 9; i++)
		items.push({
			text: _('{0} sec').format(_num(i)),
			value: i
		});
	items.push({
		text: _('Duration of Aya'),
		value: 'len'
	});
	initMenu($('#playDelay'), items, opt.playDelay);
}

function initReciteMenu(row, reciter) {
	var items = [];
	for (var i in reciteList)
		if (!reciteList[i].trans)
			items.push({
				text: reciteList[i].name,
				value: i,
				title: reciteList[i].full
			});
	items.sort(sortItems);
	items.push({
		text: '------',
		value: 'sep-1'
	});
	for (var i in reciteList)
		if (reciteList[i].trans)
			items.push({
				text: reciteList[i].name,
				value: i,
				title: reciteList[i].full
			});
	var menu = row.find('.reciteMenu');
	initMenu(menu, items, reciter.id);
	menu.change(function () {
		setRecitation(row, $(this).val());
	}).blur();
}

function initReciteRow(row, reciter) {
	setRepeat(row, reciter.num);
	initRepeatUI(row);
}

function setRepeat(row, count) {
	opt.reciters[row.index()].num = count;
	label = count < 10 ? 'x' + count : '∞';
	row.find('.repeatCount').html(label).parent().removeClass('edit');
	row.find('.repeatMenu').val(count);
	Player.reset();
}

function setRecitation(row, id) {
	opt.reciters[row.index()].id = id;
	Player.reset();
	setAudioTrans();
}

function initRepeatUI(row) {
	row.find('.repeatCount').click(function () {
		$(this).parent().addClass('edit');
		row.find('.repeatMenu').focus();
	}).tipsy({
		gravity: isRTL ? 'se' : 'sw',
		delayIn: 600
	});
	row.find('.repeatMenu').change(function () {
		setRepeat(row, $(this).val());
	}).blur(function () {
		$(this).parent().removeClass('edit');
	});
}

function addReciter(reciterID) {
	if (opt.reciters.length >= 4)
		return;
	opt.reciters.push({
		id: reciterID ? reciterID : defTransRecite,
		num: 1
	});
	var reciter = opt.reciters[opt.reciters.length - 1];
	var row = createReciterRow(reciter).hide();
	row.appendTo('#reciters')[isIE7 ? 'show' : 'slideDown']();
	Player.reset();
	setAudioTrans();
}

function removeReciter(index) {
	if (index == 0)
		return;
	opt.reciters.splice(index, 1);
	$($('.reciter').get(index)).slideUp('normal', function () {
		$(this).remove()
	});
	Player.reset();
	setAudioTrans();
}
Storage = {
	data: {
		curr: {
			sura: defSura,
			aya: 1,
			quran: defQuranType,
			trans: defTrans
		},
		opt: {
			version: '',
			ad: 0,
			showSigns: true,
			showSmallAlef: true,
			showTrans: 'hover',
			fontID: 'def',
			fontSize: 16,
			customFont: 'Lotus',
			textJustify: defJustify,
			volume: 0.8,
			playScope: 'cont',
			playDelay: 0,
			reciters: [{
				id: defRecite,
				num: 1
			}],
			searchText: 'كتاب'
		}
	},
	medium: '',
	cookiesExpire: 120,
	cookiesPath: '/',
	init: function () {
		this.medium = (typeof localStorage != 'undefined' && useLocalStorage) ? 'localStorage' : 'cookie';
		this.load();
		this.upgrade();
	},
	load: function () {
		for (var i in this.data)
			window[i] = jQuery.extend(true, jQuery.clone(this.data[i]), this.read(i));
	},
	save: function (name) {
		for (var i in this.data)
			if (!name || i == name)
				this.write(i, window[i]);
	},
	reset: function (name) {
		for (var i in this.data)
			if (!name || i == name)
				window[i] = $.clone(this.data[i]);
		this.save();
	},
	upgrade: function () {
		if (opt.version && opt.version < '1.4.3')
			curr.quran = {
				'simple-modified': 'simple',
				'simple': 'simple-plain'
			}[curr.quran] || curr.quran;
		if (opt.version == '1.4.3')
			curr.quran = {
				'simple-plain': 'simple'
			}[curr.quran] || curr.quran;
		opt.version = version;
	},
	read: function (name) {
		var res = {};
		var data = (this.medium == 'localStorage') ? localStorage[name] : $.cookie(name);
		try {
			res = data ? JSON.parse(data) : res;
		} catch (e) {};
		return res;
	},
	write: function (name, object) {
		var val = JSON.stringify(object);
		if (this.medium == 'localStorage')
			localStorage[name] = val;
		else
			$.cookie(name, val, {
				expires: this.cookiesExpire,
				path: this.cookiesPath
			});
	},
	end: 0
};

function setFontSize(num) {
	var size = val($('#fontSize').val()) + num;
	$('#fontSize').val(_num(size));
	updateFontSettings();
}

function updateFontSettings() {
	update('opt.fontSize', val($('#fontSize').val()));
	update('opt.textJustify', $('#textJustify').isChecked());
	$('#quranText').css({
		'text-align': opt.textJustify ? 'justify' : 'right'
	});
	$('#quran-tab, #trans-tab').css({
		'font-size': (opt.fontSize + 3) + 'px'
	});
}

function updateFont() {
	update('opt.fontID', $('#fontMenu').val());
	update('opt.customFont', $('#customFont').val());
	$('#customFontRow').toggle(opt.fontID == 'custom');
	fontList['custom'].family = opt.customFont;
	fontList['custom'].scale = fontWidth(baseFont) / fontWidth(opt.customFont);
	setFont();
}

function getFontID() {
	var id = opt.fontID;
	if (id == 'def') {
		id = isUthmani() ? 'me_quran' : 'naskh';
		if (isMac && isSafari) id = 'scheherazade';
		if (isChrome && isUthmani()) id = 'scheherazade';
	}
	return id;
}

function fontFace(fontID) {
	var font = fontList[fontID];
	return font.family + (font.embed ? ',' + font.embed : '');
}

function checkInstalledFonts() {
	for (var i in fontList) {
		var font = fontList[i];
		if (font.family && fontExists(font.family))
			font.installed = true;
	}
}

function getPrefInstalledFont(type) {
	type = type || (isUthmani() ? 'uthmani' : 'simple');
	var list = fontPrefs[type];
	for (var i in list) {
		var fontID = list[i];
		if (fontList[fontID].installed)
			return fontID;
	}
	return 'arial';
}

function fontWidth(fontName, text) {
	text = text || 'ربنا إنك جامع الناس ليوم لا ريب فيه إن الله لا يخلف الميعاد';
	if (text == 2) text = 'In the name of Allah, بسم الله الرحمن الرحيم';
	var tester = jQuery('.font-tester');
	tester.css({
		'font-family': fontName
	}).text(text).show();
	var width = tester.width();
	tester.hide();
	return width;
}

function fontExists(fontName) {
	var fontFamily = fontName + ', ' + baseFont;
	return fontWidth(baseFont) * fontWidth(baseFont, 2) != fontWidth(fontFamily) * fontWidth(fontFamily, 2);
}

function setFont() {
	var fontID = getFontID();
	var font = fontList[fontID];
	if (font.embed)
		applyEmbedFont(fontID);
	else
		applyFont(fontID);
}

function applyFont(fontID) {
	if (!fontExists(fontFace(fontID)))
		fontID = getPrefInstalledFont();
	var font = fontList[fontID];
	currFontID = fontID;
	setQuranFont();
	$('#loading-font').hide();
}

function applyEmbedFont(fontID) {
	embedFontStyle(fontID);
	$('#loading-font').show();
	tryFontCounter = 0;
	tryFont(fontID);
}

function tryFont(fontID) {
	if (++tryFontCounter < 50 && !fontExists(fontFace(fontID))) {
		setTimeout('tryFont("' + fontID + '")', 400);
		return;
	}
	$('#loading-font').hide();
	applyFont(fontID);
}

function embedFontStyle(fontID) {
	if ($.isInArray(fontID, embeddedFonts))
		return;
	embeddedFonts.push(fontID);
	var font = fontList[fontID];
	var style = "font-family: '" + font.embed + "';" + "src: url('http://tanzil.net/res/font/eot/" + font.file + ".eot');" + "src: local('" + font.family + "'), url('http://tanzil.net/res/font/org/" + font.file + ((font.file == 'KFC_naskh') ? ".otf') format('opentype');" : ".ttf') format('truetype');");
	$("<style type='text/css'> @font-face {" + style + "} </style>").appendTo("head");
}
var TextTools = {
	matchingRules: [
		["$HAMZA_SHAPE", "$HAMZA_SHAPE"],
		["$ALEF_MAKSURA", "YY"],
		["$ALEF", "[$ALEF$ALEF_MAKSURA$ALEF_WITH_MADDA_ABOVE$ALEF_WITH_HAMZA_ABOVE$ALEF_WITH_HAMZA_BELOW$ALEF_WASLA]"],
		["[$TEH$MARBUTA]", "[$TEH$MARBUTA]"],
		["$HEH", "[$HEH$MARBUTA]"],
		["$WAW", "[$WAW$WAW_WITH_HAMZA_ABOVE$SMALL_WAW]"],
		["$YEH", "[$YEH$ALEF_MAKSURA$YEH_WITH_HAMZA$SMALL_YEH]"],
		["YY", "[$ALEF_MAKSURA$YEH$ALEF]"],
		[" ", "$SPACE"]
	],
	wildcardRegs: [
		["\\.", "P"],
		["\\*", "S"],
		["[?؟]", "Q"],
		["S+", "S"]
	],
	wildcards: [
		["S", "$LETTER_HARAKA*"],
		["Q", "$LETTER"],
		["P", "$LETTER"]
	],
	preProcess: [
		["[$FARSI_YEH$YEH_BARREE]", "$YEH"],
		["[$FARSI_KEHEH$SWASH_KAF]", "$KAF"],
		["$HEH_DOACHASHMEE", "$HEH"],
		["$NOON$SUKUN", "$NOON"],
		["([$KASRA$KASRATAN])($SHADDA)", "$2$1"]
	],
	init: function () {
		for (var i in UGroups)
			UGroups[i] = this.regTrans(UGroups[i]);
	},
	fixText: function (text, args) {
		args = args || {};
		if (args.showSigns) {
			text = this.pregReplace(' ([$HIGH_SALA-$HIGH_SEEN])', '<span class="sign"> $1</span>', text);
			text = this.pregReplace('($SAJDAH)', args.ignoreInternalSigns ? '' : '<span class="internal-sign">$1</span>', text);
			text = this.pregReplace('$RUB_EL_HIZB', args.ignoreInternalSigns ? '' : '<span class="icon juz-sign"></span>', text);
		} else
			text = this.pregReplace('[$HIGH_SALA-$RUB_EL_HIZB$SAJDAH]', '', text); if (isFF4)
			text = this.pregReplace('($REH$HARAKA*$END)', '$1$ZWNJ', text);
		if (!args.showSmallAlef)
			text = this.pregReplace('$SUPERSCRIPT_ALEF', '', text);
		if (args.font == 'me_quran') {
			text = this.pregReplace('([$HAMZA$DAL-$ZAIN$WAW][$SHADDA$FATHA]*)($SUPERSCRIPT_ALEF)', '$1$ZWNJ$2', text);
			text = this.pregReplace('($LAM$HARAKA*)$TATWEEL$HAMZA_ABOVE($HARAKA*$ALEF)', '$1$HAMZA$2', text);
		} else {
			text = this.pregReplace('($SHADDA)([$KASRA$KASRATAN])', '$2$1', text);
			text = this.pregReplace('($LAM$HARAKA*$LAM$HARAKA*)($HEH)', '$1$TATWEEL$2', text);
		}
		text = this.removeExtraMeems(text);
		text = this.pregReplace('$ALEF$MADDA', '$ALEF_WITH_MADDA_ABOVE', text);
		return text;
	},
	fixTransText: function (text, args) {
		text = text.replace(/\]\]/g, '$').replace(/ *\[\[[^$]*\$/g, '');
		return text;
	},
	removeExtraMeems: function (text) {
		text = this.pregReplace('([$FATHATAN$DAMMATAN])$LOW_MEEM', '$1', text);
		text = this.pregReplace('($KASRATAN)$HIGH_MEEM', '$1', text);
		return text;
	},
	highlight: function (pattern, str) {
		pattern = new RegExp('(' + pattern + ')', 'g');
		str = str.replace(pattern, '◄$1►');
		str = str.replace(/◄\s/g, ' ◄').replace(/\s►/g, '► ');
		str = str.replace(/([^\s]*)◄/g, '◄$1').replace(/►([^\s]*)/g, '$1►');
		while (/◄[^\s]*◄/.test(str))
			str = str.replace(/(◄[^\s]*)◄/g, '$1').replace(/►([^\s]*►)/g, '$1');
		str = str.replace(/◄/g, '<span class="highlight">').replace(/►/g, '</span>');
		return str;
	},
	enrichPattern: function (pattern, ignoreHaraka) {
		if (ignoreHaraka)
			pattern = this.pregReplace("$HARAKA", '', pattern);
		pattern = this.pregReplace('$TATWEEL', '', pattern);
		pattern = pattern.replace(/\-/g, '!');
		pattern = this.regTrans(pattern);
		pattern = this.handleSpaces(pattern);
		pattern = this.applyRules(this.preProcess, pattern);
		pattern = this.applyRules(this.wildcardRegs, pattern);
		pattern = this.pregReplace("(.)", "$1$HARAKAT*", pattern);
		pattern = this.applyRules(this.matchingRules, pattern);
		pattern = this.applyRules(this.wildcards, pattern);
		return pattern;
	},
	handleSpaces: function (pattern) {
		var prev = '';
		if (pattern == '') return pattern;
		pattern = pattern.replace(/\s+/g, ' ');
		while (pattern != prev) {
			prev = pattern;
			pattern = pattern.replace(/^(([^"]*"[^"]*")*)([^"\s]*) /g, '$1$3+');
		}
		pattern = pattern.replace(/_/g, ' ');
		pattern = pattern.replace(/"/g, ' ');
		pattern = pattern.replace(/^[+|]+/g, '').replace(/[+|!]+$/g, '');
		pattern = pattern.replace(/\+*([+|!])\+*/g, '$1');
		return pattern;
	},
	isValidReg: function (pattern) {
		try {
			new RegExp(pattern, 'g');
		} catch (e) {
			return false;
		}
		return true;
	},
	regTrans: function (str) {
		return str.replace(/\$([A-Z_]+)/g, function (s, i, ofs, all) {
			return UGroups[i] || UChars[i] || '';
		});
	},
	pregReplace: function (fromExp, toExp, str) {
		fromExp = new RegExp(this.regTrans(fromExp), 'g');
		toExp = this.regTrans(toExp);
		return str.replace(fromExp, toExp);
	},
	applyRules: function (rules, str) {
		for (var i in rules)
			str = this.pregReplace(rules[i][0], rules[i][1], str);
		return str;
	},
	end: 0
}
var Dialog = {
	defaults: {
		width: 400,
		height: 'auto',
		title: 'Dialog',
		buttons: {
			'Close': function () {
				Dialog.close();
			}
		},
		modal: -1,
		zIndex: 1000,
		onload: function () {}
	},
	options: {},
	init: function (modal) {
		jQuery('.dbox-close').click(function () {
			Dialog.close();
			return false;
		});
	},
	open: function (args) {
		this.options = $.extend({}, this.defaults, args);
		Modal.show(0, this.options.modal);
		this.showLoading();
		this.loadContent();
	},
	close: function () {
		jQuery('.dbox-wrapper').fadeOut(200);
		Modal.hide(200);
	},
	set: function (args) {
		jQuery.extend(this.options, args);
	},
	showLoading: function () {
		this.width(400);
		jQuery('.dbox').hide();
		jQuery('.dbox-loading').show();
		jQuery('.dbox-wrapper').css({
			zIndex: this.options.zIndex
		}).show();
		this.updatePosition();
	},
	loadContent: function () {
		var arg = this.options;
		var currDiv = jQuery('.dbox-content').children()[0];
		jQuery('#dialogs').append(currDiv);
		if (jQuery('#' + arg.id).length)
			this.display(arg);
		else {
			jQuery('#ex-dialog').load(arg.id, function () {
				arg.id = 'ex-dialog';
				Dialog.display();
			});
		}
	},
	display: function (arg) {
		var arg = this.options;
		jQuery('.dbox-content').append(jQuery('#' + arg.id));
		jQuery('.dbox-title span').text(arg.title);
		jQuery('.dbox-content').height(arg.height);
		this.width(arg.width);
		this.setButtons();
		jQuery('.dbox-loading').hide();
		jQuery('.dbox').show();
		jQuery('.dbox-content').scrollTop(0);
		arg.onload.apply(this);
		this.updatePosition();
	},
	setButtons: function () {
		var buttons = this.options.buttons;
		jQuery('.dbox-footer').empty();
		for (var button in buttons) {
			var id = 'dialog-button-' + button.toLowerCase().replace(' ', '-');
			jQuery('<span/>').addClass('button').attr('id', id).text(_(button)).click(buttons[button])
				.disableTextSelect()
				.appendTo($('.dbox-footer'));
		}
	},
	width: function (width) {
		width += 42;
		var w = jQuery(document).width();
		jQuery('.dbox-wrapper').width(width).css({
			left: (w - width) / 2
		});
	},
	updatePosition: function () {
		var w = $(window).height();
		var h = $('.dbox-wrapper').height() + 20;
		var top = Math.min(125, (w - h) / 2);
		$('.dbox-wrapper').css({
			top: Math.max(0, top) + $(window).scrollTop()
		});
	},
	refresh: function () {
		$('.dbox-wrapper').hide().show();
	},
	end: 0
};

function openDialog(id, title, width, height) {
	if (/\.php/.test(id))
		id = root + '/php/content/' + id + '?locale=' + locale;
	Dialog.open({
		id: id,
		title: title,
		modal: -1,
		width: width || 400,
		height: height || 'auto'
	});
	return false;
}
var Modal = {
	duration: 200,
	opacity: 0.1,
	zIndex: 900,
	blanket: null,
	init: function () {
		this.blanket = $('<div />')
			.attr('id', 'modal-blanket')
			.css({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				backgroundColor: '#000',
				opacity: this.opacity,
				zIndex: this.zIndex
			})
			.appendTo(document.body).hide();
		$(window).bind('resize', function () {
			Modal.update();
		});
	},
	show: function (duration, opacity) {
		if (isSet(opacity))
			this.blanket.css({
				opacity: this.opacity = opacity
			});
		if (!isSet(duration))
			duration = this.duration;
		this.update();
		if (this.opacity >= 0)
			this.blanket.fadeIn(duration);
		this.toggleObjects(false);
	},
	hide: function (duration) {
		if (!isSet(duration))
			duration = this.duration;
		this.blanket.fadeOut(duration);
		setTimeout('Modal.toggleObjects(true)', duration);
	},
	update: function () {
		this.blanket.css({
			height: $(document).height()
		});
	},
	toggleObjects: function (show) {
		$('body')[show ? 'removeClass' : 'addClass']('modal');
	},
	end: 0
};
var TransBox = {
	box: null,
	init: function () {
		this.box = $('.tbox');
		this.toggle(opt.showTrans == 'fixed');
		var self = this;
		this.box.find('.tbox-close').click(function () {
			$.Radio.val('showTrans', 'hover');
			updateTransSettings();
			return false;
		});
	},
	toggle: function (show) {
		if (isPageEmbedded || currTab != 'quran')
			return;
		this.box[show ? 'show' : 'hide'](isIE7 || isRTL ? null : 200);
	},
	position: function (obj) {
		var top = obj.offset().top;
		var x = $('#main-content').offset().left + $('#main-content').width() - 65;
		if (isRTL)
			x = $('#main-content').offset().left + 65 - 256;
		this.box.css('left', x).css({
			top: top
		}, 200, 'swing');
	},
	update: function (obj) {
		obj = obj || $('#' + curr.sura + '-' + curr.aya);
		if (obj.length < 1)
			return;
		var trans = getObjTrans(obj);
		if (!trans.text) return;
		var addr = (trans.sura + ':' + trans.aya) + (trans.aya != trans.ayaTo ? '–' + trans.ayaTo : '');
		var title = '[' + addr + '] <span>' + transList[curr.trans] + '</span>';
		this.box.find('.tbox-title').toggleClass('rtl', getTransDir() == 'rtl');
		this.box.find('.tbox-title>span').html(title);
		this.box.find('.tbox-content').html(trans.text).css({
			direction: getTransDir(),
			fontFamily: transFont,
			fontSize: Math.round(transFontSize * 1.5) + 'px'
		});
		this.position(obj);
	},
	end: 0
};
(function ($) {
	$.fn.tip = function (op1, op2) {
		if (op1 == 'update')
			return $.Tip.update(this, op2);
		return $(this).each(function () {
			$.Tip.init(this, op1);
		});
	};
	$.Tip = {
		defaults: {
			delayIn: 400,
			delayOut: 0,
			fadeIn: 200,
			fadeOut: 0,
			opacity: 1,
			offsetX: 0,
			offsetY: 10,
			trigger: 'mouseover',
			triggerOut: 'mouseout',
			above: true,
			align: 'left',
			shadow: 1,
			width: 'auto',
			track: false,
			sticky: false,
			text: '',
			title: '',
			cls: '',
			style: {},
			textStyle: {},
			titleStyle: {},
			api: {}
		},
		tooltip: null,
		target: null,
		options: {},
		pos: {
			x: 0,
			y: 0
		},
		showTimer: 0,
		hideTimer: 0,
		init: function (obj, options) {
			var op = this.options = $.extend({}, this.defaults, options);
			this.setOptions(obj, op);
			var self = $.Tip;
			$(obj).bind(op.trigger, function (e) {
				self.buildTip(op.sticky);
				self.tooltip.hide();
				self.target = $(e.currentTarget);
				self.options = self.getOptions();
				self.updateTip();
				self.position(e);
				self.show();
				if (op.track)
					$(e.currentTarget).mousemove(function (e) {
						$.Tip.position(e)
					});
			})
				.bind(op.triggerOut, function (e) {
					var op = self.options;
					if (!op.sticky)
						self.hide();
					if (op.track)
						$(e.currentTarget).unbind('mousemove');
				});
		},
		show: function () {
			var op = this.options;
			this.showTimer = this.run(function () {
				if (isIE)
					$.Tip.tooltip.show();
				else
					$.Tip.tooltip.stop().fadeIn(op.fadeIn, function () {
						$(this).css({
							opacity: 1
						})
					});
			}, op.delayIn, [this.hideTimer]);
		},
		hide: function () {
			var op = this.options;
			this.hideTimer = this.run(function () {
				if (isIE)
					$.Tip.tooltip.hide();
				else
					$.Tip.tooltip.stop().fadeOut(op.fadeOut);
			}, op.delayOut, [this.showTimer]);
		},
		update: function (obj, options) {
			options = options || {};
			this.options = this.getOptions(obj);
			$.extend(this.options, options);
			if (this.target && this.target[0] == $(obj)[0] && this.tooltip.is(':visible')) {
				this.updateTip();
				this.position();
			}
		},
		run: function (cmd, delay, kill) {
			kill = isSet(kill) ? kill : [];
			$.each(kill, function () {
				if (this)
					clearTimeout(this);
			});
			return setTimeout(cmd, delay);
		},
		updateTip: function () {
			var op = this.options;
			var tip = this.tooltip;
			var text = $.isFunction(op.text) ? op.text.apply(this) : op.text;
			var title = $.isFunction(op.title) ? op.title.apply(this) : op.title;
			tip.attr('class', 'tip tip-shadow').addClass(op.cls);
			tip.find('.tip-wrapper').css({
				top: -op.shadow,
				left: -op.shadow
			}).css(op.style);
			tip.find('.tip-content').html(text).css(op.textStyle);
			tip.find('.tip-title').css(op.titleStyle).toggle(title != '');
			tip.find('.tip-title>span').html(title);
			this.updateWidth();
		},
		updateWidth: function () {
			var op = this.options;
			this.tooltip.width(op.width);
			op.height = this.tooltip.height();
		},
		position: function (e) {
			if (e)
				this.pos = {
					x: e.pageX,
					y: e.pageY
				};
			var op = this.options;
			var tip = this.tooltip;
			var d = op.shadow,
				x = this.pos.x,
				y = this.pos.y,
				w = op.width + d,
				h = op.height + d,
				yt = y - h - op.offsetY,
				yb = y + h + op.offsetY,
				xr = x - w - op.offsetX,
				xl = x + w + op.offsetX,
				sl = $(window).scrollLeft(),
				sr = sl + winDim.x,
				st = $(window).scrollTop(),
				sb = st + winDim.y;
			var yy = (yt >= st && (op.above || yb > sb)) ? yt : y + op.offsetY;
			var xx = {
				'left': x + op.offsetX,
				'right': xr,
				'center': x - w / 2
			}[op.align];
			if (xx + w > sr)
				xx = sr - w;
			xx = Math.max(xx, sl);
			this.tooltip.css({
				left: xx + d,
				top: yy + d
			});
		},
		getOptions: function (obj) {
			obj = obj || this.target;
			return $(obj).data('tip-options');
		},
		setOptions: function (obj, options) {
			$(obj).data('tip-options', options);
		},
		buildTip: function (closeButton) {
			if (!this.tooltip) {
				this.tooltip = $('<div/>').addClass('tip tip-shadow').css({
					position: 'absolute'
				}).appendTo(document.body).hide();
			}
			this.tooltip.empty().append($('<div/>').addClass('tip-wrapper').css({
				position: 'relative'
			}).append($('<div/>').addClass('tip-title').addClass(getTransDir() == 'rtl' ? 'rtl' : '').append($((closeButton ? '<a class="tip-close" title="' + _('Close') + '" href="#">X</a>' : '') + '<span>Title</span>'))).append($('<div/>').addClass('tip-content')));
			$('.tip-close').click(function (e) {
				$.Tip.hide();
				return false;
			});
		},
		end: 0
	};
})(jQuery);
var Player = {
	player: null,
	buffer: null,
	inspector: false,
	solution: 'flash, html',
	ready: false,
	isPlaying: false,
	prevVolume: 0.8,
	loadedAya: '',
	preloadedAya: '',
	preloadEnabled: !isMSafari,
	playList: [],
	currItem: {},
	delayID: null,
	hasBism: ['ajamy', 'parhizgar', 'fooladvand', 'makarem'],
	init: function () {
		var self = this;
		var swfPath = root + '/components/com_tanzil/assets/js/jquery/jplayer2';
		$('<div/>').attr('id', 'jplayer').appendTo('#jplayer-box').jPlayer({
			ready: function () {
				self.player = $(this);
				self.ready = true;
				$('#player-pad').fadeIn();
				$('#player-loading').hide();
				self.reset();
			},
			preload: 'none',
			volume: 1 * opt.volume,
			ended: function () {
				Player.proceed()
			},
			progress: function (e) {
				Player.progress(e)
			},
			volumechange: function () {
				opt.volume = Player.status('volume')
			},
			cssSelectorAncestor: '#player-pad',
			solution: self.solution,
			swfPath: swfPath
		});
		$('<div/>').attr('id', 'jbuffer').appendTo('#jplayer-box').jPlayer({
			ready: function () {
				self.buffer = $(this);
			},
			cssSelectorAncestor: '#jp_null',
			preload: 'auto',
			solution: self.solution,
			swfPath: swfPath
		});
		if (this.inspector && isTest)
			$.getScript(root + '/js/jquery/jplayer/jquery.jplayer.inspector.js', function () {
				$("#jplayer_inspector").jPlayerInspector({
					jPlayer: $('#jplayer')
				});
			});
		$('.jp-volume-toggle').click(function () {
			self.prevVolume = self.status('volume');
			self.player.jPlayer('volume', 0);
			$(this).addClass('mute');
			$('.jp-volume-mute-pad').show();
		});
		$('.jp-volume-mute-pad').click(function () {
			self.player.jPlayer('volume', self.prevVolume);
			$('.jp-volume-toggle').removeClass('mute');
			$(this).hide();
		});
		$('.jp-volume-max').click(function () {
			self.player.jPlayer('volume', 1);
		});
	},
	status: function (id) {
		return this.player ? this.player.data('jPlayer').status[id] : null;
	},
	play: function () {
		this.player.jPlayer('play');
	},
	pause: function () {
		this.player.jPlayer('pause');
	},
	togglePlay: function () {
		if (!this.ready)
			return;
		if (!this.status('paused'))
			this.pause();
		else if (this.isPlaying)
			changeAya(+1, true);
		else
			this.play();
	},
	reset: function () {
		this.loadedAya = this.preloadedAya = '';
		this.loadAya();
	},
	loadAya: function () {
		if (!this.ready)
			return;
		if (this.loadedAya == curr.sura + ':' + curr.aya)
			return;
		this.loadedAya = curr.sura + ':' + curr.aya;
		clearTimeout(this.delayID);
		this.resetPlayList();
		this.load();
	},
	load: function () {
		this.currItem = this.playList.shift();
		if (this.buffer && this.preloadEnabled)
			this.buffer.jPlayer('clearMedia');
		var play = this.isPlaying || !this.status('paused');
		this.isPlaying = false;
		this.player.jPlayer('setMedia', {
			mp3: this.getUrl(this.currItem)
		});
		$('.jp-seek-bar').width('100%');
		if (play)
			this.play();
	},
	preload: function (item) {
		if (!this.buffer || !this.preloadEnabled || opt.playScope == 'aya')
			return;
		var certificate = item.sura + ':' + item.aya + ':' + item.reciter
		if (this.preloadedAya != certificate)
			this.buffer.jPlayer('setMedia', {
				mp3: this.getUrl(item)
			}).jPlayer('load');
		this.preloadedAya = certificate;
	},
	progress: function (e) {
		if (e.jPlayer.status.seekPercent == 100) {
			var next = Quran.getNextAya(this.currItem.sura, this.currItem.aya);
			if (next.sura != 115)
				this.preload($.extend(next, {
					reciter: this.currItem.reciter
				}));
		}
	},
	proceed: function () {
		if (this.playList.length > 0) {
			this.load();
			this.play();
			return;
		}
		if (opt.playScope != 'cont') {
			var next = Quran.addOffset(curr.sura, curr.aya, +1, true);
			var stop = opt.playScope == 'aya' || opt.playScope == 'sura' && next.sura != curr.sura;
			stop = stop || opt.playScope == 'page' && Quran.getPage(next.sura, next.aya) != Quran.getPage(curr.sura, curr.aya);
			stop = stop || opt.playScope == 'juz' && Quran.getJuz(next.sura, next.aya) != Quran.getJuz(curr.sura, curr.aya);
			if (stop)
				return;
		}
		this.isPlaying = true;
		var playDuration = this.status('duration');
		var delay = (opt.playDelay == 'len') ? playDuration : opt.playDelay;
		clearTimeout(this.delayID);
		this.delayID = setTimeout('changeAya(+1, true)', delay * 1000);
	},
	getUrl: function (item) {
		fileName = $.pad(item.sura, 3) + $.pad(item.aya, 3) + '.mp3';
		var base = 'http://tanzil.net/res/audio/' + item.reciter + '/';
		if (reciteList[item.reciter].server == 'everyayah.com')
			base = 'http://www.everyayah.com/data/' + reciteList[item.reciter].base + '/';
		return base + fileName;
	},
	resetPlayList: function () {
		this.playList = [];
		for (var i in opt.reciters) {
			var reciter = opt.reciters[i];
			if (i == 0 && curr.aya == 1 && curr.sura != 1 && curr.sura != 9 && !this.bismIncluded(reciter.id))
				this.playList.push({
					sura: curr.sura,
					aya: 0,
					reciter: reciter.id
				});
			for (var j = 0; j < reciter.num; j++)
				this.playList.push({
					sura: curr.sura,
					aya: curr.aya,
					reciter: reciter.id
				});
		}
	},
	bismIncluded: function (reciter) {
		return $.isInArray(reciter, this.hasBism);
	},
	end: 0
};