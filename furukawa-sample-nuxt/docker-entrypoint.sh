#!/bin/sh



# echo ${host_ip} ' to local-school.sample.jp'
# echo ${host_ip}   local-school.sample.jp >> /etc/hosts

if [ "$NODE_ENV" = "development" ]; then

    host_ip=`dig host.docker.internal +short`

    if [ -n "$host_ip" ]; then
        echo '💫 host.docker.internalが取得できているのでhostsに設定します 💫'
    else
        # dockerのバージョンやプラットフォームによっては docker.internal が取れないので
        # とれなかった場合のIP再取得（ルーティング上のひとつ上のIPと想定）
        echo '💫 host.docker.internalがとれない環境なのでsbin/ipから取得します。 💫'
        host_ip=`/sbin/ip route|awk '/default/ { print $3 }'`
    fi

    echo ${host_ip} `echo ${NUXT_PUBLIC_API_HOST} | sed 's/^https:\/\///'` >> /etc/hosts
fi


# APIの接続先として、ホスト側を叩くとnginxに流れてrailsに届く
#echo 10.0.2.2       local-api.sample.jp >> /etc/hosts
#echo 192.168.33.10   local-api.sample.jp >> /etc/hosts

# yarn install

# railsが応答可能になるのを簡単に判断する方法が無いので、
# 取り敢えず起動から20秒スリープする
# if [ "$NODE_ENV" = "development" ]; then
#     sleep 20
# fi

#yarn codegen
# yarn codegen:devise

# socket fileがある場合に削除
# https://github.com/nuxt/nuxt/issues/13587
# 通常のDockerの問題なのでmacはおこらないかも。
if [ "$DOCKER_SOCKET_READY" = "delete" ]; then
    find "/tmp/nitro/" -name 'worker*' -exec rm {} \;
    echo "削除忘れになってるソケットファイルを削除しました"
fi

if [ "$NODE_ENV" = "development" ]; then
    echo "nuxt が 💫開発💫モードで動作"
    echo "NODE_ENV === ${NODE_ENV}"
    echo "NUXT_PUBLIC_API_HOST === ${NUXT_PUBLIC_API_HOST}"

    if [ "$LOCAL_BUILD" = "true" ]; then
        nr build:dev
        nr start:dev
    else
        pnpm store path
        ni
        nr dev
    fi

else

    if [ "$NODE_ENV" = "staging" ]; then
        echo "nuxt が ⭐ステージング⭐モードで動作"
        echo "NODE_ENV === ${NODE_ENV}"
        echo "NUXT_PUBLIC_API_HOST === ${NUXT_PUBLIC_API_HOST}"
        nr build:stg
        nr start:stg
    else
        echo "nuxt が ⭐本番⭐モードで動作"
        echo "NODE_ENV === ${NODE_ENV}"
        echo "NUXT_PUBLIC_API_HOST === ${NUXT_PUBLIC_API_HOST}"
        nr build:prd
        nr start:prd
    fi
fi

# tail -f /dev/null
/bin/bash