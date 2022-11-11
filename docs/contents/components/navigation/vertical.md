---
title: Vertical
wrapperClass: flex-1 border border-surface-4 border-solid rounded-lg overflow-hidden
---

<div class="flex">
    <div class="px-lg py-md">
        <nav class="vv-nav vv-nav--sidebar">
            <ul class="vv-nav__menu" role="menu">
                <li class="vv-nav__item" role="presentation">
                    <span
                        id="sidebar-label-1"
                        class="vv-nav__heading-label"
                        aria-hidden="true">
                        Sidebar
                    </span>
                    <ul class="vv-nav__menu"
                        role="menu"
                        aria-labelledby="sidebar-label-1">
                        <li class="vv-nav__item">
                            <a
                                class="vv-nav__item-label"
                                tabindex="0"
                                href="#">
                                Sidebar item 1
                            </a>
                        </li>
                        <li class="vv-nav__item">
                            <a
                                class="vv-nav__item-label current"
                                tabindex="0"
                                href="#">
                                Sidebar item 2
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="vv-nav__divider" role="separator"></li>
                <li class="vv-nav__item" role="presentation">
                    <span
                        id="sidebar-label-2"
                        class="vv-nav__heading-label"
                        aria-hidden="true">
                        Second title
                    </span>
                    <ul class="vv-nav__menu"
                        role="menu"
                        aria-labelledby="sidebar-label-2">
                        <li class="vv-nav__item">
                            <a
                                class="vv-nav__item-label"
                                tabindex="0"
                                href="#">
                                Sidebar item 3
                            </a>
                        </li>
                        <li class="vv-nav__item">
                            <a
                                class="vv-nav__item-label"
                                tabindex="0"
                                href="#">
                                Sidebar item 4
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
    <main class="flex flex-1 bg-surface-1">
        <aside class="ml-auto px-lg py-md">
            <nav class="vv-nav vv-nav--aside">
                <ul class="vv-nav__menu" role="menu">
                    <li class="vv-nav__item" role="presentation">
                        <span
                            id="aside-label"
                            class="vv-nav__heading-label"
                            aria-hidden="true">
                            Aside
                        </span>
                        <ul class="vv-nav__menu"
                            role="menu"
                            aria-labelledby="aside-label">
                            <li class="vv-nav__item">
                                <a
                                    class="vv-nav__item-label"
                                    tabindex="0"
                                    href="#">
                                    Aside item 1
                                </a>
                            </li>
                            <li class="vv-nav__item">
                                <a
                                    class="vv-nav__item-label"
                                    tabindex="0"
                                    href="#">
                                    Aside item 2
                                </a>
                            </li>
                            <li class="vv-nav__divider" role="separator"></li>
                            <li class="vv-nav__item">
                                <a
                                    class="vv-nav__item-label current"
                                    tabindex="0"
                                    href="#">
                                    Aside item 3
                                </a>
                            </li>
                            <li class="vv-nav__item">
                                <a
                                    class="vv-nav__item-label"
                                    tabindex="0"
                                    href="#">
                                    Aside item 4
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    </main>
</div>