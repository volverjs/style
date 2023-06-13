---
title: Listbox
wrapperClass: flex flex-1 flex-wrap gap-md items-center justify-center
---
<div class="vv-dropdown">
  <ul class="vv-dropdown__list" role="listbox" aria-labelledby="vv-dropdown-group">
    <li class="vv-dropdown-optgroup" 
      id="vv-dropdown-group"
      role="presentation">
      <span class="vv-dropdown-option__label">Option group</span>
    </li>
    <li class="vv-dropdown-option" 
      role="option" 
      aria-selected="false" 
      aria-disabled="false" 
      tabindex="0">
      <span class="vv-dropdown-option__label">Option</span>
    </li>
    <li class="vv-dropdown-option" 
      role="option" 
      aria-selected="false" 
      aria-disabled="true" 
      tabindex="0">
      <span class="vv-dropdown-option__label">Option disabled</span>
    </li>
    <li class="vv-dropdown-option focus-visible" 
      role="option" 
      aria-selected="false"
      aria-disabled="false" 
      tabindex="0">
      <span class="vv-dropdown-option__label">Option focused</span>
      <span class="vv-dropdown-option__hint">Press enter to select</span>
    </li>
    <li class="vv-dropdown-option" 
      role="option" 
      aria-selected="true" 
      aria-disabled="false" 
      tabindex="0">
      <span class="vv-dropdown-option__label">Option selected</span>
    </li>
    <li class="vv-dropdown-option vv-dropdown-option--unselectable focus-visible" 
      role="option" 
      aria-selected="true" 
      aria-disabled="false" 
      tabindex="0">
      <span class="vv-dropdown-option__label">Option selected focused</span>
      <span class="vv-dropdown-option__hint">Press enter to remove</span>
    </li>
  </ul>
</div>