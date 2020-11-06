CREATE TABLE IF NOT EXISTS `electronics` (
  `id` BIGINT(30) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `frequency` FLOAT(30),
  `result1` FLOAT(30),
  `result2` FLOAT(30),
  `result3` FLOAT(30),
  `result4` FLOAT(30),
  PRIMARY KEY (`id`)
)ENGINE=INNODB DEFAULT CHARSET=utf8;
