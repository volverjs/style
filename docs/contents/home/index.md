<header>
    <div class="flex flex-col mx-auto px-16 py-xl relative">
        <div class="flex flex-col flex-1 justify-center items-center text-center mb-48">
            <Logo alt="Volver" class="w-208 md:w-256 h-auto" width="256" height="256"></Logo>
            <h1 class="vv-text vv-text--headline text-34 md:text-48 tracking-tighter md:text-60 font-black my-md">
                The Easy Way to Style
            </h1>
            <h2 class="vv-text text-balance text-18 md:text-24 text-word-3 mt-0 mb-lg">
                An highly customizable CSS library with components and
                utilities.
            </h2>
            <copy-code class="mb-xl" code="npm i -s @volverjs/style"></copy-code>
            <div class="vv-button-group">
                <router-link :to="{
								name: 'get-started-name',
								params: { name: 'installation' },
							}" class="vv-button vv-button--primary vv-button--rounded">
                    Get Started
                    <iconify-icon icon="akar-icons:arrow-right" />
                </router-link>
                <a href="https://github.com/volverjs/style" target="_blank" rel="noopener noreferrer"
                    class="vv-button vv-button--secondary vv-button--rounded">
                    GitHub
                    <iconify-icon icon="akar-icons:octocat-fill" />
                </a>
            </div>
        </div>
        <div class="grid grid-col-1 md:grid-cols-3 gap-xl w-10/12 md:w-8/12 xxl:w-6/12 mx-auto">
            <div>
                <span class="vv-text vv-text--headline vv-text--size-3">
                    👌 Zero Specificity
                </span>
                <p class="vv-text vv-text--copy">
                    Say goodbye to specificity wars.<br />
                    The library is written with the lowest specificity
                    possible in mind.
                </p>
                <a href="#zero-specificity" class="vv-button vv-button--link">
                    Hmm, what does it mean?
                </a>
            </div>
            <div>
                <span class="vv-text vv-text--headline vv-text--size-3">
                    🎨 Custom properties
                </span>
                <p class="vv-text vv-text--copy">
                    Every line of code is linked to a custom property so
                    you can easily theme your app.
                </p>
                <a href="#custom-properties" class="vv-button vv-button--link">
                    Show me the code!
                </a>
            </div>
            <div>
                <span class="vv-text vv-text--headline vv-text--size-3">
                    😱 Utility-first + BEM
                </span>
                <p class="vv-text vv-text--copy">
                    We love the utility-first approach to style but also
                    BEM components, so why not both?
                </p>
                <a href="#utility-bem" class="vv-button vv-button--link">
                   A demo, please...
                </a>
            </div>
        </div>
    </div>
</header>
<main>
    <section class="py-lg px-16 relative shadow-inner" id="zero-specificity">
        <div class="inset-0 bg-gradient-3 opacity-10 absolute"></div>
        <div class="inset-0 bg-grid bg-blend-darken opacity-10 absolute"></div>
        <div class="relative">
            <h1 class="vv-text vv-text--headline vv-text--size-1 text-center">
                👌 Zero Specificity
            </h1>
            <h2 class="vv-text vv-text--copy text-balance vv-text--size-3 text-word-3 text-center mb-xl">
                Everything is defined with
                <code class="font-mono">:where()</code> so you can override all
                definitions easily.
            </h2>
            <div class="sm:w-10/12 md:w-8/12 xxl:w-6/12 text-center mx-auto">

```css
.vv-button {
  background: green;
  font-weight: light;
}

.font-sans {
  font-family: "Open Sans", sans-serif;
}

/*  the library not override your style */
@import '@volverjs/style';
```
  <router-link :to="{
                  name: 'get-started-name',
                  params: { name: 'customization' },
                  hash: '#zero-specificity',
                  }" class="vv-button vv-button--rounded vv-button--full-bleed">
                  Learn more about specificity
              </router-link>
        </div>
    </section>
    <section class="py-lg px-16 relative" id="custom-properties">
        <h1 class="vv-text vv-text--headline vv-text--size-1 text-center">
            🎨 Custom properties
        </h1>
        <h2 class="vv-text vv-text--copy text-balance vv-text--size-3 text-word-3 text-center mb-xl">
            All attributes have a
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" target="_blank" rel="noopener noreferrer"
                class="vv-button vv-button--link">custom property</a>
            (CSS variable) for easy theming.
        </h2>
        <div class="sm:w-10/12 md:w-8/12 xxl:w-6/12 text-center mx-auto">

```css
/* theme */
:root, :host, .theme {
  --font-sans: "Open Sans", sans-serif;
  --color-brand-hue: 150deg;
  --color-brand-saturation: 64%;
  --color-brand-lightness: 40%;
}

/* component specific */
.vv-button--new-variant {
  --vv-button-background: green;
  --vv-button-font-weight: light;
}
```
  <router-link :to="{
                  name: 'get-started-name',
                  params: { name: 'customization' },
                  hash: '#css-custom-properties',
                  }" class="vv-button vv-button--rounded vv-button--full-bleed">
                  Customize your style
              </router-link>
        </div>
    </section>
    <section class="py-lg px-16 relative shadow-inner" id="utility-bem">
        <div class="inset-0 bg-gradient-12 opacity-10 absolute"></div>
        <div class="inset-0 bg-grid bg-blend-darken opacity-10 absolute"></div>
        <h1 class="vv-text vv-text--headline vv-text--size-1 text-center">
            😱 Utility-first + BEM
        </h1>
        <h2 class="vv-text vv-text--copy text-balance vv-text--size-3 text-word-3 text-center mb-xl">
            You can style utility-first (with
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer"
                class="vv-button vv-button--link">tailwindcss</a>
            syntax) and use components written with
            <a href="https://getbem.com" target="_blank" rel="noopener noreferrer"
                class="vv-button vv-button--link">BEM</a>.
        </h2>
        <div class="sm:w-10/12 md:w-8/12 xxl:w-6/12 text-center mx-auto">
          <code-editor 
          class="mb-lg"
          resource-type="home" 
          resource-folder="examples" resource-name="utility-bem"
          hide-actions
          force-source></code-editor>
          <router-link :to="{
              name: 'get-started-name',
              params: { name: 'customization' },
              hash: '#components',
            }" class="vv-button vv-button--rounded vv-button--full-bleed">
            Make your own components
          </router-link>
        </div>
    </section>
</main>