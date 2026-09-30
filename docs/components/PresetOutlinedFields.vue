<template>
	<div class="docs-preset-outlined-fields">
		<slot />
	</div>
</template>

<style lang="scss">
	// The outlined fields preset, applied to the content of this component
	// only, so the presets page can show it next to the default fields. A
	// preset rewrites the settings before the library emits anything, so it
	// cannot be switched on inside the stylesheet of the styleguide, which has
	// already emitted the default fields: this is a compilation of its own,
	// configured like the one in `App.vue`.
	@use 'sass:list';
	@use 'sass:map';
	@use 'sass:meta';
	@use '@/context' as ctx with (
		$font-family-sans: "'Open Sans', sans-serif",
		$use-custom-props-for-components: false,
		$use-css-layers: true
	);
	// The order of the layers, in case this sheet reaches the page first
	@use '@/layers';

	// The keys of `$after` whose value is not the one in `$before`, nested
	// maps compared key by key
	@function -changed($before, $after) {
		$result: ();

		@each $key, $value in $after {
			$old: map.get($before, $key);

			@if meta.type-of($value) == 'map' and meta.type-of($old) == 'map' {
				$nested: -changed($old, $value);

				@if list.length($nested) > 0 {
					$result: map.set($result, $key, $nested);
				}
			} @else if $value != $old {
				$result: map.set($result, $key, $value);
			}
		}

		@return $result;
	}

	$-default-input: ctx.$input;

	@include meta.load-css('@/presets/outlined-fields');

	.docs-preset-outlined-fields {
		// The `--input-*` tokens the preset changes, declared on this element
		// instead of the root. The ones it leaves alone, such as the colours
		// the dark theme sets for `valid` and `invalid`, keep coming from the
		// root, as they do in a build with the preset.
		@include ctx.layer(props, ctx.$use-css-layers, ctx.$layer-prefix) {
			@include ctx.spread-map-into-props(
				$map: -changed($-default-input, ctx.$input),
				$prefix: input
			);
		}

		// The fields the preset covers, emitted from the rewritten maps. The
		// class in front lifts them over the default fields of the page.
		@include meta.load-css('@/components/vv-input-text');
		@include meta.load-css('@/components/vv-textarea');
		@include meta.load-css('@/components/vv-select');
		@include meta.load-css('@/components/vv-input-file');
		@include meta.load-css('@/components/vv-field');
	}
</style>
