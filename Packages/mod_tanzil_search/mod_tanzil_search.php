<?php
/**
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_search
 *
 * @copyright   Copyright (C) 2013 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

// Include the Tanzil functions only once
require_once __DIR__ . '/helper.php';

$lang = JFactory::getLanguage();
$app  = JFactory::getApplication();

if ($params->get('opensearch', 1))
{
	$doc = JFactory::getDocument();

	$ostitle = $params->get('opensearch_title', JText::_('MOD_TANZIL_SEARCH_SEARCH') . ' ' . $app->getCfg('sitename'));
	$doc->addHeadLink(
			JUri::getInstance()->toString(array('scheme', 'host', 'port'))
			. JRoute::_('&option=com_search&format=opensearch'), 'search', 'rel',
			array(
				'title' => htmlspecialchars($ostitle),
				'type' => 'application/opensearchdescription+xml'
			)
		);
}

$maxlength = $lang->getUpperLimitSearchWord();

$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));
$set_Itemid      = (int) $params->get('set_itemid', 0);

$mitemid = $set_Itemid > 0 ? $set_Itemid : $app->input->get('Itemid');

$list = ModTanzilSearchHelper::getList($params);

require JModuleHelper::getLayoutPath('mod_tanzil_search', $params->get('layout', 'default'));
