# 🔽🔽🔽 ここから、Nodeベースイメージの作成 🔽🔽🔽
# Nodeの公式イメージを元にベースを作成する
FROM node:18.18.2 AS base

# タイムゾーンを設定
ENV TZ=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 文字コードを設定する
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

# 色々ツールインスコ
RUN apt-get -y upgrade && apt-get update -qq && \
  apt-get install -y --no-install-recommends \
  dnsutils \
  vim \
  curl \
  ncdu \
  htop \
  tree \
  lsof \
  tzdata \
  locales-all \
  fish && \
  echo "export LANG=ja_JP.UTF-8" >> ~/.bashrc

# Vimの設定を書き出し
RUN echo '\n\
  set fenc=utf-8\n\
  set encoding=utf-8\n\
  set fileencodings=iso-2022-jp,euc-jp,sjis,utf-8\n\
  set fileformats=unix,dos,mac\n\
  syntax on\n\
  colorscheme default\n\
  set backspace=indent,eol,start' >> /root/.vimrc

# fish をデフォルトシェルに設定
RUN chsh -s /usr/local/bin/fish && echo exec fish >> ~/.bashrc
RUN fish -l

# pnpm と ni コマンドをglobalインストール
RUN npm install -g pnpm@8.11.0 @antfu/ni

# pnpmのstoreの位置を明示的に設定しておく
RUN pnpm config set store-dir /root/.local/share/pnpm/store
# 🔼🔼🔼 ここまで、Nodeベースイメージの作成 🔼🔼🔼


# 🔽🔽🔽 ここから、依存関係のみ解決したイメージの作成 🔽🔽🔽
# ベースのイメージを元に依存関係用のイメージを作成する
FROM base AS dependencies

# ワーキングディレクトリの指定
WORKDIR /app

# 依存関係の設定ファイルをコピー
COPY package.json pnpm-lock.yaml .npmrc ./

# 依存関係のロックファルを元にパッケージを取得して仮想ストアに記録する
# (※DockerのBuildKitキャッシュマウントを使うともっと高速化しそうだが上手く行かない[要調査])
# RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store/v3 pnpm fetch --frozen-lockfile
RUN pnpm fetch --frozen-lockfile

# 実際に依存関係をインストール
# (※DockerのBuildKitキャッシュマウントを使うともっと高速化しそうだが上手く行かない[要調査])
# RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store/v3 pnpm install --frozen-lockfile
RUN pnpm install --frozen-lockfile
# 🔼🔼🔼 ここまで、依存関係のみ解決したイメージの作成 🔼🔼🔼

# 🔽🔽🔽 ここから、開発モード[dev]のイメージの作成 🔽🔽🔽
# 依存関係を解決したイメージを元にビルド用のイメージを作成する
FROM base AS dev

# ワーキングディレクトリの指定
WORKDIR /app

# ディレクトリの中身を全部コピー
COPY . .

# 依存関係解決用のイメージからpnpmのstoreとnode_modulesをコピーする
COPY --from=dependencies /root/.local/share/pnpm/store /root/.local/share/pnpm/store
COPY --from=dependencies /app/node_modules ./node_modules

# 起動
ENTRYPOINT ["./docker-entrypoint.sh"]
# 🔼🔼🔼 ここから、開発モード[dev]のイメージの作成 🔼🔼🔼

# 🔽🔽🔽 ここから、ビルドを実行したイメージの作成 🔽🔽🔽
# 依存関係を解決したイメージを元にビルド用のイメージを作成する
FROM base AS build

# ワーキングディレクトリの指定
WORKDIR /app

# ディレクトリの中身を全部コピー
COPY . .

# 依存関係解決用のイメージからnode_modulesをコピーする
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /root/.local/share/pnpm/store /root/.local/share/pnpm/store

# 実際にビルドする
RUN pnpm build

# 起動
ENTRYPOINT ["./docker-entrypoint.sh"]
# 🔼🔼🔼 ここまで、ビルドを実行したイメージの作成 🔼🔼🔼










# 🔽🔽🔽 ここから、本番デプロイ用イメージの作成 🔽🔽🔽
# FROM build AS deploy

# # # ワーキングディレクトリの指定
# # WORKDIR /app

# # nuxt build で生成されるディレクトリをコピー
# # COPY --from=build /app/node_modules ./node_modules
# # COPY --from=build /app/.output/ ./.output/
# # COPY --from=build /app/.nuxt/ ./.nuxt/

# # 静的サイトで nuxt generate を実行した場合はこのコピーが必要
# # COPY --from=build /app/dist/ /dist/

# # 起動
# # CMD ["nr", "start"]
# ENTRYPOINT ["./docker-entrypoint.sh"]
# 🔼🔼🔼 ここまで、本番デプロイ用イメージの作成 🔼🔼🔼