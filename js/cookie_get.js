function getCookie(name) {
    let value = null;
    // 取得したクッキー文字列を「;」で分類
    let cookies = document.cookie.split(';');
    cookies.forEach(function(c) {
        // 名前=値 を = で分割
        let kv = c.split('=');
        if (kv[0] === name) {
            value = decodeURIComponent(kv[1]);
        }
    });
    return value;
}

console.log(getCookie('Author'));
