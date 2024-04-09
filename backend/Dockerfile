FROM node:18-alpine AS setup

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .

FROM setup AS prod

RUN npm run build

CMD [ "node", "dist/index.js" ]