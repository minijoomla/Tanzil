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
 * Tanzil Component Recitations Model
 *
 * @package     Tanzil.Site
 * @subpackage  com_tanzil
 */
class TanzilModelRecitations extends JModelList
{
	/**
	 * Constructor.
	 *
	 * @param   array  An optional associative array of configuration settings.
	 * @see     JController
	 * @since   1.6
	 */
	public function __construct($config = array())
	{
		if (empty($config['filter_fields']))
		{
			$config['filter_fields'] = array(
				'id', 'a.id',
				'title', 'intent_id', 'a.intent_id',
				'created', 'a.created',
				'modified', 'a.modified',
				'type', 'a.type',
				'position', 'a.position',
				'participants', 'a.participants',
				'users', 'a.users',
			);
		}

		parent::__construct($config);
	}

	/**
	 * Method to build an SQL query to load the list data.
	 *
	 * @return  string    An SQL query
	 */
	protected function getListQuery()
	{
		$user = JFactory::getUser();

		// Create a new query object.
		$db    = $this->getDbo();
		$query = $db->getQuery(true);

		// Select required fields from the recitations.
		$query->select($this->getState('list.select', 'a.*'))
			->from($db->quoteName('#__tanzil_recitations') . ' AS a');

		// Join over the intents for the intent title.
		$query->select("i.title")
			->join('LEFT', '#__tanzil_intents AS i ON i.id = a.intent_id');

		// Filter by intent.
		if ($intentId = $this->getState('filter.intent_id'))
		{
			$query->where('a.intent_id = ' . (int) $intentId);
		}

		// Filter completed recitation.
		$completed = $this->getState('filter.completed');
		if (is_numeric($completed))
		{
			$query->where('a.completed = ' . (int) $completed);
		}

		// Filter by state
		if ($this->getState('filter.type'))
		{
			$query->where('a.type = ' . $db->quote($db->escape($type)));
		}

		if ($startDate = $this->getState('filter.start_date'))
		{
			$query->where('a.created >= ' . $db->quote($startDate->toSql()));
		}

		if ($endDate = $this->getState('filter.end_date'))
		{
			$query->where('a.modified <= ' . $db->quote($endDate->toSql()));
		}

		// Filter by search in title
		$search = $this->getState('list.filter');
		if (!empty($search))
		{
			$search = $db->quote('%' . $db->escape($search, true) . '%');
			$query->where('(i.title LIKE ' . $search . ')');
		}

		// Add the list ordering clause.
		$query->order($db->escape($this->getState('list.ordering', 'a.title')) . ' ' . $db->escape($this->getState('list.direction', 'ASC')));

		return $query;
	}

	/**
	 * Method to auto-populate the model state.
	 *
	 * Note. Calling getState in this method will result in recursion.
	 *
	 * @since   1.6
	 */
	protected function populateState($ordering = null, $direction = null)
	{
		$app    = JFactory::getApplication();
		$params = JComponentHelper::getParams('com_tanzil');

		// List state information
		$limit = $app->getUserStateFromRequest('global.list.limit', 'limit', $app->getCfg('list_limit'), 'uint');
		$this->setState('list.limit', $limit);

		$limitstart = $app->input->get('limitstart', 0, 'uint');
		$this->setState('list.start', $limitstart);

		// Optional filter text
		$this->setState('list.filter', $app->input->getString('filter-search'));
		
		$completed = $app->input->get('filter_completed');
		$this->setState('filter.completed', $completed);

		$orderCol = $app->input->get('filter_order', 'title');
		if (!in_array($orderCol, $this->filter_fields))
		{
			$orderCol = 'title';
		}
		$this->setState('list.ordering', $orderCol);

		$listOrder = $app->input->get('filter_order_Dir', 'ASC');
		if (!in_array(strtoupper($listOrder), array('ASC', 'DESC', '')))
		{
			$listOrder = 'ASC';
		}
		$this->setState('list.direction', $listOrder);

		$intentId = $app->input->get('intent_id', 0, 'int');
		$this->setState('filter.intent_id', $intentId);

		// Load the parameters.
		$this->setState('params', $params);
	}
}
