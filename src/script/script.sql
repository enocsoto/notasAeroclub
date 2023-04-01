CREATE DATABASE `notas` /*!40100 DEFAULT CHARACTER SET utf8 */;
use `notas` ;
CREATE TABLE `roles` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name_role` VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB AUTO_INCREMENT=4 DEFAULT CHARSET=UTF8;


CREATE TABLE `alumnos` (
  `id` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL,
  `email` varchar(145) NOT NULL,
  `password` varchar(45) NOT NULL,
  `curso` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `instructores` (
  `id` varchar(100) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `especialidad` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `uptade_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `notas`.`usuarios` (`id`, `name`, `lastname`, `address`, `email`, `password`) VALUES ('1', 'Cristian', 'Moyano', 'Calle falsa 1234', 'tr@gmail.com', '1234');