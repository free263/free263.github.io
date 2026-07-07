// ===== 分类元数据（仅包含分类信息，不包含歌曲列表） =====
window.__categoryMetaData = [
    { category: 1, name: "国语精选", cover: "./music/china.jpg", file: "playlist-category-1.js" },
    { category: 2, name: "欧美经典", cover: "./music/usa.jpg", file: "playlist-category-2.js" },
    { category: 3, name: "空灵轻音乐", cover: "./music/kong.jpg", file: "playlist-category-3.js" },
    { category: 4, name: "韩语流行", cover: "./music/korea.jpg", file: "playlist-category-4.js" },
    { category: 5, name: "日语流行", cover: "./music/japan.jpg", file: "playlist-category-5.js" },
    { category: 6, name: "泰国音乐", cover: "./music/thailand.jpg", file: "playlist-category-6.js" },
    { category: 7, name: "自然之声", cover: "./music/ziran.jpg", file: "playlist-category-7.js" },
    { category: 8, name: "唯美纯音乐", cover: "./music/weimei.jpg", file: "playlist-category-8.js" },
    { category: 9, name: "周深", cover: "./music/zhoushen.jpg", file: "playlist-category-9.js" },
    { category: 10, name: "洋澜一", cover: "./music/yanglanyi.jpg", file: "playlist-category-10.js" },
    { category: 11, name: "治愈系放空舒缓音乐", cover: "./music/zhiyu.jpg", file: "playlist-category-11.js" },
    { category: 17, name: "印度音乐", cover: "./music/india.jpg", file: "playlist-category-17.js" }
];

// ===== 数据缓存 =====
window.__categoryDataMap = {};
window.__loadedCategories = {};

// ===== 加载分类数据（按需加载） =====
window.loadCategoryData = function(categoryId, callback) {
    // 如果已加载，直接返回缓存
    if (window.__loadedCategories[categoryId]) {
        if (callback) callback(window.__categoryDataMap[categoryId]);
        return;
    }

    // 查找元数据
    var meta = window.__categoryMetaData.find(function(item) {
        return item.category === categoryId;
    });

    if (!meta) {
        console.error('未找到分类:', categoryId);
        if (callback) callback(null);
        return;
    }

    // 动态加载 JS 文件
    var script = document.createElement('script');
    script.src = meta.file;
    script.onload = function() {
        if (window.__categoryData && window.__categoryData[categoryId]) {
            window.__categoryDataMap[categoryId] = window.__categoryData[categoryId];
            window.__loadedCategories[categoryId] = true;
            if (callback) callback(window.__categoryDataMap[categoryId]);
        } else {
            console.error('加载分类数据失败:', categoryId);
            if (callback) callback(null);
        }
    };
    script.onerror = function() {
        console.error('加载分类文件失败:', meta.file);
        if (callback) callback(null);
    };
    document.head.appendChild(script);
};

// ===== 获取分类列表（仅元数据） =====
window.getCategoryList = function() {
    return window.__categoryMetaData.map(function(item) {
        return {
            category: item.category,
            name: item.name,
            cover: item.cover
        };
    });
};

// ===== 获取分类的歌曲列表 =====
window.getCategoryMusics = function(categoryId, callback) {
    if (window.__loadedCategories[categoryId]) {
        var data = window.__categoryDataMap[categoryId];
        if (callback) callback(data ? data.musics : []);
        return;
    }

    window.loadCategoryData(categoryId, function(data) {
        if (callback) callback(data ? data.musics : []);
    });
};