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
 * Intents list controller class.
 *
 * @package     Tanzil.Administrator
 * @subpackage  com_tanzil
 */
class TanzilControllerIntents extends JControllerAdmin
{
	/**
	 * Proxy for getModel.
	 */
	public function getModel($name = 'Intent', $prefix = 'TanzilModel', $config = array('ignore_request' => true))
	{
		$model = parent::getModel($name, $prefix, $config);
		return $model;
	}
}