FROM node:lts-alpine

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app

# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY /docker/hakaton/api/package*.json ./

# устанавливаем зависимости проекта
RUN npm install

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY /docker/hakaton/api/* .

# собираем приложение для production с минификацией
# RUN npm run build

CMD [ "npm", "run" "prod" ]