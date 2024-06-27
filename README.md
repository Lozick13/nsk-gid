# Настройка бекенда

1. Пропишите IP бекенда в файле `server/server.cjs`.
   
2. Для использования базы данных необходимо создать в MongoDB новую базу данных `nsk-gid` со следующими коллекциями: `places`, `categories`, `users`.
   
3. Данные для коллекций находятся в JSON файлах в папке `db`.
   
4. Адрес подключения к базе данных можно изменить в файле `server/config/db.cjs`.

# Настройка клиента

1. Пропишите адрес бекенда в файле `client/src/url.ts`.

# Запуск бекенда

```bash
cd server
npm i
node server.cjs
```

# Запуск клиента

```bash
cd client
npm i
npm run build
npm run preview
```
