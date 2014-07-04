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
$user     = JFactory::getUser();

if (!$user->guest)
{
	$script = 'jQuery(document).ready(function(){
	jQuery("#khatmReportModal").on("show", function()
	{
		iframeHtml = \'<iframe name="khatmReportPage" class="iframe" src="index.php?option=com_tanzil&view=recitations&tmpl=component&layout=progressbar&limit=0&filter_completed=0" height="400px" width="100%" frameborder="0"></iframe>\';
		jQuery("#khatmReportModal .modal-body").html(iframeHtml);
	});
})

function showHizb(hizb) {
	hizb = QuranData.HizbQaurter[(hizb * 2) - 1];
	showAya(hizb[0], hizb[1]);
}

function khatmPeriodic()
{
	khatmPeriodicType = jQuery("#khatmPeriodicType").val();

	if(khatmPeriodicIntent)
	{
		jQuery.ajax(
		{
			dataType: "json",
			type: "POST",
			url:"index.php?option=com_tanzil&task=khatmPeriodic",
			data: {
				id: khatmPeriodicType,
			},
			success:function(result)
			{
				if(result["hizb"] == "joinedBefore")
				{
					jQuery("#khatmPeriodicAlertModal .modal-body").html("' . JText::_('MOD_TANZIL_KHATM_PERIODIC_JOINED_BEFORE') . '");
				}
				else if(result["hizb"] == "completedBefore")
				{
					jQuery("#khatmPeriodicAlertModal .modal-body").html("' . JText::_('MOD_TANZIL_KHATM_PERIODIC_COMPLETED_BEFORE') . '");
				}
				else
				{
					jQuery("#khatmPeriodicAlertModal .modal-body").html(result["message"]);
					showHizb(result["hizb"]);
				}

				jQuery("#khatmPeriodicAlertModal").modal("show");
			}
		});
	}
}';

	$document->addScriptDeclaration($script);

?>

<div class="tanzil-khatm-periodic<?php echo $moduleclass_sfx; ?>">
	<div class="alert alert-info"><?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_DESCRIPTION'); ?></div>
	<form method="post" action="javascript:khatmPeriodic();" class="form-horizontal">
		<div class="control-group">
			<div class="controls span12">
				<select class="span12" id="khatmPeriodicType">
					<option value="hizb"><?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_TYPE_HIZB'); ?></option>
				</select>
			</div>
		</div>
		
		<div class="control-group text-center">
			<?php if (empty($hizbStatus)) : ?>
			<input name="submit" type="submit" class="btn" value="<?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_JOIN'); ?>" />
			<?php elseif ($currentHizb): ?>
			<div class="alert alert-success">
				<?php
					$currentHizb = '<a href="javascript:showHizb(' . $currentHizb . ')">' . JText::_('MOD_TANZIL_KHATM_PERIODIC_HIZB') . ' ' . $currentHizb . '</a>';
					echo JText::sprintf('MOD_TANZIL_KHATM_PERIODIC_TODAY_DESCRIPTION', $currentHizb);
				?>
			</div>
			<?php else: ?>
			<div><?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_KHATM_ENDED'); ?></div>
			<?php endif; ?>
			<a href="#khatmPeriodicReportModal" role="button" class="btn hide" data-toggle="modal"><?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_STATUS'); ?></a>
			<div id="khatmPeriodicReportModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="khatmPeriodicReportModalLabel" aria-hidden="true">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
					<h3 id="khatmPeriodicReportModalLabel"><?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_STATUS'); ?></h3>
				</div>
				<div class="modal-body">
				</div>
			</div>
		</div>
		<div id="khatmPeriodicAlertModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="khatmPeriodicAlertModalLabel" aria-hidden="true">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h3 id="khatmPeriodicAlertModalLabel"><?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC'); ?></h3>
			</div>
			<div class="modal-body">
			</div>
		</div>
	</form>
</div>

<?php
}
else
{
	echo JText::_('MOD_TANZIL_KHATM_PERIODIC_LOGIN_FIRST');
}
?>
