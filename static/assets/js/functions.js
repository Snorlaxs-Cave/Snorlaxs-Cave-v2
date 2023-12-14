function paramount() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://www.paramountplus.com/');
    });

}

function shittletv() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://shuttletv.net/');
    });

}

function tm() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://tlochsta.media/');
    });

}

function pokemoncom() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://www.pokemon.com/');
    });

}

function widget() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://e.widgetbot.io/channels/1107344487958724681/1118576886038143157');
    });

}

function ani() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://aniwatch.to/');
    });

}

function whatsapp() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://web.whatsapp.com/');
    });

}

function vs() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://vscode.dev/');
    });

}

function amazon() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://amazon.com/');
    });

}

function discord() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://discord.com');
    });

}

function google() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://google.com');
    });

}

function soundcloud() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://soundcloud.com/');
    });

}

function twitch() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://twitch.tv');
    });

}

function max() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://max.com');
    });

}

function github() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://github.com/');
    });

}

function geforce() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://play.geforcenow.com');
    });

}

function coolMathGames() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://coolmathgames.com');
    });

}

function spotify() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://spotify.com');
    });

}

function youtube() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://youtube.com');
    });

}

function tiktok() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://tiktok.com');
    });

}

function chess() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://chess.com');
    });

}

function reddit() {

    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        location.href = __uv$config.prefix + __uv$config.encodeUrl('https://reddit.com');
    });

}

function apps(url) {
    window.navigator.serviceWorker.register('/sw.js', {
      scope: __uv$config.prefix
    }).then(() => {
      location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
  }
  
  function openLink(url) {
    apps(url);
  }

function ourDiscord() {
    window.location.href = 'https://discord.gg/Cqaa8x82Ch';
}


function patreon() {
    window.location.href = 'https://patreon.com/SnorlaxCave';
}

function email() {
    window.location.href = 'birdy@snorlaxscave.site';
}



function ourgithub() {
    window.location.href = 'https://github.com/SPS-Services/cave-v1';
}

function pluto() {
    window.location.href = 'https://discord.gg/obx';
}

function bgChange(color) {
    localStorage.setItem("color", color)
    window.location = window.location
}

function setImageBackground() {
    var url = document.getElementById('imageUrl').value;
    localStorage.setItem("backgroundImage", url);
    window.location.reload();
}
function setName() {
    const input = document.getElementById('name');
    const newTabName = input.value;

    document.title = newTabName;
    localStorage.setItem('tabName', newTabName);
  }
