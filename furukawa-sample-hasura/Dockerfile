FROM hasura/graphql-engine:v2.35.1.cli-migrations-v3.ubuntu

ENV TZ=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update && apt -y install software-properties-common

# RUN apt update && \
#     apt upgrade && \
#     apt autoremove && \
#     apt clean && \
#     apt dist-upgrade && \
#     apt install update-manager-core
RUN apt-add-repository ppa:fish-shell/release-3 && \
    apt-get update && \
    apt -y install wget && \
    apt -y install curl && \
    apt -y install tree && \
    apt -y install ncdu && \
    apt -y install htop && \
    apt -y install fish

# hasura-cliをインスコ
RUN curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash

COPY hasura/ /hasura/

# RUN apt-add-repository ppa:fish-shell/release-3 && \
#     apt-get update && \
#     apt -y install wget curl tree ncdu which htop fish

# RUN apt -y install wget curl tree ncdu which htop
# RUN cd /etc/yum.repos.d/ && \
#     wget https://download.opensuse.org/repositories/shells:fish:release:3/CentOS_7/shells:fish:release:3.repo && \
#     yum -y install fish
# # RUN curl -sL https://git.io/fisher | source && fisher install jorgebucaran/fisher

# #RUN mkdir -p /var/log/{api/hasura,nuxt/sample,nuxt/student,nuxt/school,nuxt/company,nuxt/assistant}
# RUN mkdir -p /var/log/output

# # COPY volume/conf/application.conf /fluent-bit/etc/application.conf
# COPY ./conf/fluent-bit.conf /fluent-bit/etc/fluent-bit.conf
# COPY ./docker-entrypoint.sh ./docker-entrypoint.sh
# RUN chmod +x ./docker-entrypoint.sh

# ENTRYPOINT ["/bin/sh", "-c", "/docker-entrypoint.sh" ]
# # CMD ["/fluent-bit/bin/fluent-bit", "-c", "/fluent-bit/etc/fluent-bit.conf"]

CMD graphql-engine \
    serve

# CMD HASURA_GRAPHQL_METADATA_DATABASE_URL=$DATABASE_URL graphql-engine \
#     serve \
#     --server-port $PORT