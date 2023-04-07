#INSTUCCIONES - argumentos

FROM node:16

WORKDIR /user/app

COPY ./package.json package.json
COPY . .

RUN ["npm", "install"]
RUN ["npm", "install", "-g", "@nestjs/cli"]
# RUN ["npm", "run", "build"]

CMD ["npm", "run", "start:dev"]

EXPOSE 3001