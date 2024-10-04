---
title: Example
wrapperClass: items-start w-full md:w-1/2 mx-auto
---

<script>
  export default {
    data() {
      return {
        files: [],
        isDragging: false,
        isLoading: false,
        progress: 0
      }
    },
    methods: {
      onDragenter(event) {
        this.isDragging = true
      },
      onDragleave(event) {
        this.isDragging = false
      },
      onDrop(event) {
        this.isDragging = false
        this.files = [...this.files, ...event.dataTransfer.files]
      },
      onChange(event) {
        this.files = [...this.files, ...event.target.files]
        this.$refs.input.value = ''
      },
      sizeInKiB(number) {
        return Math.floor(number / 1024)
      },
      fileUrl(file) {
        return URL.createObjectURL(file)
      },
      removeFile(index) {
        this.files.splice(index, 1)
      },
      onClick(event) {
        this.$refs.input.click()
      },
      onSubmit() {
        this.progress = 0
        this.isLoading = true
        const interval = setInterval(() => {
          this.progress += 10
          if (this.progress >= 100) {
            clearInterval(interval)
          }
        }, 200)
        setTimeout(() => {
          this.isLoading = false
          this.files = []
        }, 2000)
      },
    },
  }
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="vv-input-file vv-input-file--hidden" :class="{'vv-input-file--dragging': isDragging, 
    'vv-input-file--with-progress': isLoading}">
        <label for="file-example">File List</label>
        <div class="vv-input-file__drop-area" @dragenter.prevent.stop="onDragenter" @dragleave.prevent.stop="onDragleave" @drop.prevent.stop=onDrop @dragover.prevent.stop @click.stop="onClick">
          Drag one or more files to this drop zone.
          <progress v-if="isLoading" class="vv-input-file__progress" :value="progress" max="100"></progress>
        </div>
        <div class="vv-input-file__wrapper">
            <input id="file-example" 
                  ref="input"
                  @change="onChange"
                  type="file" 
                  name="file-example" 
                  placeholder="Placeholder text" 
                  aria-describedby="file-example-hint"
                  multiple />
        </div>
        <ul v-if="files.length" class="vv-input-file__list">
          <li v-for="(file, index) in files" class="vv-input-file__item">
            <IconifyIcon class="vv-input-file__item-icon" icon="akar-icons:file" />
            <a target="_blank" :href="fileUrl(file)" class="vv-input-file__item-link">
              {{ file.name }}
            </a>
            <small class="vv-input-file__item-info">
              {{ sizeInKiB(file.size) }} KiB
            </small>
            <button type="button" 
            @click.stop="removeFile(index)"
            class="vv-input-file__item-remove" title="Remove" />
          </li>
        </ul>
        <small id="file-example-hint" class="vv-input-file__hint">
            <template v-if="isLoading">
              {{ progress }}%
            </template>
            <template v-else>
              Please fill the input above.
            </template>
        </small>
    </div>
    <button type="submit" class="vv-button" :disabled="isLoading || files.length === 0">Submit</button>
  </form>
</template>