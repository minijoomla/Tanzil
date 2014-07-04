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
 * Tanzil Component Controller
 *
 * @package     Tanzil.Site
 * @subpackage  com_tanzil
 */
class TanzilController extends JControllerLegacy
{
	/**
	 * Method to display a view.
	 *
	 * @param   boolean			If true, the view output will be cached
	 * @param   array  An array of safe url parameters and their variable types, for valid values see {@link JFilterInput::clean()}.
	 *
	 * @return  JController		This object to support chaining.
	 */
	public function display($cachable = false, $urlparams = false)
	{
		$cachable = true;	// Huh? Why not just put that in the constructor?
		$user     = JFactory::getUser();

		// Set the default view name and format from the Request.
		// Frontend is a bit messier than the backend.
		$vName = $this->input->get('view', 'tanzil');
		$this->input->set('view', $vName);

		if ($user->get('id'))
		{
			$cachable = false;
		}

		return parent::display($cachable, $urlparams);
	}

	// Ajax Get Aya
	public static function getaya()
	{
		$jinput    = JFactory::getApplication()->input;

		$quranType = $jinput->get('type', '', 'STRING');
		$transType = $jinput->get('transType', '', 'STRING');
		$pageNum   = $jinput->get('pageNum', '', 'STRING');
		$startAya  = $jinput->get('startAya', '', 'INT');
		$endAya    = $jinput->get('endAya', '', 'INT');
		$lang      = $jinput->get('lang', '', 'STRING');

		$quranFile = JUri::base() . 'components/com_tanzil/resources/quran/quran-' . $quranType . '.txt';
		$transFile = JUri::base() . 'components/com_tanzil/resources/translation/' . $transType . '.txt';

		//$quran = file($quranFile);
		//$trans = file($transFile);

		$ch = curl_init();
		$timeout = 5; // set to zero for no timeout
		curl_setopt ($ch, CURLOPT_URL, $quranFile);
		curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
		$file_contents = curl_exec($ch);
		curl_close($ch);
		$quran = array();
		$quran = explode("\n", $file_contents);

		$ch = curl_init();
		$timeout = 5; // set to zero for no timeout
		curl_setopt ($ch, CURLOPT_URL, $transFile);
		curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
		$file_contents = curl_exec($ch);
		curl_close($ch);
		$trans = array();
		$trans = explode("\n", $file_contents);

		$ayas  = array_slice($quran, $startAya, $endAya - $startAya);
		$quran = new stdClass();
		foreach($ayas as $key => $aya)
		{
			$oKey = $key + $startAya;
			$quran->$oKey = $aya;
		}

		$ayas  = array_slice($trans, $startAya, $endAya - $startAya);
		$trans = new stdClass();
		foreach($ayas as $key => $aya)
		{
			$oKey = $key + $startAya;
			$trans->$oKey = $aya;
		}

		$result = array('pageNum' => $pageNum, 'quranType' => $quranType, 'quran' => $quran, 'transType' => $transType, 'trans' => $trans);

		echo json_encode($result);

		$app = JFactory::getApplication();
		$app->close();
	}

	// Ajax Search
	public static function search()
	{
		$jinput    = JFactory::getApplication()->input;

		$quranType      = $jinput->get('type', '', 'STRING');
		$transType      = $jinput->get('transType', '', 'STRING');
		$searchText     = urldecode($jinput->get('searchText', '', 'STRING'));
		$pattern        = '/' . rawurldecode($jinput->get('pattern', '', 'STRING')) . '/';
		$pageOffset     = $jinput->get('pageOffset', '', 'INT');
		$resultsPerPage = $jinput->get('resultsPerPage', '', 'INT');

		if(strpos('Root', $pattern))
		{
			$pattern = '/' . $searchText . '/';
		}

		$quranFile = JUri::base() . 'components/com_tanzil/resources/quran/quran-' . $quranType . '.txt';
		$transFile = JUri::base() . 'components/com_tanzil/resources/translation/' . $transType . '.txt';

		//$quran = file($quranFile);
		//$trans = file($transFile);

		$ch = curl_init();
		$timeout = 5; // set to zero for no timeout
		curl_setopt ($ch, CURLOPT_URL, $quranFile);
		curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
		$file_contents = curl_exec($ch);
		curl_close($ch);
		$quran = array();
		$quran = explode("\n", $file_contents);

		$ch = curl_init();
		$timeout = 5; // set to zero for no timeout
		curl_setopt ($ch, CURLOPT_URL, $transFile);
		curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
		$file_contents = curl_exec($ch);
		curl_close($ch);
		$trans = array();
		$trans = explode("\n", $file_contents);

		$searchResult = array();
		$resultCount = 0;
		$ayatCount = 0;
		
		foreach($quran as $key => $line)
		{
			// Check if the line contains the string we're looking for, and print if it does
			//if($mcount = preg_match($pattern, $line, $matches))
			if($mcount = preg_match_all($pattern, $line, $matches))
			{
				$ayatCount++;
				$resultCount += $mcount;

				if(($ayatCount <= ($pageOffset * $resultsPerPage)) && ($ayatCount > (($pageOffset - 1) * $resultsPerPage)))
				{
					$searchResult[] = $key . ':' . $line . ':' . str_replace(':', '↕', $trans[$key]) . '#';
				}
			}
		}

		echo $ayatCount . ':' . $resultCount . '|' . implode($searchResult);

		$app = JFactory::getApplication();
		$app->close();
	}

	// Ajax Khatm
	public static function khatm()
	{
		$recit = array();

		$jinput = JFactory::getApplication()->input;

		$id     = $jinput->get('id', '', 'INT');
		$amount = $jinput->get('amount', '', 'INT');

		$db    = JFactory::getDbo();
		$query = $db->getQuery(true)
			->select('a.id, a.intent_id, a.type, a.position, a.participants, a.users, a.completed, i.repetition')
			->from('#__tanzil_recitations AS a')
			->join('LEFT', '#__tanzil_intents AS i ON i.id = a.intent_id')
			->where('a.id = ' . $id);

		// Get the options.
		$db->setQuery($query);

		try
		{
			$result = $db->loadObject();
		}
		catch (RuntimeException $e)
		{
			JError::raiseWarning(500, $e->getMessage());
		}

		// Check that recitation not completed
		if($result->completed)
		{
			$result["start"] = 'completedBefore';
		}
		else
		{
			// Hold old position
			$oldPosition = $result->position;

			// calculate new position
			$result->position += $amount;

			// add participant
			$result->participants += 1;

			// Check that recitation will be complete
			switch($result->type)
			{
				
				case 'PAGE':
					if($result->position >= 604)
					{
						$amount = $amount - ($result->position - 604);
						$result->position = 604;
						$result->completed = 1;
					}
					break;
			}

			// Add user to recitation users if user logged in
			$user = JFactory::getUser();
			if(!$user->guest)
			{
				$registry = new JRegistry;
				$registry->loadString($result->users);
				$result->users = $registry->toArray();

				$result->users[$oldPosition] = array($user->id => $amount);

				$registry = new JRegistry;
				$registry->loadArray($result->users);
				$result->users = (string) $registry;
			}

			// Update recitation modified date
			$date = JFactory::getDate();
			$result->modified = $date->toSql();

			// Hold repetition & unset result repetition
			$repetition = $result->repetition;
			unset($result->repetition);

			// Update recitation
			$updateResult = $db->updateObject('#__tanzil_recitations', $result, 'id');

			if($result->completed)
			{
				$intent = new stdClass();
				$intent->id     = $result->intent_id;
				$intent->repetition = $repetition - 1;

				if($intent->repetition == 0)
				{
					$intent->state = 0;
				}
				else
				{
					// Create new recitation if can repeat it.
					$recitation = new stdClass();
					$recitation->intent_id = $result->intent_id;
					$recitation->created   = $date->toSql();
					$recitation->type      = $result->type;

					$recitationInsertResult = $db->insertObject('#__tanzil_recitations', $recitation);
				}

				$intentUpdateResult = $db->updateObject('#__tanzil_intents', $intent, 'id');
			}

			$recit['start']   = $oldPosition + 1;
			$recit['type']    = $result->type;
			$recit['message'] = JText::_('COM_TANZIL_' . $result->type) . ' ' . $recit['start'] . ' ' . JText::_('COM_TANZIL_UNTIL') . ' ' . $result->position . ' ' . JText::_('COM_TANZIL_REGISTERED_FOR_YOU');
		}

		echo json_encode($recit);

		$app = JFactory::getApplication();
		$app->close();
	}

	// Ajax Khatm Periodic
	public static function khatmPeriodic()
	{
		$user = JFactory::getUser();

		if(!$user->guest)
		{
			$recit  = array();

			$jinput = JFactory::getApplication()->input;

			$type = $jinput->get('type', '', 'STRING');

			$db    = JFactory::getDbo();
			$query = $db->getQuery(true)
				->select('r.id')
				->from('#__tanzil_recitations_periodic AS r')
				->where('r.state = 1 AND r.user_id = ' . $user->id . ' AND r.type = ' . $type);

			// Get the options.
			$db->setQuery($query);

			try
			{
				$result = $db->loadResult();
			}
			catch (RuntimeException $e)
			{
				JError::raiseWarning(500, $e->getMessage());
			}

			// Check that recitation not completed
			if($result)
			{
				$recit['hizb'] = 'joinedBefore';
			}
			else
			{
				$query = $db->getQuery(true)
					->select('r.hizb')
					->from('#__tanzil_recitations_periodic AS r')
					->where('r.state = 1 AND r.type = ' . $type)
					->order('r.hizb');

				// Get the options.
				$db->setQuery($query);
	
				try
				{
					$hizbs = $db->loadColumn();
				}
				catch (RuntimeException $e)
				{
					JError::raiseWarning(500, $e->getMessage());
				}

				if(count($hizbs < 120))
				{
					for ($i = 0; $i < 120; $i++)
					{
						if (!isset($hizbs[$i]) || $hizbs[$i] != $i + 1)
						{
							$hizb = $i + 1;
							break;
						}
					}

					$date = JFactory::getDate();

					$recitation = new stdClass();
					$recitation->type       = $type;
					$recitation->user_id    = $user->id;
					$recitation->hizb       = $hizb;
					$recitation->start_date = $date->toSql();

					$recitationInsertResult = $db->insertObject('#__tanzil_recitations_periodic', $recitation);
					
					$recit['hizb']    = $hizb;
					$recit['message'] = JText::sprintf('COM_TANZIL_RECITATION_PRIODIC_JOINED', $hizb);
				}
				else
				{
					$recit['hizb'] = 'completedBefore';
				}
			}
		}

		echo json_encode($recit);

		$app = JFactory::getApplication();
		$app->close();
	}
}
