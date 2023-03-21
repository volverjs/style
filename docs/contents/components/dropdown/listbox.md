---
title: Listbox
wrapperClass: flex flex-1 flex-wrap gap-md items-center justify-center
---
<div class="vv-dropdown">
  <ul class="vv-dropdown__list" role="listbox">
    <li class="vv-dropdown-optgroup" 
      role="presentation" 
      tabindex="-1">
      Option group
    </li>
    <li class="vv-dropdown-option" 
      role="option" 
      aria-selected="false" 
      aria-disabled="false" 
      tabindex="0">
      Option
    </li>
    <li class="vv-dropdown-option" 
      role="option" 
      aria-selected="false" 
      aria-disabled="true" 
      tabindex="0">
      Option disabled
    </li>
    <li class="vv-dropdown-option focus-visible" 
      role="option" 
      aria-selected="false"
      aria-disabled="false" 
      tabindex="0">
      Option focused
      <span class="vv-dropdown-option__hint">Press enter to select</span>
    </li>
    <li class="vv-dropdown-option" 
      role="option" 
      aria-selected="true" 
      aria-disabled="false" 
      tabindex="0">
      Option selected
    </li>
    <li class="vv-dropdown-option vv-dropdown-option--unselectable focus-visible" 
      role="option" 
      aria-selected="true" 
      aria-disabled="false" 
      tabindex="0">
      Option selected focused
      <span class="vv-dropdown-option__hint">Press enter to remove</span>
    </li>
  </ul>
</div>