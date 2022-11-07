---
title: Switch
wrapperClass: md:w-9/12 mx-auto flex justify-center flex-wrap
---
<template>
       <label class="vv-input-checkbox 
                     vv-input-checkbox--switch"
              for="switch-option">
       <input id="switch-option" 
              type="checkbox" 
              role="switch" 
              name="switch-option" 
              value="switch-option" />
       Option
       </label>
       <label class="vv-input-checkbox 
                     vv-input-checkbox--switch"
              for="switch-option-checked">
       <input id="switch-option-checked" 
              type="checkbox" 
              role="switch" 
              name="switch-option-checked" 
              value="switch-option-checked" 
              checked="checked" />
       Checked
       </label>
       <label class="vv-input-checkbox 
                     vv-input-checkbox--switch"
              for="switch-option-checked">
       <input id="switch-option-focus" 
              type="checkbox" 
              role="switch" 
              name="switch-option-focus" 
              value="switch-option-focus"
              checked="checked" 
              class="focus-visible" />
       Focus
       </label>
       <label class="vv-input-checkbox 
                     vv-input-checkbox--switch"
              for="switch-option-disabled">
       <input id="switch-option-disabled" 
              type="checkbox" 
              role="switch" 
              name="switch-option-disabled" 
              value="switch-option-disabled"
              disabled="disabled" />
       Disabled
       </label>
       <label class="vv-input-checkbox 
                     vv-input-checkbox--switch"
              for="switch-option-disabled-checked">
       <input id="switch-option-disabled-checked" 
              type="checkbox" 
              role="switch" 
              name="switch-option-disabled-checked" 
              value="switch-option-disabled-checked" 
              disabled="disabled" 
              checked="checked" />
       Disabled Checked
       </label>
       <label class="vv-input-checkbox 
                     vv-input-checkbox--switch 
                     vv-input-checkbox--readonly"
              for="switch-option-readonly">
       <input id="switch-option-readonly" 
              type="checkbox" 
              role="switch" 
              name="switch-option-readonly" 
              value="switch-option-readonly" 
              disabled="disabled" 
              tabindex="-1" />
       Readonly
       </label>
       <label class="vv-input-checkbox 
                     vv-input-checkbox--switch 
                     vv-input-checkbox--readonly" 
              for="switch-option-readonly-checked">
       <input id="switch-option-readonly-checked" 
              type="checkbox" 
              role="switch" 
              name="switch-option-readonly-checked" 
              value="switch-option-readonly-checked"
              disabled="disabled" 
              checked="checked" 
              tabindex="-1" />
       Readonly Checked
       </label>
</template>