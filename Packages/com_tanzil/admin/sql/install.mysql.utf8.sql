--
-- Table structure for table `#__tanzil_intents`
--

CREATE TABLE IF NOT EXISTS `#__tanzil_intents` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `alias` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `description` text,
  `state` tinyint(4) NOT NULL DEFAULT '0',
  `checked_out` int(10) unsigned NOT NULL DEFAULT '0',
  `checked_out_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `repetition` int(10) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unq_title` (`title`),
  UNIQUE KEY `unq_alias` (`alias`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Table structure for table `#__tanzil_recitations`
--

CREATE TABLE IF NOT EXISTS `#__tanzil_recitations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `intent_id` int(11) NOT NULL,
  `created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `type` varchar(15) NOT NULL,
  `position` int(11) NOT NULL,
  `participants` int(11) NOT NULL,
  `users` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- Table structure for table `#__tanzil_recitations_periodic`
--

CREATE TABLE IF NOT EXISTS `#__tanzil_recitations_periodic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(15) NOT NULL,
  `user_id` int(11) NOT NULL,
  `hizb` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `intent_user_state` (`type`,`user_id`,`state`),
  UNIQUE KEY `intent_hizb` (`type`,`hizb`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;