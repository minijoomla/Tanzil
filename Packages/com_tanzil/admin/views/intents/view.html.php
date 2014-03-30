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
 * View class for a list of intents.
 *
 * @package     Tanzil.Administrator
 * @subpackage  com_tanzil
 */
class TanzilViewIntents extends JViewLegacy
{
	protected $items;

	protected $pagination;

	protected $state;

	/**
	 * Method to display the view.
	 *
	 * @param   string  $tpl  A template file to load. [optional]
	 *
	 * @return  mixed  A string if successful, otherwise a JError object.
	 */
	public function display($tpl = null)
	{
		$this->state         = $this->get('State');
		$this->items         = $this->get('Items');
		$this->pagination    = $this->get('Pagination');
		$this->filterForm    = $this->get('FilterForm');
		$this->activeFilters = $this->get('ActiveFilters');

		// Check for errors.
		if (count($errors = $this->get('Errors')))
		{
			JError::raiseError(500, implode("\n", $errors));

			return false;
		}

		TanzilHelper::addSubmenu('intents');

		$this->addToolbar();
		$this->sidebar = JHtmlSidebar::render();
		parent::display($tpl);
	}

	/**
	 * Add the page title and toolbar.
	 */
	protected function addToolbar()
	{
		require_once JPATH_COMPONENT.'/helpers/tanzil.php';

		$state = $this->get('State');
		$canDo = TanzilHelper::getActions();

		// Get the toolbar object instance
		$bar = JToolBar::getInstance('toolbar');

		JToolBarHelper::title(JText::_('COM_TANZIL_MANAGER_INTENTS'), 'list-view intents');

		if ($canDo->get('core.create'))
		{
			JToolBarHelper::addNew('intent.add');
		}

		if(isset($this->items[0]))
		{
			if ($canDo->get('core.edit'))
			{
				JToolBarHelper::editList('intent.edit');
			}

			if ($canDo->get('core.edit.state'))
			{
				JToolbarHelper::publish('intents.publish', 'JTOOLBAR_PUBLISH', true);
				JToolbarHelper::unpublish('intents.unpublish', 'JTOOLBAR_UNPUBLISH', true);

				JToolbarHelper::checkin('intents.checkin');
			}

			if ($canDo->get('core.delete'))
			{
				JToolbarHelper::deleteList('', 'intents.delete', 'JTOOLBAR_DELETE');
			}
		}

		if ($canDo->get('core.admin'))
		{
			JToolBarHelper::preferences('com_tanzil');
		}

		JHtmlSidebar::setAction('index.php?option=com_tanzil&view=intents');
	}

	protected function getSortFields()
	{
		return array(
			'a.state'  => JText::_('JSTATUS'),
			'a.title'  => JText::_('JGLOBAL_TITLE'),
			'a.repeat' => JText::_('COM_TANZIL_FIELD_REPEAT_LABEL'),
			'a.id'     => JText::_('JGRID_HEADING_ID'),
		);
	}
}
