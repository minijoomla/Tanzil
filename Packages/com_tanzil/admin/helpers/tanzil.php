<?php
/**
 * @package     Tanzil.Administrator
 * @subpackage  com_tanzil
 *
 * @copyright   Copyright (C) Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

/**
 * Tanzil helper.
 *
 * @package     Tanzil.Administrator
 * @subpackage  com_tanzil
 */
class TanzilHelper
{
	/**
	 * Configure the Linkbar.
	 *
	 * @param   string	$vName  The name of the active view.
	 *
	 * @return  void
	 */
	public static function addSubmenu($vName = 'intents')
	{
		JHtmlSidebar::addEntry(
			JText::_('COM_TANZIL_SUBMENU_INTENTS'),
			'index.php?option=com_tanzil&view=intents',
			$vName == 'intents'
		);
	}

	/**
	 * Gets a list of the actions that can be performed.
	 *
	 * @return	JObject
	 */
	public static function getActions()
	{
		$user    = JFactory::getUser();
		$result  = new JObject;

		$actions = JAccess::getActions('com_tanzil');

		foreach ($actions as $action)
		{
			$result->set($action->name, $user->authorise($action->name, 'com_tanzil'));
		}

		return $result;
	}
}
