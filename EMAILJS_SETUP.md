# EmailJS セットアップガイド

## 📧 完全なEmailJS設定手順

### ステップ1: EmailJSアカウント作成

1. **サイトアクセス**: https://www.emailjs.com/
2. **アカウント作成**: 「Sign up」→ Googleアカウントまたはメールで登録
3. **メール認証**: 送信されたメールで認証完了

### ステップ2: メールサービス設定

1. **サービス追加**
   - ダッシュボード → 「Email Services」
   - 「Add Service」をクリック

2. **Gmail設定（推奨）**
   - 「Gmail」を選択
   - 「Connect Account」
   - Gmailでログイン・認証
   - **Service ID**をコピー（例: `service_abc123x`）

### ステップ3: メールテンプレート作成

1. **テンプレート作成**
   - ダッシュボード → 「Email Templates」
   - 「Create New Template」

2. **テンプレート設定**
   - **Template Name**: `portfolio_contact`
   - **Subject**: `{{subject}} - ポートフォリオサイトからのお問い合わせ`
   - **Content**: 以下のHTMLをコピー

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{subject}}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #4f46e5; color: white; padding: 20px; border-radius: 8px; }
        .content { padding: 20px; background: #f9fafb; margin: 20px 0; border-radius: 8px; }
        .footer { color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 10px; }
    </style>
</head>
<body>
    <div class="header">
        <h2>🌟 ポートフォリオサイトからお問い合わせ</h2>
    </div>
    
    <div class="content">
        <p><strong>👤 お名前:</strong> {{from_name}}</p>
        <p><strong>📧 メール:</strong> {{from_email}}</p>
        <p><strong>📋 件名:</strong> {{subject}}</p>
        
        <h3>📝 メッセージ:</h3>
        <div style="background: white; padding: 15px; border-left: 4px solid #4f46e5; border-radius: 4px;">
            {{message}}
        </div>
    </div>
    
    <div class="footer">
        <p>このメールは {{to_name}} のポートフォリオサイト（star-t-rain.vercel.app）から自動送信されました。</p>
        <p>返信する場合は {{from_email}} 宛に送信してください。</p>
    </div>
</body>
</html>
```

3. **テンプレート設定完了**
   - 「Save」をクリック
   - **Template ID**をコピー（例: `template_xyz789a`）

### ステップ4: パブリックキー取得

1. **キー取得**
   - ダッシュボード → 「Account」→「API Keys」
   - **Public Key**をコピー（例: `abcdefghijk`）

### ステップ5: 環境変数設定

プロジェクトの`.env.local`ファイルを編集：

```bash
# EmailJS設定
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123x
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789a
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijk
```

### ステップ6: テスト送信

1. **開発サーバー再起動**
```bash
npm run dev
```

2. **フォームテスト**
   - http://localhost:3000 にアクセス
   - お問い合わせフォームに入力
   - 「送信する」ボタンをクリック

3. **動作確認**
   - ブラウザのコンソール（F12）でエラーチェック
   - 設定したGmailにメールが届くか確認

## 🐛 トラブルシューティング

### よくあるエラーと解決方法

#### 1. 環境変数エラー
**エラー**: "EmailJS設定が完了していません"
**解決**: 
- `.env.local`ファイルが存在するか確認
- 値が`your_xxx_here`のままになっていないか確認
- 開発サーバーを再起動

#### 2. 認証エラー (401)
**エラー**: "EmailJS認証エラー"
**解決**:
- Public Keyが正しいか確認
- EmailJSダッシュボードでアカウント状況確認

#### 3. テンプレートエラー (404)
**エラー**: "テンプレートまたはサービスが見つかりません"
**解決**:
- Service IDとTemplate IDが正しいか確認
- EmailJSダッシュボードでIDを再確認

#### 4. 送信制限エラー (402)
**エラー**: "送信制限に達しました"
**解決**:
- EmailJSの無料プランは月200通まで
- 有料プランへのアップグレードを検討

### デバッグ方法

1. **コンソールログ確認**
```javascript
// ブラウザの開発者ツール（F12）→ Console
// 以下のようなログが表示されます
"EmailJS送信開始..."
"Service ID: service_abc123x"
"Template ID: template_xyz789a"
"EmailJS送信成功" // または エラーメッセージ
```

2. **ネットワーク確認**
   - 開発者ツール → Network タブ
   - `emailjs.com` へのリクエストを確認

3. **手動テスト**
```bash
# EmailJSの状態確認
curl -X POST "https://api.emailjs.com/api/v1.0/email/send" \
  -H "Content-Type: application/json" \
  -d '{
    "service_id": "your_service_id",
    "template_id": "your_template_id", 
    "user_id": "your_public_key",
    "template_params": {
      "from_name": "テスト",
      "from_email": "test@example.com",
      "message": "テストメッセージ"
    }
  }'
```

## 🚀 Vercelでの本番設定

### 環境変数の設定

1. **Vercelダッシュボード**
   - プロジェクト → Settings → Environment Variables

2. **変数追加**
```
Name: NEXT_PUBLIC_EMAILJS_SERVICE_ID
Value: service_abc123x

Name: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID  
Value: template_xyz789a

Name: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
Value: abcdefghijk
```

3. **再デプロイ**
   - Deployments → 最新デプロイメントの「...」→ Redeploy

## 📊 監視とメンテナンス

### 送信状況の確認
- EmailJSダッシュボード → Analytics
- 月間送信数、成功率、エラー率を確認

### セキュリティ
- Public Keyは文字通りパブリック（公開OK）
- Service IDとTemplate IDも公開されて問題なし
- 実際のメール送信はEmailJSサーバー経由で安全

### 制限事項
- **無料プラン**: 月200通、1日20通
- **送信間隔**: 同一IPから5秒以内に複数送信不可
- **ファイル添付**: サポートされていない

## ✅ 完了確認チェックリスト

- [ ] EmailJSアカウント作成完了
- [ ] Gmailサービス連携完了  
- [ ] テンプレート作成完了
- [ ] Service ID、Template ID、Public Key取得完了
- [ ] `.env.local`設定完了
- [ ] ローカルでテスト送信成功
- [ ] Vercel環境変数設定完了
- [ ] 本番環境でテスト送信成功

この手順で完了すれば、お問い合わせフォームが正常に動作します！