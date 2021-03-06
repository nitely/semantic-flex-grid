# Semantic Flex Grid

This is a port of [solved by flexbox grid system](http://philipwalton.github.io/solved-by-flexbox/demos/grids/)
to semantic Sass.

For more examples [visit the site](http://nitely.github.io/semantic-flex-grid/).

## Usage

HTML

```html
<div class="Basic">
  <div class="Basic__cell">
    ...
  </div>
  <div class="Basic__cell">
    ...
  </div>
</div>
```

Sass

```sass
.Basic {
  @include grid;
}

  .Basic__cell {
    @include grid-cell;
  }
```

## API

### grid

| Param | Values | Default |
| ----- |:------:| -------:|
| $gutters | Zero, Md, Lg, Xl | Md |

Example:

```sass
.Grid {
  @include grid($gutters: Zero);
}
```

### grid-cell

| Param | Value | Default |
| ----- |:------:| -------:|
| $flex | auto, fit, full, 1 of 2, 1 of 3, 1 of 4 | fit |
| $flexCell | true, false | true |
| $alignItems | top, bottom, center | null |
| $justifyContent | center, left, right | null |
| $alignSelf | top, bottom, center | null |
| $gutters | Zero, Md, Lg, Xl | Md |

Example:

```sass
.Grid__cell {
  @include grid-cell(1 of 2, $flexCell: false);
}
```

## License

MIT