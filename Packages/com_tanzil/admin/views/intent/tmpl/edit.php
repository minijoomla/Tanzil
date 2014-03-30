<?php
/**
 * @package     Tanzil.Administrator
 * @subpackage  com_tanzil
 *
 * @copyright   Copyright (C) Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

JHtml::addIncludePath(JPATH_COMPONENT.'/helpers/html');

JHtml::_('behavior.formvalidation');

?>
<script type="text/javascript">
	Joomla.submitbutton = function(task)
	{
		if (task == 'intent.cancel' || document.formvalidator.isValid(document.id('intent-form')))
		{
			<?php echo $this->form->getField('description')->save(); ?>
			Joomla.submitform(task, document.getElementById('intent-form'));
		}
	}
</script>

<form action="<?php echo JRoute::_('index.php?option=com_tanzil&layout=edit&id=' . (int) $this->item->id); ?>" method="post" name="adminForm" id="intent-form" class="form-validate">

	<?php echo JLayoutHelper::render('joomla.edit.title_alias', $this); ?>

	<div class="form-horizontal">
		<div class="span9">
			<div class="form-vertical">
				<?php echo $this->form->getControlGroup('description'); ?>
			</div>
		</div>
		<div class="span3">
			<fieldset class="form-vertical">
				<?php echo $this->form->getControlGroup('repeat'); ?>
			</fieldset>
			<?php echo JLayoutHelper::render('joomla.edit.global', $this); ?>
		</div>
	</div>

	<input type="hidden" name="task" value="" />
	<?php echo JHtml::_('form.token'); ?>
</form>
