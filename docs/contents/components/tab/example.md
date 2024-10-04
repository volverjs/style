---
title: Example
wrapperClass: flex-1 w-100
---

<script>
    export default {
        data() {
            return {
                activeTab: 1
            }
        }
    }
</script>

<template>
    <div class="vv-tab">
        <nav class="vv-nav vv-nav--tabs vv-nav--full">
            <ul class="vv-nav__menu" role="menu">
                <li class="vv-nav__item" role="presentation">
                    <a
                        class="vv-nav__item-label"
                        role="menuitem"
                        tabindex="0"
                        href="#tab-panel-1"
                        :class="{'current': activeTab === 1}"
                        @click="activeTab = 1">
                        Sidebar item 1
                    </a>
                </li>
                <li class="vv-nav__item" role="presentation">
                    <a
                        class="vv-nav__item-label"
                        role="menuitem"
                        tabindex="0"
                        href="#tab-panel-2"
                        :class="{'current': activeTab === 2}"
                        @click="activeTab = 2">
                        Sidebar item 2
                    </a>
                </li>
                <li class="vv-nav__item" role="presentation">
                    <a
                        class="vv-nav__item-label"
                        role="menuitem"
                        tabindex="0"
                        href="#tab-panel-3"
                        :class="{'current': activeTab === 3}"
                        @click="activeTab = 3">
                        Sidebar item 3
                    </a>
                </li>
                <li class="vv-nav__item" role="presentation">
                    <a
                        class="vv-nav__item-label"
                        role="menuitem"
                        tabindex="0"
                        href="#tab-panel-4"
                        :class="{'current': activeTab === 4}"
                        @click="activeTab = 4">
                        Sidebar item 4
                    </a>
                </li>
            </ul>
        </nav>
        <article id="tab-panel-1" class="vv-tab__panel" :class="{'target': activeTab === 1}">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Nullam id dolor id nibh
                ultricies vehicula ut id elit. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Donec sed odio
                dui. Donec ullamcorper nulla non metus auctor fringilla.
                Nulla vitae elit libero, a pharetra augue.
            </p>
        </article>
        <article id="tab-panel-2" class="vv-tab__panel" :class="{'target': activeTab === 2}">
            <p>
                Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Donec sed odio
                dui. Donec ullamcorper nulla non metus auctor fringilla.
                Nulla vitae elit libero, a pharetra augue.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Nullam id dolor id nibh
                ultricies vehicula ut id elit. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </p>
        </article>
        <article id="tab-panel-3" class="vv-tab__panel" :class="{'target': activeTab === 3}">
            <p>
                Donec sed odio
                dui. Donec ullamcorper nulla non metus auctor fringilla.
                Nulla vitae elit libero, a pharetra augue.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Nullam id dolor id nibh
                ultricies vehicula ut id elit. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et.
            </p>
        </article>
        <article id="tab-panel-4" class="vv-tab__panel" :class="{'target': activeTab === 4}">
            <p>
                Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Nullam id dolor id nibh
                ultricies vehicula ut id elit. Donec sed odio
                dui. Donec ullamcorper nulla non metus auctor fringilla.
                Nulla vitae elit libero, a pharetra augue.
            </p>
        </article>
    </div>
</template>