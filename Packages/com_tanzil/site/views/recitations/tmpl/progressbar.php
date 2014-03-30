<?php
/**
 * @package     Tanzil.Site
 * @subpackage  com_tanzil
 *
 * @copyright   Copyright (C) Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

?>

<?php if (empty($this->items)) : ?>
	<p> <?php echo JText::_('COM_TANZIL_NO_RECITATIONS'); ?></p>
<?php else : ?>
	<?php foreach ($this->items as $i => $item) : ?>
	<div class="well">
		<h6><?php echo $this->escape($item->title); ?></h6>
		<?php
		switch ($item->type)
		{
			case 'PAGE':
				$division = 604;
				break;
		}

		$progress = $item->position * 100 / $division;
		?>
		<div class="progress progress-striped active">
			<div class="bar" style="width: <?php echo $progress; ?>%;">
				<?php echo JText::_('COM_TANZIL_' . $item->type) . ' ' . $item->position . ' ' . JText::_('COM_TANZIL_OF') . ' '. $division . ' ' . JText::_('COM_TANZIL_' . $item->type);?>
			</div>
		</div>
	</div>
	<?php endforeach; ?>
<?php endif; ?>