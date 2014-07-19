var locale = 'fa_IR';
var language = locale.split('_')[0];
var isRTL = true;
var quranTypes = {
	'simple': 'ساده',
	'simple-plain': 'ساده (پایه)',
	'simple-min': 'ساده (مینیمال)',
	'simple-clean': 'ساده (بدون اعراب)',
	'uthmani': 'عثمانی',
	'uthmani-min': 'عثمانی (مینیمال)'
};
var defQuranType = 'simple';
var defSura = 21;
var reciteList = {
	'abdulbasit': {
		name: "عبدالباسط",
		full: "عبدالباسط عبدالصمد"
	},
	'abdulbasit-mjwd': {
		name: "عبدالباسط (تجوید)",
		full: "عبدالباسط عبدالصمد"
	},
	'basfar': {
		name: "بصفر",
		full: "عبدالله بصفر"
	},
	'basfar2': {
		name: "بصفر II",
		full: "عبدالله بصفر"
	},
	'ajamy': {
		name: "عجمی",
		full: "احمد العجمی"
	},
	'ghamadi': {
		name: "غامدی",
		full: "سعد الغامدی"
	},
	'hudhaify': {
		name: "حذیفی",
		full: "علی الحذیفی"
	},
	'husary': {
		name: "حصری",
		full: "خلیل الحصری"
	},
	'husary-mjwd': {
		name: "حصری (تجوید)",
		full: "خلیل الحصری"
	},
	'minshawi': {
		name: "منشاوی",
		full: "محمد صدیق المنشاوی"
	},
	'minshawi-mjwd': {
		name: "منشاوی (تجوید)",
		full: "محمد صدیق المنشاوی"
	},
	'shateri': {
		name: "شاطری",
		full: "ابوبکر الشاطری"
	},
	'shuraim': {
		name: "شریم",
		full: "سعد بن ابراهیم الشریم"
	},
	'sudais': {
		name: "سدیس",
		full: "عبدالرحمن السدیس"
	},
	'tablawi': {
		name: "طبلاوی",
		full: "محمد محمود الطبلاوی"
	},
	'hani': {
		name: "رفاعی",
		full: "هانی الرفاعی"
	},
	'akhdar': {
		name: "اخدر",
		full: "ابراهیم الاخدر"
	},
	'muaiqly': {
		name: "معیقلی",
		full: "ماهر المعیقلی"
	},
	'afasy': {
		name: "عفاسی",
		full: "مشاری بن راشد العفاسی"
	},
	'ayyub': {
		name: "محمد ایوب",
		full: "محمد ایوب"
	},
	'jibreel': {
		name: "محمد جبریل",
		full: "محمد جبریل"
	},
	'parhizgar': {
		name: "پرهیزگار",
		full: "شهریار پرهیزگار"
	},
	'bukhatir': {
		name: "بوخاطر",
		full: "صلاح عبدالرحمان بوخاطر"
	},
	'qasim': {
		name: "قاسم",
		full: "عبدالمحسن القاسم"
	},
	'juhany': {
		name: "جهنی",
		full: "عبدالله عواد الجهنی"
	},
	'matrood': {
		name: "مطرود",
		full: "عبدالله المطرود"
	},
	'musayev': {
		name: "آذربایجانی: Musayev",
		full: "صدا: Rasim Balayev",
		trans: 'az.musayev'
	},
	'itani': {
		name: "انگلیسی: Itani",
		full: "صدا: Itani",
		trans: 'en.itani'
	},
	'ibrahim': {
		name: "انگلیسی: Saheeh Intl.",
		full: "صدا: Ibrahim Walk",
		trans: 'en.sahih'
	},
	'fooladvand': {
		name: "فارسی: فولادوند",
		full: "صدا: هدایت‌فر",
		trans: 'fa.fooladvand'
	},
	'makarem': {
		name: "فارسی: مکارم شیرازی",
		full: "صدا: کبیری",
		trans: 'fa.makarem'
	}
};
var defRecite = 'parhizgar';
var defTransRecite = 'fooladvand';
var transList = {
	'am.sadiq': 'ሳዲቅ & ሳኒ ሐቢብ',
	'ar.jalalayn': 'تفسير الجلالين',
	'ar.muyassar': 'تفسير المیسر',
	'sq.nahi': 'Efendi Nahi',
	'sq.mehdiu': 'Feti Mehdiu',
	'sq.ahmeti': 'Sherif Ahmeti',
	'ber.mensur': 'At Mensur',
	'az.mammadaliyev': 'Məmmədəliyev & Bünyadov',
	'az.musayev': 'Musayev',
	'bn.hoque': 'জহুরুল হক',
	'bn.bengali': 'মুহিউদ্দীন খান',
	'bs.korkut': 'Korkut',
	'bs.mlivo': 'Mlivo',
	'bg.theophanov': 'Теофанов',
	'zh.jian': 'Ma Jian',
	'zh.majian': 'Ma Jian - Traditional',
	'cs.hrbek': 'Hrbek',
	'cs.nykl': 'Nykl',
	'dv.divehi': 'ދިވެހި',
	'nl.keyzer': 'Keyzer',
	'nl.leemhuis': 'Leemhuis',
	'nl.siregar': 'Siregar',
	'en.ahmedali': 'Ahmed Ali',
	'en.ahmedraza': 'Ahmed Raza Khan',
	'en.arberry': 'Arberry',
	'en.daryabadi': 'Daryabadi',
	'en.hilali': 'Hilali & Khan',
	'en.itani': 'Itani',
	'en.maududi': 'Maududi',
	'en.pickthall': 'Pickthall',
	'en.qarai': 'Qarai',
	'en.qaribullah': 'Qaribullah & Darwish',
	'en.sahih': 'Saheeh International',
	'en.sarwar': 'Sarwar',
	'en.shakir': 'Shakir',
	'en.wahiduddin': 'Wahiduddin Khan',
	'en.yusufali': 'Yusuf Ali',
	'en.transliteration': 'Transliteration',
	'fr.hamidullah': 'Hamidullah',
	'de.aburida': 'Abu Rida',
	'de.bubenheim': 'Bubenheim & Elyas',
	'de.khoury': 'Khoury',
	'de.zaidan': 'Zaidan',
	'ha.gumi': 'Gumi',
	'hi.farooq': 'फ़ारूक़ ख़ान & अहमद',
	'hi.hindi': 'फ़ारूक़ ख़ान & नदवी',
	'id.indonesian': 'Bahasa Indonesia',
	'id.jalalayn': 'Tafsir Jalalayn',
	'id.muntakhab': 'Quraish Shihab',
	'it.piccardo': 'Piccardo',
	'ja.japanese': 'Japanese',
	'ku.asan': 'ته‌فسیری ئاسان',
	'ko.korean': 'Korean',
	'ms.basmeih': 'Basmeih',
	'ml.abdulhameed': 'അബ്ദുല്‍ ഹമീദ് & പറപ്പൂര്‍',
	'ml.karakunnu': 'കാരകുന്ന് & എളയാവൂര്',
	'no.berg': 'Einar Berg',
	'fa.ghomshei': 'الهی قمشه‌ای',
	'fa.ansarian': 'انصاریان',
	'fa.ayati': 'آیتی',
	'fa.bahrampour': 'بهرام پور',
	'fa.khorramdel': 'خرمدل',
	'fa.khorramshahi': 'خرمشاهی',
	'fa.sadeqi': 'صادقی تهرانی',
	'fa.fooladvand': 'فولادوند',
	'fa.mojtabavi': 'مجتبوی',
	'fa.moezzi': 'معزی',
	'fa.makarem': 'مکارم شیرازی',
	'pl.bielawskiego': 'Bielawskiego',
	'pt.elhayek': 'El-Hayek',
	'ro.grigore': 'Grigore',
	'ru.abuadel': 'Абу Адель',
	'ru.muntahab': 'Аль-Мунтахаб',
	'ru.krachkovsky': 'Крачковский',
	'ru.kuliev': 'Кулиев',
	'ru.osmanov': 'Османов',
	'ru.porokhova': 'Порохова',
	'ru.sablukov': 'Саблуков',
	'sd.amroti': 'امروٽي',
	'so.abduh': 'Abduh',
	'es.asad': 'Asad',
	'es.cortes': 'Cortes',
	'sw.barwani': 'Al-Barwani',
	'sv.bernstrom': 'Bernström',
	'tg.ayati': 'Оятӣ',
	'ta.tamil': 'தமிழ்',
	'tt.nugman': 'Yakub Ibn Nugman',
	'th.thai': 'ภาษาไทย',
	'tr.golpinarli': 'Abdulbakî Gölpınarlı',
	'tr.bulac': 'Alİ Bulaç',
	'tr.transliteration': 'Çeviriyazı',
	'tr.diyanet': 'Diyanet İşleri',
	'tr.vakfi': 'Diyanet Vakfı',
	'tr.yuksel': 'Edip Yüksel',
	'tr.yazir': 'Elmalılı Hamdi Yazır',
	'tr.ozturk': 'Öztürk',
	'tr.yildirim': 'Suat Yıldırım',
	'tr.ates': 'Süleyman Ateş',
	'ur.maududi': 'ابوالاعلی مودودی',
	'ur.kanzuliman': 'احمد رضا خان',
	'ur.ahmedali': 'احمد علی',
	'ur.jalandhry': 'جالندہری',
	'ur.qadri': 'طاہر القادری',
	'ur.jawadi': 'علامہ جوادی',
	'ur.junagarhi': 'محمد جوناگڑھی',
	'ur.najafi': 'محمد حسین نجفی',
	'ug.saleh': 'محمد صالح',
	'uz.sodik': 'Мухаммад Содик'
};
var defTrans = 'fa.fooladvand';
var audioTransList = ['en.sahih', 'fa.fooladvand', 'fa.makarem'];
var langList = {
	ber: 'بربری',
	sq: 'آلبانیایی',
	am: 'امهری',
	ar: 'عربی',
	az: 'آذربایجانی',
	bn: 'بنگالی',
	bs: 'بوسنیایی',
	bg: 'بلغاری',
	cs: 'چک',
	dv: 'مالدیوی',
	nl: 'هلندی',
	en: 'انگلیسی',
	fr: 'فرانسوی',
	de: 'آلمانی',
	ha: 'هوسائی',
	hi: 'هندی',
	id: 'اندونزیایی',
	it: 'ایتالیایی',
	ja: 'ژاپنی',
	ko: 'کره‌ای',
	ku: 'کردی',
	ms: 'مالایی',
	ml: 'مالایالم',
	no: 'نروژی',
	fa: 'فارسی',
	pl: 'لهستانی',
	pt: 'پرتغالی',
	ro: 'رومانیایی',
	ru: 'روسی',
	sd: 'سندهی',
	so: 'سومالیایی',
	es: 'اسپانیایی',
	sw: 'سواحیلی',
	sv: 'سوئدی',
	tg: 'تاجیکی',
	ta: 'تامیلی',
	tt: 'تاتاری',
	th: 'تایلندی',
	tr: 'ترکی',
	ur: 'اردو',
	ug: 'اویغوری',
	uz: 'ازبکی',
	zh: 'چینی'
};
var rtlLangs = ['ar', 'fa', 'ur', 'ug', 'sd', 'ku', 'dv'];
var noJustifyLangs = ['ml', 'ta', 'th'];
var langData = {
	def: {
		font: 'Tahoma, Arial',
		sample: 'In the name of Allah, the Entirely Merciful, the Especially Merciful'
	},
	ug: {
		font: 'Microsoft Uighur, UKIJ Nasq, Scheherazade, Lateef, UKIJ Tuz, UKIJ Basma, Arial',
		sample: 'ناھايىتى شەپقەتلىك ۋە مېھرىبان اﷲ نىڭ ئىسمى بىلەن باشلايمەن'
	},
	ur: {
		font: 'Microsoft Uighur, Scheherazade, Lateef, Tahoma',
		sample: 'شروع الله کا نام لے کر جو بڑا مہربان نہایت رحم والا ہے'
	},
	ber: {
		font: 'Amazigh Arial, Amazigh Times New Roman',
		sample: 'Abrid n wid i T$atev; ur n wid i K isserfayen'
	},
	dv: {
		font: 'A_Ilham, A_Randhoo, A_Faruma, A_Waheed, Mv Faseyha',
		sample: 'رحمن ވަންތަ رحيم ވަންތަ اللَّه ގެ اسم ފުޅުން ފަށައިގަންނަމެވެ'
	},
	ku: {
		font: 'Unikurd Web, Tahoma, Arial',
		sample: 'Bismi Allah Arrahman الرحيم'
	}
};
var Consts = {
	'Juz': 'جزء',
	'Aya': 'آیه',
	'Translation': 'ترجمه',
	'Recitation': 'قرائت',
	'Close': 'بستن',
	'Cancel': 'لغو',
	'Submit': 'ارسال',
	'Remove': 'حذف',
	'Next Page': 'صفحه‌ی بعد',
	'Previous Page': 'صفحه‌ی قبل',
	'Default': 'پیش‌فرض',
	'Custom': 'دلخواه',
	'Duration of Aya': 'مدت آیه',
	'{0} sec': '{0} ثانیه',
	'{0} results in {1} ayas': '{0} مورد در {1} آیه',
	'Search string is empty.': 'رشته‌ی جستجو تهی است.',
	end: ''
};

var root = 'http://localhost/projects/firstimam';
var version = '1.5';
var fontAdded = false;
var isPageEmbedded = false;
jQuery(document).ready(function () {
	initPage({
		defTrans: ''
	});
});