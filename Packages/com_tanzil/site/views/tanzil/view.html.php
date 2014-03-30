<?php
/**
 * @package     Tanzil.Site
 * @subpackage  com_tanzil
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

/**
 * HTML View class for the Tanzil component
 *
 * @package     Tanzil.Site
 * @subpackage  com_tanzil
 * @since       1.5
 */
class TanzilViewTanzil extends JViewLegacy
{
	public function display($tpl = null)
	{
		// Get the parameters
		$params = JComponentHelper::getParams('com_tanzil');

		//Escape strings for HTML output
		$this->pageclass_sfx = htmlspecialchars($params->get('pageclass_sfx'));

		parent::display($tpl);
	}
}
