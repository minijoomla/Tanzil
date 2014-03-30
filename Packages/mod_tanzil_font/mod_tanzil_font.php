<?php
/**
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_font
 *
 * @copyright   Copyright (C) 2013 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

// Include the Tanzil functions only once
require_once __DIR__ . '/helper.php';

$fonts = ModTanzilFontHelper::getFonts($params);

$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

require JModuleHelper::getLayoutPath('mod_tanzil_font', $params->get('layout', 'default'));