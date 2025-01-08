FROM node:20 as build
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . /.
RUN npm run build

FROM node:20

COPY --from=build ./package.json ./package.json
COPY --from=build ./package-lock.json ./package-lock.json
COPY --from=build ./build ./build

ENV ORIGIN http://localhost:3000

RUN npm ci --omit dev

EXPOSE 3000
CMD [ "node", "build" ]