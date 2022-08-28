CREATE TABLE IF NOT EXISTS `links`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `link` TEXT NOT NULL,
    `user_ip` TEXT NOT NULL,
    `user_country` TEXT NOT NULL,
    `link_id` TEXT NOT NULL,
    `created_at` datetime NOT NULL,
    PRIMARY KEY(`id`)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `visit`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `link_id` TEXT NOT NULL,
    `visitor_ip` TEXT NOT NULL,
    `visitor_country` TEXT NOT NULL,
    `created_at` datetime NOT NULL,
    PRIMARY KEY(`id`)
)ENGINE = InnoDB;