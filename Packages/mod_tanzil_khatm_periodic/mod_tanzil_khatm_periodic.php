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

	$hizbStatus = ModTanzilKhatmPeriodicHelper::getHizbStatus();

	if (!empty($hizbStatus))
	{
		$todayDate = JFactory::getDate();
		$startDate = JFactory::getDate($hizbStatus->start_date);

		$diff = $todayDate->diff($startDate);

		if ($diff->days <= 120)
		{
			$currentHizb = $hizbStatus->hizb + $diff->days;
			$currentHizb = $currentHizb > 120 ? $hizbStatus->hizb - 120 : $currentHizb;
		}
		else
		{
			// Khatm ended
			$currentHizb = 0;
		}
	}

	$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

	require JModuleHelper::getLayoutPath('mod_tanzil_khatm_periodic', $params->get('layout', 'default'));
}
