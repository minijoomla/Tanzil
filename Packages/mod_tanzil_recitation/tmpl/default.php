<?php
/**
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_recitation
 *
 * @copyright   Copyright (C) 2013 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<div class="tanzil-recitation<?php echo $moduleclass_sfx; ?>">
	<div class="control-group" id="reciters">
		<div class="reciter">
			<select class="reciteMenu span9">
				<option value="0">Al-Ghamadi</option>
			</select>
			<select class="repeatMenu span3 hasTooltip" id="repeatMenu" title="<?php echo JText::_('MOD_TANZIL_RECITATION_REPEAT_TIMES'); ?>">
				<?php for ($i = 1; $i <= 9; $i++) : ?>
				<option value="<?php echo $i; ?>">x<?php echo $i; ?></option>
				<?php endfor; ?>
				<option value="100">∞</option>
			</select>
		</div>
	</div>
	<div id="jplayer_inspector" style="position: fixed; top: 0; left: 0"></div>
	<div class="text-center" id="player-loading"><strong><a href="http://tanzil.net/wiki/Sound_Troubleshooting" title="<?php echo JText::_('MOD_TANZIL_RECITATION_SOUND_TROUBLESHOOTING'); ?>" target="_blank"><?php echo JText::_('MOD_TANZIL_RECITATION_LOADING_PLAYER'); ?></a></strong></div>
	<div id="player-pad" class="control-group">
		<div class="jp-interface">
			<div class="jp-play jp-play-pause">
				<div class="icon-play"></div>
			</div>
			<div class="jp-pause jp-play-pause">
				<div class="icon-pause"></div>
			</div>
			<div class="jp-progress">
				<div class="jp-seek-bar">
					<div class="jp-play-bar"></div>
				</div>
			</div>
			<div class="jp-volume-toggle">
				<div class="icon-volume"></div>
			</div>
			<div class="jp-volume-bar">
				<div class="jp-volume-bar-wrapper">
					<div class="jp-volume-bar-value"></div>
				</div>
			</div>
			<div class="jp-volume-max"></div>
			<div class="jp-volume-mute-pad"></div>
		</div>
	</div>
	<div class="text-right">
		<button class="control-group hasTooltip" id="soundOptionsBtn" title="<?php echo JText::_('MOD_TANZIL_RECITATION_OPTIONS'); ?>"  data-toggle="collapse" data-target="#soundOptions"><i class="icon-wrench"></i></button>
		<fieldset id="soundOptions" class="collapse form-horizontal">
			<div class="control-group">
				<label class="control-label span3 hasTooltip" for="playScope" title="<?php echo JText::_('MOD_TANZIL_RECITATION_PLAY_SCOPE'); ?>"><?php echo JText::_('MOD_TANZIL_RECITATION_PLAY'); ?>:</label>
				<div class="controls span9">
					<select class="span12" id="playScope" onchange="update('opt.playScope', $(this).val());">
						<option value="cont"><?php echo JText::_('MOD_TANZIL_RECITATION_CONTINUOUS'); ?></option>
						<option value="aya"><?php echo JText::_('MOD_TANZIL_RECITATION_AYA'); ?></option>
						<option value="sura"><?php echo JText::_('MOD_TANZIL_RECITATION_SURA'); ?></option>
						<option value="page"><?php echo JText::_('MOD_TANZIL_RECITATION_PAGE'); ?></option>
						<option value="juz"><?php echo JText::_('MOD_TANZIL_RECITATION_JUZ'); ?></option>
					</select>
				</div>
			</div>
			<div class="control-group">
				<label class="control-label span3 hasTooltip" for="playDelay" title="<?php echo JText::_('MOD_TANZIL_RECITATION_DELAY_BETWEEN_AYAS'); ?>"><?php echo JText::_('MOD_TANZIL_RECITATION_DELAY'); ?>:</label>
				<div class="controls span9">
					<select class="span12" id="playDelay" onchange="update('opt.playDelay', $(this).val());">
						<?php for ($i = 0; $i <= 9; $i++) : ?>
						<option value="<?php echo $i; ?>"><?php echo $i; ?> <?php echo JText::_('MOD_TANZIL_RECITATION_SEC'); ?></option>
						<?php endfor; ?>
						<option value="len"><?php echo JText::_('MOD_TANZIL_RECITATION_DURATION_OF_AYA'); ?></option>
					</select>
				</div>
			</div>
			<div class="control-group">
				<label class="control-label span3 hasTooltip" title="<?php echo JText::_('MOD_TANZIL_RECITATION_INTERLEAVED_RECITATIONS'); ?>"><?php echo JText::_('MOD_TANZIL_RECITATION_RECITER'); ?>:</label>
				<div class="controls span9">
					<span class="btn span12" onclick="addReciter();"><?php echo JText::_('MOD_TANZIL_RECITATION_ADD'); ?></span>
				</div>
			</div>
		</fieldset>
	</div>
	<div id="jplayer-box"> </div>
</div>
