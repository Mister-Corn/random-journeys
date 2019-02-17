Example function in Elm:

```elm
pluralize singular plural quantity =
  if quantity == 1 then
    singular
  else
    plural

main = -- this snippet works like JS console.log
  text (pluralize "leaf" "leaves" 1)
```

Note that `if...else...` is an expression in Elm (very much like a JS ternary operator). This means that you _always_ need an `else`.

It's JS equivalent:

```js
function pluralize(singular, plural, quantity) {
  if (quantity === 1) {
    return singular;
  } else {
    return plural;
  }
}

console.log(pluralize("leaf", "leaves", 1));
```

### DOM Representation

```html
<ul class="languages">
  <li>Elm</li>
  <li>JS</li>
</ul>
```

And the Elm equivalent:

```elm
ul [ class "languages" ] [
  li [] [ text "Elm" ],
  li [] [ text "JS" ]
]
```

In Elm, there's no syntactical dressing; you describe the DOM with function calls.
