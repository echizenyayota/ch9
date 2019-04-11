'use strict';
{
    let result1 = document.getElementById('result1');
    let result2 = document.getElementById('result2');
    let result3 = document.getElementById('result3');

    // ローカルストレージの取得
    let st = localStorage;
    console.log(st);

    // ローカルストレージの取得
    st.setItem('greet1' ,'おはよう');
    st.greet2 = 'こんにちは';
    st['greet3'] = 'こんばんは';

    // ストレージから値を取得
    result1.textContent = st.getItem('greet1');
    result2.textContent = st.greet2;
    result3.textContent = st['greet3'];

}
