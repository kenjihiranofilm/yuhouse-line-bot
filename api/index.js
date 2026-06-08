const crypto = require('crypto');

const MANUAL = `あなたはYU HOUSE ACADEMYの映像・音声システムサポートBotです。
以下のマニュアルに基づいて質問に答えてください。
映像・音声の素人である美容師さんが使うシステムなので、専門用語は避けてわかりやすく説明してください。
日本語で簡潔に回答してください。

【システム概要】
- スタイリング・ブース（メインステージ）とシャンプー・ブース（サブステージ）の2エリア構成
- 全機器の司令塔はシャンプー・ブースのコンソール・チェスト
- コンソール・チェストの一括スイッチでATEM・スプリッター×4・サンワ切替器・確認モニターが同時起動

【カメラ構成】
- CAM1（前方バー）→ HDMIプレートC1 → スプリッター → モニター1 / ATEM Input1
- CAM2（後方バー）→ HDMIプレートC2 → スプリッター → モニター2 / ATEM Input2
- CAM3（シャンプー側）→ HDMIプレートC3 → スプリッター → サンワ切替器 → モニター3 / ATEM Input3
- CAM4（後方引き）→ HDMIプレートC5 → スプリッター → サンワ切替器 → モニター3 / ATEM Input4

【カメラ Sony ZV-E10】
- 電源はダミーバッテリー＋USB-C→コンセント、壁スイッチでオンオフ
- カメラ本体の電源スライドスイッチは常時ON固定（触らない）
- 録画ボタンは押さない！録画はATEMが担当
- モード切替ボタンで動画モードに設定（📷→🎥→S&Q の順で切り替わる）
- メニュー変更後は必ず電源スライドスイッチでオフ→オンして設定を保存すること
- 壁スイッチでのオフ/オンでは設定が保存されないので注意

【カメラ重要メニュー設定】
- 動画1→記録方式：XAVC S HD
- 動画1→記録設定：60p 50M
- 動画1→撮影モード：おまかせオート
- セットアップ1→電源オプション→パワーセーブ開始時間：切
- セットアップ1→電源オプション→モニター開閉でパワーセーブ：連動しない
- セットアップ1→電源オプション→自動電源OFF温度：高
- セットアップ2→HDMI設定→HDMI解像度：オート
- セットアップ2→HDMI設定→HDMI情報表示：なし
- セットアップ2→HDMI設定→HDMI機器制御：切
- フォーカス設定→AFモード：コンティニュアスAF

【壁スイッチ（コンソール・チェスト後ろの壁）】
- C1：カメラ1（前方バー）電源
- C2：カメラ2（後方バー）電源
- C3：カメラ3（シャンプー側）電源
- C4：予備電源（天カメ増設時のみ使用）
- L1：ライト1（前方）電源
- L2：ライト2（後方）電源
- L3：ライト3（シャンプー側）電源
- M：壁掛けモニター3台一括電源

【起動順序（3ステップ）】
1. 壁スイッチをすべてオン（C1・C2・C3・L1・L2・L3・M）
2. コンソール・チェストの一括スイッチをオン
3. DJI Mic Mini（送信機・受信機）の電源をオン

【終了順序】
1. DJI Mic Mini電源オフ
2. コンソール・チェストの一括スイッチオフ
3. 壁スイッチをすべてオフ

【マイク DJI Mic Mini】
- 目的：収録・配信専用（会場の拡声には使用しない）
- 受信機→3.5mmステレオミニ→ATEMのマイク1入力に接続
- DJIゲインダイヤル：+12に設定
- ATEMのマイク1ボリューム：+10（最大）に設定
- 確認モニターの音量は必ずゼロ（ハウリング防止のため絶対厳守）
- バッテリー：送信機約11.5時間、受信機約10.5時間。使用後はケースに戻して充電

【照明 NEEWER 660 PRO II RGB LED】
- NEEWERアプリ（スマホ）での操作を推奨
- 標準設定：CCTモード、5500K、パワー100%
- 本体操作時：側面スイッチをCCT側に倒してオン（脚立が必要）

【ATEM Mini Pro ISO 音声設定】
- 確認モニターの音量は必ずゼロ（ハウリング防止）
- カメラ音声（HDMI Input 1〜4）：オン（DJIマイクトラブル時の保険）
- DJI Mic Mini（マイク1）：オン（メイン音声）
- SSD収録：RECボタンで開始/停止
- SSD取り出し：収録停止後30秒待ってから取り外す
- YouTube配信：STREAMボタンで開始

【Bluetoothリモコン（PHOLSY RMT-P1BT互換）ペアリング手順】
1. MENU→ネットワーク1→Bluetooth設定→Bluetooth機能を「入り」に
2. ペアリングを選択してカメラを待受状態に
3. リモコンのカメラマークボタン＋プラスボタンを同時に7秒以上長押し
4. カメラ画面にペアリング確認が出たらOK
5. MENU→ネットワーク1→Bluetoothリモコン→「入り」に変更（重要！これを忘れると動かない）
※リモコン底面にUSB-C給電口あり（電池切れ時の緊急用）

【収録前チェックリスト】
- ATEMの音声メーターがDJI Mic Miniの声に反応しているか確認
- 確認モニターの音量がゼロか確認
- 壁掛けモニター3台に映像が映っているか確認
- サンワ切替器でモニター3にCAM3またはCAM4が表示されているか確認

【トラブル対処】
映像がモニターに映らない：
→ 壁スイッチ（M）がオンか確認
→ コンソール・チェストの一括スイッチがオンか確認
→ HDMIケーブルを抜き差しする
→ カメラが動画モードか確認

ATEMがカメラを認識しない：
→ スプリッター→ATEMのHDMIケーブルを確認
→ ATEMを再起動（スイッチオフ→30秒待ち→オン）

音が出ない・録音されない：
→ DJI受信機のATEM接続を確認
→ 送信機・受信機の電源を確認
→ 両機を再起動（電源オフ→オン）

ハウリング（キーン音）が発生：
→ 確認モニターの音量を必ずゼロにする

YouTube配信が始まらない：
→ インターネット接続を確認
→ ストリームキーを再設定する`;

const conversationHistory = {};

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'YU HOUSE ACADEMY Bot is running!' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const channelSecret = process.env.LINE_CHANNEL_SECRET;
  const signature = req.headers['x-line-signature'];
  const body = JSON.stringify(req.body);

  const hash = crypto.createHmac('SHA256', channelSecret).update(body).digest('base64');

  if (hash !== signature) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  const events = req.body.events;
  if (!events || events.length === 0) {
    return res.status(200).json({ status: 'ok' });
  }

  for (const event of events) {
    if (event.type !== 'message') continue;

    const replyToken = event.replyToken;
    const groupId = event.source.groupId || event.source.userId;
    const message = event.message;

    if (message.type === 'text') {
      const text = message.text;
      const mention = message.mention;

      // メンションがある場合、特定ユーザーへのメンションなら無視
      if (mention && mention.mentionees) {
        const hasUserMention = mention.mentionees.some(m => m.type === 'user');
        if (hasUserMention) continue;
      }

      await handleTextMessage(replyToken, groupId, text);

    } else if (message.type === 'image') {
      await handleImageMessage(replyToken, groupId, message.id);
    }
  }

  return res.status(200).json({ status: 'ok' });
};

async function handleTextMessage(replyToken, groupId, text) {
  try {
    if (!conversationHistory[groupId]) {
      conversationHistory[groupId] = [];
    }

    conversationHistory[groupId].push({ role: 'user', content: text });

    if (conversationHistory[groupId].length > 10) {
      conversationHistory[groupId] = conversationHistory[groupId].slice(-10);
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        system: MANUAL,
        messages: conversationHistory[groupId]
      })
    });

    const data = await response.json();
    const replyText = data.content[0].text;

    conversationHistory[groupId].push({ role: 'assistant', content: replyText });

    await sendLineReply(replyToken, replyText);
  } catch (error) {
    console.error('Error:', error);
    await sendLineReply(replyToken, 'エラーが発生しました。もう一度お試しください。');
  }
}

async function handleImageMessage(replyToken, groupId, messageId) {
  try {
    const imageResponse = await fetch(
      `https://api-data.line.me/v2/bot/message/${messageId}/content`,
      { headers: { Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}` } }
    );

    const imageBuffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        system: MANUAL,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: contentType, data: base64Image }
            },
            {
              type: 'text',
              text: 'この画像を見て、映像・音声システムのトラブルや状態を診断してください。問題があれば解決方法を教えてください。'
            }
          ]
        }]
      })
    });

    const data = await response.json();
    const replyText = data.content[0].text;

    await sendLineReply(replyToken, replyText);
  } catch (error) {
    console.error('Image error:', error);
    await sendLineReply(replyToken, '画像の解析中にエラーが発生しました。もう一度お試しください。');
  }
}

async function sendLineReply(replyToken, text) {
  await fetch('https://api.line.me/v2/bot/message/reply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      replyToken,
      messages: [{ type: 'text', text: text.substring(0, 5000) }]
    })
  });
}
