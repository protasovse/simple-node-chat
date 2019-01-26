## Простой чат.
Сокет сервер на NodeJS. Приложение на VueJS.
в чат можно войти как User и как Admin. Сообщения админа отсылаются всем пользователям, а пользователя только админу.

### Клонируем проект
```bash
cd ~/my_projects
git clone https://github.com/protasovse/simple-node-chat.git
```


#### Установим зависимости и запустим приложение
```bash
cd simple-node-chat
npm i
npm run serve
```

Откройте в браузере: **[http://localhost:8080/](http://localhost:8080/)**


#### Запустим сокет сервер
Откройте новое окно терминала. В вашей системе должна быть установлена Node.JS

```bash
cd ~/my_projects/simple-node-chat
node server.js
```
