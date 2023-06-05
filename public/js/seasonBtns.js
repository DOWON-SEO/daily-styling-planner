const seasons = {
    spring : {
        btn : $(".btn.spring"),
        audio :document.querySelector("audio.spring"),
        changeTheme : () => {
            $(':root')
            .css('--nav-bg-color', '#FDCEDF')
            .css('--body-bg-color', '#F8E8EE')
            .css('--items-bg-color', '#F9F5F6')
            .css('--accent-color', '#F2BED1');
        }
    },
    summer : {
        btn : $(".btn.summer"),
        audio : document.querySelector("audio.summer"),
        changeTheme : () => {
            $(':root')
            .css('--nav-bg-color', '#62CDFF')
            .css('--body-bg-color', '#97DEFF')
            .css('--items-bg-color', '#C9EEFF')
            .css('--accent-color', '#0081C9');
        }
    },
    autumn : {
        btn : $(".btn.autumn"),
        audio : document.querySelector("audio.autumn"),
        changeTheme : () => {
            $(':root')
            .css('--nav-bg-color', '#ECCDB4')
            .css('--body-bg-color', '#F0EDD4')
            .css('--items-bg-color', '#F9FBE7')
            .css('--accent-color', '#C38154');
        }
    },
    winter : {
        btn : $(".btn.winter"),
        audio : document.querySelector("audio.winter"),
        changeTheme : () => {
            $(':root')
            .css('--nav-bg-color', '#526D82')
            .css('--body-bg-color', '#9DB2BF')
            .css('--items-bg-color', '#DDE6ED')
            .css('--accent-color', '#27374D');
        }
    }
}

function stopAllAudio(){
    Object.values(seasons).forEach((o) => {
        o.audio.pause()
    })
}

$(".btn.seasonBtn").each((i, btn) => {
    btn = $(btn)
    btn.click(() => {
        const season = btn.data("season")
        
        stopAllAudio()
        seasons[season].audio.play()
        seasons[season].changeTheme()
    })
})