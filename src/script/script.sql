CREATE DATABASE `video-upload` /*!40100 DEFAULT CHARACTER SET latin1 */;
use `video-upload` ;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

CREATE TABLE `usuarios` (
  `id` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL,
  `email` varchar(145) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `videos` (
  `id` varchar(100) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `path` varchar(45) DEFAULT NULL,
  `fotmat` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `uptade_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `video-uplo
ad`.`usuarios` (`id`, `name`, `lastname`, `address`, `email`, `password`) VALUES ('1', 'Cristian', 'Moyano', 'Calle falsa 1234', 'tr@gmail.com', '1234');