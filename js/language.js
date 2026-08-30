const LANGUAGE={

    zh:{

        blog:"博客",

        support:"支援 ▼",

        community:"社區 ▼",

        minecraft:"Minecraft",

        map:"世界地圖",

        cloud:"雲服務",

        docs:"文檔",

        title:"LTL Studio",

        intro:
        "LTL Studio 是一個技術與項目展示平台。",

        latest:"最新更新",

        projects:"項目",

        language:"🌐 English"

    },


    en:{

        blog:"Blog",

        support:"Support ▼",

        community:"Community ▼",

        minecraft:"Minecraft",

        map:"World Map",

        cloud:"Cloud Service",

        docs:"Documentation",

        title:"LTL Studio",

        intro:
        "LTL Studio is a platform for projects and technology.",

        latest:"Latest Updates",

        projects:"Projects",

        language:"🌐 中文"

    }

};



// 默認語言

let currentLanguage =
navigator.language.startsWith("zh")
? "zh"
: "en";



// 更新語言

function updateLanguage(){

    document
    .querySelectorAll("[data-lang]")
    .forEach(element=>{

        let key =
        element.dataset.lang;


        if(LANGUAGE[currentLanguage][key]){

            element.innerHTML =
            LANGUAGE[currentLanguage][key];

        }

    });

}



// 切換語言

function changeLanguage(){

    currentLanguage =
    currentLanguage==="zh"
    ? "en"
    : "zh";


    updateLanguage();

}