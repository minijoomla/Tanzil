<?php
/**
 * @package     Tanzil.Site
 * @subpackage  com_tanzil
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

$this->document->addStyleSheet(JURI::base(true) . '/components/com_tanzil/assets/css/tanzil(v1.5).css');

JHtml::_('jquery.framework', false);
JHtml::_('bootstrap.tooltip');
$this->document->addScript(JURI::base(true) . '/components/com_tanzil/assets/js/data.js');
$this->document->addScript(JURI::base(true) . '/components/com_tanzil/assets/js/tanzil(v1.5).js');
?>

<div id="loadingImage" class="pull-right"><img src="<?php echo JURI::base(true); ?>/components/com_tanzil/assets/img/ajax-loader.gif" width="16" height="16" alt="<?php echo JText::_('COM_TANZIL_LOADING'); ?>"/></div>
<ul class="nav nav-tabs" id="tanzil-tabs">
	<li id="quran-selector" class="active"><a href="#quran-tab" data-toggle="tab"><?php echo JText::_('COM_TANZIL_QURAN'); ?></a></li>
	<li id="trans-selector"><a href="#trans-tab" data-toggle="tab"><?php echo JText::_('COM_TANZIL_TRANSLATION'); ?></a></li>
	<li id="search-selector" class="hide"><a href="#search-tab" data-toggle="tab"><?php echo JText::_('COM_TANZIL_SEARCH_RESULTS'); ?></a></li>
</ul>
<div class="tab-content" id="main-content">
	<div id="quran-tab" class="tab-pane fade in active main-tab quran">
		<div class="quranPageHeader">
			<div class="pull-left">
				<span class="suraName">&nbsp;</span>
			</div>
			<div class="pull-right">
				<span class="juzName">&nbsp;</span>
			</div>
			<div> <a class="arrow-link hasTooltip" href="javascript:changePage('left')" title="<?php echo JText::_('COM_TANZIL_NEXT_PAGE'); ?>">&#9668;</a> &nbsp;
				<span class="pageNumber"> </span>
				&nbsp; <a class="arrow-link hasTooltip" href="javascript:changePage('right')" title="<?php echo JText::_('COM_TANZIL_PREVIOUS_PAGE'); ?>">&#9658;</a> </div>
		</div>
		<div class="qFrameTop">&nbsp;</div>
		<div class="qFrameMiddle">
			<div class="quranText" id="quranText">
				<div style="padding: 10px; color: gray; text-align: center; font-size: 22px; direction: rtl"><?php echo JText::_('COM_TANZIL_LOADING'); ?></div>
			</div>
		</div>
		<div class="qFrameBottom">&nbsp;</div>
		<div class="quranPageFooter"> <a class="arrow-link hasTooltip" href="javascript:changePage('left')" title="<?php echo JText::_('COM_TANZIL_NEXT_PAGE'); ?>">&#9668;</a> &nbsp;
			<span class="pageNumber"> </span>
			&nbsp; <a class="arrow-link hasTooltip" href="javascript:changePage('right')" title="<?php echo JText::_('COM_TANZIL_PREVIOUS_PAGE'); ?>">&#9658;</a></div>
	</div>
	<div id="trans-tab" class="tab-pane fade main-tab quran">
		<div class="quranPageHeader">
			<div class="pull-left">
				<span class="suraName">&nbsp;</span>
			</div>
			<div class="pull-right">
				<span class="juzName">&nbsp;</span>
			</div>
			<div> <a class="arrow-link hasTooltip" href="javascript:changePage('left')" title="<?php echo JText::_('COM_TANZIL_NEXT_PAGE'); ?>">&#9668;</a> &nbsp;
				<span class="pageNumber"> </span>
				&nbsp; <a class="arrow-link hasTooltip" href="javascript:changePage('right')" title="<?php echo JText::_('COM_TANZIL_PREVIOUS_PAGE'); ?>">&#9658;</a> </div>
		</div>
		<div class="qFrameTop">&nbsp;</div>
		<div class="qFrameMiddle">
			<div class="transText" id="transText"> </div>
		</div>
		<div class="qFrameBottom">&nbsp;</div>
		<div class="quranPageFooter"> <a class="arrow-link hasTooltip" href="javascript:changePage('left')" title="<?php echo JText::_('COM_TANZIL_NEXT_PAGE'); ?>">&#9668;</a> &nbsp;
			<span class="pageNumber"> </span>
			&nbsp; <a class="arrow-link hasTooltip" href="javascript:changePage('right')" title="<?php echo JText::_('COM_TANZIL_PREVIOUS_PAGE'); ?>">&#9658;</a></div>
	</div>
	<div id="search-tab" class="tab-pane fade main-tab" style="display: none;">
		<div class="searchHeader">
			<div class="pull-left"><?php echo JText::_('COM_TANZIL_SEARCH'); ?>: <code id="searchPattern"></code> </div>
			<div id="searchStat" class="pull-right"></div>
			<div id="search-nav" class="text-center" dir="ltr">
				<form method="post" action="javascript:Search.showPage(0);" class="form-inline">
					<a class="arrow-link arrow-left" href="javascript:Search.showPage(isRTL ? 1 : -1)">&#9668;</a>
					<span> &nbsp; <?php echo JText::_('COM_TANZIL_PAGE'); ?>
					<input type="text" value="1" id="pageOffset" class="text-center span1" />
					<?php echo JText::_('COM_TANZIL_OF'); ?>
					<span id="totalPages">-</span>
					&nbsp; </span>
					<a class="arrow-link arrow-right" href="javascript:Search.showPage(isRTL ? -1 : 1)">&#9658;</a>
				</form>
			</div>
		</div>
		<div class="searchFrame" id="searchFrame">
			<div class="searchResults" id="searchResults"> </div>
		</div>
	</div>
</div>
<div class="tbox">
	<div class="tbox-wrapper">
		<div class="tbox-title"> <a class="tbox-close" title="بستن" href="#">X</a>
			<span>Title</span>
		</div>
		<div class="tbox-content"> </div>
	</div>
</div>
