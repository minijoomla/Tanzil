<?php
/**
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_browse
 *
 * @copyright   Copyright (C) 2013 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<div class="tanzil-browse<?php echo $moduleclass_sfx; ?>">
	<form method="post" action="javascript:showPage();" class="form-horizontal">
		<div class="control-group">
			<label class="control-label span3" for="suraMenu"><?php echo JText::_('MOD_TANZIL_BROWSE_SURA'); ?>:</label>
			<div class="controls span9">
				<select class="span12" id="suraMenu" onchange="showSura();">
					<option value="1">الحمد</option>
				</select>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label span3" for="ayaMenu"><?php echo JText::_('MOD_TANZIL_BROWSE_AYA'); ?>:</label>
			<div class="controls span9">
				<select class="span12" id="ayaMenu" onchange="showAya();">
					<option value="1">1</option>
				</select>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label span3" for="juzMenu"><?php echo JText::_('MOD_TANZIL_BROWSE_JUZ'); ?>:</label>
			<div class="controls span9">
				<select class="span12" id="juzMenu" onchange="showJuz();">
					<?php for($i = 1; $i <= 30; $i++) : ?>
					<option value="<?php echo $i ?>"><?php echo JText::_('MOD_TANZIL_BROWSE_JUZ') . ' ' . $i; ?></option>
					<?php endfor; ?>
				</select>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label span3" for="pageNum"><?php echo JText::_('MOD_TANZIL_BROWSE_PAGE'); ?>:</label>
			<div class="controls span9">
				<input class="span8" type="text" value="128" id="pageNum" />
				<span class="btn btn-mini" onclick="changePage(-1)"> - </span>
				<span class="btn btn-mini" onclick="changePage(+1)"> + </span>
			</div>
		</div>
	</form>
</div>
