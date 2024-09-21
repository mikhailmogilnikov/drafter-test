# Тестовое задание Frontend в Drafter

### Инструкция по локальному запуску

1) Склонируйте репозиторий при помощи SSH
```bash
git clone git@github.com:mikhailmogilnikov/drafter-test.git
```

2) Установите зависимости
```bash
npm install
```

3) Соберите проект
```bash
npm run build
```

4) Запустите проект
```bash
npm run start
```

#### Решение будет доступно после запуска на `localhost:3000`

### Особенности

- Самописное API для заметок на основе Next API Routes
- Директива 'use client' используется всего в двух местах (кнопка "Удалить запись" и форма редактирования заметки)
- Настроенный линтер
- Прекоммит и препуш хуки (autolint, autoprettier, autobuild)
- Подключен CI (Github Actions)
- Архитектура FSD
- Стек: TypeScript, Next.js, CSS Modules, Bootstrap

### Документация API

#### /notes
`GET` – Получить список всех заметок\
`POST` – Создать новую заметку
<br />

#### /notes/:noteId 
`GET` – Получить заметку по id\
`PUT` – Обновить некоторые поля в заметке\
`DELETE` – Удалить заметку