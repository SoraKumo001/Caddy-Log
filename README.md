# CaddyLog

## description

Caddy用LogViewerのWebアプリ

## usage

- 初期設定  
`main.json`にホスト名やログファイルのURLを記述

- ビルド  
`yarn && yarn build`

- 実行
`yarn start`

- 確認  
`http://localhost:3000/`

## dockerによるデプロイ

`.env-deploy.d`を`.env-deploy`に修正し、サーバのアドレスを記述すると、Dockerでデプロイを行います。  
ただしサーバ側がtls接続を有効にしている必要があります。
