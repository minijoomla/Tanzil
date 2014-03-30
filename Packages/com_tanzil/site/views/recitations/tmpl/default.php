<?php
/**
 * @package     Tanzil.Site
 * @subpackage  com_tanzil
 *
 * @copyright   Copyright (C) Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

JHtml::_('behavior.framework');

$this->document->addStyleSheet(JURI::base(true) . '/components/com_tanzil/assets/css/tanzil.css');

$listOrder = $this->escape($this->state->get('list.ordering'));
$listDirn  = $this->escape($this->state->get('list.direction'));
$listStart = (int) $this->state->get('list.start');
?>

<?php if (empty($this->items)) : ?>
	<p> <?php echo JText::_('COM_TANZIL_NO_RECITATIONS'); ?></p>
<?php else : ?>

<form action="<?php echo htmlspecialchars(JUri::getInstance()->toString()); ?>" method="post" name="adminForm" id="adminForm" class="form-inline">
	<?php if ($this->params->get('filter_field') != 'hide' || $this->params->get('show_pagination_limit')) : ?>
	<fieldset class="filters btn-toolbar clearfix">
		<?php if ($this->params->get('filter_field') != 'hide') :?>
			<div class="input-append">
				<input type="text" class="input-medium" name="filter-search" id="filter-search" value="<?php echo $searchValue = $this->escape($this->state->get('list.filter')); ?>" placeholder="<?php echo JText::_('COM_TANZIL_SEARCH'); ?>" />
				<button class="btn hasTooltip" type="submit" title="<?php echo JText::_('COM_TANZIL_SEARCH'); ?>">
					<i class="icon-search"></i>
				</button>
				<?php if ($searchValue) : ?>
				<button class="btn hasTooltip" type="button" title="<?php echo JText::_('COM_TANZIL_CLEAR'); ?>" onclick="document.id('filter-search').value='';this.form.submit();"><i class="icon-remove"></i></button>
				<?php endif; ?>
			</div>
		<?php endif; ?>
		<?php if ($this->params->get('show_pagination_limit')) : ?>
			<div class="btn-group pull-right">
				<label for="limit" class="element-invisible">
					<?php echo JText::_('JGLOBAL_DISPLAY_NUM'); ?>
				</label>
				<?php echo $this->pagination->getLimitBox(); ?>
			</div>
		<?php endif; ?>

		<input type="hidden" name="filter_order" value="" />
		<input type="hidden" name="filter_order_Dir" value="" />
		<input type="hidden" name="limitstart" value="" />
		<input type="hidden" name="task" value="" />
	</fieldset>
	<?php endif; ?>

	<table class="recitations table table-striped table-bordered table-hover">
		<thead>
			<tr>
				<th class="center">#</th>
				<th><?php echo JHtml::_('grid.sort', 'COM_TANZIL_INTENT', 'title', $listDirn, $listOrder); ?></th>
				<th class="center"><?php echo JHtml::_('grid.sort', 'COM_TANZIL_RECITATION_TYPE', 'type', $listDirn, $listOrder); ?></th>
				<th class="center"><?php echo JHtml::_('grid.sort', 'COM_TANZIL_STATUS', 'position', $listDirn, $listOrder); ?></th>
				<th class="center"><?php echo JHtml::_('grid.sort', 'COM_TANZIL_PARTICIPANTS_NUMBER', 'participants', $listDirn, $listOrder); ?></th>
				<th class="center"><?php echo JHtml::_('grid.sort', 'COM_TANZIL_USERS', 'users', $listDirn, $listOrder); ?></th>
				<th class="center"><?php echo JHtml::_('grid.sort', 'COM_TANZIL_START_DATE', 'created', $listDirn, $listOrder); ?></th>
				<th class="center"><?php echo JHtml::_('grid.sort', 'COM_TANZIL_END_DATE', 'modified', $listDirn, $listOrder); ?></th>
			</tr>
		</thead>
		<tbody>
			<?php foreach ($this->items as $i => $item) : ?>
			<tr>
				<td class="center"><?php echo $listStart + $i + 1; ?></td>
				<td><?php echo $this->escape($item->title); ?></td>
				<td class="center"><?php echo JText::_('COM_TANZIL_RECITATION_TYPE_' . $this->escape($item->type)); ?></td>
				<td class="center">
				<?php
				if ($item->completed)
				{
					// Calculate reciptation time
					$startDate = new DateTime($item->created);
					$endDate   = new DateTime($item->modified);
					$interval  = $endDate->diff($startDate);

					$years  = $interval->y ? $interval->y . ' ' . JText::_('COM_TANZIL_YEARS')  . ' ' : '';
					$months = $interval->m ? $interval->m . ' ' . JText::_('COM_TANZIL_MONTHS') . ' ' : '';
					$days   = $interval->d ? $interval->d . ' ' . JText::_('COM_TANZIL_DAYS')   . ' ' : '';

					echo '<span class="hasTooltip" title="' . $years . $months . $days . '">' . JText::_('COM_TANZIL_COMPLETED') . '</span>';
				}
				else
				{
					echo JText::_('COM_TANZIL_' . $this->escape($item->type)) . ' ' . $this->escape($item->position);
				}
				?>
				</td>
				<td class="center"><?php echo (int) $item->participants; ?></td>
				<td width="1%">
				<?php if ($item->users) : ?>
					<a href="#usersModal_<?php echo $item->id; ?>" role="button" class="btn hasTooltip" data-toggle="modal" title="<?php echo JText::_('COM_TANZIL_SHOW_PARTICIPANT_USERS'); ?>">
						<i class="icon-user"></i>
					</a>
					<div id="usersModal_<?php echo $item->id; ?>" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="usersModalLabel_<?php echo $item->id; ?>" aria-hidden="true">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<h3 id="usersModalLabel_<?php echo $item->id; ?>"><?php echo $this->escape($item->title); ?></h3>
						</div>
						<div class="modal-body">
							<dl class="dl-horizontal">
							<?php $usersReaded = 0; ?>
							<?php foreach($item->users as $page => $user) : ?>
								<dt><?php echo JFactory::getUser(key($user))->name; ?></dt>
								<dd>
								<?php
									switch ($item->type)
									{
										case 'PAGE':
											$readed   = $user[key($user)];
											$start    = $page + 1;
											$end      = $start + $readed;
											$typeText = JText::_('COM_TANZIL_' . $item->type);

											echo $readed . ' ' . $typeText;
											echo ' (' . $typeText . ' ' . $start . ' ' . JText::_('COM_TANZIL_UNTIL') . ' ' . $end . ')';
											break;
									}
									
									$usersReaded += $readed;
								?>
								</dd>
							<?php endforeach; ?>
							</dl>
						</div>
						<div class="modal-footer">
							<div class="text-left">
							<?php
								switch ($item->type)
								{
									case 'PAGE':
										$guestsReaded = 604 - $usersReaded;
										break;
								}

								echo JText::_('COM_TANZIL_USERS') . ': ' . $usersReaded . ' ' . $typeText . ' - ';								
								echo JText::_('COM_TANZIL_GUESTS') . ': ' . $guestsReaded . ' ' . $typeText;
							?>
							</div>
						</div>
					</div>
				<?php endif; ?>
				</td>
				<td class="center"><?php echo JHtml::_('date', $item->created, JText::_('DATE_FORMAT_LC4')) ?></td>
				<td class="center"><?php if($item->completed) echo JHtml::_('date', $item->modified, JText::_('DATE_FORMAT_LC4')) ?></td>
			</tr>
			<?php endforeach; ?>
		</tbody>
	</table>

	<?php if ($this->params->get('show_pagination')) : ?>
	<div class="pagination text-center">
		<?php if ($this->params->def('show_pagination_results', 1)) : ?>
		<p class="counter">
			<?php echo $this->pagination->getPagesCounter(); ?>
		</p>
		<?php endif; ?>
		<?php echo $this->pagination->getPagesLinks(); ?>
	</div>
	<?php endif; ?>
</form>

<?php endif; ?>