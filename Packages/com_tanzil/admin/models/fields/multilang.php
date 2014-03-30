<?php
/**
 * @package     Sibdiet.Administrator
 * @subpackage  com_sibdiet
 *
 * @copyright   Copyright (C) Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('JPATH_PLATFORM') or die;

JFormHelper::loadFieldClass('text');

/**
 * Multi Language Field class for the Joomla Framework.
 *
 * @package     Sibdiet.Administrator
 */
class JFormFieldMultilang extends JFormFieldText
{
	/**
	 * The form field type.
	 *
	 * @var    string
	 *
	 * @since  11.1
	 */
	protected $type = 'Multilang';

	/**
	 * Method to get the field input markup.
	 *
	 * @return  string  The field input markup.
	 *
	 * @since   11.1
	 */
	protected function getInput()
	{
		$html = array();

		$thisid = $this->id;
		$values = $this->value;
		$class  = $this->class;

		$languages = JLanguageHelper::getLanguages();

		foreach($languages as $lang)
		{
			$language    = new JLanguage($lang->lang_code);
			
			$this->class            = $class . ($language->isRTL() ? ' rtl' : ' ltr');
			$this->element['label'] = $lang->title;
			$this->name             = 'jform[' . $this->fieldname . '][' . $lang->lang_code . ']';
			$this->id               = $thisid . '_' . $lang->lang_code;
			$this->value            = array_key_exists($lang->lang_code, $values) ? $values[$lang->lang_code] : '';

			$html[] = '<div class="control-group">';
			$html[] = '<div class="control-label">';
			$html[] = parent::getLabel();
			$html[] = '</div>';
			$html[] = '<div class="controls">';
			$html[] = parent::getInput();
			$html[] = '</div>';
			$html[] = '</div>';
		}

		return implode($html);
	}
}
