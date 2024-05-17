-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
<<<<<<< HEAD
-- Tiempo de generación: 24-04-2024 a las 19:28:30
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4
=======
-- Tiempo de generación: 15-05-2024 a las 20:00:40
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12
>>>>>>> 91ced94fa8918446e40f497a131a15404a66982e

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbherrishop`
--
CREATE DATABASE IF NOT EXISTS `dbherrishop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `dbherrishop`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
<<<<<<< HEAD
CREATE TABLE IF NOT EXISTS `categories` (
=======
CREATE TABLE `categories` (
>>>>>>> 91ced94fa8918446e40f497a131a15404a66982e
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Ropa'),
(2, 'Libros'),
(3, 'Electrodomésticos'),
(4, 'Arte'),
(5, 'Muebles'),
(6, 'Alimentos y Bebidas'),
(7, 'Herramientas'),
(8, 'Moda'),
(9, 'Deportes'),
(10, 'Flores');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

DROP TABLE IF EXISTS `customers`;
<<<<<<< HEAD
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
=======
CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
>>>>>>> 91ced94fa8918446e40f497a131a15404a66982e
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `age` smallint(6) NOT NULL,
  `address` varchar(150) NOT NULL,
  `city` varchar(20) NOT NULL,
  `phone` varchar(15) NOT NULL,
<<<<<<< HEAD
  `shop_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`id`, `name`, `surname`, `age`, `address`, `city`, `phone`, `shop_name`) VALUES
(1, 'Juan', 'Martínez', 35, 'Calle Easo 12', 'Donostia', '+34 943 123 456', 'Modas Juan'),
(2, 'María', 'López', 28, 'Avenida Zumalakarregi 8', 'Irún', '+34 943 234 567', 'Librería del Sol'),
(3, 'Pedro', 'García', 45, 'Plaza Gipuzkoa 5', 'Tolosa', '+34 943 345 678', 'Electrohogar Pedro'),
(4, 'Ana', 'Fernández', 30, 'Paseo de la Concha 21', 'Donostia', '+34 943 456 789', 'Tienda de Arte Ana'),
(5, 'Carlos', 'Pérez', 50, 'Calle Mayor 3', 'Azpeitia', '+34 943 567 890', 'Muebles Pérez'),
(6, 'Sara', 'Rodríguez', 40, 'Avenida Sancho el Sabio 17', 'Eibar', '+34 943 678 901', 'Gourmet Sara'),
(7, 'David', 'Hernández', 32, 'Plaza Euskadi 9', 'Arrasate', '+34 943 789 012', 'Ferretería Hernández'),
(8, 'Laura', 'González', 27, 'Calle San Marcial 15', 'Hernani', '+34 943 890 123', 'Modas Laura'),
(9, 'Javier', 'Sánchez', 38, 'Paseo Colón 6', 'Zarautz', '+34 943 901 234', 'Deportes Javier'),
(10, 'Elena', 'Martí', 33, 'Calle Hondarribia 2', 'Hondarribia', '+34 943 012 345', 'Florería Elena');
=======
  `shop_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
>>>>>>> 91ced94fa8918446e40f497a131a15404a66982e

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`id`, `name`, `surname`, `age`, `address`, `city`, `phone`, `shop_name`) VALUES
(1, 'Juan', 'Martínez', 35, 'Calle Easo 12', 'Donostia', '+34 943 123 456', 'Modas Juan'),
(2, 'María', 'López', 28, 'Avenida Zumalakarregi 8', 'Irún', '+34 943 234 567', 'Librería del Sol'),
(3, 'Pedro', 'García', 45, 'Plaza Gipuzkoa 5', 'Tolosa', '+34 943 345 678', 'Electrohogar Pedro'),
(4, 'Ana', 'Fernández', 30, 'Paseo de la Concha 21', 'Donostia', '+34 943 456 789', 'Tienda de Arte Ana'),
(5, 'Carlos', 'Pérez', 50, 'Calle Mayor 3', 'Azpeitia', '+34 943 567 890', 'Muebles Pérez'),
(6, 'Sara', 'Rodríguez', 40, 'Avenida Sancho el Sabio 17', 'Eibar', '+34 943 678 901', 'Gourmet Sara'),
(7, 'David', 'Hernández', 32, 'Plaza Euskadi 9', 'Arrasate', '+34 943 789 012', 'Ferretería Hernández'),
(8, 'Laura', 'González', 27, 'Calle San Marcial 15', 'Hernani', '+34 943 890 123', 'Modas Laura'),
(9, 'Javier', 'Sánchez', 38, 'Paseo Colón 6', 'Zarautz', '+34 943 901 234', 'Deportes Javier'),
(10, 'Elena', 'Martí', 33, 'Calle Hondarribia 2', 'Hondarribia', '+34 943 012 345', 'Florería Elena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
<<<<<<< HEAD
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
=======
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
>>>>>>> 91ced94fa8918446e40f497a131a15404a66982e
  `name` varchar(100) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `unit_price` decimal(10,0) NOT NULL,
  `unit_stock` smallint(6) NOT NULL,
  `description` text NOT NULL,
<<<<<<< HEAD
  `image` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_products_customers` (`customer_id`),
  KEY `FK_products_categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
=======
  `image` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
>>>>>>> 91ced94fa8918446e40f497a131a15404a66982e

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `customer_id`, `category_id`, `unit_price`, `unit_stock`, `description`, `image`) VALUES
(1, 'Camisa de algodón', 1, 1, 30, 100, 'Camisa de algodón de alta calidad, perfecta para cualquier ocasión.', NULL),
(2, 'Libro de poesía', 2, 2, 20, 50, 'Una colección de poesías de renombrados autores contemporáneos.', NULL),
(3, 'Lavadora de carga frontal', 3, 3, 600, 30, 'Lavadora de carga frontal eficiente y de bajo consumo energético.', NULL),
(4, 'Pintura al óleo', 4, 4, 100, 20, 'Una obra de arte al óleo pintada a mano, ideal para decorar tu hogar.', NULL),
(5, 'Sofá de cuero', 5, 5, 800, 10, 'Sofá de cuero genuino, elegante y cómodo para tu sala de estar.', NULL),
(6, 'Vino tinto reserva', 6, 6, 40, 50, 'Botella de vino tinto reserva, añada especial para paladares exigentes.', NULL),
(7, 'Set de herramientas básicas', 7, 7, 50, 40, 'Un completo set de herramientas básicas para cualquier tarea de bricolaje.', NULL),
(8, 'Vestido de noche', 8, 8, 80, 25, 'Elegante vestido de noche, perfecto para ocasiones especiales.', NULL),
(9, 'Balón de fútbol', 9, 9, 15, 100, 'Balón de fútbol de alta calidad, ideal para partidos recreativos.', NULL),
(10, 'Ramito de flores mixtas', 10, 10, 30, 50, 'Un hermoso ramito de flores mixtas, perfecto para regalar a alguien especial.', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
<<<<<<< HEAD
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
=======
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
>>>>>>> 91ced94fa8918446e40f497a131a15404a66982e
  `name` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `zip_code` char(5) NOT NULL,
  `birthdate` date NOT NULL,
  `token` varchar(250) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `role` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_2` (`email`),
  KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `surname`, `address`, `email`, `zip_code`, `birthdate`, `token`, `status`, `role`) VALUES
(34, 'Darren', '@MDmgn123xz', 'Vargas Ramirez', 'Pinutegi 5, Ático A', 'michaelmdvra@gmail.com', '20160', '1999-04-07', NULL, 0, ''),
(35, 'Darren Michael', '$2y$10$JrsaxIGgtU0V0N7KoV./D.XEwZlny6mJzZRCW218Bi8wNFtRSCv7O', 'Vargas Ramirez', 'Pinutegi 5 Ático A', 'michaelmdvr@gmail.com', '20160', '1999-07-04', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk5MTkyNzQsImV4cCI6IjE3MTI1MTEyNzQiLCJkYXRhIjp7ImlkIjozNSwiZW1haWwiOiJtaWNoYWVsbWR2ckBnbWFpbC5jb20ifX0.UKUeCPjOrPQXAceJEzqbIJiGe5iqwgzmcnX8mCOzSCY', 1, 'USER_ROLE');
<<<<<<< HEAD
=======

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_products_customers` (`customer_id`),
  ADD KEY `FK_products_categories` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
>>>>>>> 91ced94fa8918446e40f497a131a15404a66982e

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_products_categories` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `FK_products_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
