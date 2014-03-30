<?php
/**
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_font
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<form method="post" action="javascript:updateFontSettings();" class="form-horizontal">
	<div class="control-group">
		<label class="control-label span3" for="fontMenu"><?php echo JText::_('MOD_TANZIL_FONT_TYPE'); ?>:</label>
		<div class="controls span9">
			<select class="span12" id="fontMenu" name="font" onchange="updateFont();">
				<option value="0">Default</option>
			</select>
		</div>
	</div>
	<div class="control-group" id="customFontRow">
		<label class="control-label span3" for="customFont">&nbsp;</label>
		<div class="controls span5">
			<input type="text" value="" id="customFont" class="span12 ltr" dir="ltr" />
		</div>
		<button type="button" class="btn span4" onclick="updateFont()"><?php echo JText::_('MOD_TANZIL_FONT_APPLY'); ?></button>
	</div>
	<div class="control-group">
		<label class="control-label span3" for="fontSize"><?php echo JText::_('MOD_TANZIL_FONT_SIZE'); ?>:</label>
		<div class="controls span9">
			<input class="span8" type="text" value="16" id="fontSize" />
			<span class="btn btn-mini" onclick="setFontSize(-1)"> - </span>
			<span class="btn btn-mini" onclick="setFontSize(+1)"> + </span>
		</div>
	</div>
	<div class="control-group">
		<div class="pull-right"><img id="loading-font" src="<?php echo JUri::base(true); ?>/components/com_tanzil/assets/img/loading-h.gif" alt="<?php echo JText::_('MOD_TANZIL_FONT_LOADING'); ?>" width="16" height="11" style="display:none" /></div>
		<label class="checkbox" for="textJustify">
			<input type="checkbox" id="textJustify" onclick="updateFontSettings();" />
			<?php echo JText::_('MOD_TANZIL_FONT_ALIGN_TEXT'); ?></label>
	</div>
</form>
<div class="font-tester events"></div>
