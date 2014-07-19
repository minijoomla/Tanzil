<?php
/**
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_recitation
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

/**
 * Helper for mod_tanzil_khatm
 *
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_khatm
 */
abstract class ModTanzilKhatmPeriodicHelper
{
	public static function getKhatmStatus()
	{
		$db    = JFactory::getDbo();
		$query = $db->getQuery(true)
			->select('r.`type`, r.hizb, r.start_date, r.end_date')
			->from('#__tanzil_recitations_periodic r')
			->where("r.user_id = " . JFactory::getUser()->id);

		$db->setQuery($query);

		try
		{
			$khatmStatus = $db->loadObjectList();
		}
		catch (RuntimeException $e)
		{
			JError::raiseWarning(500, $e->getMessage());
		}

		return $khatmStatus;
	}
}
