---
title: Example
wrapperClass: flex flex-1 flex-wrap gap-md items-center 
---

<script>
    export default {
        data() {
            return {
                open: false,
            }
        },
        methods: {
            toggleOpen() {
                this.open = !this.open;
            },
            toggleOpenAttribute() {
                if (this.open) {
                    this.$refs.dropdown.showModal();
                } else {
                    this.$refs.dropdown.close()
                }
            },
        },
    }
</script>

<template>
    <button type="button" class="vv-button mx-auto" @click.stop="toggleOpen">
        Open Dropdown
    </button>
    <Transition name="vv-dropdown--fade-block" @after-leave="toggleOpenAttribute" @before-enter="toggleOpenAttribute">
      <dialog v-show="open" ref="dropdown" class="vv-dropdown vv-dropdown--dialog" @click.stop="toggleOpen">
        <ul class="vv-dropdown__list" role="listbox">
          <li class="vv-dropdown-optgroup" 
            role="presentation" 
            tabindex="-1">
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
      </dialog>
    </Transition>
</template>