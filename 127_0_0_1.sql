-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 25 2018 г., 22:46
-- Версия сервера: 5.6.38
-- Версия PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `mysite-local`
--
CREATE DATABASE IF NOT EXISTS `mysite-local` DEFAULT CHARACTER SET cp1251 COLLATE cp1251_general_ci;
USE `mysite-local`;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `username` varchar(50) NOT NULL,
  `login` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `login`, `password`) VALUES
(1, '9876543', '9876543', '7c51a5e6ea3214af970a86df89793b19'),
(2, '1234567', '1234567', 'fcea920f7412b5da7be0cf42b8c93759');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- База данных: `Pages`
--
CREATE DATABASE IF NOT EXISTS `Pages` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `Pages`;

-- --------------------------------------------------------

--
-- Структура таблицы `Pages`
--

CREATE TABLE `Pages` (
  `id` int(10) NOT NULL,
  `text` varchar(65) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Pages`
--

INSERT INTO `Pages` (`id`, `text`) VALUES
(1, '1'),
(2, '2'),
(3, '12'),
(4, '47'),
(5, '15'),
(6, 'дл'),
(7, 'дл'),
(8, 'дл<div class=\"commands\"><pre>ро</pre></div>'),
(9, 'дл<div class=\"commands\"><pre>ро</pre></div>'),
(10, 'ЛОПО<div class=\"commands\"><pre>РП</pre></div>'),
(11, 'i7t76<div class=\"commands\"><pre>56565</pre></div>'),
(12, 'щш8гн<div class=\"commands\"><pre>ш7еш7</pre></div>'),
(13, 'щш8гн<div class=\"commands\"><pre>ш7еш7</pre></div>'),
(14, 'зш<div class=\"commands\"><pre>гш7н</pre></div>'),
(15, 'uhi<div class=\"commands\"><pre>ytr5rre5</pre></div>'),
(16, 'эж<div class=\"commands\"><pre>хж</pre></div>');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Pages`
--
ALTER TABLE `Pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Pages`
--
ALTER TABLE `Pages`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
