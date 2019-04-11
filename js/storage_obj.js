'use strict';
{
    let result1 = document.getElementById('result1');
    let result2 = document.getElementById('result2');
    let result3 = document.getElementById('result3');

    // ローカルストレージの取得
    let st = localStorage;

    // オブジェクトをJSON文字列に変換&ストレージに保存
    let info = { name: '山田太郎', age: 30, occupation: '花屋'};
    st.setItem('data', JSON.stringify(info));

    // ストレージから取得した文字列をオブジェクトとして解析
    let parsed = JSON.parse(st.getItem('data'));
    result1.textContent = parsed.name;
    result2.textContent = parsed.age;
    result3.textContent = parsed.occupation;

}
