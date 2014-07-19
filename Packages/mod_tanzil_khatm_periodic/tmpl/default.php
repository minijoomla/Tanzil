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
	jQuery("#khatmPeriodicReportModal").on("show", function()
	{
		iframeHtml = \'<iframe name="khatmReportPage" class="iframe" src="index.php?option=com_tanzil&view=recitations&tmpl=component&layout=progressbar&limit=0&filter_completed=0" height="400px" width="100%" frameborder="0"></iframe>\';
		jQuery("#khatmReportModal .modal-body").html(iframeHtml);
	});

	jQuery("#khatmPeriodicCancel").click(function()
	{
		khatmPeriodicType = jQuery("#khatmPeriodicType").val();

		if(khatmPeriodicType)
		{
			jQuery.ajax(
			{
				dataType: "json",
				type: "POST",
				url:"index.php?option=com_tanzil&task=khatmPeriodicCancel",
				data: {
					type: khatmPeriodicType,
				},
				success:function(result)
				{
					if(result["result"] == "notFound")
					{
						jQuery("#khatmPeriodicAlertModal .modal-body").html("' . JText::_('MOD_TANZIL_KHATM_PERIODIC_CANCEL_NOT_FOUND') . '");
					}
					else if(result["result"] == "cancelFail")
					{
						jQuery("#khatmPeriodicAlertModal .modal-body").html("' . JText::_('MOD_TANZIL_KHATM_PERIODIC_CANCEL_FAIL') . '");
					}
					else
					{
						jQuery("#khatmPeriodicAlertModal .modal-body").html("' . JText::_('MOD_TANZIL_KHATM_PERIODIC_CANCEL_SUCCESS') . '");
						jQuery("#khatmPeriodicCancel").hide();
					}

					jQuery("#khatmPeriodicAlertModal").modal("show");
				}
			});
		}
	});

	jQuery("#khatmPeriodicType").change(function()
	{
		khatmPeriodicType = jQuery("#khatmPeriodicType").val();
		
		var currentHizbDay  = "' . $currentHizbDay  . '";
		var currentHizbWeek = "' . $currentHizbWeek . '";
		var currentPageDay  = "' . $currentPageDay  . '";
		
		jQuery(".khatmStatus").hide();

		if(khatmPeriodicType == "hizb_day")
		{
			if(currentHizbDay == "-1")
			{
				jQuery("#khatmPeriodicJoin").show();
			}
			else if(currentHizbDay == "0")
			{
				jQuery("#khatmPeriodicEnded").show();
			}
			else
			{
				jQuery("#khatmPeriodicAlert").html(currentHizbDay);
				jQuery("#khatmPeriodicAlert").show();
				jQuery("#khatmPeriodicCancel").show();
			}
		}

		if(khatmPeriodicType == "hizb_week")
		{
			if(currentHizbWeek == "-1")
			{
				jQuery("#khatmPeriodicJoin").show();
			}
			else if(currentHizbWeek == "0")
			{
				jQuery("#khatmPeriodicEnded").show();
			}
			else
			{
				jQuery("#khatmPeriodicAlert").html(currentHizbWeek);
				jQuery("#khatmPeriodicAlert").show();
				jQuery("#khatmPeriodicCancel").show();
			}
		}

		if(khatmPeriodicType == "page_day")
		{
			if(currentPageDay == "-1")
			{
				jQuery("#khatmPeriodicJoin").show();
			}
			else if(currentPageDay == "0")
			{
				jQuery("#khatmPeriodicEnded").show();
			}
			else
			{
				jQuery("#khatmPeriodicAlert").html(currentPageDay);
				jQuery("#khatmPeriodicAlert").show();
				jQuery("#khatmPeriodicCancel").show();
			}
		}
	}).change();
})

function showHizb(hizb) {
	hizb = QuranData.HizbQaurter[(hizb * 2) - 1];
	showAya(hizb[0], hizb[1]);
}

function khatmPeriodic()
{
	khatmPeriodicType = jQuery("#khatmPeriodicType").val();

	if(khatmPeriodicType)
	{
		jQuery.ajax(
		{
			dataType: "json",
			type: "POST",
			url:"index.php?option=com_tanzil&task=khatmPeriodicJoin",
			data: {
				type: khatmPeriodicType,
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
					jQuery("#khatmPeriodicJoin").hide();

					if(khatmPeriodicType == "page_day")
					{
						showPage(result["hizb"]);
					}
					else
					{
						showHizb(result["hizb"]);
					}
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
					<option value="hizb_day"><?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_TYPE_HIZB_DAY'); ?></option>
					<option value="hizb_week"><?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_TYPE_HIZB_WEEK'); ?></option>
					<option value="page_day"><?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_TYPE_PAGE_DAY'); ?></option>
				</select>
			</div>
		</div>
		
		<div class="control-group text-center">

			<input id="khatmPeriodicJoin" name="submit" type="submit" class="btn khatmStatus" value="<?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_JOIN'); ?>" />

			<div id="khatmPeriodicAlert" class="alert alert-success khatmStatus"></div>

			<input id="khatmPeriodicCancel" name="cancel" type="button" class="btn btn-danger khatmStatus" value="<?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_CANCEL'); ?>" />

			<div id="khatmPeriodicEnded" class="alert alert-success khatmStatus"><?php echo JText::_('MOD_TANZIL_KHATM_PERIODIC_KHATM_ENDED'); ?></div>

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
