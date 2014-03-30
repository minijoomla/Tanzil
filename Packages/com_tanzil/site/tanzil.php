<?php
/**
 * @package     Tanzil.Site
 * @subpackage  com_tanzil
 *
 * @copyright   Copyright (C) Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

//require_once JPATH_COMPONENT.'/helpers/route.php';

$controller = JControllerLegacy::getInstance('Tanzil');
$controller->execute(JFactory::getApplication()->input->get('task'));
$controller->redirect();
