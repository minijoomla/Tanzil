<?php
/**
 * @package     Tanzil.Site
 * @subpackage  mod_tanzil_search
 *
 * @copyright   Copyright (C) 2013 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
?>

<div class="tanzil-search<?php echo $moduleclass_sfx; ?>">
	<ul class="nav nav-tabs">
		<li class="active"><a href="#search-site-tab" data-toggle="tab"><?php echo JText::_('MOD_TANZIL_SEARCH_SITE'); ?></a></li>
		<li><a href="#search-quran-tab" data-toggle="tab"><?php echo JText::_('MOD_TANZIL_SEARCH_QURAN'); ?></a></li>
		<li><a href="#search-roots-tab" data-toggle="tab"><?php echo JText::_('MOD_TANZIL_SEARCH_ROOTS'); ?></a></li>
		<li><a href="#search-goto-tab" data-toggle="tab"><?php echo JText::_('MOD_TANZIL_SEARCH_GOTO'); ?></a></li>
	</ul>
	<div class="tab-content">
		<div id="search-site-tab" class="tab-pane fade in active">
			<form action="<?php echo JRoute::_('index.php');?>" method="post" class="form-search">
				<div class="input-append row-fluid text-center">
					<input name="searchword" id="mod-tanzil-search-searchword" type="text" placeholder="<?php echo JText::_('MOD_TANZIL_SEARCH_SEARCH_SITE'); ?>" class="span10 search-query" maxlength="<?php echo $maxlength; ?>" />
					<button type="button" class="btn hasTooltip" onclick="this.form.submit();" title="<?php echo JText::_('MOD_TANZIL_SEARCH_SEARCH'); ?>"><i class="icon-search"></i></button>
				</div>
				<input type="hidden" name="task" value="search" />
				<input type="hidden" name="option" value="com_search" />
				<input type="hidden" name="Itemid" value="<?php echo $mitemid; ?>" />
			</form>
		</div>
		<div id="search-quran-tab" class="tab-pane fade">
			<form action="javascript:Search.go();" class="form-search">
				<div class="input-append row-fluid text-center">
					<input id="searchText" type="text" value="كتاب" class="span10 search-query" />
					<button type="button" class="btn hasTooltip" onclick="Search.go();" title="<?php echo JText::_('MOD_TANZIL_SEARCH_SEARCH'); ?>"><i class="icon-search"></i></button>
				</div>
				<!-- Button to trigger Search Tips modal -->
				<div class="pull-right"><a href="#searchTipsModal" role="button" data-toggle="modal"><?php echo JText::_('MOD_TANZIL_SEARCH_TIPS'); ?></a></div>
				<!-- Search Tips Modal -->
				<div id="searchTipsModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="searchTipsModalLabel" aria-hidden="true">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
						<h3 id="searchTipsModalLabel"><?php echo JText::_('MOD_TANZIL_SEARCH_SEARCH_TIPS'); ?></h3>
					</div>
					<div class="modal-body"><?php echo JText::_('MOD_TANZIL_SEARCH_SEARCH_TIPS_DESC'); ?></div>
					<div class="modal-footer">
						<button class="btn" data-dismiss="modal" aria-hidden="true"><?php echo JText::_('MOD_TANZIL_SEARCH_CLOSE'); ?></button>
					</div>
				</div>
			</form>
		</div>
		<div id="search-roots-tab" class="tab-pane fade">
			<div class="form-search">
				<div class="input-append row-fluid text-center">
					<select id="rootMenu" class="selection span10 search-query">
						<option value="1"></option>
					</select>
					<button type="button" class="btn hasTooltip" onclick="Search.goRoot();" title="<?php echo JText::_('MOD_TANZIL_SEARCH_SEARCH'); ?>"><i class="icon-search"></i></button>
				</div>
				<div id="charList"></div>
			</div>
		</div>
		<div id="search-goto-tab" class="tab-pane fade">
			<form action="javascript:Search.goTo();" class="form-search">
				<div class="input-append row-fluid text-center">
					<input id="gotoText" type="text" value="19:3" class="span10 ltr search-query" dir="ltr" />
					<button type="button" class="btn hasTooltip" onclick="Search.goTo();" title="<?php echo JText::_('MOD_TANZIL_SEARCH_GO'); ?>"><i class="icon-search"></i></button>
				</div>
				<!-- Button to trigger Tips modal -->
				<div class="pull-right"><a href="#tipsModal" role="button" data-toggle="modal"><?php echo JText::_('MOD_TANZIL_SEARCH_TIPS'); ?></a></div>
				<!-- Tips Modal -->
				<div id="tipsModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="tipsModalLabel" aria-hidden="true">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
						<h3 id="tipsModalLabel"><?php echo JText::_('MOD_TANZIL_SEARCH_TIPS'); ?></h3>
					</div>
					<div class="modal-body"><?php echo JText::_('MOD_TANZIL_SEARCH_TIPS_DESC'); ?></div>
					<div class="modal-footer">
						<button class="btn" data-dismiss="modal" aria-hidden="true"><?php echo JText::_('MOD_TANZIL_SEARCH_CLOSE'); ?></button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
