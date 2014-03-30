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
class ModTanzilKhatmHelper
{
	public static function getIntents()
	{
		$options = array();

		$db    = JFactory::getDbo();
		$query = $db->getQuery(true)
			->select('a.id, a.type, i.title')
			->from('#__tanzil_recitations AS a')
			->order('i.title')
			->join('LEFT', '#__tanzil_intents AS i ON i.id = a.intent_id')
			->where('a.completed <> 1');

		// Get the options.
		$db->setQuery($query);

		try
		{
			$options = $db->loadObjectList();
		}
		catch (RuntimeException $e)
		{
			JError::raiseWarning(500, $e->getMessage());
		}

		return $options;
	}
}
