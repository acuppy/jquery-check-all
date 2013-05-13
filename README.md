== jQuery Check All

jQuery check all is a small plugin to check all checkboxes within a container via a master check-all checkbox.  This would be commonly used with bulk actions.

== Usage

Bind the master check-all checkbox with the default selector `input.check-all` or by setting the `checkboxAll` option below.

Bind the subordinate checkboxes by including them in the master checkbox container.  For an example, review the TestRunner.html within the test directory.

Bind the submitToggle action to a jQuery selected button.

    $('div').checkAll({

      // default master checkbox selector
      checkboxAll: 'input.check-all[type="checkbox"]',
      
      // default subordinate checkbox selector
      checkbox:    'input[type="checkbox"]',

      // All options below are callback functions

      // Triggered when a subordinate checkbox is checked
      onCheck:      null,

      // Triggered when the master checkbox is checked
      onCheckAll:   null,

      // Triggered when a subordinate checkbox is UN-checked
      onUnCheck:    null,

      // Triggered when the master checkbox is UN-checked 
      onUnCheckAll: null,

      // Triggered when a subordinate checkbox is toggled checked or unchecked
      onUpdate:     null,

      // Triggered when the master checkbox is toggled checked or unchecked
      onUpdateAll:  null

    });
