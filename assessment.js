'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;
  }

  // 診断結果表示エリアの作成
  resultDivision.innerText = '';

  // headerDivision の作成
  const headerDivision = document.createElement('div');
  headerDivision.setAttribute('class', 'card-header text-bg-primary');
  headerDivision.innerText = '診断結果';

  // bodyDivision の作成
  const bodyDivision = document.createElement('div');
  bodyDivision.setAttribute('class', 'card-body');

  const paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'card-text');
  const result = assessment(userName);
  paragraph.innerText = result;
  bodyDivision.appendChild(paragraph);

  // resultDivision に Bootstrap のスタイルを適用する
  resultDivision.setAttribute('class', 'card');

  // headerDivision と bodyDivision を resultDivision に差し込む
  resultDivision.appendChild(headerDivision);
  resultDivision.appendChild(bodyDivision);

  // ツイートエリアの作成
  tweetDivision.innerText = '';
  const anchor = document.createElement('a');
  const hrefValue =
    'https://twitter.com/intent/tweet?button_hashtag=' +
    encodeURIComponent('あなたのラッキーアイテム') +
    '&ref_src=twsrc%5Etfw';

  anchor.setAttribute('href', hrefValue);
  anchor.setAttribute('class', 'twitter-hashtag-button');
  anchor.setAttribute('data-text', result);
  anchor.innerText = 'Tweet #あなたのラッキーアイテム';

  tweetDivision.appendChild(anchor);

  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivision.appendChild(script);
};

userNameInput.onkeydown = event => {
  if (event.key === 'Enter') {
    assessmentButton.onclick();
  }
};

const answers = [
  '###userName###のラッキーアイテムは鈴です。###userName###を失敗から守るでしょう。',
  '###userName###のラッキーアイテムはドーナツです。###userName###の頑張りを認めてくれる人の出会えるでしょう。',
  '###userName###のラッキーアイテムはカバンです。###userName###の欲しかったものが手に入るでしょう。',
  '###userName###のラッキーアイテムはリボンです。###userName###は珍しい蝶々に出会えるでしょう。',
  '###userName###のラッキーアイテムはネクタイです。###userName###の服装をほめてもらえるでしょう。',
  '###userName###のラッキーアイテムはメガネです。###userName###の知らなかったことに出会えるでしょう。',
  '###userName###のラッキーアイテムはうちわです。###userName###が困った時に助けてもらえるでしょう。',
  '###userName###のラッキーアイテムはゲームです。###userName###の人生の中で一番のワクワクを味わえるでしょう。',
  '###userName###のラッキーアイテムはTシャツです。###userName###の体が楽になるでしょう。',
  '###userName###のラッキーアイテムはファイルです。###userName###の記憶力がアップするでしょう。',
  '###userName###のラッキーアイテムは折り紙です。###userName###の集中力がアップするでしょう。',
  '###userName###のラッキーアイテムはノートです。###userName###の大切な人と再会するでしょう。',
  '###userName###のラッキーアイテムはパソコンです。###userName###の知識がアップするでしょう。',
  '###userName###のラッキーアイテムはスマホです。###userName###に友達が増えるでしょう。',
  '###userName###のラッキーアイテムは全てです。###userName###の運勢は最高でしょう。',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
  // 全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  // 文字のコード番号の合計を回答の数で割って添字の数値を求める
  const index = sumOfCharCode % answers.length;
  let result = answers[index];

  result = result.replaceAll('###userName###', userName);
  return result;
}

// テストコード
console.assert(
  assessment('太郎') ===
    '太郎のラッキーアイテムはメガネです。太郎の知らなかったことに出会えるでしょう。',
  '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);
console.assert(
  assessment('太郎') === assessment('太郎'),
  '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
);
