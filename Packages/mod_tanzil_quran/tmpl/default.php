<?php
/**
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_quran
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<form method="post" action="javascript:updateQuranSettings();" class="form-horizontal">
	<div class="control-group">
		<label class="control-label span3" for="typeMenu"> <?php echo JText::_('MOD_TANZIL_QURAN_TEXT'); ?>: 
			<!-- Button to trigger Text Type modal --> 
			<a href="#textTypesModal" role="button" class="hasTooltip info-mark" data-toggle="modal" title="<?php echo JText::_('MOD_TANZIL_QURAN_TEXT_TYPES'); ?>">?</a> </label>
		<div class="controls span9">
			<select class="span12" id="typeMenu" onchange="updateQuranSettings();">
				<option value="0">Simple</option>
			</select>
		</div>
	</div>
	<div class="control-group">
		<label class="checkbox" for="showSigns">
			<input type="checkbox" id="showSigns" onclick="updateQuranSettings();" />
			<?php echo JText::_('MOD_TANZIL_QURAN_SHOW_PAUSE_MARKS'); ?></label>
		<label class="checkbox" for="showSmallAlef">
			<input type="checkbox" id="showSmallAlef" onclick="updateQuranSettings();" />
			<?php echo JText::_('MOD_TANZIL_QURAN_SHOW_SMALL_ALEF'); ?></label>
	</div>
</form>
<!-- Text Type Modal -->
<div id="textTypesModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="textTypesModalLabel" aria-hidden="true">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		<h3 id="textTypesModalLabel"><?php echo JText::_('MOD_TANZIL_QURAN_TEXT_TYPES'); ?></h3>
	</div>
	<div class="modal-body"> <?php echo JText::_('MOD_TANZIL_QURAN_TEXT_TYPES_DESC'); ?> </div>
	<div class="modal-footer">
		<button type="button" class="btn" data-dismiss="modal" aria-hidden="true"><?php echo JText::_('MOD_TANZIL_QURAN_CLOSE'); ?></button>
	</div>
</div>
