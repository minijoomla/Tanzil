<?php
/**
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_khatm_periodic
 *
 * @copyright   Copyright (C) 2014 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

if(JRequest::getCmd('option') == 'com_tanzil')
{
	// Include the Tanzil functions only once
	require_once __DIR__ . '/helper.php';

	$khatmStatus = ModTanzilKhatmPeriodicHelper::getKhatmStatus();

	// -1 mean user not joined to khatm
	$currentHizbDay  = -1;
	$currentHizbWeek = -1;
	$currentPageDay  = -1;

	if (!empty($khatmStatus))
	{
		$todayDate = JFactory::getDate();
		
		foreach($khatmStatus as $k)
		{
			$startDate = JFactory::getDate($k->start_date);

			$diff = $todayDate->diff($startDate);
			$diff->weeks = (int) ($diff->days / 7);

			switch($k->type)
			{
				case 'hizb_day':
					if ($diff->days <= 120)
					{
						$currentHizbDay = $k->hizb + $diff->days;
						$currentHizbDay = $currentHizbDay > 120 ? $k->hizb - 120 : $currentHizbDay;

						$currentHizbDay = "<a href='javascript:showHizb(" . $currentHizbDay . ")'>" . JText::_('MOD_TANZIL_KHATM_PERIODIC_HIZB') . ' ' . $currentHizbDay . '</a>';
						$currentHizbDay =  JText::sprintf('COM_TANZIL_KHATM_PERIODIC_TODAY_DESCRIPTION', $currentHizbDay);
					}
					else
					{
						// Khatm ended
						$currentHizbDay = 0;
					}

					break;

				case 'hizb_week':
					if ($diff->weeks <= 120)
					{
						$currentHizbWeek = $k->hizb + $diff->weeks;
						$currentHizbWeek = $currentHizbWeek > 120 ? $k->weeks - 120 : $currentHizbWeek;

						$currentHizbWeek = "<a href='javascript:showHizb(" . $currentHizbWeek . ")'>" . JText::_('MOD_TANZIL_KHATM_PERIODIC_HIZB') . ' ' . $currentHizbWeek . '</a>';
						$currentHizbWeek =  JText::sprintf('COM_TANZIL_KHATM_PERIODIC_TODAY_DESCRIPTION', $currentHizbWeek);
					}
					else
					{
						// Khatm ended
						$currentHizbWeek = 0;
					}

					break;

				case 'page_day':
					if ($diff->days <= 604)
					{
						$currentPageDay = $k->hizb + $diff->days;
						$currentPageDay = $currentPageDay > 604 ? $k->days - 604 : $currentPageDay;

						$currentPageDay = "<a href='javascript:showPage(" . $currentPageDay . ")'>" . JText::_('MOD_TANZIL_KHATM_PERIODIC_PAGE') . ' ' . $currentPageDay . '</a>';
						$currentPageDay =  JText::sprintf('COM_TANZIL_KHATM_PERIODIC_TODAY_DESCRIPTION', $currentPageDay);
					}
					else
					{
						// Khatm ended
						$currentPageDay = 0;
					}

					break;
			}
		}
	}

	$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

	require JModuleHelper::getLayoutPath('mod_tanzil_khatm_periodic', $params->get('layout', 'default'));
}
