<?php
/**
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_khatm
 *
 * @copyright   Copyright (C) 2014 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

JHtml::_('bootstrap.framework');

$document = JFactory::getDocument();
$document->addScript('media/com_tanzil/js/chained/jquery.chained.min.js');

$script = 'jQuery(document).ready(function(){
	jQuery("#khatmIntent").chained("#khatmType");
	
	jQuery("#khatmReportModal").on("show", function()
	{
		iframeHtml = \'<iframe name="khatmReportPage" class="iframe" src="index.php?option=com_tanzil&view=recitations&tmpl=component&layout=progressbar&limit=0&filter_completed=0" height="400px" width="100%" frameborder="0"></iframe>\';
		jQuery("#khatmReportModal .modal-body").html(iframeHtml);
	});
})

function khatm()
{
	khatmIntent = jQuery("#khatmIntent").val();
	khatmAmount = jQuery("#khatmAmount").val();

	if(khatmIntent && khatmAmount)
	{
		jQuery.ajax(
		{
			dataType: "json",
			type: "POST",
			url:"index.php?option=com_tanzil&task=khatm",
			data: {
				id: khatmIntent,
				amount: khatmAmount,
			},
			success:function(result)
			{
				if(result == "completedBefore")
				{
					jQuery("#khatmAlertModal .modal-body").html("' . JText::_('MOD_TANZIL_KHATM_COMPLETED_BEFORE') . '");
					jQuery("#khatmIntent option[value=khatmIntent]").remove();
				}
				else
				{
					jQuery("#khatmAlertModal .modal-body").html(result["message"]);
					if(result["type"] == "PAGE") showPage(result["start"]);
				}

				jQuery("#khatmAlertModal").modal("show");
			}
		});
	}
}';

$document->addScriptDeclaration($script);

?>

<div class="tanzil-khatm<?php echo $moduleclass_sfx; ?>">
	<form method="post" action="javascript:khatm();" class="form-horizontal">
		<div class="control-group">
			<label class="control-label span3" for="khatmType"><?php echo JText::_('MOD_TANZIL_KHATM_TYPE'); ?>:</label>
			<div class="controls span9">
				<select class="span12" id="khatmType">
					<option value="PAGE"><?php echo JText::_('MOD_TANZIL_KHATM_TYPE_PAGE'); ?></option>
				</select>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label span3" for="khatmIntent"><?php echo JText::_('MOD_TANZIL_KHATM_INTENT'); ?>:</label>
			<div class="controls span9">
				<select class="span12" id="khatmIntent">
				<?php foreach ($intents as $intent) : ?>
					<option value="<?php echo $intent->id; ?>" class="<?php echo $intent->type; ?>"><?php echo $intent->title?></option>
				<?php endforeach; ?>
				</select>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label span3" for="khatmAmount"><?php echo JText::_('MOD_TANZIL_KHATM_AMOUNT'); ?>:</label>
			<div class="controls span9">
				<select class="span8" id="khatmAmount">
					<?php for ($i = 1; $i <= 50; $i++) : ?>
					<option value="<?php echo $i; ?>"><?php echo $i; ?></option>
					<?php endfor; ?>
				</select>
				<span id="page_text"><?php echo JText::_('MOD_TANZIL_KHATM_PAGE'); ?></span>
			</div>
		</div>
		<div class="control-group">
			<input name="submit" type="submit" class="btn" value="<?php echo JText::_('MOD_TANZIL_KHATM_SUBMIT'); ?>" />
			<a href="#khatmReportModal" role="button" class="btn" data-toggle="modal"><?php echo JText::_('MOD_TANZIL_KHATM_REPORT'); ?></a>
			<div id="khatmReportModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="khatmReportModalLabel" aria-hidden="true">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					<h3 id="khatmReportModalLabel"><?php echo JText::_('MOD_TANZIL_KHATM_EXISTING'); ?></h3>
				</div>
				<div class="modal-body">
				</div>
			</div>
		</div>
		<div id="khatmAlertModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="khatmAlertModalLabel" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h3 id="khatmAlertModalLabel"><?php echo JText::_('MOD_TANZIL_KHATM'); ?></h3>
			</div>
			<div class="modal-body">
			</div>
		</div>
	</form>
</div>
