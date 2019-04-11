function setCookie(name, value, opts) {
    let cook = '';
    // 値はあらかじめエンコード処理する
    cook += name + '=' + encodeURIComponent(value);
    // console.log(cook);
    // 有効期限の設定
    if (opts.expires) {
        let exp = new Date();
        exp.setDate(exp.getDate() + opts.expires);
        cook += '; expires=' + exp.toUTCString();
    }
    // console.log(cook);
    // その他オプションの設定
    if (opts.maxAge) { cook += '; max-age=' + opts.maxAge; }
    if (opts.domain) { cook += '; domain=' + opts.domain; }
    if (opts.path) { cook += '; path=' + opts.path; }
    if (opts.secure) { cook += '; secure='; }

    // 組み立てたcookie文字列を設定
    document.cookie = cook;

}

setCookie('Author', 'echizenya', { expires: 90});
