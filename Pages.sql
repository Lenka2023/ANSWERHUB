-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 25 2018 г., 15:34
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
-- База данных: `Pages`
--

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
(10, 'ЛОПО<div class=\"commands\"><pre>РП</pre></div>');

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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
