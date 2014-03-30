<?php
/**
 * @package     Tanzil.Site
 * @subpackage  com_tanzil
 *
 * @copyright   Copyright (C) Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

/**
 * HTML View class for recitations
 *
 * @package     Tanzil.Site
 * @subpackage  com_tanzil
 */
class TanzilViewRecitations extends JViewLegacy
{
	protected $items;

	protected $pagination;

	protected $state;

	/**
	 * Execute and display a template script.
	 *
	 * @param   string  $tpl  The name of the template file to parse; automatically searches through the template paths.
	 *
	 * @return  mixed  A string if successful, otherwise a Error object.
	 */
	public function display($tpl = null)
	{
		$this->state      = $this->get('State');
		$this->items      = $this->get('Items');
		$this->pagination = $this->get('Pagination');

		// Get the parameters
		$this->params = JComponentHelper::getParams('com_tanzil');

		//Escape strings for HTML output
		$this->pageclass_sfx = htmlspecialchars($this->params->get('pageclass_sfx'));

		// Prepare the data.
		// Compute the recitations users.
		foreach ($this->items as $item)
		{
			if($item->users)
			{
				$registry = new JRegistry;
				$registry->loadString($item->users);
				$item->users = $registry->toArray();
			}
		}

		parent::display($tpl);
	}
}
