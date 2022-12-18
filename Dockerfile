FROM node:current-bullseye

LABEL maintainer="hoplin"

RUN mkdir playground

WORKDIR /playground

#Copy playground file
COPY /playground /playground
#Install dependencies
RUN npm i

ENTRYPOINT [ "npm" ]
CMD [ "run","play" ]
# Export ports default 4000, for cases 3000
EXPOSE 3000 4000