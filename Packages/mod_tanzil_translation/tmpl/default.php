<?php
/**
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_translation
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<form method="post" action="javascript:display();">
	<div class="control-group trans-row">
		<select id="transMenu" class="span12" onchange="setTrans()">
			<option value="0">English</option>
		</select>
		<label class="icon-volume hasTooltip pull-right" title="<?php echo JText::_('MOD_TANZIL_TRANSLATION_TOGGLE_TRANSLATION_AUDIO'); ?>" onclick="updateAudioTransSettings()"></label>
	</div>
	<div class="control-group">
		<label class="radio" for="showTrans">
			<input type="radio" id="showTrans" name="showTrans" value="fixed" onclick="updateTransSettings()" />
			<?php echo JText::_('MOD_TANZIL_TRANSLATION_FIXED_TRANSLATION_BOX'); ?></label>
		<label class="radio" for="showHoverTrans">
			<input type="radio" id="showHoverTrans" name="showTrans" value="hover" onclick="updateTransSettings()" />
			<?php echo JText::_('MOD_TANZIL_TRANSLATION_TRANSLATE_ON_MOUSE_OVER'); ?></label>
		<label class="radio" for="showTransNone">
			<input type="radio" id="showTransNone" name="showTrans" value="none" onclick="updateTransSettings()" />
			<?php echo JText::_('MOD_TANZIL_TRANSLATION_NONE'); ?></label>
	</div>
</form>
